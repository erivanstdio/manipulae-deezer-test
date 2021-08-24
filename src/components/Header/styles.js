import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px 0;

	& > a {
		margin: 0 16px;
		text-decoration: none;
		color: #fff;
		font-size: 14px;

		&.selected {
			color: #0af;
		}
	}
`;
