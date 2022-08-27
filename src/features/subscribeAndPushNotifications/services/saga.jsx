import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";

import * as api from "features/subscribeAndPushNotifications/services/api";
import * as actionTypes from "features/subscribeAndPushNotifications/services/actionTypes";
import { getMesssagingTokenAndId } from "features/subscribeAndPushNotifications/utils";
import {
  addSubscriptionSuccess,
  removeSubscriptionSuccess,
} from "features/subscribeAndPushNotifications/services/actions";

function* handleAddSubscription(action) {
  try {
    const { payload } = action;
    const { data } = yield call(api.createSubscription, payload);
    yield put(addSubscriptionSuccess(data));
    toast.success("Subscribed successfully");
  } catch (e) {
    toast.error("Subscribe failed");
  }
}

export function* watchAddSubscription() {
  yield takeEvery(
    actionTypes.ADD_SUBSCRIPTION_REQUESTED,
    handleAddSubscription
  );
}

function* handleFetchSubscription() {
  const { success, _id } = yield getMesssagingTokenAndId();
  if (!success) {
    return toast.error("Error while fetching the subscription status");
  }
  const { data } = yield call(api.getSubscription, _id);

  yield put({
    type: actionTypes.FETCH_SUBSCRIPTION_SUCCESS,
    payload: data,
  });
}

export function* watchFetchSubscription() {
  yield takeEvery(
    actionTypes.FETCH_SUBSCRIPTION_REQUESTED,
    handleFetchSubscription
  );
}

function* handleRemoveSubscription(action) {
  try {
    const { payload } = action;
    yield call(api.removeSubscription, payload?._id);
    yield put(removeSubscriptionSuccess(payload));
    toast.success("Unsubscribed successfully");
  } catch (e) {
    // TODO : Handle error
    toast.error("Unsubscribe failed");
  }
}
export function* watchRemoveSubscription() {
  yield takeEvery(
    actionTypes.REMOVE_SUBSCRIPTION_REQUESTED,
    handleRemoveSubscription
  );
}
