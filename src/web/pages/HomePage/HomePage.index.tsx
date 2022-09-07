/* eslint-disable @typescript-eslint/no-magic-numbers */
import { useRouter } from "next/router";

import type { FC, KeyboardEvent } from "react";
import { useState } from "react";

import { Button } from "web/components/Button/Button.index";
import { SearchInput } from "web/components/SearchInput/SearchInput.index";

import * as S from "./HomePage.styled";

export const HomePage: FC = () => {
	const [searchCountry, setSearchCountry] = useState("");
	const router = useRouter();

	const updateSearchCountry = (newValue: string) => {
		setSearchCountry(newValue);
	};

	const HandleSearch = () => {
		router.push(`/countries/${searchCountry}`);
	};

	const SearchOnEnter = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === "Enter") {
			HandleSearch();
		}
	};

	return (
		<S.Container onKeyDown={SearchOnEnter}>
			<h1>ForecastThi</h1>

			<p>
				Search for your city using the US Zip code, UK Postcode, Canada Postal
				code, IP address, Latitude/Longitude (decimal degree) or city name.
			</p>

			<S.SearchContainer>
				<SearchInput
					placeholder="Search..."
					onChange={e => updateSearchCountry(e.target.value)}
					value={searchCountry}
				/>
				<Button onClick={HandleSearch} schema="primary" type="button">
					Search
				</Button>
			</S.SearchContainer>
		</S.Container>
	);
};
