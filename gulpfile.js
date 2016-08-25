const gulp = require('gulp');
const git = require('gulp-git');
const args = require('yargs');


// -------------------------- Tasks Set Up ----------------------------//
gulp.task('bump', () => {
  const packageJson = require('./package.json');

  console.log(packageJson.version);
});

// -------------------------- Git Add ----------------------------//

gulp.task('add', () => {
  console.log('Adding New Version: \n');
  return gulp.src('./git-test/*')
    .pipe(git.add({ args: ' -A' }));
});

// -------------------------- Git Commit/Tag ----------------------------//

gulp.task('tag', ['commit'], () => {
  console.log('Commiting & Tagging Version: \n');
  git.tag('v1.8.0', 'Version Message', (err) => {
    if (err) throw err;
  });
});

// -------------------------- Git Push ----------------------------//

gulp.task('push', () => {
  console.log('Pushing New Version: \n');
  git.push('github', 'gulptask', (err) => {
    if (err) throw err;
  });
});

// -------------------------- Git Push & Tagging ----------------------------//

gulp.task('push-tag', ['push'], () => {
  console.log('Pushing-Tagged Version: \n');
  git.push('github', 'gulptask', { args: ' --tags' }, (err) => {
    if (err) throw err;
  });
});

// -------------------------- Git Pushed Finalized ----------------------------//

gulp.task('default', ['add', 'commit', 'tag', 'push', 'push-tag'], () => {
  console.log('Push Test Sucessful');
});
