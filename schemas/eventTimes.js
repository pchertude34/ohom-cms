import moment from 'moment';

export default {
  name: 'eventTimes',
  title: 'Event Time',
  type: 'object',
  fields: [
    {
      name: 'startDate',
      title: 'Start Date and Time',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    }
    // {
    //   name: 'endDate',
    //   title: 'End Date and Time',
    //   type: 'datetime',
    //   options: {
    //     dateFormat: 'MM-DD-YYYY'
    //   }
    // }
  ],
  preview: {
    select: {
      startDate: 'startDate'
    },
    prepare(selection) {
      return { title: `${moment(selection.startDate).format('lll')}` };
    }
  }
};
