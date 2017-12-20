import axios from 'axios';

const API_KEY = '6ccd400d501630222d4f83ceb2874e3e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER= 'FETCH_WEATHER';



export function featchWeather(city) {
  const url= `${ROOT_URL}&q=${city},us`;
  const request= axios.get(url);
  // here the ajax request, axios.get returns a promise object. which can be checked with log console.log('request:',request);
  //The same promise object we are retrning as a payload to the reducer, reducer_weather
  // But when we do a log, console.log('Action received',action); it will not shown as a promise object
  // because here the middleware redux-promise is coming into the picture,  which looks for a promise object sending in payload
  // if it finds promise in paylod it un-wraps into actual object. Then creates a new action object with same action type and the converted object, passes this action object to the reducer, reducer_weather
  // so we will not see promise object in the reducer as its converted by redux-promise middleware
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
