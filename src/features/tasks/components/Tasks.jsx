import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Grid,
  TextField,
  IconButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";

import { AddCircle as AddCircleIcon } from "@mui/icons-material/";
import { TaskItemDisplay } from "features/tasks/components/";
import { useAuth } from "features/authentication/context";
import { sendNotification } from "features/subscribeAndPushNotifications/utils";
import { tasksModule } from "features/tasks/";
import { useSelect } from "hooks/";
import {
  addTaskAction,
  deleteTaskAction,
  fetchTaskAction,
  updateTaskAction,
} from "../services/actions";
import store from "services/reduxStore";
import { Loader } from "components";
import "features/tasks/components/tasks.css";

const INITIAL_STATE = "";
const TASK_INCOMPLETE = false;
const TASK_COMPLETE = true;

const Tasks = () => {
  const { tasks, loading, progressLabelName } = useSelect(
    tasksModule.constants.NAME
  );
  const [inputTask, setInputTask] = useState(INITIAL_STATE);
  const { currentUser } = useAuth();

  const inCompleteTasks = tasks.filter(
    (task) => task.status === TASK_INCOMPLETE
  );
  const completedTasks = tasks.filter((task) => task.status === TASK_COMPLETE);

  useEffect(() => {
    store.dispatch(fetchTaskAction());
  }, []);

  const addTask = (e, newMsg) => {
    e.preventDefault();
    if (!newMsg.trim().length) {
      return toast.error("Please enter a task");
    }
    store.dispatch(addTaskAction({ title: newMsg, status: false }));
  };

  const updateTask = (id) => {
    const taskToBeUpdated = { ...tasks.find((msg) => msg._id === id) };
    taskToBeUpdated.status = !taskToBeUpdated.status;
    store.dispatch(updateTaskAction(taskToBeUpdated));
    if (taskToBeUpdated.status) {
      sendNotification({
        title: `Message from ${currentUser.name}`,
        body: taskToBeUpdated.title,
      });
    }
  };

  const restoreCompletedTask = (id) => {
    const taskToBeUpdated = { ...tasks.find((msg) => msg._id === id) };
    taskToBeUpdated.status = false;
    store.dispatch(updateTaskAction(taskToBeUpdated));
  };

  const removeTask = (id) => {
    store.dispatch(deleteTaskAction(id));
  };

  const tasksDisplay = (tasksStatus) => {
    const taskList =
      tasksStatus === TASK_COMPLETE ? completedTasks : inCompleteTasks;

    return (
      <Grid container item direction="column">
        {taskList.map((task) => {
          return (
            <TaskItemDisplay
              task={task}
              removeTask={removeTask}
              updateTask={updateTask}
              restoreCompletedTask={restoreCompletedTask}
              key={task._id}
            />
          );
        })}
      </Grid>
    );
  };

  return (
    <Box sx={{ minHeight: "40vh" }}>
      {loading && <Loader progressLabelName={progressLabelName} />}
      <Grid container direction="column" spacing={5} mt={2}>
        <Grid item sx={{ padding: "1rem 1rem" }}>
          <Grid container item justifyContent="center">
            <Grid item xs={9} sm={6} md={6} lg={7} xl={9}>
              <TextField
                label="Type task"
                variant="standard"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item>
              <IconButton
                size="medium"
                onClick={(e) => {
                  addTask(e, inputTask);
                  setInputTask(INITIAL_STATE);
                }}
              >
                <AddCircleIcon color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        {tasksDisplay(TASK_INCOMPLETE)}
        {completedTasks.length > 0 && (
          <Grid item>
            <Divider>
              <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: "500" }}
              >
                Completed task/tasks
              </Typography>
            </Divider>
          </Grid>
        )}
        {tasksDisplay(TASK_COMPLETE)}
      </Grid>
    </Box>
  );
};

export default Tasks;
