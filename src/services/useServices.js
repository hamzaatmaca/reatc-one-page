import axios from "axios";
import endpoints from "./endpoints/endpoints";
// Custom Hook
const useServices = (URL, METHOD, PAYLOAD) => {
  return new Promise((resolve, reject) => {
    if ((!URL || typeof URL !== "string" || URL === undefined, URL === null))
      reject({ errMessage: "Url must be string" });
    if (!METHOD || typeof METHOD !== "string")
      reject({
        errMessage: "Method must be string format GET,POST,PUT,DELETE",
      });

    if (METHOD !== "GET") {
      if (
        PAYLOAD === undefined ||
        PAYLOAD === null ||
        !PAYLOAD ||
        typeof PAYLOAD !== "object"
      )
        reject({ errMessage: "Payload must be object format." });
    }

    switch (String(METHOD)) {
      case "GET":
        return resolve(
          axios.get(String(endpoints + URL)).catch(function (error) {
            console.log(error);
          })
        );

      case "POST":
        return resolve(
          axios.post(String(endpoints + URL), PAYLOAD).catch(function (error) {
            console.log(error);
          })
        );

      case "PUT":
        return resolve(
          axios.put(String(endpoints + URL), PAYLOAD).catch(function (error) {
            console.log(error);
          })
        );
      case "DELETE":
        return resolve(
          axios
            .delete(String(endpoints + URL), PAYLOAD)
            .catch(function (error) {
              console.log(error);
            })
        );
    }
  });
};

export default useServices;
