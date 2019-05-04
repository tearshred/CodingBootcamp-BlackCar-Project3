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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phoneNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roundtrip: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reservationNo: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        }
    });

    return Reservation;
};
