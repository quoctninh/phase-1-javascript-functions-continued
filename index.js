function saturdayFun(activity1 = "roller-skate", activity2 = "bathe my dog"){
    return `This Saturday, I want to ${activity1}!`
}

function mondayWork(activity2 = "go to the office"){
    return `This Monday, I will ${activity2}.`
}

function wrapAdjective(tags = '*'){
   return function(name='special') {
       return `You are ${tags}${name}${tags}!`
   }

}

