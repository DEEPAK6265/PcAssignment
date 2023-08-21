import Todo from "../model/Todo.js";

export const addTodo = async (request, response) => {
  try {
    const data = {
      title: request.body.title,
      description: request.body.description,

      createdAt: Date.now(),
    };
    const newTodo = await Todo.create(data);

    await newTodo.save();

    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await Todo.findById(request.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );

    await todo.save();

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const updateTodo = async (request, response) => {
  try {
    const data = {
      _id: request.params.id,
      title: request.body.title,
      // description: request.body.description,
    };

    await Todo.findOneAndUpdate(data);

    const todo = await Todo.findById(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteTodo = async (request, response) => {
  try {
    const todo = await Todo.findByIdAndDelete(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
