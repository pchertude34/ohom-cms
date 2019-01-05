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
        source: 'name',
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      name: 'image',
      title: 'Header Image',
      type: 'image',
      description: 'Image to represent the event'
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
