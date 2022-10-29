export default {
  title: 'Columns Section',
  name: 'pageBuilderColumns',
  type: 'object',
  fields: [
    {
      title: 'Section Title',
      name: 'sectionTitle',
      type: 'string'
    },
    {
      title: 'Section Intro',
      name: 'sectionIntro',
      type: 'portableText'
    },
    {
      title: 'Columns',
      name: 'columns',
      type: 'string',
      options: {
        list: ['2', '3'],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: '2'
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {type: 'card'},
        {type: 'iconCard'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Columns Section'
      }
    }
  },
}