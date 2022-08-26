import * as actionTypes from "features/subscribeAndPushNotifications/services/actionTypes";

export const fetchSubscriptionAction = () => ({
  type: actionTypes.FETCH_SUBSCRIPTION_REQUESTED,
  payload: {},
});

export const fecthSubscriptionSuccess = (payload) => ({
  type: actionTypes.FETCH_SUBSCRIPTION_SUCCESS,
  payload,
});

export const fetchSubscriptionFail = (payload) => ({
  type: actionTypes.FETCH_SUBSCRIPTION_FAIL,
  payload,
});

export const addSubscriptionAction = (subscription) => ({
  type: actionTypes.ADD_SUBSCRIPTION_REQUESTED,
  payload: subscription,
});

export const addSubscriptionSuccess = (subscription) => ({
  type: actionTypes.ADD_SUBSCRIPTION_SUCCESS,
  payload: subscription,
});

// export const addSubscriptionFail = (payload) => ({
//   type: actionTypes.ADD_SUBSCRIPTION_FAIL,
//   payload,
// });

export const removeSubscriptionAction = (subscription) => ({
  type: actionTypes.REMOVE_SUBSCRIPTION_REQUESTED,
  payload: subscription,
});

export const removeSubscriptionSuccess = (payload) => ({
  type: actionTypes.REMOVE_SUBSCRIPTION_SUCCESS,
  payload,
});

// export const removeSubscriptionFail = (payload) => ({
//   type: actionTypes.REMOVE_SUBSCRIPTION_FAIL,
//   payload,
// });
