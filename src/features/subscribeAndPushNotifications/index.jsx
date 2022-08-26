import * as constants from "features/subscribeAndPushNotifications/constants";
import * as actions from "features/subscribeAndPushNotifications/services/actions";
import reducer from "features/subscribeAndPushNotifications/services/reducer";

export const pushNotificationsModule = {
  actions,
  reducer,
  constants,
};
