import { FiUser } from 'react-icons/fi'

export default {
  title: 'Client Story',
  name: 'clientStory',
  type: 'document',
  icon: FiUser,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'A slug forms the last section of the URL and is usually based on the title though you may wish to shorten long titles.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule =>
        Rule.required().custom(slug => {
          const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
          return regex.test(slug.current)
        }),
    },
    {
      title: 'Publish Date',
      name: 'publishDate',
      type: 'date',
      options: {
        dateFormat: 'DD MMM, YYYY',
      },
      description: 'Date will auto populate on creation. Update as necessary.',
      initialValue: () => {
        let today = new Date()
        today = today.toISOString()
        today = today.split('T')

        return today[0]
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Feature Image',
      name: 'featureImage',
      type: 'mainImage'
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Body',
      name: 'body',
      type: 'portableText'
    },
    {
      title: 'Related Stories',
      name: 'related',
      type: 'array',
      of: [{
        type: 'reference',
        to: { type: 'clientStory' }
      }],
      description: 'Optional. Choose 3 related stories. If no selection made latest 3 stories will display.',
      validation: Rule => Rule.max(3)
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'FiUser'
    }
  }
}