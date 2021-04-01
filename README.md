# Automated Login Script

The script runs a script to test the following specifications:
- Amazon login page  
- Whether user has successfully logged into amazon account

The project uses Node library [Puppeteer](https://devdocs.io/puppeteer/) and runs test cased on [Gauge](https://docs.gauge.org/overview.html?os=linux&language=javascript&ide=vscode).

## Prerequisites 

Before you begin, please ensure you have the following setup in your system as per environment of your choice
- Node.js @v12.x - [NVM Installation](https://gist.github.com/d2s/372b5943bce17b964a79)
- Package manager -  [Yarn](https://classic.yarnpkg.com/en/)

## Installation

To run this project, clone the repository, open the directory and run the following commands:

```
$ yarn
$ yarn test

```

## Run the application

```
$ yarn test

```

### Gauge commands to run tests  -

To run single specs 

```
gauge run <filename>

```

To run all specs serially

```
gauge run specs/

```

To run all the specs in parallel

```
gauge run -p specs/

```
