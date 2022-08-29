export interface TimeZoneCardProps {
	timeZoneType: "dawn" | "morning" | "afternoon" | "night";
	predicatedTemperature: string;
	predicatedStatusIconUrl: string;
	predicatedStatusIconAlt: string;
}
