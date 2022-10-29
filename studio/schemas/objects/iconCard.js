export default {
  title: 'Icon Card',
  name: 'iconCard',
  type: 'object',
  fields: [
    {
      title: 'Bckground',
      name: 'background',
      type: 'string',
      options: {
        list: [
          {title: 'Blue', value: 'brand-1'},
          {title: 'Pink', value: 'brand-2'},
          {title: 'Orange', value: 'brand-3'},
          {title: 'White', value: 'white'}
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'white'
    },
    {
      title: 'Icon',
      name: 'cardIcon',
      type: 'string',
      options: {
        list: [
          {title: 'No Icon', value: 'none'},
          {title: 'Solidarity', value: 'solidarity'},
          {title: 'Volunteer', value: 'volunteer'},
          {title: 'Piggy Bank', value: 'piggy-bank'},
          {title: 'Contact', value: 'contact'}
        ],
      },
      initialValue: 'none'
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
  ],
  preview: {
    select: {
      title: 'cardTitle'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Icon Card'
      }
    }
  }
}