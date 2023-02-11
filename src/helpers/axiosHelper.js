import axios from "axios";

export function GET(url, header) {
  return axios
    .get(url, header)
    .then((res) => res)
    .catch((err) => {
      if (typeof err.response === "undefined") {
        console.log("Network Error, Connection Not Found");
        return { status: 400 };
      }
      if (typeof err.response !== "undefined") {
        if (typeof err.response.data === "string") {
          err.response.data = {
            data: null,
            error: {
              message: "Network Error, Connection Not Found",
            },
          };
        }
        // eslint-disable-next-line no-prototype-builtins
        if (err.response.data.hasOwnProperty("message")) {
          const { message } = err.response.data;
          let errMsg = "";

          message.forEach((item) => {
            item.messages.forEach((msg) => {
              errMsg += msg.message;
            });
          });
          err.response.data = {
            data: null,
            error: {
              name: "Network Error",
              message: errMsg,
            },
          };
        }
      }
      return err.response;
    });
}
