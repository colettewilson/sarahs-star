// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import globalSettings from './documents/globalSettings'
import globalNavigation from './documents/globalNavigation'
import homepage from './documents/homepage'
import page from './documents/page'
import clientStory from './documents/client-story'
import event from './documents/event'
import notFound from './documents/notFound'

import hero from './objects/hero'
import pageBuilder from './objects/pageBuilder'
import pageBuilderColumns from './objects/pageBuilderColumns'
import pageBuilderText from './objects/pageBuilderText'
import pageBuilderImageText from './objects/pageBuilderImageText'
import pageBuilderClientStories from './objects/pageBuilderClientStories'
import pageBuilderForm from './objects/pageBuilderForm'
import portableText from './objects/portableText'
import basicText from './objects/basicText'
import mainImage from './objects/mainImage'
import directLink from './objects/directLink'
import dropdown from './objects/dropdown'
import card from './objects/card'
import iconCard from './objects/iconCard'
import gallery from './objects/gallery'
import link from './objects/link'
import seo from './objects/seo'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    globalSettings,
    globalNavigation,
    homepage,
    page,
    clientStory,
    event,
    notFound,

    hero,
    pageBuilder,
    pageBuilderColumns,
    pageBuilderText,
    pageBuilderImageText,
    pageBuilderClientStories,
    pageBuilderForm,
    portableText,
    basicText,
    mainImage,
    directLink,
    dropdown,
    card,
    iconCard,
    gallery,
    link,
    seo
  ]),
})
