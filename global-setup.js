const fs = require('fs-extra');

module.exports = async () => {
  const folderPath = 'screenshots';
  const playwrightReport = 'playwright-report';
  try {
    await fs.emptyDir(folderPath); // Clears all files from screenshots folder
    console.log(`🧹 Cleared '${folderPath}' folder.`);
  } catch (err) {
    console.error(`❌ Error clearing '${folderPath}':`, err);
  }
  try {
    await fs.emptyDir(playwrightReport); // Clears all files from playwrightReport folder
    console.log(`🧹 Cleared '${playwrightReport}' folder.`);
  } catch (err) {
    console.error(`❌ Error clearing '${playwrightReport}':`, err);
  }

} 