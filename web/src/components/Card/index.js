import PropTypes from 'prop-types'
import { urlFor } from '../../lib/sanity'

import styles from './Card.module.scss'

const Card = ({ cardImage, cardTitle, cardText }) => {
  const bgImg = cardImage ? urlFor(cardImage).url() : null

  return (
    <article className={styles.card}>
      <div className={styles.cardImage} style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{cardTitle}</h3>
        <p>{cardText}</p>
      </div>
    </article>
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.string
}