import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import {
  Delete as DeleteIcon,
  Restore as RestoreIcon,
} from "@mui/icons-material/";
import { IOSSwitch } from "components";
export const TaskItemDisplay = ({
  task,
  removeTask,
  updateTask,
  restoreCompletedTask,
}) => {
  const { _id, status, title } = task;
  return (
    <Grid
      container
      item
      sx={{ padding: "0.3rem 0.1rem" }}
      className="task-item"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item component="li" sx={{ width: "1.5rem" }}></Grid>
      <Grid item xs={5} sm={7} md={7} lg={8} xl={9}>
        <Typography
          sx={{
            wordBreak: "break-all",
          }}
          variant="body1"
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <IOSSwitch
          checked={status}
          disabled={status}
          onChange={() => {
            updateTask(_id);
          }}
        ></IOSSwitch>
      </Grid>
      <Grid item>
        <IconButton
          size="medium"
          onClick={() => {
            removeTask(_id);
          }}
        >
          <DeleteIcon color="primary" />
        </IconButton>
      </Grid>

      <Grid item sx={{ flex: 1 }}>
        {status && (
          <IconButton
            size="medium"
            onClick={() => {
              restoreCompletedTask(_id);
            }}
          >
            <RestoreIcon color="primary" />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};
