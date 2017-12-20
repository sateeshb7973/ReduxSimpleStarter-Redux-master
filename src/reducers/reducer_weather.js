import { FETCH_WEATHER } from '../actions/index';
export default function(state =[], action) {
  console.log('Action received',action);
  switch (action.type) {
    case FETCH_WEATHER:
    // Never mutate the redux state. Here don't use state.push, which will mutate the existing state array
    // instead use state.concat, which will not mutate the existing array it create a new array which contains old data as well as new data
  //  return state.concat([action.payload.data]);
    // es6 syntax similar to above return statement
    // which will creates a new array with payload data and state data
    return [action.payload.data, ...state]; //es6
  }
  return state;
}
