import moment from 'moment';

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'The title of the event'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The subtitle for the event'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'eventTimes',
      title: 'Event TImes',
      type: 'array',
      of: [{ type: 'eventTimes' }]
    },
    {
      name: 'programs',
      title: 'Programs',
      description: 'Programs that the event takes place at',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'program' } }]
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
      description: 'A short caption to describe the event (1 to 2 sentences)'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'image',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Image to represent the event'
    },
    {
      name: 'photoAlbum',
      title: 'Photo Album',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
      dates: 'eventTimes'
    },
    prepare(selection) {
      const data = Object.assign({}, selection);
      const allDates = [];

      data.dates.forEach(date => {
        allDates.push(moment(date.startDate).format('L @ LT'));
      });
      let subtitle = allDates.join(', ');
      console.log(subtitle);

      return {
        title: selection.title,
        subtitle: allDates.join(', '),
        media: selection.media
      };
    }
  }
};
