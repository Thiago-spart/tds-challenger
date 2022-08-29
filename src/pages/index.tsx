import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { api } from "services/api";

import { HomePage as Page } from "web/pages/HomePage/HomePage.index";

import { SITE } from "../configs/site";

import type { WeatherDataProps } from "types/interfaces/weatherData";

interface HomePageProps {
	data: WeatherDataProps;
}

const HomePage: NextPage<HomePageProps> = ({ data }) => {
	return (
		<>
			<Head>
				<title>{`${data.location.name} | ${SITE.name}`}</title>
			</Head>
			<Page data={data} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await api.get("v1/forecast.json", {
		params: {
			key: String(process.env.WEATHER_API_KEY),
			q: "London",
			aqi: "no",
			days: 1,
			alerts: "no",
		},
	});

	const weatherCityData = res.data;

	if (!weatherCityData) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: weatherCityData,
		},
	};
};

export default HomePage;
