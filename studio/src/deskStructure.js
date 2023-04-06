import S from '@sanity/desk-tool/structure-builder'
import { FiFile, FiList, FiSettings, FiUsers } from 'react-icons/fi'
import { BiError, BiHomeAlt2 } from 'react-icons/bi'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['globalSettings', 'globalNavigation', 'notFound', 'homepage', 'page', 'clientStory'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(FiList)
        .child(
          S.list()
          .title('Global Settings')
          .items([
            S.listItem()
              .title('Global Settings')
              .icon(FiSettings)
              .child(
                S.document()
                  .id('globalSettings')
                  .title('Settings')
                  .schemaType('globalSettings')
                  .documentId('globalSettings')
              ),
            S.listItem()
              .title('Global Navigation')
              .icon(FiList)
              .child(
                S.document()
                  .id('globalNavigation')
                  .title('Navigation')
                  .schemaType('globalNavigation')
                  .documentId('globalNavigation')
              ),
            S.listItem()
              .title('404 Error Page')
              .icon(BiError)
              .child(
                S.document()
                  .id('notFound')
                  .title('404 Error Page')
                  .schemaType('notFound')
                  .documentId('notFound')
              ),
          ])
        ),
      S.divider(),
      S.listItem()
        .title('Homepage')
        .icon(BiHomeAlt2)
        .child(
          S.document()
            .id('homepage')
            .title('Homepage')
            .schemaType('homepage')
            .documentId('homepage')
        ),
      S.listItem()
        .title('Pages')
        .icon(FiFile)
        .child(S.documentTypeList('page')),
      S.divider(),
      S.listItem()
        .title('Client Stories')
        .icon(FiUsers)
        .child(S.documentTypeList('clientStory')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])