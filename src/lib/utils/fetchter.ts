import axios from "axios";

export const fetcher = async (url: string) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
};
