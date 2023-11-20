import TemperatureRange from "../../../TemperatureRange";
import Meta from './components/Meta';
import Date from '../../../Date';
import Name from '../../../Name';
import Temperature from './components/Temperature'; 
import WeatherIcon from '../../../WeatherIcon';  

const CurrentCity = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Date value='Sunday' className='text-black'/>
      <Name />
      <Temperature />
      <TemperatureRange />
      <WeatherIcon />
      <Meta />
   </div>
  )
}

export default CurrentCity;