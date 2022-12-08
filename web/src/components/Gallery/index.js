import PropTypes from 'prop-types'
import Image from '../Image'

import styles from './Gallery.module.scss'

const Gallery = ({ images }) => (
  <div className={styles.gallery} data-images={images?.length}>
    {images && images.map(image => 
      <Image key={image._key} imgRef={image} />
    )}
  </div>
)

export default Gallery

Gallery.propTypes = {
  images: PropTypes.array
}