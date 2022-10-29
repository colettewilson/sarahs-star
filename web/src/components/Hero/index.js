import PropTypes from 'prop-types'
import Button from '../Button'
import Image from '../Image'

import styles from './Hero.module.scss'

const Hero = ({ title, text, gallery, ...rest}) => (
  <section className={styles.hero}>
    <div className="grid">
      <div className="gridItem xlarge-11 xlarge-offset-1">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1>{title}</h1>
            <p className={styles.heroStrap}>{text}</p>
            <p>
              <Button label="Donate" url="" />
              <Button label="Apply" url="/volunteer" style="secondary" />
            </p>
          </div>
          <div className={styles.heroGallery}>
            {gallery && gallery.map(image =>
              <div key={image._key} className={styles.heroGalleryImg}>
                <Image imgRef={image} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero

Hero.propTypes = {
  title: PropTypes.string, 
  text: PropTypes.string, 
  gallery: PropTypes.array
}