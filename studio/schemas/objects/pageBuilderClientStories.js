export default {
  title: 'Client Stores Grid',
  name: 'pageBuilderClientStories',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Add Featured Story',
      name: 'addFeatured',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      },
      initialValue: false
    },
    {
      title: 'Featured Story',
      name: 'featured',
      type: 'reference',
      to: { type: 'clientStory' },
      hidden: ({ parent }) => !parent?.addFeatured
    },
    {
      title: 'Add Story grid',
      name: 'addStories',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      },
      initialValue: false
    },
    {
      title: 'Client Stories',
      name: 'clientStories',
      type: 'string',
      options: {
        list: ['All', 'Selected']
      },
      initialValue: 'All',
      hidden: ({ parent }) => !parent?.addStories
    },
    {
      title: 'Selected Stories',
      name: 'selectedStories',
      type: 'array',
      of: [{ type: 'clientStory' }],
      hidden: ({ parent }) => {
        const show = parent?.addStories && parent?.clientStories === 'Selected'
        return !show
      }
    }
  ]
}