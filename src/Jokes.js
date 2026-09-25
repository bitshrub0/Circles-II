const jokes = ["That's Numberwang", "Might be contaminated", "Hi Flame", "NOTE: Put joke here", "I like this game", "Support Lizard Panini", "Join the Gwa", 
               "EEEEEEEEEEEEEEEEEEEEEEEE", "quack", "360 258 272", "いいですね。", "Sponsored by KIRIN Milk Tea", "Now with 170% more jokes", "Thanks, Seizure Man", 
               "https://xkcd.com/505/", "*CRASH*", "Damnation", "Why????", "Back in my day pigeons wore TOP HATS and WAISTCOATS", "Watch this space", "Don't do it!", 
               "Mmmmm, delicious", "GO OUTSIDE RIGHT NOW AND TOUCH SOME GRASS", "26925134898", "Press Ctrl+Alt+F4 for free Circle 8", "#freefrench", "~~~Hover~~~", 
               "Ten Watch", "My sandwich!", "Rubik's Cube 18.667", "Sponsored by Integer-Bit Syndrome", "Time signature 5/4"] // it's joke time people
//get random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let jokeVal = jokes[getRandomInt(jokes.length)] // jokes!
