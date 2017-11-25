# Ringa JS Component Template

This component template can be used as a foundation for a Ringa library.

# Setup

* Node 8.7.0 (recommended)
* Webpack 3.8.1
* React 16.1.0
* Ringa 0.2.1
* Ringa React Framework 0.2.2
* Babel Transpiling from ES6 to ES5
* Development (hot reloading) and Production (uglified) Builds

# Building Components

To build a new component, you would put them somewhere in `src` and then export them via the `src/index.js` file. When the final
artifact is built (see below for instructions) all these components will be available in your library.

# Installing

`npm install`

# Development Harness (development and demonstration only)

Run the development harness for a live-update Webpack development server to test out your library components as you build them.

`npm run start` or `npm run dev`

# Test Production Harness Build (development and demonstration only)

To test the uglified harness production build (to make sure the uglified code does not break), run:

`npm run build:harness:test`

# Test Production Harness Build (development and demonstration only)

To build the harness for deployment to demonstrate your library to others:

`npm run build:harness`

# Build Final Production Distribution JS Artifact

Build an uglified fully packaged production build that is ready to go:

`npm run build`

# Analyze Production Distribution JS Artifact

If you want to analyze the uglified size of your final production artifact, you can run:

`npm run build:analyze`

**Note that building production build minifies the Javascript. Ringa JS needs to have its mangle whitelist updated or else your production build will break.**

To edit the mangle list, find it in `config/ugligyWhitelist.json`. See [Preparing for Production](http://ringajs.com/architecture/dependencyInjection/#17-preparing-for-production-uglify) for more information.

# Releasing to NPM and Tagging in GitHub

To run the build (and any Jest test you have) and to release the code to NPM, run:

`npm run release:patch`
`npm run release:minor`
`npm run release:major`

Note that your working directory needs to be cleaned in order to publish so you'll need to run
a build manually yourself first and make sure to push that stuff up to Github first.

License
=======

The MIT License (MIT)

Copyright (c) 2017 Joshua Jung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.