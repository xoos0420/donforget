import express from 'express';
import * as todoController from '../controller/todo.js';

const router = express.Router();

// GET
// router.get('/', todoController.getTodos);

// GET
router.get('/:id', todoController.getTodo);

// POST
router.post('/', todoController.CreateTodo);

// PUT
router.put('/:id', todoController.UpdateTodo);

// DELETE
router.delete('/:id', todoController.DeleteTodo);

export default router;
