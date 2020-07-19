import {
  SET_FLIGHT_NUMBER,
  SET_FLIGHT_DATE,
  SET_AUTH_STATUS,
  ADD_ADDRESS,
  SET_LUGGAGE_DETAIL,
  SET_LUGGAGE_POPUP_STATUS,
  SET_DELIVERY_INFO,
  ADD_LUGGAGE,
  GET_FLIGHT_INFO,
  GET_FLIGHT_INFO_SUCCESS,
  GET_FLIGHT_INFO_FAIL
} from "./const";

const INIT_STATE = {
  flightNumber: "",
  flightDate: "",
  isAuthenticated: false,
  luggageDetail: "",
  flightInfo: [],
  luggageList: "",
  addressList: "",
  deliveryTimeSlot: null,
  deliveryDate: null,
  deliveryAddressID: null,
  loading: false,
  popupStatus: false
};

const mainReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_FLIGHT_NUMBER: {
      return { ...state, flightNumber: action.payload };
    }
    case SET_FLIGHT_DATE: {
      return { ...state, flightDate: action.payload };
    }
    case SET_AUTH_STATUS: {
      return { ...state, isAuthenticated: action.payload };
    }
    case SET_LUGGAGE_DETAIL: {
      return {
        ...state,
        luggageDetail: action.payload
      };
    }
    case SET_LUGGAGE_POPUP_STATUS: {
      return {
        ...state,
        popupStatus: action.payload
      };
    }
    case SET_DELIVERY_INFO: {
      return {
        ...state,
        deliveryTimeSlot: action.payload.deliveryTimeSlot,
        deliveryDate: action.payload.deliveryDate,
        deliveryAddressID: action.payload.deliveryAddressID
      };
    }
    case ADD_LUGGAGE: {
      return { ...state, luggageList: action.payload };
    }
    case ADD_ADDRESS: {
      return { ...state, addressList: action.payload };
    }
    case GET_FLIGHT_INFO: {
      return { ...state, loading: true };
    }
    case GET_FLIGHT_INFO_SUCCESS: {
      return { ...state, flightInfo: action.payload, loading: false };
    }
    case GET_FLIGHT_INFO_FAIL: {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
};
export default mainReducer;
