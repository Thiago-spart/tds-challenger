import { FC } from "react"
import * as S from "./TimeZoneCard.styled"
import { TimeZoneCardProps } from "./TimeZoneCard.types"

export const TimeZoneCard: FC<TimeZoneCardProps> = ({ temperatureVersion, predicatedStatusIconUrl, predicatedTemperature, timeZoneType, predicatedStatusIconAlt }) => {

	return (
		<S.Container>
			<h5>{timeZoneType}</h5>
			<div>
				<img src={predicatedStatusIconUrl} alt={predicatedStatusIconAlt} />
			</div>
			<span aria-details="predicated temperature">
				{predicatedTemperature} {temperatureVersion === "celsius" ? "C" : "F"}°
			</span>
		</S.Container>
	)
}
