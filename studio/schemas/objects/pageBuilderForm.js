export default {
  title: 'Form Section',
  name: 'pageBuilderForm',
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
      title: 'Form Type',
      name: 'formType',
      type: 'string',
      options: {
        list: ['Contact', 'Volunteer'],
        layout: 'radio',
        direction: 'horizontal'
      }
    }
  ]
}