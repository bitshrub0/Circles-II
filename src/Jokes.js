const jokes = ["That's Numberwang", "Might be contaminated", "Hi Flame", "NOTE: Put joke here", "I like this game", "Support Lizard Panini", "Join the Gwa", 
               "EEEEEEEEEEEEEEEEEEEEEEEE", "quack", "360 258 272", "いいですね。", "Sponsored by KIRIN Milk Tea", "Now with 125% more jokes", "Thanks, Seizure Man", 
               "https://xkcd.com/505/", "*CRASH*", "Damnation", "Why????", "Back in my day pigeons wore TOP HATS and WAISTCOATS", "Watch this space", "Don't do it!", 
               "Mmmmm, delicious", "GO OUTSIDE RIGHT NOW AND TOUCH SOME GRASS", "26925134898", "Press Ctrl+Alt+F4 for free Circle 8", "#freefrench", "~~~Hover~~~", 
               "Ten Watch", "My sandwich!", "Rubik's Cube 18.667", "Sponsored by Integer-Bit Syndrome", "Time signature 5/4", "cheese", "Ahahahahahaha...", "Whooppee!!", 
               "Please take one minute of silence for those who have fallen: thedarklord2317_01247", "The wavefunction will/won't collapse at the third qupip", 
               "Pallid, I combust anguish to invalidate Vietnamese passport control!!", "qwertyuiopasdfghjklzxcvbnm`1234567890-=[];'#\,./¬!£$%^&*()_+{}:@~|<>?", "How dare you!!", 
               "Bee", "Hover for more info", "N+7", "Now with 33% more circles", "HONK", "No Yes Yes No Yes Yes No No Yes What?", "My brain grows weary of these jokes", 
               "Belated and Dated, Better Off Buried", "Numbers!", "Whimsy!", "3<5", "let numbers = 906,150,257"] // it's joke time people
//get random integer
function ranInt(max) {
  return Math.floor(Math.random() * max);
}
function ranInt2(max2) {
  return Math.floor(Math.random() * max2);
}
let jokeVal = jokes[ranInt(jokes.length)] // jokes!
let jokeVal2 = jokes[ranInt2(jokes.length)] // more jokes!
