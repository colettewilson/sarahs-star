import PropTypes from 'prop-types'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'

import styles from './Stories.module.scss'

const Stories = ({ title, stories, background = 'white' }) => (
  <section className={styles.stories} style={{ backgroundColor: background }}>
    <div className="grid">
      {title && 
        <div className="gridItem">
          <h2 className={styles.storiesTitle}>{title}</h2>
        </div>
      }
      {stories && stories.map((story, i) => {
        const bgUrl = story.featureImage ? urlFor(story.featureImage).url() : ''

        return (
          <div key={story._id} className="gridItem medium-4">
            <Link className={styles.story} href={`/client-stories/${story.slug.current}`} data-style={`brand-${i + 1}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className={styles.storyThumbnail} style={{ backgroundImage: `url(${bgUrl})` }}></div>
              <div className={styles.storyContent}>
                <h3>{story.title}</h3>
                <p className={styles.storyExcerpt}>{story.excerpt}</p>
              </div>
            </Link>
          </div>
        )}
      )}
    </div>
  </section>
)

export default Stories

Stories.propTypes = {
  title: PropTypes.string,
  stories: PropTypes.array
}