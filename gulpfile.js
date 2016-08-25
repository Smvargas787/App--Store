const gulp = require('gulp');
const git = require('gulp-git');
const args = require('yargs');


// -------------------------- Tasks Set Up ----------------------------//
gulp.task('increase', () => {
  const packageJson = require('./package.json');

  console.log(packageJson.version);
});

// -------------------------- Git Add ----------------------------//
gulp.task('add', () => {
  console.log('Adding New Version: \n');
  return gulp.src('./git-test/*')
    .pipe(git.add({ args: ' -A' }));
});
