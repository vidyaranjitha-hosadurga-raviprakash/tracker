import { all } from "redux-saga/effects";

import {
  watchFetchTask,
  watchAddTask,
  watchUpdateTask,
  watchDeleteTask,
} from "features/tasks/services/saga";

import {
  watchAddSubscription,
  watchFetchSubscription,
  watchRemoveSubscription,
} from "features/subscribeAndPushNotifications/services/saga";

// Export all the sagas
function* rootSaga() {
  yield all([
    watchFetchTask(),
    watchAddTask(),
    watchUpdateTask(),
    watchDeleteTask(),
    watchAddSubscription(),
    watchFetchSubscription(),
    watchRemoveSubscription(),
  ]);
}

export default rootSaga;
