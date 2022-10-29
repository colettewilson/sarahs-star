import PropTypes from 'prop-types'

import styles from './PageBuilderForm.module.scss'

const Message = ({ icon }) => (
  <div className={styles.formMessage}>
    <div className={styles.formMessageInner}>
      <img src={`./images/icons/${icon}.png`} width="60" height="60" role="presentation" />
      <h4>Your message was sent.</h4>
      <p>
        Thank you for contacting us,<br />
        we'll get back to you as soon as possible.
      </p>
    </div>
  </div>
)

export default Message

Message.propTypes = {
  icon: PropTypes.string
}