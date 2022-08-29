import { Header } from 'web/components/Header/Header.index'

import { CgArrowsV } from "react-icons/cg"

import * as S from "./HomePage.styled"
import { FC, useState } from 'react'
import { TimeZoneCard } from './TimeZoneCard/TimeZoneCard.index'
import { HomePageProps } from './HomePage.types'

export const HomePage: FC<HomePageProps> = ({ data }) => {
	const [temperatureVersion, setTemperatureVersion] = useState<string>("celsius")

	const toggleTemperatureVersion = () => {
		const newTemperature = temperatureVersion === "celsius" ? "fahrenheit" : "celsius"

		setTemperatureVersion(newTemperature)
	}

  return (
    <S.Container>
      <Header />
			<S.CityDetailsContainer>
				<h2>{data.location.name}</h2>
				<h4>{data.current.condition.text}</h4>

				<S.TemperatureContainer role="button" onClick={toggleTemperatureVersion}>
					<h3>{data.current.temp_c}</h3>
					<span>
						<CgArrowsV />
					</span>
					<div>
						<span>
							{temperatureVersion === "celsius" ? "°C" : "°F"}
						</span>
						<span>{data.forecast.forecastday[0].day.maxtemp_c}°</span>
						<span>{data.forecast.forecastday[0].day.mintemp_c}°</span>
					</div>
				</S.TemperatureContainer>

				<S.StatusIconContainer>
					<img src={data.current.condition.icon} alt={data.current.condition.text} />
				</S.StatusIconContainer>
				<S.predicatedTemperatureContainer>
					<TimeZoneCard
						timeZoneType='dawn'
						predicatedTemperature={data.forecast.forecastday[0].hour[3].temp_c.toString()}
						predicatedStatusIconUrl={data.forecast.forecastday[0].hour[3].condition.icon}
						predicatedStatusIconAlt={data.forecast.forecastday[0].hour[3].condition.text}
					/>
					<TimeZoneCard
						timeZoneType='morning'
						predicatedTemperature={data.forecast.forecastday[0].hour[9].temp_c.toString()}
						predicatedStatusIconUrl={data.forecast.forecastday[0].hour[9].condition.icon}
						predicatedStatusIconAlt={data.forecast.forecastday[0].hour[9].condition.text}
						/>
					<TimeZoneCard
						timeZoneType='afternoon'
						predicatedTemperature={data.forecast.forecastday[0].hour[15].temp_c.toString()}
						predicatedStatusIconUrl={data.forecast.forecastday[0].hour[15].condition.icon}
						predicatedStatusIconAlt={data.forecast.forecastday[0].hour[15].condition.text}
						/>
					<TimeZoneCard
						timeZoneType='night'
						predicatedTemperature={data.forecast.forecastday[0].hour[21].temp_c.toString()}
						predicatedStatusIconUrl={data.forecast.forecastday[0].hour[21].condition.icon}
						predicatedStatusIconAlt={data.forecast.forecastday[0].hour[21].condition.text}
						/>
				</S.predicatedTemperatureContainer>

				<S.WeatherTemperatureContainer>
					<S.WeatherTemperatureItem>
						<h5>wind speed</h5>
						<span>{data.current.wind_mph} m/s</span>
					</S.WeatherTemperatureItem>
					<S.WeatherTemperatureItem>
						<h5>sunrise</h5>
						<span>{data.forecast.forecastday[0].astro.sunrise}</span>
					</S.WeatherTemperatureItem>
					<S.WeatherTemperatureItem>
						<h5>sunset</h5>
						<span>{data.forecast.forecastday[0].astro.sunset}</span>
					</S.WeatherTemperatureItem>
					<S.WeatherTemperatureItem>
						<h5>humidity</h5>
						<span>{data.current.humidity} %</span>
					</S.WeatherTemperatureItem>
				</S.WeatherTemperatureContainer>
			</S.CityDetailsContainer>
    </S.Container>
  )
}

