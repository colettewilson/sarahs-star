export default {
  title: 'Image | Text section',
  name: 'pageBuilderImageText',
  type: 'object',
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Text | Image', value: 'row' },
          { title: 'Image | Text', value: 'row-reverse' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'row'
    },
    {
      title: 'Background',
      name: 'background',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Light', value: 'var(--tone-primary)' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'white'
    },
    {
      title: 'Section Title',
      name: 'sectionTitle',
      type: 'string'
    },
    {
      title: 'Section Text',
      name: 'sectionText',
      type: 'basicText'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage'
    }
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      layout: 'layout'
    },
    prepare({ title, layout }) {
      const section = layout === 'row' ? 'Text | Image' : 'Image | Text'
      return {
        title, 
        subtitle: `${section} Section`
      }
    }
  }
}