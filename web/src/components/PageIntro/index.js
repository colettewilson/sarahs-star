import PropTypes from 'prop-types'

import styles from './PageIntro.module.scss'

const PageIntro = ({ title, intro }) => (
  <section className={styles.pageIntro}>
    <div className="grid">
      <div className="gridItem large-8 xlarge-offset-1">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </div>
  </section>
)

export default PageIntro

PageIntro.propTypes = {
}