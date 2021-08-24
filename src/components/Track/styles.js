import styled from 'styled-components';

export const Container = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 4px 8px;
	list-style: none;
	border-bottom: 1px solid #232b38;
	padding-bottom: 4px;
	margin-bottom: 4px;
`;

export const TrackInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > div.meta {
		display: flex;
		flex-direction: column;

		& > p {
			font-size: 17px;
			font-weight: 500;
			margin-bottom: 2px;
			color: #fff;
		}

		& > span {
			font-size: 14px;
			color: #fff;
            font-weight: 400;
			opacity: 0.7;
		}
	}
`;

export const Cover = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 2px;
	object-fit: cover;
	margin-right: 8px;
`;

export const PlayPauseButton = styled.button`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ isPlaying }) => (isPlaying ? '#FFF' : '#0af')};
	border: none;
	cursor: pointer;

	& > svg {
		font-size: 17px;
		color: ${({ isPlaying }) => (isPlaying ? '#0af' : '#FFF')};
	}
`;
