'use strict'
const faker = require('faker')
const bcrypt = require('bcryptjs')

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
   return queryInterface.bulkInsert('Users', [
    {
      email: 'demo@user.io',
      username: 'Demothor',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'treebeard@lotr.io',
      username: 'Treebeard',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'sauron@lotr.io',
      username: 'Sauron',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'gandalf@lotr.io',
      username: 'Gandalf',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'pippin@lotr.io',
      username: 'Pippin',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'haradrim@lotr.io',
      username: 'Chief of the Mûmakil',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'aragorn@lotr.io',
      username: 'Aragorn',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'elrond@lotr.io',
      username: 'Elrond',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'legolas@lotr.io',
      username: 'Legolas',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'gimli@lotr.io',
      username: 'Gimli',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'witchking@lotr.io',
      username: 'Witch-King of Angmar',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'orcs@lotr.io',
      username: 'Orc Army',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'ents@lotr.io',
      username: 'Ent Army',
      hashedPassword: bcrypt.hashSync('password')
    },
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('Users',  null, {})
  }
}
