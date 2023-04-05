import React from 'react'
import PropTypes from 'prop-types'

import EventInfo from '../EventInfo'
import PortableText from '../PortableText'

import styles from './Event.module.scss'

const Event = ({ page }) => {
  const { startDate, startTime, location, body } = page

  return (
    <div className={styles.event}>
      <section className={styles.eventBody}>
        <PortableText blocks={body} />
      </section>
      <aside className={styles.eventAside}>
        <EventInfo startDate={startDate} startTime={startTime} location={location} />
      </aside>
    </div>
  )
}

export default Event

Event.propTypes = {
  body: PropTypes.array
}