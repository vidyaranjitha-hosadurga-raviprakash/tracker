import axiosClient from "lib/axiosClient";
import { NAME } from "features/tasks/constants";
export const retrieveTasksDB = async () => await axiosClient.get(`/${NAME}`);
export const postTaskDB = async (args) =>
  await axiosClient.post(`/${NAME}`, args);

export const updateTaskDB = async ({ _id, ...rest }) =>
  await axiosClient.put(`/${NAME}/${_id}`, { ...rest });

export const deleteTaskDB = async (args) =>
  await axiosClient.delete(`/${NAME}/${args}`);
