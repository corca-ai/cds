/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// app-router로 마이그레이션하면 제거될 코드입니디.
const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, '..', 'package.json');

fs.readFile(packagePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const packageJson = JSON.parse(data);
  delete packageJson.type;

  fs.writeFile(packagePath, JSON.stringify(packageJson, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('The "type" key has been removed from the package.json file.');
  });
});
