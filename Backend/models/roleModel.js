const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const Role = sequelize.define("Roles", {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    role_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'Roles', timestamps: false,
    hooks: {
        afterSync: async () => {
            // Create roles if they do not exist
            await Role.findOrCreate({ where: { role_name: 'seller' }, defaults: { role_id: 1 } });
            await Role.findOrCreate({ where: { role_name: 'agent' }, defaults: { role_id: 2 } });
            await Role.findOrCreate({ where: { role_name: 'bpo' }, defaults: { role_id: 3 } });
            await Role.findOrCreate({ where: { role_name: 'lawyer'}, defaults: { role_id: 4 } });
            // Add more roles as needed
        }
    }
});
module.exports = { Role };