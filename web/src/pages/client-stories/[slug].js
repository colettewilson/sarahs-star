import React from 'react'
import PropTypes from 'prop-types'
import { groq } from 'next-sanity'
import { getClient } from '../../lib/sanity'

import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import PageIntro from '../../components/PageIntro'
import Story from '../../components/Story'
import Stories from '../../components/Stories'

const slugQuery = groq`*[_type == "clientStory" && defined(slug.current)][].slug.current`

const pageQuery = groq`{
  'globalSettings': *[_type == 'globalSettings'][0],
  'globalNavigation': *[_type == 'globalNavigation'][0],
  'page': *[_type == 'clientStory' && slug.current == $slug][0],
  'related': *[_type == 'clientStory' && slug.current != $slug]|order(publishDate desc)[0..2]
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
  const { globalSettings, globalNavigation, page, related } = data
  const relatedStories = page.related?.length > 0 ? page.related : related

  return (
    <>
      <Seo
        globalSeo={globalSettings}
        pageSeo={page.seo}
        pageTitle={page.title}
      />
      <Layout navigation={globalNavigation}>
        <PageIntro title={page.title} story={true} />
        <Story body={page.body} />
        <Stories title="Read more personal stories" background="var(--tone-primary)" stories={relatedStories} />
      </Layout>
    </>
  )
}

export default Page

Page.propTypes = {
  page: PropTypes.object
}