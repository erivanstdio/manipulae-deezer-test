import { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
		const appId = '499262';
		const redirectUri = 'http://localhost:3000/tracks';
		const deezerOAuthUrl = `https://connect.deezer.com/oauth/auth.php?app_id=${appId}&redirect_uri=${redirectUri}&perms=basic_access,email&response_type=token`;

		window.location.replace(deezerOAuthUrl);
	}, []);

	return <div>carregando...</div>;
};

export default Home;
