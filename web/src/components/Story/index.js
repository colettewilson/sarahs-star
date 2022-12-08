import PropTypes from 'prop-types'
import PortableText from '../../components/PortableText'

import styles from './Story.module.scss'

const Story = ({ body }) => (
  <article className={styles.story}>
    <div className="grid">
      <div className="gridItem gridItem xlarge-10 xlarge-offset-1">
        <PortableText blocks={body} />
      </div>
    </div>
  </article>
)

export default Story

Story.propTypes = {
  body: PropTypes.array
}