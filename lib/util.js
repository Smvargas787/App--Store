exports.debug = (title, obj, method) => {
  const colors = require('colors');
  const utils = require('util');

  // -------------------------- Time Stamp ----------------------------//

  const moment = require('moment');

  const time = moment().format('ddd, MM/Do/YY, h:mm:ssa');

  const fobj = colors.black('Object: ') + utils.format('%j', obj);

  const timeOutput = colors.black('Timeset: ') + '[ ' + time + ' ]\n';

  const lineSeperator = colors.brown('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');

  const out = lineSeperator + '\t' + title + lineSeperator;

  // -------------------------- DEBUG==TRUE ----------------------------//



};
