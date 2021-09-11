const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');

const Task = require('./Task');

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
        timestamps: false
    });

module.exports = Project;

Project.hasMany(Task, { foreinkey: 'projectid', sourceKey: 'id' });
Task.belongsTo(Project, { foreinkey: 'projectId', targetId: 'id' });

module.exports = Project;