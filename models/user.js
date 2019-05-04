module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    // User.associate = function (models) {
    //     User.hasMany(models.Account, {
    //         onDelete: "cascade"
    //     });
    // };

    return User;
};
