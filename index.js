function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber > 0) {
    result = 'This one is on me!'
  }
  if (someNumber > 400) {
    result = 'That will be twenty bucks.'
  }
  if (someNumber > 2000) {
    result = 'I will gladly take your thirty bucks.'
  }
  if (someNumber > 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(cityName){
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.'

    }
  



function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
}