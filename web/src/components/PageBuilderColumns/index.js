import PropTypes from 'prop-types'
import PortableText from '../PortableText'
import Card from '../Card'
import IconCard from '../IconCard'

import styles from './PageBuilderColumns.module.scss'

const PageBuilderColumns = ({ block }) => {
  const { sectionTitle, sectionIntro, columns, cards } = block


  return (
    <section className={styles.pageBuilderColumns}>
      {(sectionTitle || sectionIntro)&& <div className="grid">
        <div className="gridItem xlarge-8 xlarge-offset-2">
          <div className={styles.pageBuilderColumnsIntro}>
            {sectionTitle && <h2>{sectionTitle}</h2>}
            {sectionIntro && <PortableText blocks={sectionIntro} />}
          </div>
        </div>
      </div>}
      {!!cards && <div className={styles.pageBuilderColumnsWrapper} data-columns={columns}>
        {cards.map(card => 
          card._type === 'iconCard' ? <IconCard key={card._key} {...card} /> : <Card key={card._key} {...card} />)}
      </div>}
    </section>
  )
}

export default PageBuilderColumns

PageBuilderColumns.propTypes = {
  block: PropTypes.shape({
    sectionTitle: PropTypes.string, 
    sectionIntro: PropTypes.array, 
    columns: PropTypes.string,
    cards: PropTypes.array
  })
}