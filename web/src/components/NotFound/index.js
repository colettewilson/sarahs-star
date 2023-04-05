import React from 'react'
import PortableText from '../PortableText'

import styles from './NotFound.module.scss'

const NotFound = ({ title, text }) => (
  <section className={styles.notFound}>
    <div className="grid">
      <div className="gridItem">
        <h1>{ title }</h1>
        <PortableText blocks={text} />
      </div>
    </div>
  </section>
)

export default NotFound