const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const lightswindDir = path.join(srcDir, 'components', 'lightswind');

// Get all files recursively in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles;
}

const allSrcFiles = getAllFiles(srcDir);
const lightswindFiles = fs.readdirSync(lightswindDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

// To handle dependencies correctly, we need to iterate until no more files can be removed
let removedCount = 0;
let loop = true;

while (loop) {
  loop = false;
  const currentLightswindFiles = fs.readdirSync(lightswindDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
  
  for (const compFile of currentLightswindFiles) {
    const compName = compFile.replace('.tsx', '').replace('.ts', '');
    let isUsed = false;
    
    // We look for imports or usages of this component
    for (const srcFile of allSrcFiles) {
      if (srcFile === path.join(lightswindDir, compFile)) continue; // skip checking itself
      
      const content = fs.readFileSync(srcFile, 'utf8');
      
      // Match exact import filename like "/button" or "/button"
      if (content.includes(`/${compName}"`) || content.includes(`/${compName}'`) || content.includes(`\\${compName}"`)) {
        isUsed = true;
        break;
      }
    }
    
    if (!isUsed) {
      console.log(`Removing unused component: ${compFile}`);
      fs.unlinkSync(path.join(lightswindDir, compFile));
      // Remove it from allSrcFiles so we don't scan it anymore
      const index = allSrcFiles.indexOf(path.join(lightswindDir, compFile));
      if (index > -1) {
        allSrcFiles.splice(index, 1);
      }
      removedCount++;
      loop = true; // since we removed a file, it might make another file unused (e.g. A only used by B, B is removed, now A is unused)
    }
  }
}

console.log(`\nRemoved ${removedCount} unused components.`);
