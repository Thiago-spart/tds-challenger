export interface TimeZoneCardProps {
	timeZoneType: "afternoon" | "dawn" | "morning" | "night";
	predicatedTemperature: string;
	predicatedStatusIconUrl: string;
	predicatedStatusIconAlt: string;
	temperatureVersion: "celsius" | "fahrenheit";
}
