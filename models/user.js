module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type:DataTypes.STRING,
            validate: {
                len: [1-20]
            }
        },
        user_password:  {
            type:DataTypes.STRING,
            validate: {
                len: [6-15]
            }
        },
    })

    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Article, {
          onDelete: "cascade"
        });
      };

    return User
}
