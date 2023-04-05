import React from 'react'
import PropTypes from 'prop-types'
import Calendar from '../../svg/calendar.svg'
import Clock from '../../svg/clock.svg'
import Marker from '../../svg/marker.svg'

import styles from './EventInfo.module.scss'

const EventInfo = ({ startDate, startTime, location }) => {
  return (
    <div className={styles.info}>
      <h2 className={styles.infoTitle}>Information</h2>
      <ul>
        {startDate && <li className={styles.infoItem}>
          <p className={styles.infoTerm}><Calendar /></p>
          <p className={styles.infoDetails}>{ startDate }</p>
        </li>}
        {startTime && <li className={styles.infoItem}>
          <p className={styles.infoTerm}>< Clock /></p>
          <p className={styles.infoDetails}>{ startTime }</p>
        </li>}
        {location && <li className={styles.infoItem}>
          <p className={styles.infoTerm}><Marker /></p>
          <p className={styles.infoDetails}>{ location }</p>
        </li>}
      </ul>
    </div>
  )
}

export default EventInfo

EventInfo.propTypes = {
  startDate: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
}