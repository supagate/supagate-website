import Icon from './Icon'

const WEB_APP_SIGNUP = 'https://app.supagate.co/signup'

// "Get Started" button: sign up on the web app at app.supagate.co.
export default function AppLink({ className = 'btn btn-dark', children = 'Get Started', onClick }) {
  return (
    <a href={WEB_APP_SIGNUP} className={className} onClick={onClick}>
      {children} <Icon name="arrowRight" size={18} />
    </a>
  )
}
