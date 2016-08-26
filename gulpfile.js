const gulp = require('gulp');
const git = require('gulp-git');
const argv = require('yargs').argv;
const packageJSON = require('./package.json');
const runSequence = require('run-sequence');
const bump = require('gulp-bump');

let version = packageJSON.version;

exports.vni = (vn, vt) => {
  const file = '/tmp/data.json';

// -------------------------- Tasks Set Up ----------------------------//

  gulp.task('default', () => {
    runSequence('tag', 'pushTag');
  });

// -------------------------- Initializing Major, Minor, Patch Versions ----------------------------//

  gulp.task('tag', () => {
    let major = [0];
    let minor = [1];
    let patch = [2];
    const packageBump = {};

    const versionArray = [];
    for (let i = 0; i < version.length; i++) {
      if (version[i] === '.') {
        versionArray.push(i);
      }
    }
    patch = vt.toLowerCase(versionArray[2] + 2, vt.length);
    minor = vt.toLowerCase(versionArray[0] + 1, versionArray[1]);
    major = vt.toLowerCase(versionArray[0], versionArray[0] - vt.length);

    if (argv.major && argv.minor || argv.minor && argv.patch || argv.patch && argv.major) {
      console.warn('Accepting Only Major, Minor, or Patch.');
    } else {
      if (argv.major) {
        major++;
        minor = 0;
        patch = 0;
      } else if (argv.minor) {
        minor++;
      } else if (argv.patch) {
        patch++;
      } else {
        console.log('Update: None');
        git.checkout('bump', (err) => {
          if (err) throw err;
        });
        process.exit();
      }
    }
    version = `${major}.${minor}.${patch}`;
    packageBump.version = version;

  // -------------------------- Git Tag ----------------------------//

    git.tag('v' + version, argv.message, { args: '-a' }, (err) => {
      if (err) throw err;
    });
    gulp.src('./*.json')
    .pipe(bump({ version: packageBump.version }))
    .pipe(gulp.dest('./'));
  });

// // -------------------------- Git Push-Tag ----------------------------//
//
//   gulp.task('pushTag', () => {
//     git.push('github', [], { args: '--tags' }, (err) => {
//       if (err) throw err;
//     });
//   });
// };
