import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { api } from "services/api";

import { CountryPage as Page } from "web/pages/Country/Country.index";

import { SITE } from "../../configs/site";

import type { WeatherDataProps } from "types/interfaces/weatherData";

interface CountryPageProps {
	data: WeatherDataProps;
}

const CountryPage: NextPage<CountryPageProps> = ({ data }) => {
	return (
		<>
			<Head>
				<title>{`${data.location.name} | ${SITE.name}`}</title>
			</Head>
			<Page data={data} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ctx => {
	const SelectedCountry = ctx.params?.country?.toString();

	const res = await api.get("v1/forecast.json", {
		params: {
			key: String(process.env.WEATHER_API_KEY),
			q: SelectedCountry,
			aqi: "no",
			days: 1,
			alerts: "no",
		},
	});

	/*
	 * if (res.status !== 200) {
	 * 	ctx.res.setHeader("location", "/");
	 * 	ctx.res.statusCode = 302;
	 * 	ctx.res.end();
	 */

	/*
	 * 	return {
	 * 		props: {},
	 * 	};
	 * }
	 */

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

export default CountryPage;
