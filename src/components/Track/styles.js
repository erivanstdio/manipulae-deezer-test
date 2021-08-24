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

		& > a {
			font-size: 17px;
			font-weight: 500;
			margin-bottom: 2px;
			color: #fff;
			cursor: pointer;
			text-decoration: none;

			&:hover {
				color: #0af;
			}
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
	width: 48px !important;
	height: 48px !important;
	border-radius: 2px;
	object-fit: cover;
	margin-right: 8px;
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
`;

export const FavButton = styled.button`
	border: none;
	background: none;
	outline: none;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 8px;

	& > svg {
		font-size: 19px;
		color: ${({ isFavorited }) => (isFavorited ? '#e21e1e' : '#8e8e8e')};
	}
`;

export const PlayPauseButton = styled.button`
	width: 48px !important;
	height: 48px !important;
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

export const Duration = styled.span`
    font-size: 13px;
    color: #FFF;
    opacity: .6;
    margin-right: 16px;
`;
