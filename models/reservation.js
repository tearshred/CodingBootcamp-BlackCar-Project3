module.exports = function (sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressLine1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressLine2: {
            type: DataTypes.STRING,
            defaultValue: "Null"
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roundtrip: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reservationNo: {
            type: DataTypes.STRING,
            // defaultValue: DataTypes.UUIDV1,
            // primaryKey: true
            allowNull: true
        }
    });

    return Reservation;
};
