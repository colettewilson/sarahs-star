import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './Footer.module.scss'

const Footer = ({ navigation }) => {
  const date = new Date()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <img 
          className={styles.footerLogo}
          src="/images/footer-logo.jpg" 
          alt="Sarah's star. Shining through the dark times."
          width="360"
          height="244"
        />
        <nav className={styles.footerNav}>
          <ul className={styles.footerList}>
            {navigation.links && navigation.links.map(link => (
              <li key={link._key} className={styles.footerItem}>
                {link._type === 'dropdown' ? 
                  <span className={styles.footerTopLink}>{link.label}</span>
                  : <Link className={styles.footerTopLink} href={link.link}>{link.label}</Link>
                }
                {link._type === 'dropdown' && (
                  <ul>
                    {link.dropdownLinks && link.dropdownLinks.map(link => <li key={link._key}><Link className={styles.footerLink} href={link.link}>{link.label}</Link></li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.footerCopyright}>
          <p>&copy; Sarah's Star { date.getFullYear() }</p>
          <p>Registered Charity, England and Wales (1167247)</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

Footer.propTypes = {
  navigation: PropTypes.object
}