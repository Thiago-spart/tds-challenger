/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { FC } from "react";
import { useState } from "react";
import { CgArrowsV } from "react-icons/cg";

import { Header } from "web/components/Header/Header.index";

import type { HomePageProps } from "./HomePage.types";

import * as S from "./HomePage.styled";
import { TimeZoneCard } from "./TimeZoneCard/TimeZoneCard.index";

export const HomePage: FC<HomePageProps> = ({ data }) => {
	const [temperatureVersion, setTemperatureVersion] = useState<
		"celsius" | "fahrenheit"
	>("celsius");
	const [forecastDay] = data.forecast.forecastday;

	const selectedDayHours = [3, 9, 15, 21];

	const filteredTimePeriod = forecastDay.hour.filter((_, idx) => {
		return selectedDayHours.some(selectedIndex => selectedIndex === idx);
	});

	const toggleTemperatureVersion = () => {
		const newTemperature =
			temperatureVersion === "celsius" ? "fahrenheit" : "celsius";

		setTemperatureVersion(newTemperature);
	};

	const getTimeZoneTypeText = (idx: number | string) => {
		switch (idx) {
			case 0:
				return "dawn";
			case 1:
				return "morning";
			case 2:
				return "afternoon";
			default:
				return "night";
		}
	};

	return (
		<S.Container>
			<Header />
			<S.CityDetailsContainer onClick={toggleTemperatureVersion}>
				<h2>{data.location.name}</h2>
				<h4>{data.current.condition.text}</h4>

				<S.TemperatureContainer role="button">
					<h3>
						{temperatureVersion === "celsius"
							? data.current.temp_c
							: data.current.temp_f}
					</h3>
					<span>
						<CgArrowsV />
					</span>
					<div>
						<span>{temperatureVersion === "celsius" ? "°C" : "°F"}</span>
						<span>
							{temperatureVersion === "celsius"
								? forecastDay.day.maxtemp_c
								: forecastDay.day.maxtemp_f}
							°
						</span>
						<span>
							{temperatureVersion === "celsius"
								? forecastDay.day.mintemp_c
								: forecastDay.day.mintemp_f}
							°
						</span>
					</div>
				</S.TemperatureContainer>

				<S.StatusIconContainer>
					<img
						src={data.current.condition.icon}
						alt={data.current.condition.text}
					/>
				</S.StatusIconContainer>
				<S.predicatedTemperatureContainer>
					{filteredTimePeriod.map((hourDetails, idx) => {
						const timeZoneType = getTimeZoneTypeText(idx);

						return (
							<TimeZoneCard
								key={hourDetails.time_epoch.toString()}
								timeZoneType={timeZoneType}
								predicatedTemperature={
									temperatureVersion === "celsius"
										? hourDetails.temp_c.toString()
										: hourDetails.temp_f.toString()
								}
								predicatedStatusIconUrl={hourDetails.condition.icon}
								predicatedStatusIconAlt={hourDetails.condition.text}
								temperatureVersion={temperatureVersion}
							/>
						);
					})}
				</S.predicatedTemperatureContainer>

				<S.WeatherTemperatureContainer>
					<S.WeatherTemperatureItem>
						<h5>wind speed</h5>
						<span>{data.current.wind_mph} m/s</span>
					</S.WeatherTemperatureItem>
					<S.WeatherTemperatureItem>
						<h5>sunrise</h5>
						<span>{forecastDay.astro.sunrise}</span>
					</S.WeatherTemperatureItem>
					<S.WeatherTemperatureItem>
						<h5>sunset</h5>
						<span>{forecastDay.astro.sunset}</span>
					</S.WeatherTemperatureItem>
					<S.WeatherTemperatureItem>
						<h5>humidity</h5>
						<span>{data.current.humidity} %</span>
					</S.WeatherTemperatureItem>
				</S.WeatherTemperatureContainer>
			</S.CityDetailsContainer>
		</S.Container>
	);
};
