import * as todoRepository from '../data/todo.js';

export async function getTodo(req, res, next) {
  const id = req.params.id;
  const todo = await todoRepository.getById(id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: `Todo id(${id})가 없습니다` });
  }
}

export async function CreateTodo(req, res, next) {
  const text = req.body;
  const todo = await todoRepository.create(text);
  res.status(201).json(todo);
}

export async function UpdateTodo(req, res, next) {
  const id = req.params.id;
  const { text } = req.body;
  const todo = await todoRepository.getById(id);
  if (!todo) {
    res.status(404).json({ message: `todo id(${id})가 없습니다` });
  }
  const updated = await todoRepository.update(id, text);
  res.status(200).json(updated);
}

export async function DeleteTodo(req, res, next) {
  const id = req.params.id;
  const todo = await todoRepository.getById(id);
  if (!todo) {
    res.status(404).json({ message: `todo id(${id})가 없습니다` });
  }
  await todoRepository.remove(id);
  res.sendStatus(204);
}
