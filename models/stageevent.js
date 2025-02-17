'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    //  * Helper method for defining associations.
    //  * This method is not a part of Sequelize lifecycle.
    //  * The `models/index` file will call this method automatically.
    static associate(models) {
      // define association here
    }
  }
  StageEvent.init({
    stageEvent_id: {
    type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  }, 
} , {
    sequelize,
    modelName: 'StageEvent',
    tableName: 'stage_event',
    timestamps: false,
  });
  return StageEvent;
};