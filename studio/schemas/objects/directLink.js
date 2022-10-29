export default {
  title: 'Direct Link',
  name: 'directLink',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string'
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }).required(),
    }
  ]
}