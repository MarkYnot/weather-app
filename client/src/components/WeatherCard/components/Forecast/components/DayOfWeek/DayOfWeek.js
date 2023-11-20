import React from 'react'
import Name from '../../../../../Name';
import Date from '../../../../../Date'
import WeatherIcon from '../../../../../WeatherIcon';
import Temperature from '../../../CurrentCity/components/Temperature';
import TemperatureRange from '../../../../../TemperatureRange';

const DayOfWeek = () => (
  <div>
    <Name />
    <Date value="Sunday" className="text-white"/>
    <WeatherIcon />
    <Temperature />
    <TemperatureRange/>
  </div>
  )

 
export default DayOfWeek