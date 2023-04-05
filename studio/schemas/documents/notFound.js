export default {
  title: '404 Page',
  name: 'notFound',
  type: 'document',
  fields: [
    {
      title: 'Page Title',
      name: 'pageTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Page Text',
      name: 'text',
      type: 'basicText',
    },
    {
      title: 'Page Builder',
      name: 'pageBuilder',
      type: 'pageBuilder'
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo'
    }
  ]
}