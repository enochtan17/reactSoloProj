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
   return queryInterface.bulkInsert('RSVPs', [
     {
       eventId: 1,
       userId: 5
     },
     {
      eventId: 2,
      userId: 6
    },
    {
      eventId: 3,
      userId: 1
    },
    {
      eventId: 3,
      userId: 5
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('RSVPs', null, {});
      */
   return queryInterface.bulkDelete('RSVPs', null, {});
  }
};
