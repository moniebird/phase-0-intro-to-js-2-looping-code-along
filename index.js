
function writeCards(names, event) {
    const messages =[]
    for (let i = 0; i < names.length; i++) {
    
       messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
   
   return messages;

}

console.log(writeCards(["john", "jerry", "jim"], "birthday"))




function countDown() {
   
   let countDown = 10; 
while (countDown > -1) {
  console.log(countDown--);
}
   
}



   