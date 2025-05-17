import shell from "shelljs"

export const setWallpaper = async (imagePath) => {
	try {
		const display = process.env.DISPLAY || ":0"
    const dbus = process.env.DBUS_SESSION_BUS_ADDRESS || `unix:path=/run/user/${process.getuid()}/bus`

    const setCommand = (key) =>
      `DISPLAY=${display} DBUS_SESSION_BUS_ADDRESS=${dbus} gsettings set org.gnome.desktop.background ${key} "file://${imagePath}"`

    const result1 = shell.exec(setCommand("picture-uri")).code
    const result2 = shell.exec(setCommand("picture-uri-dark")).code

		if (result1 === 0 && result2 === 0) {
			console.log("[OK] New wallpaper set successfully")
		}


	} catch (error) {
		console.error("[ERROR] Set wallpaper failed:", error)
	}
}