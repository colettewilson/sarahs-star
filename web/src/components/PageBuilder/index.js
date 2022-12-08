import React from "react";
import PropTypes from 'prop-types'
// Import components
import Columns from "../PageBuilderColumns"
import Text from "../PageBuilderText"
import ImageText from "../PageBuilderImageText"
import ClientStories from '../PageBuilderClientStories'
import Form from '../PageBuilderForm'

const PageBuilder = ({ blocks }) => {
  const components = {
    "pageBuilderColumns": Columns,
    "pageBuilderText": Text,
    "pageBuilderImageText": ImageText,
    "pageBuilderClientStories": ClientStories,
    "pageBuilderForm": Form
  }

  if (!blocks) return null

  return blocks.map(block => {
    if (components[block._type]) {
      return React.createElement(components[block._type], {
        key: block._key,
        block
      })
    }
  })
}

export default PageBuilder

PageBuilder.propTypes = {
  blocks: PropTypes.array
}