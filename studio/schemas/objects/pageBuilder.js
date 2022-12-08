 export default {
  title: 'Page Builder',
  name: 'pageBuilder',
  type: 'array',
  of: [
    {
      title: 'Text Section',
      name: 'pageBuilderText',
      type: 'pageBuilderText'
    },
    {
      title: 'Image | Text Section',
      name: 'pageBuilderImageText',
      type: 'pageBuilderImageText'
    },
    {
      title: 'Columns Section',
      name: 'pageBuilderColumns',
      type: 'pageBuilderColumns'
    },
    {
      title: 'Client Stories',
      name: 'pageBuilderClientStories',
      type: 'pageBuilderClientStories'
    },
    {
      title: 'Form Section',
      name: 'pageBuilderForm',
      type: 'pageBuilderForm'
    }
  ]
}