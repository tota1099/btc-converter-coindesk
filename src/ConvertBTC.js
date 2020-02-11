/* eslint-disable no-console */
const chalk = require('chalk');
const ora = require('ora');
const request = require('request-promise-native');

const spinner = ora({
  text: 'Retrieving Bitcoin data...',
  color: 'yellow',
});

function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`;

  spinner.start();

  return request(url)
    .then((body) => {
      spinner.stop();
      return body;
    })
    .then((body) => {
      const apiResponse = JSON.parse(body);
      const price = parseFloat(apiResponse.bpi[currency].rate_float).toFixed(2) * amount;
      console.info(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(price)}`);
    })
    .catch((err) => {
      spinner.stop();
      console.info(chalk.red('Something wen wrong in the API. Try in a few minutes.'));
      return err;
    });
}

module.exports = convertBTC;
/* eslint-enable no-console */
