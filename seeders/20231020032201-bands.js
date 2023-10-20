'use strict';

// * @type {import('sequelize-cli').Migration}

module.exports = {
  async up (queryInterface, Sequelize) {
    //  * Example:
    //  * await queryInterface.bulkInsert('People', [{
    //  *   name: 'John Doe',
    //  *   isBetaMember: false
    //  * }], {});
    await queryInterface.bulkInsert('bands', [{
      name: 'Metallica',
      genre: 'Heavy Metal',
      available_start_time: '21:00:00',
      end_time: '23:00:00'
    }])
  },

  async down (queryInterface, Sequelize) {
    //  * Example:
    //  * await queryInterface.bulkDelete('People', null, {});
    // * Example below deletes everything inside the table
    
    await queryInterface.bulkDelete('bands', null, {})

  }
};

'use strict'
