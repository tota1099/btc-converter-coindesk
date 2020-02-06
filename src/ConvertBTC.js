/* eslint-disable no-console */
const request = require('request');

function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  request(url, (error, response, body) => {
    let apiResponse;

    try {
      apiResponse = JSON.parse(body);
    } catch (parseError) {
      console.log('Something wen wrong in the API. Try in a few minutes.');
      return parseError;
    }
    console.log(`${amount} BTC to ${currency} = ${apiResponse.price}`);
    return true;
  });
}

module.exports = convertBTC;
/* eslint-enable no-console */
