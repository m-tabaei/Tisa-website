const Jimp = require("jimp");
const fs = require("fs");
const path = require("path");

const sourceIcon = path.join(process.cwd(), "public", "logo.png");
const sizes = [
  { name: "icon", size: 32 },
  { name: "icon-192", size: 192 },
  { name: "icon-512", size: 512 },
  { name: "apple-icon", size: 180 },
  { name: "favicon", size: 16 },
];

async function generateIcons() {
  try {
    // Check if source icon exists
    if (!fs.existsSync(sourceIcon)) {
      console.error(
        "Source icon not found. Please place logo.png in the public directory."
      );
      return;
    }

    // Read the source image
    const image = await Jimp.read(sourceIcon);

    // Generate icons for each size
    for (const { name, size } of sizes) {
      const outputPath = path.join(process.cwd(), "public", `${name}.png`);

      await image.clone().resize(size, size).writeAsync(outputPath);

      console.log(`Generated ${name}.png (${size}x${size})`);
    }
  } catch (error) {
    console.error("Error generating icons:", error);
  }
}

generateIcons();
