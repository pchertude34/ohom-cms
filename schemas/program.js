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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The location of the program'
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
      description: 'A short caption to descibe the program'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Description of the program'
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
