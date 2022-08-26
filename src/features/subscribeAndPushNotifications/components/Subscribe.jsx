import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Button, Box } from "@mui/material";
import store from "services/reduxStore";
import { useSelect } from "hooks/";
import { pushNotificationsModule } from "features/subscribeAndPushNotifications/";
import { getMesssagingTokenAndId } from "features/subscribeAndPushNotifications/utils/";
import {
  fetchSubscriptionAction,
  addSubscriptionAction,
  removeSubscriptionAction,
} from "../services/actions";

const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const Subscribe = () => {
  const { isSubscribed } = useSelect(pushNotificationsModule.constants.NAME);

  useEffect(() => {
    store.dispatch(fetchSubscriptionAction());
  }, []);

  const subscribeOrUnsubcribe = (operation) => {
    Notification.requestPermission()
      .then(async (permission) => {
        if (permission === "granted") {
          const { success, token, _id } = await getMesssagingTokenAndId();
          if (!success) {
            return toast.error(`Error while  ${operation.toLowerCase()}`);
          }
          const subscription = { _id, token };
          operation === SUBSCRIBE
            ? store.dispatch(
                addSubscriptionAction({ ...subscription, isSubscribed: true })
              )
            : store.dispatch(
                removeSubscriptionAction({
                  ...subscription,
                })
              );
        }
      })
      .catch((error) => {
        console.log("Error occurred while requesting permission. ", error);
        toast.error("Error while requesting notification permission");
      });
  };

  return (
    <Box sx={{ padding: "2rem 0rem" }}>
      <Button
        variant="contained"
        onClick={(e) => subscribeOrUnsubcribe(e.target.innerText)}
      >
        {isSubscribed ? `${UNSUBSCRIBE}` : `${SUBSCRIBE}`}
      </Button>
    </Box>
  );
};

export default Subscribe;
