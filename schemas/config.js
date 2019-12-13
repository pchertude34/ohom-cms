export default {
  name: 'config',
  title: 'Global Config',
  type: 'document',
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
      type: 'blockContent'
    },
    {
      name: 'ourStory',
      title: 'Our Story',
      type: 'blockContent'
    },
    {
      name: 'featuredPrograms',
      title: 'Featured Programs',
      description: 'Featured programs to display on the home page',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'program' } }]
    },
    {
      name: 'featuredTestimonies',
      title: 'Featured Testimonies',
      description: 'Feature testimonies to display on the home page',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'testimony' } }]
    },
    {
      name: 'donationInfo',
      title: 'Donation Info',
      description: "Text for the 'Donation' section on the get-involved page",
      type: 'blockContent'
    },
    {
      name: 'newsLetterInfo',
      title: 'News Letter Info',
      description:
        "Text for the 'News Letter' section on the get-involved page",
      type: 'blockContent'
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'blockContent'
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
