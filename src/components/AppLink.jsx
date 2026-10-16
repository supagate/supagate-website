import { getAppLink } from '../lib/stores'
import Icon from './Icon'

// "Get the App" button that routes to the visitor's store when on a phone.
export default function AppLink({ className = 'btn btn-dark', children = 'Get the App', onClick }) {
  const { href, external } = getAppLink()
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children} <Icon name="arrowRight" size={18} />
    </a>
  )
}
