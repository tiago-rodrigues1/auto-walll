
import axios from "axios"

import { config } from "../config.js"

export const getImage = async () => {
	try {
		const url = `https://api.unsplash.com/photos/random/?client_id=${config.API_KEY}&orientation=landscape&query=space`
		const response = await axios.get(url)

		if (response.status === 200) {
			console.log("[OK] Image retrieved successfully")

			const image = {
				filename: `${response.data.id}.jpg`,
				imageUrl: response.data.links.download
			}

			return image
		}

	} catch (error) {
		console.error("[ERROR] Unable to retrieve image from API:", error)
	}
}