import { FiCalendar } from 'react-icons/fi'

export default {
  title: 'Event',
  name: 'event',
  type: 'document',
  icon: FiCalendar,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
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
      title: 'Start Date',
      name: 'startDate',
      type: 'datetime',
      description: 'Date only field. Time will be ignored in the frontend.',
      options: {
        dateFormat: 'DD MMM, YYYY',
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Start Time',
      name: 'startTime',
      type: 'string',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
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