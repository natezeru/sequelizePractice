const {sequelize, DataTypes, Model} = require('./sequelize_index');


class Menu extends Model {

    // add methods here

}
Menu.init({
    itemName: DataTypes.STRING,
    itemPrice: DataTypes.NUMBER,
    itemSpiceLevel: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Menu
};