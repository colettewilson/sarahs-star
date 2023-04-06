import React from 'react'
import PropTypes from 'prop-types'
import { groq } from 'next-sanity'
import { getClient } from '../../lib/sanity'

import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import PageIntro from '../../components/PageIntro'
import Event from '../../components/Event'

const slugQuery = groq`*[_type == "event" && defined(slug.current)][].slug.current`

const pageQuery = groq`{
  'globalSettings': *[_type == 'globalSettings'][0],
  'globalNavigation': *[_type == 'globalNavigation'][0],
  'page': *[_type == 'event' && slug.current == $slug][0],
  'related': *[_type == 'event' && slug.current != $slug]|order(publishDate desc)[0..2]
}`

export async function getStaticProps({ params }) {
  const { globalSettings, globalNavigation, page, related } = await getClient.fetch(pageQuery, { slug: params.slug })

  if (!page) return { notFound: true }

  return {
    props: {
      data: {
        globalSettings,
        globalNavigation,
        page,
        related
      }
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const paths = await getClient.fetch(slugQuery)

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

const Page = ({ data = {} }) => {
  const { globalSettings, globalNavigation, page, related } = data

  return (
    <>
      <Seo
        globalSeo={globalSettings}
        pageSeo={page.seo}
        pageTitle={page.title}
      />
      <Layout navigation={globalNavigation} charityNumber={globalSettings.charityNumber}>
        <PageIntro title={page.title} />
        <Event page={page} />
      </Layout>
    </>
  )
}

export default Page

Page.propTypes = {
  page: PropTypes.object
}