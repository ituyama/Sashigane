const { execSync } = require('child_process');
const path = require('path');

/**
 * Ad-hoc sign the final .app (not universal merge temps).
 * Avoids CodeResources SHA mismatch when building universal binaries.
 */
exports.default = async function afterPack(context) {
  if (context.electronPlatformName !== 'darwin') return;
  if (context.appOutDir.includes('-temp')) {
    console.log('Skipping ad-hoc sign for universal temp build');
    return;
  }

  const appName = `${context.packager.appInfo.productFilename}.app`;
  const appPath = path.join(context.appOutDir, appName);

  console.log(`Ad-hoc signing ${appPath}`);
  execSync(`codesign --force --deep --sign - "${appPath}"`, { stdio: 'inherit' });
  execSync(`codesign --verify --deep --strict --verbose=2 "${appPath}"`, { stdio: 'inherit' });
};
