export default {
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Program Title'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The location of the program'
    },
    {
      name: 'programImage',
      title: 'Program Image',
      type: 'image',
      description: 'An image to represent the program',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'programImage'
    }
  }
};
