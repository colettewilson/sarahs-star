import PropTypes from 'prop-types'
import Link from './Link'

import styles from './Header.module.scss'

const Dropdown = ({ label, dropdownLinks, handleClick, handleLinkClick }) => {
  return (
    <li 
      className={styles.navItem}
      role="menuitem"
      aria-haspopup="true"
      aria-expanded="false"
      tabIndex={0}
      // onFocus={() => setExpanded(true)}
      // onBlur={handleBlur}
      onClick={handleClick}
    >
      <span className={styles.navLink}>{label}</span>
      <ul className={styles.navDropdown}>
        {dropdownLinks && dropdownLinks.map(link => <li key={link._key}><Link {...link} onClick={handleLinkClick} /></li>)}
      </ul>
    </li>
  )
}

export default Dropdown

Dropdown.propTypes = {
  label: PropTypes.string
}