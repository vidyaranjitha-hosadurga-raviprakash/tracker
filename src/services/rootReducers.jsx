import { combineReducers } from "redux";

// import { messsagesModule } from "features/";
import messageReducer from "features/tasks/services/reducer";
import subscribeReducer from "features/subscribeAndPushNotifications/services/reducer";

export default combineReducers({
  // [messsagesModule.constants.NAME]: messageReducer,
  tasks: messageReducer,
  subscribe: subscribeReducer,
});
