import React from 'react'
import PropTypes from 'prop-types'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'
import PageBuilder from '../components/PageBuilder'

const pageQuery = groq`{
  'globalSettings': *[_type == 'globalSettings'][0],
  'globalNavigation': *[_type == 'globalNavigation'][0],
  'page': *[_type == 'notFound'][0]
}`

export async function getStaticProps() {
  const data = await getClient.fetch(pageQuery)

  return {
    props: { ...data }
  }
}

const Error = ({ globalSettings, globalNavigation, page }) => {
  const { pageTitle, text, pageBuilder, seo } = page

  return (
    <>
      <Seo
        globalSeo={globalSettings}
        pageSeo={seo}
        pageTitle={pageTitle}
      />
      <Layout navigation={globalNavigation} charityNumber={globalSettings.charityNumber}>
        <NotFound title={pageTitle} text={text} />
        <PageBuilder blocks={pageBuilder} />
      </Layout>
    </>
  )
}

export default Error

Error.propTypes = {
  page: PropTypes.object
}