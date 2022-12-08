import React from "react"
import { PortableText } from '@portabletext/react'
import Gallery from '../Gallery'
import Link from "next/link"
import Arrow from '../../svg/arrow.svg'

import { LinkTest } from "../../helpers/link"

// We're overriding the default 'block' type to use a 'Lead', so we need to bring the default back in
const _require = require('@sanity/block-content-to-hyperscript/internals')

const { getSerializers } = _require
const renderNode = React.createElement
const _getSerializers = getSerializers(renderNode)
const { defaultSerializers } = _getSerializers

import styles from './PortableText.module.scss'

const serializers = {
  types: {
    undefined: () => null,
    gallery: ({ value }) => <Gallery {...value} />,
    block(props) {
      switch (props.node.style) {
        default:
          return BaseBlockContent.defaultSerializers.types.block(props)
      }
    },
  },
  marks: {
    link: ({children, value}) => {
      const internal = LinkTest(value.href)
      const target = !internal ? {target: "_blank"} : null
      const rel = !internal ? {rel: "nofollow noopener noreferrer"} : null
      
      return internal ? (
        <Link className={value.layout === 'Block' ? styles.blockLink : ''} href={value.href}>
          <span>{children}</span>
          {value.layout === 'Block' && <Arrow />}
        </Link>
      ) : (
        <a className={value.layout === 'Block' ? styles.blockLink : ''} href={value.href} {...target} {...rel}>
          <span>{children}</span>
        </a>
      )
    }
  },
  block: props => {
    const { node } = props

    if (node.style === 'lead') {
      return (
        <p className={styles.textLead}>
          {node.children.map((child, index) => (
            <React.Fragment key={index}>{child.text}</React.Fragment>
          ))}
        </p>
      )
    }

    if (node.style === 'small') {
      return (
        <p className={styles.textSmall}>
          {node.children.map((child, index) => (
            <React.Fragment key={index}>{child.text}</React.Fragment>
          ))}
        </p>
      )
    }

    return defaultSerializers.types.block(props)
  },
}

const RichText = ({ blocks }) => <div className={styles.portableText}><PortableText value={blocks} components={serializers} /></div>

export default RichText