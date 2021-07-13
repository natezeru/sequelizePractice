const {sequelize, DataTypes, Model} = require('./sequelize_index');


class item extends Model {

    // add methods here

}
item.init({
    itemMealType: DataTypes.STRING
    
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    item
};