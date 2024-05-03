# Frontend code exercise

Hello there!

If you're reading this, it means you're now at the coding exercise step of the engineering hiring process WOOT WOOT. We're really happy that you made it here and super appreciative of your time!

In this exercise you're asked to implement some features in an existing React app, using whatever extra tools you want.

If you have any questions, don't hesitate to reach out directly to code_exercise@remote.com.

## Expectations

- It should be production-ready code - the code will show us how you ship things to production and be a mirror of your craft.
- Take whatever time you need - we won’t look at start/end dates, you have a life besides this and we respect that! Moreover, if there is something you had to leave incomplete or there is a better solution you would implement but couldn’t due to personal time constraints, please try to walk us through your thought process or any missing parts, using the “Implementation Details” section below.

## About the challenge

This challenge is divided into 2 parts:

1. **🚀 Feature implementation** in an existing React project (this one).
2. **👀 Code Review** another feature in a PR of this project.

### 🚀 1. Feature implementation

This is a basic CRUD of people. You'll need to finish the "People list" page:

- Display a table with a list of people and their attributes.
- Searching by name.
- Filtering by employment type.
- Display any other missing element in the page as in the Figma file.

The design specs are in the Figma file shared with you by e-mail. You only need to implement what's in the "People Part 1" section. Read the "sticky notes" that contain more requirements about the page mechanisms.
You do not need to implement what's in the "Part 2". That's used for the Code Review.

#### What we will look at

- How you work with HTML, CSS, JavaScript in a React app
- How you reproduce the provided design
- How you structure your codebase and how well it reads
- How well it works and how accessible it is
- How you write automated tests

#### What you can use

You can use any extra tools you need to accomplish this task. We want to respect your time and there's no need to reinvent the wheel.

Approach this task as a real-life feature where you code would reach production once it's merged.

The project does not include any type system. If you prefer, you can add it as an extra point. This is totally optional.

#### What you cannot use

- A CSS library like Bootstrap, etc. - we're interested in how you structure your CSS code to achieve something.

### 👀 2. Code Review

There's an open Pull Request called "Remove a team member" (`delete-person` branch).

This PR implements the feature of deleting a team member. Imagine that this was done by one of your teammates, who is a junior, and you are tasked with reviewing their code.

Your goal is to:

- Verify the feature is working as expected
- Point out code smells, poor practices or bugs
- Give suggestions on how to approach something better

Note: do not take the choices on tools/approaches used in this PR as guidance when doing the part 1 of the exercise. It’s likely, and totally okay, if the tools/approaches are different.

### 🏁 When you're done

- Open a Pull Request with your feature in this repo and send the link to code_exercise@remote.com.
- In the PR description, explain any decision you made that may be relevant. You can also change this README to fit your needs.
- We also appreciate any feedback about this exercise. Was it too short/big? Boring? Let us know!

---

# The project

## Prerequisites

- Node = 18.x
- NPM >= 9.x
- Git

## Node version

To successfully run the project, you'll need to ensure you have Node.js version 16.x installed. If you currently have a different Node.js version installed on your local system, you can make use of [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) to temporarily install the required Node.js version specifically for this project.

## Getting started

1. Clone the project repository
2. Install the dependencies `npm install`
3. Create your local env file `cp .env.example .env`

## About the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [JSON server](https://github.com/typicode/json-server) will give you a fake but realistic REST API using the static `src/server/db.json` file created after running `npm install`. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to `db.json`.

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Tests with React Testing Library

### Project structure

```bash
src/
  components # Components to be used across the application.
  config # General config files to be used across the application.
  hooks # General hooks to be used across the application.
  lib # Storing application-specific files that are used globally.
  pages # One folder for each page in your application.
  server # The fake API mentioned above.
  services # Business layer related to the underlying infrastructure of the application.
  test # Data mocks and utilities to be used across the tests.
  theme # Some base styles used across the project.
  utils # Storing all utility functions such as formatters.
```

Once again, you have **total freedom to modify** this codebase and use whatever tools you want.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4002 - [http://localhost:4002](http://localhost:4002).

### `npm test`

Launches the test runner in the interactive watch mode.\
Read the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

## Available endpoints

- `GET http://localhost:4002/people`: get the full list of people
- `GET http://localhost:4002/people?name_like={substring}`: search for people where the name includes `{substring}`
- `GET http://localhost:4002/people?employment={string}`: search for people where the employment type matches `string`
- `GET http://localhost:4002/people?name_like={substring}&employment={string}`: search for people by name and employment type
- `GET http://localhost:4002/people/{id}`: get the person with id `{id}`
- `POST http://localhost:4002/people`: create a new person
- `PATCH http://localhost:4002/people/{id}`: update the person with id `{id}`
- `DELETE http://localhost:4002/people/{id}`: delete the person with id `{id}`
