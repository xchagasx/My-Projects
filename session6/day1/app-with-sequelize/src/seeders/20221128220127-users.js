'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      fullName: 'Leonardo',
      email: 'leo@test.com',
      creatAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      fullName: 'JEdurado',
      email: 'edu@test.com',
      creatAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {}),
    
  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

