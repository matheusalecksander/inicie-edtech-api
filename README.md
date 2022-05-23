## Inicie EDTech JR Backend test

This api was developed to the JR Backend developer test of Inicie EDTech.

It's been developed following TDD, SOLID principles and Clean Architecture

### Project dependencies

  - Express
  - Axios
  - Nodemon
  - Dotenv
  - Docker

#### How to run
To run it localy you'll need have Docker installed.

  > - First clone this repository
  ```
    git clone https://github.com/matheusalecksander/inicie-edtech-api.git

    cd inicie-edtech-api
  ```

  > - Install dependencies (It's needed to run the tests suites)
  ```
    npm install
  ```

  > - After install dependencies run follow command to start docker container
  ```
    npm run up:detached // It will run docker container in detached mode
  ```

  > - Now you can see API on browser
  ```
    access http://localhost:3000/ and you'll see full documentation
  ```

  > - Stoping container
  ```
    npm run down
  ```

  > - Running tests
  ```
    npm run test:cov // To have full test report
  ```
