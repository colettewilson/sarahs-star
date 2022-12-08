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
      description: 'A slug forms the last section of the URL and is usually based on the title of the document though you may wish to shorten particularly long titles.',
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
      }
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
      rows: 3
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
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'FiUser'
    }
  }
}