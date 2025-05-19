import { getImage } from "./utils/get-image.js"
import { downloadImage } from "./utils/download-image.js"
import { setWallpaper } from "./utils/set-wallpaper.js"

async function main() {
	console.log("Welcome to AutoWall. Starting pipeline...")

	const image = await getImage()
	const downloadPath = await downloadImage(image)
	
	setWallpaper(downloadPath)

	console.log("End of pipeline. Enjoy your new wallpaper :)")
}

main()