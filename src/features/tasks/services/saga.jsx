import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as api from "features/tasks/services/api";
import * as actionTypes from "features/tasks/services/actionTypes";
import {
  fetchTaskSuccess,
  fetchTaskFail,
  addTaskSuccess,
  addTaskFail,
  updateTaskSuccess,
  updateTaskFail,
  deleteTaskSuccess,
  deleteTaskFail,
} from "features/tasks/services/actions";

// Fetch task's worker and watcher saga.
function* handleFetchTasks() {
  try {
    const { data } = yield call(api.retrieveTasksDB);
    yield put(fetchTaskSuccess(data));
  } catch (error) {
    yield put(fetchTaskFail(error.task));
    toast.error("Error while fetching tasks!");
  }
}
export function* watchFetchTask() {
  yield takeEvery(actionTypes.FETCH_TASK_REQUESTED, handleFetchTasks);
}

// Add task's worker saga and  watcher.
function* handleAddTask(action) {
  try {
    const { payload } = action;
    const { data } = yield call(api.postTaskDB, payload);
    yield put(addTaskSuccess(data));
    toast.success("Add task success!");
  } catch (error) {
    yield put(addTaskFail(error.task));
    toast.error("Add task failed!");
  }
}

export function* watchAddTask() {
  yield takeEvery(actionTypes.CREATE_TASK_REQUESTED, handleAddTask);
}

// Update tasks's worker saga and watcher.
export function* handleUpdateTask(action) {
  try {
    const { payload } = action;
    const { data } = yield call(api.updateTaskDB, payload);
    yield put(updateTaskSuccess(data));
  } catch (error) {
    yield put(updateTaskFail(error.task));
    toast.error("Update task failed!");
  }
}

export function* watchUpdateTask() {
  yield takeEvery(actionTypes.UPDATE_TASK_REQUESTED, handleUpdateTask);
}

// Delete task's worker saga and  watcher.
export function* handleDeleteTask(action) {
  try {
    const { payload } = action;
    console.log("handleDeleteTask : payload =============== ", payload);
    const { data } = yield call(api.deleteTaskDB, payload);
    yield put(deleteTaskSuccess(data));
    toast.success("Task deletion successful!");
  } catch (error) {
    yield put(deleteTaskFail(error.task));
    toast.error("Failed to delete task!");
  }
}
export function* watchDeleteTask() {
  yield takeEvery(actionTypes.DELETE_TASK_REQUESTED, handleDeleteTask);
}
