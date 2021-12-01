let items = require('../items');
const {v4: uuidv4} = require('uuid');

const getItems = (req, reply) => {
    reply.send(items);
}

const getItem = (req, reply) => {
    const {id} = req.params;
    const item = items.find(it => it.id === id);

    reply.send(item);
}

const addItem = (req, reply) => {
    const {name} = req.body;

    // Construct item
    const item = {
        id: uuidv4(),
        name
    };

    items = [...items, item]
    reply.code(201).send(item);
}

const deleteItem = (req, reply) => {
    const {id} = req.params;
    console.log(req.params)
    items = items.filter(it => it.id !== id)

    reply.send({message: `Item ${id} has been deleted`})
}

module.exports = {
    getItem,
    getItems,
    addItem,
    deleteItem
}
