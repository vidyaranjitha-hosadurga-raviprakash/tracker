import { axiosClient } from "lib";
import { NAME } from "features/subscribeAndPushNotifications/constants";

export const getAllSubscriptions = async () => {
  return await axiosClient.get(`/${NAME}`);
};
export const getSubscription = async (id) => {
  return await axiosClient.get(`/${NAME}/${id}`);
};
export const createSubscription = async (args) => {
  return await axiosClient.post(`/${NAME}`, args);
};

export const removeSubscription = async (args) => {
  return await axiosClient.delete(`/${NAME}/${args}`);
};
