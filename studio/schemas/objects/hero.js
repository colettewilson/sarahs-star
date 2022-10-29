export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string'
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [{ type: 'mainImage' }],
      description: '3 images required. Aspect ratio 1:1 (square).',
      validation: Rule => Rule.min(3).max(3)
    }
  ]
}