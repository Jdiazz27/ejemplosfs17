import taskService from "../services/taskService.js";

const getTask = (req, res) => {
  const data = taskService.getTask();
  res.send(data);
};

const createTask = (req, res) => {
  const body = req.body;
  const data = taskService.createTask(body);
  res.send(data);
};

const updateTask = (req, res) => {
  const body = req.body;
  const _id = req.params.id;
  const data = taskService.updateTask(_id, body);
  res.send(data);
};

const deleteTask = (req, res) => {
  const _id = req.params.id;
  const data = taskService.deleteTask(_id);
  res.send(data);
};

export default {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
