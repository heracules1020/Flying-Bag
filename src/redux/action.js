import {
  SET_FLIGHT_NUMBER,
  SET_FLIGHT_DATE,
  SET_LUGGAGE_POPUP_STATUS,
  SET_LUGGAGE_DETAIL,
  SET_DELIVERY_INFO,
  GET_FLIGHT_INFO,
  ADD_LUGGAGE,
  SET_AUTH_STATUS,
  GET_FLIGHT_INFO_SUCCESS,
  GET_FLIGHT_INFO_FAIL,
  ADD_ADDRESS
} from "./const";
export const setFilgtNumber = payload => {
  return {
    type: SET_FLIGHT_NUMBER,
    payload
  };
};

export const setFilgtDate = payload => {
  return {
    type: SET_FLIGHT_DATE,
    payload
  };
};

export const setAuthStatus = payload => {
  return {
    type: SET_AUTH_STATUS,
    payload
  };
};

export const setLuggagePopUpStatus = payload => {
  return {
    type: SET_LUGGAGE_POPUP_STATUS,
    payload
  };
};
export const setDeliveryInfo = payload => {
  return {
    type: SET_DELIVERY_INFO,
    payload
  };
};

export const addAddress = payload => {
  return {
    type: ADD_ADDRESS,
    payload
  };
};

export const setLuggageDetail = payload => {
  return {
    type: SET_LUGGAGE_DETAIL,
    payload
  };
};

export const addLuggage = payload => {
  return {
    type: ADD_LUGGAGE,
    payload
  };
};

export const getFlightInfo = payload => {
  return {
    type: GET_FLIGHT_INFO,
    payload
  };
};

export const getFlightInfoSuccess = payload => {
  return {
    type: GET_FLIGHT_INFO_SUCCESS,
    payload
  };
};

export const getFlightInfoFail = error => {
  return {
    type: GET_FLIGHT_INFO_FAIL,
    error
  };
};
