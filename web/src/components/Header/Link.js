import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { LinkTest } from '../../helpers/link'

import styles from './Header.module.scss'

const Link = ({ link, label, active, ...rest }) => {
  const router = useRouter()
  const internal = LinkTest(link)
  const target = internal ? '_self' : '_blank'
  const rel = internal ? 'noopener' : 'noreferrer noopener nofollow'

  if (internal) return (
    <NextLink className={styles.navLink} href={link} {...rest}>
      {label}
    </NextLink>
  )

  return <a className={styles.headerLink} href={link} target={target} rel={rel}>{label}</a>
}

Link.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool
}

export default Link