export default {
  title: 'Card',
  name: 'card',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'cardImage',
      type: 'image'
    },
    {
      title: 'Title',
      name: 'cardTitle',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'cardText',
      type: 'text',
      rows: 4
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link'
    }
  ]
}