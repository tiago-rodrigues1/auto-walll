import axios from "axios"
import fs from "fs"
import path from "path"

import { config } from "../config.js"

export const downloadImage = async ({filename, imageUrl}) => {
	try {
		const outputPath = path.join(config.BASE_DIR, "output")
		fs.mkdirSync(outputPath, { recursive: true })

		const downloadPath = path.join(outputPath, filename)
		const writer = fs.createWriteStream(downloadPath)

		const response = await axios({
			method: "GET",
			url: imageUrl,
			responseType: "stream",
		})

		await new Promise((resolve, reject) => {
			response.data.pipe(writer)
			writer.on("finish", resolve)
			writer.on("error", reject)
		})

		console.log(`[OK] Image downloaded successfully: ${downloadPath}`)

		return downloadPath
	} catch (error) {
		console.error("[ERROR] Image download failed:", error)
	}

}