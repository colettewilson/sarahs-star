import PropTypes from 'prop-types'

import styles from './PageIntro.module.scss'

const PageIntro = ({ title, intro, startDate, story = false }) => {
  return (
    <section className={styles.pageIntro} data-story={story}>
      <div className="grid">
        <div className="gridItem">
          <h1>{title}</h1>
          {intro && <p>{intro}</p>}
          {startDate && <p>Start Date: <b>{startDate}</b></p>}
        </div>
      </div>
    </section>
  )
}

export default PageIntro

PageIntro.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string
}