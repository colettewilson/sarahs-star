export default {
  title: 'Dropdown',
  name: 'dropdown',
  type: 'object',
  fields: [
    {
      title: 'Top Level Label',
      name: 'label',
      type: 'string'
    },
    {
      title: 'Dropdown Links',
      name: 'dropdownLinks',
      type: 'array',
      of: [{ type: 'directLink' }]
    }
  ]
}