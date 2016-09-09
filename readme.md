# Package definition and configuration files

1. package.json lists packages the QuickStart app depends on and defines some useful scripts
2. tsconfig.json is the TypeScript compiler configuration file
3. typings.json identifies TypeScript definition files
4. systemjs.config.js, the SystemJS configuration file

# Install packages
Install the packages listed in package.json using npm. Enter the following command in a terminal window (command window in Windows):
    npm install

The typings folder could not show up after npm install. If so, please install them manually.
    npm run typings install

# Run the application 
Open command promt and CD to project location. From the project location run the below 
npm install
npm start
http://localhost:3000/

# Run the application on Docker
1. Install docker - https://docs.docker.com/docker-for-windows/
2. Open Git Bash
3. verify docker and docker-compose is installed by runnig docker --version and docker-compose --version
4. CD to project physical location
5. Run Build: docker build -f dockerfiles/dev.dockerfile -t neumint-docker .
6. Run docker-compose up -d 
7. Verify http://localhost:3000/
8. To bring the site down run docker-compose down 

Note: docker-compose up -d --build throwing an error currently (sh: 1: tsc: permission denied), need to fix.

# Helpful scripts
package.json file included a number of npm scripts to handle common development tasks. 
We execute most npm scripts in the following way: npm run followed by a script-name. 
Some commands (such as start) don't require the run keyword.

npm start - runs the compiler and a server at the same time, both in "watch mode"

npm run tsc - runs the TypeScript compiler once

npm run tsc:w - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and recompiling when it sees them

npm run lite - runs the lite-server, a light-weight, static file server with excellent support for Angular apps that use routing

npm run typings - runs the typings tool separately

npm run postinstall - called by npm automatically after it successfully completes package installation. This script installs the TypeScript definition files defined in typings.json