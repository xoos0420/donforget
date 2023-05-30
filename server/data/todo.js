import SQ, { Sequelize } from 'sequelize';
import { sequelize } from '../db/database.js';

const DataTypes = SQ.DataTypes;

export const Todo = sequelize.define('todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export async function getAll() {
  return Todo.findAll();
}

export async function getById(id) {
  return Todo.findOne({
    where: { id },
  });
}

export async function create(text) {
  return Todo.create(text).then((data) => {
    return data;
  });
}

export async function update(id, text) {
  return Todo.findByPk(id).then((todo) => {
    todo.text = text;
    return todo.save();
  });
}

export async function remove(id) {
  return Todo.findByPk(id).then((todo) => {
    return todo.destroy();
  });
}
