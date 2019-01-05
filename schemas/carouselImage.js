export default {
  name: 'carouselImage',
  title: 'Carousel Image',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The image title'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique image ID',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      desctiption: 'The image description',
      options: {
        maxLength: 250
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};
