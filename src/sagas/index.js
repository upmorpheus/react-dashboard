import { takeLatest } from 'redux-saga/effects'
import { GET_USERS_REQUEST } from "../actions"
import { getUsersRequest } from './users'

export default function* rootSaga() {
  yield takeLatest(GET_USERS_REQUEST, getUsersRequest)
}