const {getItems, getItem, addItem, deleteItem} = require('../controllers/itemsController')

// Item schema
const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'},
    }
}

// Options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getItems,
}

const getSingleItemOpts = {
    schema: {
        response: {
            201: Item
        }
    },
    handler: getItem
}

const postItemOpts = {
    schema: {
        body: { // Validate item
            type: 'object',
            required: ['name'],
            properties: {
                name: {type: 'string'}
            }
        },
        response: {
            200: Item
        }
    },
    handler: addItem
}

const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {type: 'string'}
                }
            }
        }
    },
    handler: deleteItem
}

function itemRoutes(app, options, done) {
    // Get all items
    app.get('/items', getItemsOpts)

    // Get sindle items
    app.get('/items/:id', getSingleItemOpts)

    // Add item
    app.post('/items', postItemOpts)

    // Delete item
    app.delete('/items/:id', deleteItemOpts)

    done();
}

module.exports = itemRoutes;
