// alert("Hello, everything is connected and working")

const greeter = (name = "Sr.") => {
    console.log("Hello "+name)
  }
  
  greeter("Jeton")
  greeter("Rachel")
  greeter("Tanvi")
  greeter()
  greeter()
  greeter()
  
  const taxCalculator = num => num+num/5
  
  let jetonPaysForMyLunch = taxCalculator(150)
  
  console.log(jetonPaysForMyLunch)
  
  const courseManager = (name, course) => {
    return `Hello ${name}, welcome to the ${course} course`
  }
  
  courseManager("Guillermo", "Javascript")
  courseManager("Martin", "Javascript")
  
  
  const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "firday", "saturday", "sunday"]
  
  daysOfTheWeek.forEach(ele => console.log(ele))
  
  
  
const alarm = () => alert("Hello, everything is connected and working")