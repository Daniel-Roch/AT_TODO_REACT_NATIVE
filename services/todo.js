//https://veiopads.netlify.app/api/<seu_nome>/
// GET & POST - https://veiopads.netlify.app/api/<seu_nome>/tasks
// PUT https://veiopads.netlify.app/api/<seu_nome>/tasks/<id-da-tarefa>
import axios from "axios";

const API_TODO = process.env.API_TODO;

const apiTodo = axios.create({
  baseURL: API_TODO,
});

export const getTodo = async () => {
  try {
    const response = await apiTodo.get("/tasks");
    return response.data;
  } catch (error) {
    alert("Error: " + error);
    return { error: error };
  }
};

export const postTodo = async (signUpForm) => {
  try {
    const response = await apiTodo.post("/tasks", signUpForm);
    return response;
  } catch (error) {
    alert("Error: " + error);
    return { error: error };
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await apiTodo.delete(`/tasks/${id}`);
    return response;
  } catch (error) {
    alert("Error: " + error);
    return { error: error };
  }
};

export const getTodoId = async (id) => {
  try {
    const response = await apiTodo.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    alert("Error: " + error);
    return { error: error };
  }
};

export const putTodoId = async (id, data) => {
  try {
    const response = await apiTodo.put(`/tasks/${id}`, data);
    return response.data;
  } catch (error) {
    alert("Error: " + error);
    return { error: error };
  }
};

export const patchTodoId = async (id, step) => {
  try {
    const response = await apiTodo.patch(`/tasks/${id}/update-step`, { step });
    return response.data;
  } catch (error) {
    alert("Error: " + error);
    return { error: error };
  }
};
