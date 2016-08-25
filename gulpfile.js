const gulp = require('gulp');
const git = require('gulp-git');
const args = require('yargs');

gulp.task('increase', () => {
  const packageJson = require('./package.json');

  console.log(packageJson.version);
});
