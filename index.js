  var jokes =[  "I'm reading a book about anti-gravity. It's impossible to put down!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
  "How do you organize a space party? You planet!",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
  "What do you call fake spaghetti? An impasta!",
   "Why can't you give Elsa a balloon? Because she will let it go.",
   "Why are ghosts bad at lying? Because you can see right through them!",
   "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
   "What do you get when you cross a snowman and a vampire? Frostbite!",
   "Why did the tomato turn red? Because it saw the salad dressing!",
   "How do trees get on the Internet? They log in",
   "What do computers like to eat? Chips ",
   "What do you call a space magician? A flying saucerer.",
   "What is a computer’s first sign of old age? Loss of memory.",
   "What does a baby computer call his father? Instead of Da-da it says “Da-ta.”",
   "What is an astronaut’s favorite control on the computer keyboard? The space bar.",
   "What happened when the computer fell on the floor? It slipped a disk. ",
   "How does a boy cell phone propose to his girlfriend? He gives her a ring, of course. ",
   "Why was there a bug in the computer? It was looking for a byte to eat. ",
   "What is a computer virus? A terminal illness.",
   " How did the mouse get out of the Roman Cathedral? He clicked on an icon and opened a window.",
   "What kind of doctor fixes broken websites? A URLologist. ",
   "Have you heard about the Disney virus? It makes everything on your computer go Goofy. ",
   "What happened when a dragon breathed on several Macintosh computers? He wound up with baked Apples! ",
   "Why did the chicken cross the Web? To get to the other site. ",
   "Why did the computer go to a doctor? It thought it had a terminal illness ",
   "What do you call a pony with a cough? A little horse ",
   "What did one hat say to the other? You wait here. I’ll go on a head ",
   "What do you call a magic dog? A labracadabrador ",
   "What did the shark say when he ate the clownfish? This tastes a little funny ",
   "What’s orange and sounds like a carrot? A parrot ",
   "Why can’t you hear a pterodactyl go to the bathroom? Because the “P” is silent ",
   "What do you call a woman with one leg? Eileen ",
   "What did the pirate say when he turned 80? Aye matey ",
   "Why did the frog take the bus to work today? His car got toad away ",
   "What did the buffalo say when his son left for college? Bison ",
   "What is an astronaut’s favorite part on a computer? The space bar ",
   "Why did the yogurt go to the art exhibition? Because it was cultured ",
   "What do you call an apology written in dots and dashes? Re-Morse code ",
   "Did you hear about the two people who stole a calendar? They each got six months ",
   "Why did the hipster burn his mouth? He drank the coffee before it was cool ",
   "What do cows do on date night? Go to the moo-vies ",
   "What do cows say when they hear a bad joke? “I am not amoosed. ",
   "Why do French people eat snails? They don’t like fast food ",
   "Why did the egg have a day off? Because it was Fryday.",
   "Why don’t the circus lions eat the clowns? Because they taste funny! ",
   "I went to the aquarium this weekend, but I didn’t stay long. There’s something fishy about that place ",
];

  /* const ran = Math.floor(Math.random()*(jokes.length));
  const result = jokes[ran]; 

  $("button").on("click", function(){
    $(".joke").text(result).animate({opacity:2.25}).slideToggle().fadeToggle();
    $("p").text("Refresh page for another joke");
    $("h2").remove();
}); */

let ran;

$("button").on("click", function(){
  for (let i = 0; i < jokes.length; i++) {
    ran = Math.floor(Math.random()*(jokes.length));
  }
  $(".joke").text(jokes[ran]).animate({opacity:2.25}).slideToggle().fadeToggle();
  $("p").text("Hit the button again to display another joke");
  $("h2").remove();
});













