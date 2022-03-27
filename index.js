function saturdayFun(activity='roller-skate') {
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(adjective1="*"){ 
    return function (adjective2="special") {
            return `You are ${adjective1}${adjective2}${adjective1}!`
    }
}