import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const CityDetailsContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	padding: 2rem 0;

	h2 {
		font-size: 4.2rem;
		line-height: 5.2rem;
		letter-spacing: 0.25rem;
		font-weight: 300;
	}

	h4 {
		font-size: 2.4rem;
		line-height: 3rem;
		letter-spacing: 0.25rem;
		font-weight: 300;
		margin-bottom: 2rem;
	}
`;

export const TemperatureContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	margin-bottom: 2rem;

	h3 {
		font-size: 12rem;
		font-weight: 300;
		line-height: 13rem;
		letter-spacing: 0.5rem;
	}

	& > span {
		align-self: flex-end;
		margin-bottom: 2rem;
		color: #474747;

		svg {
			font-size: 2.4rem;
			font-weight: 300;
		}
	}

	& > div {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;

		span {
			font-weight: 300;
			text-align: center;
		}

		span:first-child {
			margin-bottom: 2.5rem;
			font-size: 3.2rem;
			line-height: 4rem;
			font-weight: 400;
		}
	}
`;

export const StatusIconContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 12rem;
	height: 12rem;
	margin-bottom: 2rem;

	img {
		width: 100%;
		object-fit: contain;
	}
`;

export const predicatedTemperatureContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-bottom: 2rem;
	gap: 2rem;

	@media screen and (min-width: 769px) {
		grid-template-columns: repeat(4, 1fr);
		max-width: 50rem;
	}
`;

export const WeatherTemperatureContainer = styled(
	predicatedTemperatureContainer
)`
	div + div:after {
		position: absolute;
		content: "";
		width: 1px;
		height: 22px;
		top: 12px;
		left: -11px;
		background: #565656;
	}
`;

export const WeatherTemperatureItem = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1.2rem;

	h5 {
		font-weight: 300;
		font-size: 1.4rem;
		line-height: 1.8rem;
		letter-spacing: 0.15rem;
		color: #3d3d3d;
	}

	span {
		font-weight: 300;
		font-size: 1.6rem;
		line-height: 2rem;
	}
`;
