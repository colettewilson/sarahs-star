import PropTypes from 'prop-types'
import PortableText from '../PortableText'
import Contact from './Contact'
import Volunteer from './Volunteer'

import styles from './PageBuilderForm.module.scss'

const PageBuilderForm = ({ block }) => {
  const { sectionTitle, sectionIntro, formType } = block

  return (
    <section className={styles.pageBuilderForm}>
      <div className="grid">
        {(sectionTitle || sectionIntro) && 
          <div className="gridItem xlarge-8 xlarge-offset-2">
            <div className={styles.formIntro}>
              {sectionTitle && <h2>{sectionTitle}</h2>}
              {sectionIntro && <PortableText blocks={sectionIntro} />}
            </div>
          </div>
        }
        <div className="gridItem xlarge-10 xlarge-offset-1">
          {formType === 'Contact' ? <Contact /> : <Volunteer />}
        </div>
      </div>
    </section>
  )
}

export default PageBuilderForm

PageBuilderForm.propTypes = {
}