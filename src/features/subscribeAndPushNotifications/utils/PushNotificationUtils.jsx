import { messaging } from "config/FirebaseConfig";
import { getToken } from "firebase/messaging";

import * as api from "features/subscribeAndPushNotifications/services/api";

export const getMesssagingTokenAndId = async () => {
  const response = { success: false, token: "", _id: "" };
  await getToken(messaging, {
    vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
  })
    .then((currentToken) => {
      console.log("currentToken = ", currentToken);
      response.success = true;
      response.token = currentToken;
      response._id = generateSubscriptionId(currentToken);
    })
    .catch((err) => {
      console.log("Error while fetching the messaging token, error = ", err);
    });
  return response;
};

// Generate subscriptionId from token.
export const generateSubscriptionId = (token) => {
  return token.slice(0, 7) + token.slice(-7);
};

export const sendNotification = async (notificationDetails) => {
  const { data } = await api.getAllSubscriptions();

  // Return when no subsribers
  if (!data.length) {
    return;
  }
  const subscribersTokens = data.map((subscription) => subscription.token);
  let body = {
    // registration_ids for muliple users. to for the single user.
    registration_ids: subscribersTokens,
    notification: notificationDetails,
  };
  const options = {
    method: "POST",
    headers: new Headers({
      Authorization: `key=${process.env.REACT_APP_FIREBASE_AUTHORIZATION_KEY}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(body),
  };
  fetch("https://fcm.googleapis.com/fcm/send", options)
    .then((data) => {
      console.log("Sent the notification , data = ", data);
    })
    .catch((e) =>
      console.log("Error while sending notification , error = ", e)
    );
};
