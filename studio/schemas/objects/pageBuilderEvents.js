export default {
  title: 'Events Grid',
  name: 'pageBuilderEvents',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Add Featured Event',
      name: 'addFeatured',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      },
      initialValue: false
    },
    {
      title: 'Featured Event',
      name: 'featured',
      type: 'reference',
      to: { type: 'event' },
      hidden: ({ parent }) => !parent?.addFeatured
    },
    {
      title: 'Add Event grid',
      name: 'addEvents',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      },
      initialValue: false
    },
    {
      title: 'Events',
      name: 'events',
      type: 'string',
      options: {
        list: ['All', 'Upcoming', 'Past']
      },
      initialValue: 'Upcoming',
      hidden: ({ parent }) => !parent?.addEvents
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Events Section'
      }
    }
  },
}