export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: "The Team Member's name"
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: [
          { title: 'Board Member', value: 'board-member' },
          { title: 'Advisory Board Member', value: 'advisory-board-member' },
          { title: 'Volunteer', value: 'volunteer' }
        ]
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: '4',
      options: {
        maxLength: 150
      }
    },
    // {
    //   name: 'background',
    //   title: 'Background',
    //   type: 'blockContent'
    // },
    {
      name: 'background',
      title: 'Background',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'An image of the team member',
      options: {
        hotspot: true
      }
    }
  ]
};
