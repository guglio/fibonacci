# Fibonacci sequence calculator

The scope of this web application is to get from the user an integer as input, and calculate the nth number on the Fibonacci sequence.

The sequence F(n) of Fibonacci numbers is defined by the recurrence relation:

F(n) = F(n-1) + F(n-2)

with seed values

F(1) = 1, F(2) = 1

or

F(0) = 0, F(1) = 1

More information here: [https://en.wikipedia.org/wiki/Fibonacci_number](https://en.wikipedia.org/wiki/Fibonacci_number)

You can see a running version of this web application here:   
    [https://guglio.github.io/fibonacci/](https://guglio.github.io/fibonacci/)


## Structure of the application


```ANSI
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── __tests__
    │   ├── App.test.js
    │   ├── Fibonacci.test.js
    │   ├── FibonacciNth.test.js
    │   ├── Footer.test.js
    │   ├── Header.test.js
    │   ├── __snapshots__
    │   │   └── App.test.js.snap
    │   └── errors.test.js
    ├── components
    │   ├── App.js
    │   ├── fibonacci
    │   │   ├── Fibonacci.css
    │   │   └── Fibonacci.js
    │   ├── footer
    │   │   ├── Footer.css
    │   │   └── Footer.js
    │   └── header
    │       ├── Header.css
    │       └── Header.js
    ├── containers
    │   └── FibonacciNth.js
    ├── errors
    │   └── index.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── registerServiceWorker.js
    └── setupTests.js
```
Application components tree

```ANSI
index.js
  └── App.js
        ├── Header.js
        ├── Fibonacci.js
        │   ├── FibonacciNth.js
        │   └── errors.js
        └── Footer.js

```

- __index.js__ : render App.js to the document
- __App.js__ : is the wrapper of the application.
- __Header.js__ : shows the title of the application
- __Fibonacci.js__ : main component that gets the input from the user and displays the result of the calculation.<br>
The process of this component is to:
    1. get the user input
    2. test the input
        1. check if the input is a number
        2. check if the input is higher or equal to 2
        3. if test pass continue, otherwise, display an error message
    4. submit the input to the engine
    5. return the nth number of the Fibonacci sequence
    6. display a message to the user ( F(n) = nth )


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need a local machine with [Node.js](https://nodejs.org/en/) installed and [npm](https://www.npmjs.com/) to install the required packages

### Installing

To install this project, you need to clone or download the repository (more info [here](https://help.github.com/articles/cloning-a-repository/) on how to clone with different platforms):

__MacOS__

Open terminal and type:
```shell
git clone https://github.com/guglio/fibonacci.git
```

## Running the application

To start the development environment, open terminal and type:
```shell
npm start
```
Then open the browser and type in the address bar [`http://localhost:3000/`](http://localhost:3000/)

## Testing the application

```ANSI
.
└── src
    ├── __tests__
    │   ├── App.test.js
    │   ├── Fibonacci.test.js
    │   ├── FibonacciNth.test.js
    │   ├── Footer.test.js
    │   ├── Header.test.js
    │   ├── __snapshots__
    │   │   └── App.test.js.snap
    │   └── errors.test.js
    .
```
All the tests created are in this folder (`/src/__tests__`).<br>
Every file contains the corresponding file's test<br>
ex. `Header.test.js` hold the tests for `Header.js`

The `__snapshots__` folder contains the snapshot of the application.<br>
For more information on snapshot testing, here is the official documentation<br>
[Snapshot Testing with Jest](https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest)

To run the tests, open terminal and type:
```shell
npm test
```
## Create a production version

When you're ready to deploy to production, open terminal and type:
```shell
npm run build
```
will create an optimized build of your app in the build folder.

## Deploy the application to GitHub Pages

To deploy the application to GitHub Pages, I used the following guide.
### [GitHub Pages](https://pages.github.com/)

>Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field for your project:

```json
  "homepage": "https://myusername.github.io/my-app",
```

or for a GitHub user page:

```json
  "homepage": "https://myusername.github.io",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app](https://myusername.github.io/my-app), run:

```sh
npm install --save gh-pages
```

Alternatively you may use `yarn`:

```sh
yarn add gh-pages
```

Add the following scripts in your `package.json`:

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

The `predeploy` script will run automatically before `deploy` is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make two
additional modifications:

1. First, change your repository's source branch to be any branch other than **master**.
1. Additionally, tweak your `package.json` scripts to push deployments to **master**:
```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">

#### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://reacttraining.com/react-router/web/api/Router) about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).

#### Troubleshooting

##### "/dev/tty: No such a device or address"

If, when deploying, you get `/dev/tty: No such a device or address` or a similar error, try the follwing:

1. Create a new [Personal Access Token](https://github.com/settings/tokens)
2. `git remote set-url origin https://<user>:<token>@github.com/<user>/<repo>` .
3. Try `npm run deploy again`

#### Additiona information on deployment
Additional information on how to deploy to different platforms are available here: [https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)

## Built With

* [React](https://facebook.github.io/react/) - The heart of the web application
* [math.js](http://mathjs.org/) - math library to handle big numbers
* [npm](https://www.npmjs.com/) - Package manager
* [Atom](https://atom.io/) - text editor
* [gh-pages](https://github.com/tschaub/gh-pages) - deploy this application to GitHub

## Tested With

* [Jest](https://jestjs.io/) - Javascript unit testing framework
* [Enzyme](http://airbnb.io/enzyme/) - JavaScript Testing utility for React.
* [enzyme-adapter-react-16](http://airbnb.io/enzyme/docs/installation/react-16.html) - adapter for React 16

## Versioning

I use git for versioning.

## Author

[Guglielmo Turco](https://github.com/guglio)
