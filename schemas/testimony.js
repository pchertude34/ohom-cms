export default {
  name: 'testimony',
  title: 'Testimony',
  type: 'document',
  fields: [
    {
      name: 'testimony',
      title: 'Testimony',
      type: 'text',
      description: 'A testimony quote'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'An image of the testimony author',
      options: {
        hotspot: true
      }
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      description: 'The name of the testimony author'
    }
  ]
};
