# STEPS

## 步骤一：

### 按照责任划分组件

- App
    - WeatherCard
       - CurrentCity
          - Date
          - Name
          - Temperture
          - TemperatureRange
          - WeatherIcon
          - Meta
              - Humidity
              - Wind
              - AirQuality
              - Somatosensory
       - Forecast
          - DayOfWeek
              - Name
              - Date
              - weatherIcon
              - TemperatureRange
       - SearchBar
              - Input
              - Button
       - OtherCities
              - City[]
                 - Name
                 - WeatherIcon
                 - TemperatureRange 

  ### 相同名称的组件: 出现重名， 可能是通用组件， 可以抽离出来

  - WeatherIcon
  - TemperatureRange
  - Name
  - Date

  ###  全局 Assets
  - Fonts
  - bg image

  #### VS CODE 插件

  - Image preview
  - Code spell Checker


