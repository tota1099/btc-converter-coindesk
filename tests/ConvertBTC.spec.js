const nock = require("nock");
const chalk = require("chalk");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;

chai.use(sinonChai);

const convertBTC = require("../src/ConvertBTC");

describe("ConvertBTC", () => {
  let consoleStub;

  const responseMock = {
    bpi: {
      USD: {
        code: "USD",
        rate: "9,879.8175",
        description: "United States Dollar",
        rate_float: 9879.8275
      },
      BRL: {
        code: "BRL",
        rate: "42,637.3394",
        description: "Brazilian Real",
        rate_float: 42637.3394
      }
    }
  };

  beforeEach(() => {
    consoleStub = sinon.stub(console, "info");
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it("should use currency USD and 1 as amount default", async () => {
    nock("https://api.coindesk.com")
      .get(`/v1/bpi/currentprice/USD.json`)
      .reply(200, responseMock);

    await convertBTC();

    expect(consoleStub).to.have.been.calledWith(
      `${chalk.red(1)} BTC to ${chalk.cyan("USD")} = ${chalk.yellow(9879.83)}`
    );
  });

  it("should use currency USD and 10 as amount", async () => {
    nock("https://api.coindesk.com")
      .get(`/v1/bpi/currentprice/USD.json`)
      .reply(200, responseMock);

    await convertBTC("USD", 10);

    expect(consoleStub).to.have.been.calledWith(
      `${chalk.red(10)} BTC to ${chalk.cyan("USD")} = ${chalk.yellow(98798.3)}`
    );
  });

  it("should use currency BRL and 1 as amount", async () => {
    nock("https://api.coindesk.com")
      .get(`/v1/bpi/currentprice/BRL.json`)
      .reply(200, responseMock);

    await convertBTC("BRL");

    expect(consoleStub).to.have.been.calledWith(
      `${chalk.red(1)} BTC to ${chalk.cyan("BRL")} = ${chalk.yellow(42637.34)}`
    );
  });

  it("should message user when api reply with error", async () => {
    nock("https://api.coindesk.com")
      .get(`/v1/bpi/currentprice/BRL.json`)
      .query({ from: "BTC", to: "BRL", amount: 1 })
      .replyWithError("Error");

    await convertBTC("BRL");

    expect(consoleStub).to.have.been.calledWith(
      chalk.red(`Something wen wrong in the API. Try in a few minutes.`)
    );
  });
});
