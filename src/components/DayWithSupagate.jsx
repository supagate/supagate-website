import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import styles from './DayWithSupagate.module.css'

// The product demo. Set YOUTUBE_ID to the video's ID (the part after
// "watch?v=") to play it from YouTube; while it's empty, the self-hosted
// copy in /public/video plays instead.
const YOUTUBE_ID = ''
const VIDEO_SRC = '/video/supagate-demo.mp4'
const POSTER = '/video/supagate-demo-poster.jpg'

function YouTube({ id }) {
  // Click-to-load: no YouTube scripts or cookies until the visitor presses play.
  const [playing, setPlaying] = useState(false)
  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title="Supagate product demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }
  return (
    <button type="button" className={styles.facade} onClick={() => setPlaying(true)} aria-label="Play the Supagate product demo">
      <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" loading="lazy" />
      <span className={styles.play}><Icon name="play" size={30} /></span>
    </button>
  )
}

export default function DayWithSupagate() {
  const headerRef = useScrollAnimation()
  const videoRef = useScrollAnimation()
  return (
    <section className={styles.section} id="a-day">
      <div ref={headerRef} className="section-header-center aos">
        <div className="section-label">A Day with Supagate</div>
        <h2 className="section-title">See how Supagate makes everyday living easier</h2>
        <p className="section-sub">
          From the estate manager’s dashboard to the resident’s phone and the
          guard at the gate: one connected platform, in about a minute.
        </p>
      </div>
      <div ref={videoRef} className={`${styles.frame} aos`}>
        {YOUTUBE_ID ? (
          <YouTube id={YOUTUBE_ID} />
        ) : (
          <video controls playsInline preload="none" poster={POSTER}>
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  )
}
