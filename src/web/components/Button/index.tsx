import type { ButtonProps } from "./types";

import * as S from "./styled";

export const Button: React.FC<ButtonProps> = ({
	children,
	schema = "primary",
	...rest
}) => {
	return (
		<S.ButtonStyle schema={schema} {...rest}>
			{children}
		</S.ButtonStyle>
	);
};
