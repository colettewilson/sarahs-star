import React from 'react'
import PropTypes from 'prop-types'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import PageIntro from '../components/PageIntro'
import PageBuilder from '../components/PageBuilder'

const slugQuery = groq`*[_type == "page" && defined(slug.current)][].slug.current`

const pageQuery = groq`{
  'globalSettings': *[_type == 'globalSettings'][0],
  'globalNavigation': *[_type == 'globalNavigation'][0],
  'page': *[_type == 'page' && slug.current == $slug][0]{
    ...,
    pageBuilder[]{
      ...,
      _type == 'pageBuilderClientStories' => {
        ...,
        featured->{...},
        'stories': select(
          addStories && clientStories == 'All' => *[_type == 'clientStory' && _id != ^.featured._ref]|order(publishDate desc),
          addStories && clientStories == 'Selected' => selectedStories
        )
      },
    }
  }
}`

export async function getStaticProps({ params }) {
  const { globalSettings, globalNavigation, page } = await getClient.fetch(pageQuery, { slug: params.slug })

  if (!page) return { notFound: true }

  return {
    props: {
      data: {
        globalSettings,
        globalNavigation,
        page
      }
    }
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
  const { globalSettings, globalNavigation, page } = data

  return (
    <>
      <Seo
        globalSeo={globalSettings}
        pageSeo={page.seo}
        pageTitle={page.pageTitle}
      />
      <Layout navigation={globalNavigation}>
        <PageIntro title={page.pageTitle} intro={page.pageIntro} />
        <PageBuilder blocks={page.pageBuilder} />
      </Layout>
    </>
  )
}

export default Page

Page.propTypes = {
  page: PropTypes.object
}