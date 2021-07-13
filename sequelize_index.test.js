const {sequelize} = require('./sequelize_index');
const {Restaurant} = require('./Restaurant');
const { Menu } = require('./Menu');
const {item} = require('./item');

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url', location: "123 Honey Cocoa Ln Dalas, TX 75943" })
        expect(restaurant.id).toBe(1)
    })
})


describe('Menu', () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
      // the 'sync' method will create tables based on the model class
      // by setting 'force:true' the tables are recreated each time the 
      // test suite is run
      await sequelize.sync({ force: true });
  })

  test('can create a menu item', async () => {
      const menu = await Menu.create({ itemName: 'Ronalds', itemPrice: 16.99, itemSpiceLevel: "Hot" })
      expect(menu.id).toBe(1)
  })
})

describe('itemClass', () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
      // the 'sync' method will create tables based on the model class
      // by setting 'force:true' the tables are recreated each time the 
      // test suite is run
      await sequelize.sync({ force: true });
  })

  test('can create a item class type', async () => {
      const itemClass = await item.create({itemMealType: 'Entree'})
      expect(itemClass.id).toBe(1)
  })
})