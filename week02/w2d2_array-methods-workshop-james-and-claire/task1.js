const codeCoaches = ["ben", "chris", "liz", "james", "tao", "tim"];

function makeUppercase(arg){ 
    return arg.toUpperCase()
}

// mapto create new list  -  = array.map(makeUppercase)
const capitalisedCodeCoaches = codeCoaches.map(makeUppercase)

console.log(capitalisedCodeCoaches)

 