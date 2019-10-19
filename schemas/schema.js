// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from './blockContent';
import config from './config';
import carouselImage from './carouselImage';
import event from './event';
import eventTimes from './eventTimes';
import program from './program';
import sponsor from './sponsor';
import teamMember from './teamMember';
import testimony from './testimony';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    blockContent,
    carouselImage,
    config,
    event,
    eventTimes,
    program,
    sponsor,
    teamMember,
    testimony
  ])
});
