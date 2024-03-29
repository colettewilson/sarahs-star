export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Page Title',
      name: 'pageTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'A slug forms the last section of the URL and is usually based on the title though you may wish to shorten long titles.',
      options: {
        source: 'pageTitle',
        maxLength: 96
      },
      validation: Rule =>
        Rule.required().custom(slug => {
          const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
          return regex.test(slug.current)
        }),
    },
    {
      title: 'Page Intro',
      name: 'pageIntro',
      type: 'text',
      rows: 3
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