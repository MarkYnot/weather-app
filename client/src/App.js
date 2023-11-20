import BackgroundImage from './components/BackgroundImage';
import WeatherCard from './components/WeatherCard';
import bg from './assets/bg.png'

const App = () => (
       <BackgroundImage imageUrl={bg} alt="cloud" className={"h-screen bg-cover flex items-center font-alimama"}>
          <WeatherCard />
       </BackgroundImage>
  );

export default App;
