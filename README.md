# australiangamingleague [![Build Status](https://travis-ci.org/AustralianGamingLeague/australiangamingleague.github.io.svg)](https://travis-ci.org/AustralianGamingLeague/australiangamingleague.github.io)
Gaming, tournaments, learderboards, predictions. 

# Installation
How to install all dependencies required to run this project.

### Node.js
install Node js v0.12.x

### Node Package Manager
`sudo apt-get install npm`

### Bower
`sudo npm install -g bower`

### Checkout repository
`git clone git@github.com:AustralianGamingLeague/australiangamingleague.github.io.git`

### Obtain AGL config file
Obtain the config.json file. This is not stored in source control.
It goes in the root directory of the project.

### Install Bower packages
In project directory `bower install`

### Install node modules
In project directory `npm install`

### MySQL
## Install SQL server
`sudo apt-get install mysql-server`
## Obtain SQL files
`AGLDatabase.sql`
`AGLTables.sql`
`AGLUser.sql`
## Create database
`mysql -u root -p < AGLDatabase.sql`
## Create user
`mysql -u root -p < AGLUser.sql`
## Create tables
`mysql -u root -p AGL_DB < AGLTables.sql`
