module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define("Article", {
    articleObject: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    }
  });

  Article.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Article.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Article;
};
