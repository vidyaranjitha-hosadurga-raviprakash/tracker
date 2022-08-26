import * as actionTypes from "features/subscribeAndPushNotifications/services/actionTypes";

import { isObjectEmpty } from "utils/generalOperation";

const INITIAL_STATE = {
  _id: "",
  token: "",
  isSubscribed: false,
};

const reducer = (subscription = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_SUBSCRIPTION_SUCCESS: {
      return isObjectEmpty(payload) ? INITIAL_STATE : payload;
    }

    case actionTypes.ADD_SUBSCRIPTION_SUCCESS: {
      return {
        ...payload,
        isSubscribed: true,
      };
    }

    case actionTypes.REMOVE_SUBSCRIPTION_SUCCESS: {
      return INITIAL_STATE;
    }

    default:
      return subscription;
  }
};

export default reducer;
