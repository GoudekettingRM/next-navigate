const { exec } = require('child_process');
const { watch } = require('chokidar');

// Set the command to run on file changes
const buildCommand = 'npm run build';

// Create a watcher for your entire project
const watcher = watch('./', {
  ignored: /node_modules|dist/,
  persistent: true,
  ignoreInitial: true,
});

// Trigger the build command on file changes
watcher.on('all', (event, path) => {
  console.log(`File ${path} has been ${event}`);
  exec(buildCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
    }
    console.log(stdout);
    console.error(stderr);
  });
});

console.log('Watching for changes...');

// Handle Ctrl+C to gracefully exit
process.on('SIGINT', () => {
  console.log('Stopping the watcher.');
  watcher.close();
  process.exit(0);
});
