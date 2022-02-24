let person = {
    firstName: "Robert",
    lastName: "Kaley",
    isBootcamper: false,
  };

  person.isBootcamper = true;

  let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

  communication.payload.message.priority = "NOT-URGENT!"
  var comms = communication.payload.message.priority


  if(comms != "URGENT") {
    alert("you suk! you message is " + comms)
  } else {
    console.log(`This is ${comms}`)
  }