export default {
  title: 'Global Navigation',
  name: 'globalNavigation',
  type: 'document',
  fields: [
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        { type: 'dropdown' },
        { type: 'directLink' },
      ]
    }
  ]
}