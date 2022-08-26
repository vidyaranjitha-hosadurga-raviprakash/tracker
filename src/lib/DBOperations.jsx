import { get, child, ref, set } from "firebase/database";
import { db } from "config/FirebaseConfig";

const dbRef = ref(db);

export const fetchFromDB = async (tableNames) => {
  return await get(child(dbRef, tableNames))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch((error) => {
      console.error("fetchFromDB , failed to fetch from DB : ", error);
    });
};
export const writeToDB = (tableNames, info) => {
  set(ref(db, tableNames), info)
    .then(() => {
      console.log("Data saved successfully");
    })
    .catch((error) => {
      console.log(
        "DBOperations: writeToDB:: Error while saving data: error = ",
        error
      );
    });
};
