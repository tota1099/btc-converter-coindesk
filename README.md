# Btc-converter-coindesk

[![Build Status](https://travis-ci.org/tota1099/btc-converter-coindesk.svg?branch=master)](https://travis-ci.org/tota1099/btc-converter-coindesk)
[![Coverage Status](https://coveralls.io/repos/github/tota1099/btc-converter-coindesk/badge.svg?branch=master)](https://coveralls.io/github/tota1099/btc-converter-coindesk?branch=master)

A CLI to convert Bitcoin to any currency provided.

### Installing

```
$ npm i -g btc-converter-coindesk
```

### How to use

```sh
btc-converter-coindesk --help

  Usage: bitcoin-converter-coindesk [options]

  Convert Bitcoin to any currency defined

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -C, --currency <currency>  Currency to be converted. (Default: USD)
    -A, --amount <amount>      Value in Bitcoin to convert. (Default: 1)
```

## Dependencies

This library depends on [node](https://nodejs.org/en/) version 10 or bigger.

## Run tests

```sh
$ npm test
```

## Programming with TDD

```sh
$ npm run test:tdd
```

## Check tests coverage

```sh
$ npm run test:coverage
```

## Add project to terminal

```sh
$ npm run build
$ npm link
```
