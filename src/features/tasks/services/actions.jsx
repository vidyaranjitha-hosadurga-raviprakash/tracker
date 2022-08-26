import * as actionTypes from "features/tasks/services/actionTypes";

export const fetchTaskAction = () => ({
  type: actionTypes.FETCH_TASK_REQUESTED,
});

export const fetchTaskSuccess = (task) => ({
  type: actionTypes.FETCH_TASK_SUCCESS,
  payload: task,
});

export const fetchTaskFail = (error) => ({
  type: actionTypes.FETCH_TASK_FAIL,
  payload: error,
});

export const addTaskAction = (task) => ({
  type: actionTypes.CREATE_TASK_REQUESTED,
  payload: task,
});

export const addTaskSuccess = (task) => ({
  type: actionTypes.CREATE_TASK_SUCCESS,
  payload: task,
});

export const addTaskFail = (error) => ({
  type: actionTypes.CREATE_TASK_FAIL,
  pyload: error,
});

export const updateTaskAction = (task) => ({
  type: actionTypes.UPDATE_TASK_REQUESTED,
  payload: task,
});

export const updateTaskSuccess = (task) => ({
  type: actionTypes.UPDATE_TASK_SUCCESS,
  payload: task,
});

export const updateTaskFail = (error) => ({
  type: actionTypes.UPDATE_TASK_FAIL,
  payload: error,
});

export const deleteTaskAction = (id) => ({
  type: actionTypes.DELETE_TASK_REQUESTED,
  payload: id,
});

export const deleteTaskSuccess = (task) => ({
  type: actionTypes.DELETE_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskFail = (error) => ({
  type: actionTypes.DELETE_TASK_FAIL,
  payload: error,
});
