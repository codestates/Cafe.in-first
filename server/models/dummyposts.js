const Sequelize = require("sequelize");

module.exports = class dummypost extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title_img: {
          type: Sequelize.BLOB,
          allowNull: false,
        },
        content_img: {
          type: Sequelize.BLOB,
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        location: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        lat: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        long: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "dummypost",
        tableName: "dummyposts",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.dummypost.belongsToMany(db.likes_hash_tag, {
      through: "dummypost_hash",
      foreignKey: "dummy_post_id",
      sourceKey: "id",
    });
  }
};
