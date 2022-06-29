const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}
// define columns
ProductTag.init(
  {
    id: {
      type: DataTypes.INTERGER,
      allowNull: false,
      PrimaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTERGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTERGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
