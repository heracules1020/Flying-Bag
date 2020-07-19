import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_FLIGHT_INFO } from "./const";
import { getFlightInfoSuccess, getFlightInfoFail } from "./action";

const fetchData = (url, options = {}) => {
  return axios(url, options)
    .then(json => {
      return json.data;
    })
    .catch(error => {
      throw error;
    });
};

function* getFlightInfo({ payload: { flightNumber, flightDate } }) {
  const options = {
    method: "GET"
  };

  try {
    const response = yield call(
      fetchData,
      `${process.env.REACT_APP_API_URL}`,
      options
    );
    yield put(getFlightInfoSuccess(response));
  } catch (error) {
    let message;
    if (error.status === 500) {
      message = "Internal Server Error";
    } else {
      message = error;
    }
    yield put(getFlightInfoFail(message));
  }
}

function* watchFlightInfo() {
  yield takeLatest(GET_FLIGHT_INFO, getFlightInfo);
}

export default function* mainSaga() {
  yield all([watchFlightInfo()]);
}
