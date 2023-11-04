import axios from 'axios';

const get = async (url: string) => {
	const { data } = await axios.get(url);
	return data;
}

export default { get };