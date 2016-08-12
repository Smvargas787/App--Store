exports.debug = (title, obj, method) => {
  const colors = require('colors');
  const utils = require('util');

  // -------------------------- Time Stamp ----------------------------//

  const moment = require('moment');

  const time = moment().format('ddd, MM/Do/YY, h:mm:ssa');

  const f0bj = colors.black('Object: ') + utils.format('%j', obj);

  const timeOutput = colors.black('Timeset: ') + '[ ' + time + ' ]\n';

  const lineSeperator = colors.brown('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');

  const out = lineSeperator + '\t' + title + lineSeperator;

  // -------------------------- DEBUG==TRUE ----------------------------//

  if (process.env.DEBUG) {
    if (method === 'log') {
      const log = out + colors.green(timeOutput) + f0bj;
      console.log(log);
    } else if (method === 'error') {
      const error = out + colors.maroon(timeOutput) + f0bj;
      console.error(error);
    } else if (method === 'warn') {
      const warn = out + colors.orange(timeOutput) + f0bj;
      console.warn(warn);
    } else {
      console.error(colors.red('Invalid Entry Method!'));
    }
  }
};
