const path = require("path");
const fs = require("fs");
module.exports.get = function(iconName) {
	if(!fs.existsSync(path.join(__dirname, "..", "flat-color-icons")))
		throw new Error("Library is non-functional: flat-color-icons package is not installed.");

	let path = path.join(__dirname, "..", "flat-color-icons", "svg", iconName + ".svg");
	if(!fs.existsSync(path))
		path = path.replace(iconName + ".svg", "cancel.svg")
	return new URL(`file:///${path}`).href
}