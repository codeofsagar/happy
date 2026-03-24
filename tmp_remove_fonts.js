const fs = require('fs');
const path = require('path');

const dir = path.join('app', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const unwantedClasses = /\b(font-black|font-bold|font-semibold|font-medium|italic)\b/g;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (unwantedClasses.test(content)) {
    content = content.replace(unwantedClasses, '');
    
    // clean up any double spaces in class names
    content = content.replace(/className="([^"]+)"/g, (match, classes) => {
        return `className="${classes.replace(/\s+/g, ' ').trim()}"`;
    });
    content = content.replace(/className='([^']+)'/g, (match, classes) => {
        return `className='${classes.replace(/\s+/g, ' ').trim()}'`;
    });
    content = content.replace(/className=\{`([^`]+)`\}/g, (match, classes) => {
        return `className={\`${classes.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '')}\`}`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log('Updated font weights in ' + file);
  }
}
