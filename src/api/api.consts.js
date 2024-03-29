import axios from "axios";

export const APIHeaders = {
  Accept: "application/json",

  "Content-Type": "application/json",

  //   "Access-Control-Allow-Origin": "*",

  // 'Accept-Language': {​​

  //     toString () {​​

  //         return i18next.language

  //     }​​

  // }​​,

  // 'Authorization': {​​

  //     toString () {​​

  //         return `Bearer ${​​getCookieUtil('token')}​​`

  //     }​​

  // }​​
};

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,


  timeout: 12000,

  headers: APIHeaders,
});

