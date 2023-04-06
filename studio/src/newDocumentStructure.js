import S from '@sanity/base/structure-builder'

const hiddenDocTypes = listItem =>
  ![
    'globalSettings',
    'globalNavigation',
    'notFound',
    'homepage'
  ].includes(listItem.getId())

export default [...S.defaultInitialValueTemplateItems().filter(hiddenDocTypes)]