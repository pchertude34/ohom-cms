export default {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      description: 'The name of the sponsor'
    },
    {
      name: 'link',
      title: 'Sponsor Link',
      type: 'url',
      description: "Link to sponsor's website"
    },
    {
      name: 'image',
      title: 'Sponsor Image',
      type: 'image',
      description: "The sponsor's image for advertising"
    }
  ]
};
