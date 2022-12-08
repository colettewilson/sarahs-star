import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { LinkTest } from '../../helpers/link'

import styles from './IconCard.module.scss'

const CardInner = ({ link, children, background }) => {
  if (link?.link) {
    const internal = LinkTest(link.link)

    if (internal) return (
      <NextLink className={styles.cardInner} href={link.link} data-style={background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </NextLink>
    )
  
    return <a className={styles.cardInner} href={link.link} target="_black" rel="nofollow noopender noreferrer" data-style={background}>{children}</a>
  }

  return <div className={styles.cardInner}>{children}</div>
}

const IconCard = ({ background, cardIcon, cardTitle, cardText, link }) => {
  const src = `./images/icons/${cardIcon}.png`
  
  return (
    <article className={styles.card}>
      <CardInner link={link} background={background}>
        <div className={styles.cardIcon} data-icon={cardIcon}>
          <img src={src} width="60" height="60" role="presentation" />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{cardTitle}</h3>
          <p>{cardText}</p>
          <span className={styles.cardLink}>{link.label}</span>
        </div>
      </CardInner>
    </article>
  )
}

export default IconCard

IconCard.propTypes = {
  background: PropTypes.string,
  cardIcon: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  link: PropTypes.object
}