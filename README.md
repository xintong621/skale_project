## Table of Contents

- [What is ButlerDelivery?](#what-is-butlerdelivery)
- [Roadmap](#roadmap)
- [Prequisites](#prequisites)
  - [Requirements](#requirements)
  - [Tools](#tools)
- [The Stack](#the-stack)
- [Setup](#setup)
  - [Get Started](#get-started)
  - [iOS-Specific Steps](#ios-specific-steps)
  - [Android-Specific Steps](#android-specific-steps)
  - [Best Practices](#best-practices)
- [Readme Todos](#readme-todos)
- [Notes](#notes)
  - [Why not using Expo(With Ejecting)?](#why-not-using-expo-with-ejecting)
  - [Why using react-native 0.55.4 (Not the up-to-date version)?](#)

## What is ButlerDelivery?
.....

## Roadmap
......

## Prequisites

### Requirements

Since we do not have a provisioned development environment, you'll need to install the following tools manually on your OS. You should be able to work on any OS, but so far only Windows and OSX have been tested.

* [NodeJS](https://nodejs.org/en/). Any newer version should work, but I am working on `10.11.0`. I highly recommend using [NVM](https://github.com/creationix/nvm) to install NodeJS as it allows you to easily work with multiple versions of NodeJS on the same machine. 
* [Yarn](yarnpkg.com/en/docs/install). We'll be using `yarn` instead of `npm` to manage our depedencies.

That's it! Everything else is installed via `yarn`.

### Tools
* Homebrew v1.7.6
* (for Android) an up-to-date Android Studio
* (for Android) Genemotion and an Android device
* (for iOS) an up-to-date copy of Xcode
* (for iOS) an iOS simulator and an iOS device

## The Stack

* React Native CLI 1.2.0
* React Native v0.55.4
* Node.js v10.11.0
* Watchman v4.9.1

## Setup

### Get Startted

Getting started is very easy, just do the following:

1. Open your terminal and `cd` to the project directory
2. Install dependencies by running `yarn install`

### iOS-Specific Steps:
1. Start the iOS simulator by running `react-native run-ios`

### Android-Specific Steps:
1. Open a android virtual device on Genymotion
2. Start the Android simulator by running `react-native run-android`

### Best Practices
(Same as demeter???)...
es-lint/flow...

## Readme Todos
...

## Notes
### Why not using Expo(With Ejecting)?
* Ejecting it to ExpoKit has a trade-off of features of Expo, e.g. you cannot share via QR code
* When ejecting to ExpoKit you are limited to the react native version that is supported by ExpoKit at that point in time
* The standard Hello World app is about 25MB big (because of the integrated libraries)
* Normally Expo SDKs release within 2-3 weeks after a corresponding React Native release.
* [Reference](https://stackoverflow.com/questions/39170622/what-is-the-difference-between-expo-and-react-native/49324689#49324689)

### Why using react-native 0.55.4(Not the up-to-date version)?
* there might be a problem for react-native version higher than 0.56.0 so we need to downgrade the version manually
