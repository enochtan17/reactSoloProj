'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
   return queryInterface.bulkInsert('Events', [
     {
      hostId: 2,
      name: 'Entmoot',
      location: 'Derndingle',
      details: 'Discussion for Ents',
      date: 'February 30, 3019',
      time: 'Noon'
    },
    {
      hostId: 3,
      name: 'Siege of Minas Tirith',
      location: 'Pelennor Fields',
      details: 'The greatest battle of our time',
      date: 'March 15, 3019',
      time: 'Dusk'
    },
    {
      hostId: 4,
      name: 'Defense of Minas Tirith',
      location: 'Minas Tirith',
      details: 'There never was much hope. Just a fool\'s hope.',
      date: 'March 15, 3019',
      time: '3:00pm'
    },
    {
      hostId: 8,
      name: 'Council of Elrond',
      location: 'Rivendell',
      details: 'Strangers from distant lands, friends of old.  You have been summoned here to answer the threat of Mordor.',
      date: 'October 25, 3018',
      time: '11:00am'
    },
    {
      hostId: 2,
      name: 'Destruction of Isengard',
      location: 'Isengard',
      details: 'Last March of the Ents. Revenge on Sauruman.',
      date: 'March 3, 3018',
      time: '9:00pm'
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
   return queryInterface.bulkDelete('Events', null, {});
  }
};
