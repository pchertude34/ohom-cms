export default {
  name: 'config',
  title: 'Global Config',
  type: 'object',
  description: 'Stuff to show on the home page',
  fields: [
    {
      name: 'carouselImages',
      title: 'Carousel Images',
      type: 'array',
      of: [{ type: 'carouselImage' }]
    },
    {
      name: 'whoAreWe',
      title: 'Who Are We',
      description: 'A brief description of OHOM',
      type: 'text'
    },
    {
      name: 'ourStory',
      title: 'Our Story',
      type: 'text'
    },
    {
      name: 'featuredPrograms',
      title: 'Featured Programs',
      description: 'Featured programs to display on the home page',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'program' } }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare() {
      return {
        title: 'Home Page'
      };
    }
  }
};
