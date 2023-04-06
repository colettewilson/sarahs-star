import PropTypes from 'prop-types'
import Link from 'next/link'
import { format } from 'date-fns'
import { urlFor } from '../../lib/sanity'

import Arrow from '../../svg/arrow.svg'

import styles from './ArticleCard.module.scss'

const ArticleCard = ({ title, slug, featureImage, excerpt, startDate, prefix, featured = false }) => {
  const bgUrl = featureImage ? urlFor(featureImage).url() : '/images/fallback.jpg'

  return (
    <Link className={styles.card} href={`/${prefix}/${slug.current}`} data-featured={featured}>
      <div className={styles.cardThumbnail} style={{ backgroundImage: `url(${bgUrl})` }}></div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        {startDate && <p>{format(new Date(startDate), 'dd MMM, yyyy')}</p>}
        {excerpt && <p className={styles.cardExcerpt}>{excerpt}</p>}
        <span className={styles.linkLabel}>Read more<Arrow /></span>
      </div>
    </Link>
  )
}

export default ArticleCard

ArticleCard.propTypes = {
  title: PropTypes.string, 
  slug: PropTypes.object,
  featureImage: PropTypes.object,
  excerpt: PropTypes.string,
  startDate: PropTypes.string,
  prefix: PropTypes.string,
  featured: PropTypes.bool
}