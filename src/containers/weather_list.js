import React, {  Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humiditys = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
        <Chart data={temps} color="green" />
        </td>
        <td>
        <Chart data={pressures} color="blue" />
        </td>
        <td>
        <Chart data={humiditys} color="red" />
        </td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
      <thead>
      <tr>
      <th>City</th>
      <th>Temperature</th>
      <th>Pressure</th>
      <th>Humidity</th>
      </tr>
      </thead>
      <tbody>
      {this.props.weather.map(this.renderWeather)}
      </tbody>
      </table>
    );
  }
}
// here the argument is es6 syntax, to get a one value weather from state
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
