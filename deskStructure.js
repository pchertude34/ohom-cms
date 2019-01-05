import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = listItem => !['config'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Config')
        .child(
          S.editor()
            .id('config')
            .schemaType('config')
            .documentId('123')
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
