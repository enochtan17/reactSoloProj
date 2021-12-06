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
