import PropTypes from 'prop-types'
import PortableText from '../PortableText'
import Image from '../Image'

import styles from './PageBuilderImageText.module.scss'

const PageBuilderImageText = ({ block }) => {
  const { layout, background, sectionTitle, sectionText, image } = block

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner} style={{ flexDirection: layout  }}>
        <div className={styles.sectionContent} style={{ backgroundColor: background }}>
          <div className={styles.sectionContentInner}>
            {sectionTitle && <h2>{sectionTitle}</h2>}
            {sectionText && <PortableText blocks={sectionText} />}
          </div>
        </div>
        <div className={styles.sectionImage}>
          <Image imgRef={image} />
        </div>
      </div>
    </section>
  )
}

export default PageBuilderImageText

PageBuilderImageText.propTypes = {
  block: PropTypes.shape({
    layout: PropTypes.string,
    background: PropTypes.string,
    sectionTitle: PropTypes.string,
  })
}