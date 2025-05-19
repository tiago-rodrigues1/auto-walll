
import axios from "axios"

import { config } from "../config.js"

const getRandomNumberInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getThemeQuery = () => {
	if (config.THEMES) {
		const themeIndex = getRandomNumberInRange(0, (config.THEMES.length - 1))
		const theme = config.THEMES[themeIndex]

		return `&query=${theme}`
	}

	return ""
}

export const getImage = async () => {
	try {
		const themeQuery = getThemeQuery()
		const url = `https://api.unsplash.com/photos/random/?client_id=${config.API_KEY}&orientation=landscape${themeQuery}`
		const response = await axios.get(url)

		if (response.status === 200) {
			console.log(`[OK] Image retrieved successfully ${themeQuery}`)

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