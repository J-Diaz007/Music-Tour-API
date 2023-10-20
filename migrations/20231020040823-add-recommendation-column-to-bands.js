'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('bands', 'recommendation', {
      type: DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bands', 'recommendation')
  }
};

// * Inside the up method, call the addColumn method on queryInterface.
// * Notice how the up method is defined as async? That means we can await our method call.
// * The first argument the addColumn method accepts is the name of the table. In this case, "bands"
// * Second argument the name of the column we want to add. In this case, "recommendation"
// * Third argument is an options object to specify the column's datatype, and any other options we want, such as a default value or whether to allow null values. 
   // * In this case, we want the datatype to be a string.
// * Note that because we're using the DataTypes class, we need to import it into this file. 
// * At the top, underneath the 'use strict' line, destructure DataTypes from requiring the Sequelize package.