import styles from "./Header.module.scss"

const MenuButton = ({ handleMobileMenu, mobileMenuOpen }) => {
  return (
    <button className={styles.headerButton} aria-expanded={mobileMenuOpen} aria-controls="menu" onClick={handleMobileMenu}>
      <span className={styles.headerButtonLabel}>Menu</span>
      <span className={styles.headerButtonIcon}></span>
    </button>
  )
}

export default MenuButton