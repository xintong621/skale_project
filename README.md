## Table of Contents

- [What is ButlerDelivery?](#what-is-ButlerDelivery)
- [Roadmap](#roadmap)
- [Prequisites](#prequisites)
- [The Stack](#the-stack)
- [Setup](#setup)
  - [Requirements](#requirements)
  - [Get Started](#get-started)
  - [Best Practices](#best-practices)
- [Readme Todos](#readme-todos)

## What is ButlerDelivery?

.....

## Roadmap
......

## Prequisites

* Homebrew v1.7.6
* (for Android) an up-to-date Android Studio
* (for Android) Genemotion and an Android device
* (for iOS) an up-to-date copy of Xcode (is xcode mac only???)
* (for iOS) an iOS simulator and an iOS device


## The Stack

* React Native CLI 1.2.0
* React Native v0.55.4 (there might be a problem for react-native version higher than 0.56.0 so we need to downgrade the version manually)
* Node.js v10.11.0
* Watchman v4.9.1

## Setup

### Requirements

Since we do not have a provisioned development environment, you'll need to install the following tools manually on your OS. You should be able to work on any OS, but so far only Windows and OSX have been tested.

* [NodeJS](https://nodejs.org/en/). Any newer version should work, but I am working on `10.8.0`. I highly recommend using [NVM](https://github.com/creationix/nvm) to install NodeJS as it allows you to easily work with multiple versions of NodeJS on the same machine. 
* [Yarn](yarnpkg.com/en/docs/install). We'll be using `yarn` instead of `npm` to manage our depedencies.

That's it! Everything else is installed via `yarn`.

### Get Startted

Getting started is very easy, just do the following:

1. Open your terminal and `cd` to the project directory
2. Install dependencies by running `yarn install`
3. Start the development server by running `yarn start`

Your browser should automatically open up to http://localhost:3000 and you should see the Demeter app. Now, any changes made to your files will automatically be reflected on the page (without reloading)! 

Before you start coding you should configure `git` to only work with `lf` line breaks. This should help remove cross-platform inconsistencies. Windows users will need to configure their IDE to only use `lf` instead of `crlf` (almost all major IDEs support this). Note: These changes only apply to this repo and won't affect other git projects on your computer.

1. `git config core.autocrlf input`
2. `git config core.eol lf`

Technically you are ready to start coding, but before you do, take a look at the [best practices](#best-practices) for guidelines/tools we will use to build and manage our application.

### Best Practices(same as demeter???)

#### ESLint

To help ensure the usage of consistent and best practices by the entire team, we will be utilizing ESLint. You can see our ESLint configuration by look at `.eslintrc` where you can see that we are basically just extending the [Airbnb ESLint Config](https://www.npmjs.com/package/eslint-config-airbnb). No one should modify this config file without consent of the Webmaster as changes to this file affect the entire team.

You can ensure your code is compliant with our ESLint config in two ways:

1. Check the code on an ad-hoc basic by running `yarn run eslint .`
2. Configure your IDE to show live ESLint warning/errors. The setup should be minimal but varies depending on your IDE. You will likely need to install an ESLint plugin and adjust some settings. (TODO: add IDE specific setup instructions)

You should go with #2 as #1 will automaticallly be ran before a push to our repo. Any pushes with errors will be denied.

### Flow

We will be using [Flow](https://flow.org/en/docs/react/) to provide static type checking for our application. You can see our configuration in `.flowconfig` which is currently empty as we're using defaults. No changes should be made without approval from the Webmaster. Here's the basic flow commands:

* `yarn run flow` will start a background server and check your code for issues. It will take longer to run on the first try as it processes all files, but it will continually monitor your files afterwards. You can run the command again to keep checking for errors.
* `yarn run flow stop` will kill the background server. You should run this when you're done coding fo the day.

`yarn run flow` will automatically be ran when pushing to our repo. Any warning/errors will cause the push to be rejected.

Note: You can catch your Flow warnings/errors much quicker if you install the proper plugin for your IDE, rather than relying on the command line and/or pre-commit hook.


## Readme Todos

