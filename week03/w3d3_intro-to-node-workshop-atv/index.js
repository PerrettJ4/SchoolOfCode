const {myCollection} = require("./collection")
const chalk = require('chalk');

function describeCollection(myCollection) {
        console.log(chalk.bgBlack(chalk.greenBright(`I have a fruit collection. Here is what I like about it: ${myCollection.whatILike}. I have ${myCollection.fruit.map(item => " "+ chalk.cyan(myCollection.count) +" " + chalk.cyan(item))}`)));
}

describeCollection(myCollection[0])
