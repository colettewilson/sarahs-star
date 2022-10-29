import React from 'react'
import PropTypes from 'prop-types'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PageBuilder from '../components/PageBuilder'

const pageQuery = groq`{
  'globalSettings': *[_type == 'globalSettings'][0],
  'globalNavigation': *[_type == 'globalNavigation'][0],
  'page': *[_type == 'homepage'][0]
}`

export async function getStaticProps() {
  const data = await getClient.fetch(pageQuery)

  return {
    props: { ...data }
  }
}

const Home = ({ globalSettings, globalNavigation, page }) => {
  const { pageTitle, pageBuilder, seo } = page

  return (
    <>
      <Seo
        globalSeo={globalSettings}
        pageSeo={seo}
        pageTitle={pageTitle}
      />
      <Layout navigation={globalNavigation}>
        <Hero {...page.hero} />
        <PageBuilder blocks={pageBuilder} />
      </Layout>
    </>
  )
}

export default Home

Home.propTypes = {
  page: PropTypes.object
}