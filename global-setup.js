const fs = require('fs-extra');

module.exports = async () => {
  const folderPath = 'screenshots';
  try {
    await fs.emptyDir(folderPath); // Clears all files from screenshots folder
    console.log(`🧹 Cleared '${folderPath}' folder.`);
  } catch (err) {
    console.error(`❌ Error clearing '${folderPath}':`, err);
  }

} 