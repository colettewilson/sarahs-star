import PropTypes from 'prop-types'
import Link from 'next/link'
import ArticleCard from '../ArticleCard'
import { urlFor } from '../../lib/sanity'

import Arrow from '../../svg/arrow.svg'

import styles from './PageBuilderClientStories.module.scss'
import Image from '../Image'

const PageBuilderClientStories = ({ block }) => {
  const { title, addFeatured, featured, addStories, stories } = block

  return (
    <section className={styles.pageBuilderClientStories}>
        {title && 
          <div className="grid">
            <div className="gridItem">
              <h2>{title}</h2>
            </div>
          </div>
        }
        <div className="grid">
          {addFeatured && featured && 
            <div className="gridItem">
              <ArticleCard {...featured} prefix="client-stories" featured />
            </div>
          }
          {addStories && stories && stories.map(story =>
            <div key={story._id} className="gridItem medium-6 large-4">
              <ArticleCard {...story} prefix="client-stories" />
            </div>
          )}
        </div>
    </section>
  )
}

export default PageBuilderClientStories

PageBuilderClientStories.propTypes = {
  block: PropTypes.shape({
    title: PropTypes.string,
    addFeatured: PropTypes.bool,
    featured: PropTypes.object,
    addStories: PropTypes.bool,
    stories: PropTypes.array
  })
}