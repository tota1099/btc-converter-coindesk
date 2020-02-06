#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');
var converterBTC = require('./ConvertBTC');

program.version(pkg.version).description('Convert Bitcoin to any currency defined.').option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)').option('-A, --amount <amount>', 'Value in Bictoin to be convert. (Default: 1)').parse(process.argv);

/* eslint-disable no-console */
console.log(converterBTC(program.currency, program.amount));
/* eslint-enable no-console */