const app = require('../index');
const client = app.client;

module.exports = async (id) => {
    let guild = await client.guilds.fetch(id).catch((error) => {});
    return guild;
} 