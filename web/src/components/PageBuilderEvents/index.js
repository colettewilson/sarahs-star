import PropTypes from 'prop-types'
import ArticleCard from '../ArticleCard'

import styles from './PageBuilderClientStories.module.scss'
import Image from '../Image'

const PageBuilderEvents = ({ block }) => {
  const { title, addFeatured, featured, addEvents, initialEvents } = block

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
            <ArticleCard {...featured} prefix="events" featured />
          </div>
        }
        {addEvents && initialEvents && initialEvents.map(event => 
          <div key={event._id} className="gridItem medium-6 large-4">
            <ArticleCard {...event} prefix="events" />
          </div>
        )}
      </div>
    </section>
  )
}

export default PageBuilderEvents

PageBuilderEvents.propTypes = {
  block: PropTypes.shape({
    title: PropTypes.string,
    addFeatured: PropTypes.bool,
    featured: PropTypes.object,
    addStories: PropTypes.bool,
    clientStories: PropTypes.array
  })
}