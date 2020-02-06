const request = require('request');

function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  request(url, (error, response, body) => {
    const apiResponse = JSON.parse(body);
    /* eslint-disable no-console */
    console.log(`${amount} BTC to ${currency} = ${apiResponse.price}`);
    /* eslint-enable no-console */
  });
}

module.exports = convertBTC;
