import PropTypes from 'prop-types'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'

import Arrow from '../../svg/arrow.svg'

import styles from './PageBuilderClientStories.module.scss'
import Image from '../Image'

const PageBuilderClientStories = ({ block }) => {
  const { title, addFeatured, featured, addStories, stories } = block

  console.log(featured)

  return (
    <section className={styles.pageBuilderClientStories}>
        {title && 
          <div className="grid">
            <div className="gridItem">
              <h2>{title}</h2>
            </div>
          </div>
        }
        {addFeatured && featured && 
          <div className={styles.feature}>
            <Link className={styles.featureInner} href={`/client-stories/${featured.slug.current}`}>
              <div className={styles.featureContent}>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <span className={styles.linkLabel}>Read more<Arrow /></span>
              </div>
              <div className={styles.featureImage}>
                <Image imgRef={featured.featureImage} />
              </div>
            </Link>
          </div>
        }
        {addStories && stories && 
          <div className="grid">
            {stories.map(story => {
              const bgUrl = story.featureImage ? urlFor(story.featureImage).url() : ''
              return (
                <div className="gridItem medium-4">
                  <Link className={styles.story} href={`/client-stories/${story.slug.current}`}>
                    <div className={styles.storyThumbnail} style={{ backgroundImage: `url(${bgUrl})` }}></div>
                    <div className={styles.storyContent}>
                      <h3>{story.title}</h3>
                      <p className={styles.storyExcerpt}>{story.excerpt}</p>
                      <span className={styles.linkLabel}>Read more<Arrow /></span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        }
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
    clientStories: PropTypes.array
  })
}