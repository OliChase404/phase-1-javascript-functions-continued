
function saturdayFun(act = `roller-skate`) {
    return `This Saturday, I want to ${act}!`
}

(function () {
    console.log("Yet more razzling");
  });
  
  function mondayWork (act = `go to the office`) {
    return `This Monday, I will ${act}.`
  }



  function wrapAdjective(x = `*`) {
    return function inner(str) {
      return (`You are ${x + str + x}!`)
    }
  }


  // function outer(greeting, msg = "It's a fine day to learn") {
  //   const innerFunction = function (name, lang = "Python") {
  //     return `${greeting}, ${name}! ${msg} ${lang}`;
  //   };
  //   return innerFunction;
  // }
  
  // console.log(outer("Hello")("student", "JavaScript"))