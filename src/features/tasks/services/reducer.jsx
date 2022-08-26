import * as actionTypes from "features/tasks/services/actionTypes";
import { PROGRESS_LABEL_NAME } from "data/Constants";

const INITIAL_STATE = {
  loading: false,
  tasks: [],
  error: "",
  currentTask: undefined,
  progressLabelName: "",
  selectedTask: undefined,
};
const reducer = (tasksState = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_TASK_REQUESTED:
    case actionTypes.CREATE_TASK_REQUESTED:
    case actionTypes.DELETE_TASK_REQUESTED: {
      return {
        ...tasksState,
        loading: true,
        error: "",
        progressLabelName: PROGRESS_LABEL_NAME[type.split("_")[0]],
      };
    }

    case actionTypes.UPDATE_TASK_REQUESTED: {
      return {
        ...tasksState,
        selectedTask: payload,
      };
    }
    case actionTypes.FETCH_TASK_FAIL:
    case actionTypes.CREATE_TASK_FAIL:
    case actionTypes.DELETE_TASK_FAIL: {
      return {
        ...tasksState,
        loading: false,
        error: "",
      };
    }

    case actionTypes.FETCH_TASK_SUCCESS: {
      return {
        ...tasksState,
        loading: false,
        error: "",
        tasks: payload,
      };
    }

    case actionTypes.CREATE_TASK_SUCCESS: {
      return {
        ...tasksState,
        tasks: [...tasksState.tasks, payload], // appending new task to the list
        loading: false,
        error: "",
      };
    }

    case actionTypes.UPDATE_TASK_SUCCESS: {
      const selectedTask = tasksState?.selectedTask;
      const updatedMsgs = tasksState?.tasks.map((task) =>
        task?._id === selectedTask?._id ? (task = selectedTask) : task
      );
      return {
        ...tasksState,
        loading: false,
        error: "",
        tasks: updatedMsgs,
      };
    }
    case actionTypes.DELETE_TASK_SUCCESS: {
      const newTasks = tasksState.tasks.filter((task) => task._id !== payload);
      return {
        ...tasksState,
        loading: false,
        error: "",
        tasks: newTasks,
      };
    }

    default: {
      return tasksState;
    }
  }
};
export default reducer;
