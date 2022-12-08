import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { LinkTest } from '../../helpers/link'

import styles from './Button.module.scss'

const Button = ({ url, label, style = 'primary' }) => {
  const internal = LinkTest(url)
  const target = internal ? '_self' : '_blank'
  const rel = internal ? 'noopener' : 'noreferrer noopener nofollow'

  if (internal) return (
    <NextLink className={styles.button} href={url} data-style={style}>
      {label}
    </NextLink>
  )

  return <a className={styles.button} href={url} target={target} rel={rel} data-style={style}>{label}</a>
}

export default Button

Button.propTypes = {
  url: PropTypes.string, 
  label: PropTypes.string,
  style: PropTypes.string
}