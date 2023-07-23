import axios from "axios";

export const fetcher = async (url: string) => {
	try {
		const response = await axios.get(url);
		return response.data; // Return the data from the response
	} catch (error) {
		throw new Error("Failed to fetch data"); // Throw an error if the request fails
	}
};
