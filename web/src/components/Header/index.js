import { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import Dropdown from './Dropdown'
import Link from './Link'
import Button from '../Button'
import MenuButton from "./MenuButton"
import { useViewport } from '../../helpers/viewport'

import styles from './Header.module.scss'

const Header = ({ navigation }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const viewport = useViewport()

  const setScroll = () => {
    const dist = window.scrollY

    if (!isScrolled && dist > 50) return setIsScrolled(true)

    if (dist < 50) return setIsScrolled(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.setAttribute('data-nav-open', !mobileMenuOpen)
  }

  const handleDropdownClick = evt => {
    const trigger = evt.currentTarget
    const expanded = trigger.getAttribute('aria-expanded') === 'true'

    viewport < 1200 ? trigger.setAttribute('aria-expanded', !expanded) : null
  }

  const resetNav = () => {
    setMobileMenuOpen(false)
    document.body.setAttribute('data-nav-open', false)
  }

  useEffect(() => {
    setScroll()
    window.addEventListener('scroll', setScroll)

    return () => {
      window.removeEventListener('scroll', setScroll)
    }
  })

  return (
    <header className={styles.header} data-scrolled={isScrolled}>
      <div className={styles.headerInner}>
        <a href="/">
          <img className={styles.headerLogo} src="/images/header-logo.png" width="1062" height="635" alt="Sarah's Star logo" />
        </a>

        <MenuButton handleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} />

        <nav className={styles.headerNav} aria-label="main">
          <ul className={styles.navList}>
            {navigation.links && navigation.links.map(link => {
              return link._type === 'dropdown'
                ? <Dropdown key={link._key} {...link} setMobileMenuOpen={setMobileMenuOpen} handleClick={handleDropdownClick} handleLinkClick={resetNav} /> 
                : <li className={styles.navItem} key={link._key}><Link {...link} onClick={resetNav} /></li>
            })}
            <li className={styles.navButton} style={{ marginLeft: `16px` }}>
              <Button label="Donate" url="/" />
            </li>
            <li className={styles.navButton} style={{ marginLeft: `16px` }}>
              <Button label="Apply" url="/volunteer" style="secondary" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  navLinks: PropTypes.array
}