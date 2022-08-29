import { AiOutlineArrowLeft } from "react-icons/ai";

import * as S from "./Header.styled";

export const Header = () => {
	return (
		<S.Container>
			<S.BackButton type="button" aria-details="get back to home">
				<AiOutlineArrowLeft />
			</S.BackButton>
		</S.Container>
	);
};
