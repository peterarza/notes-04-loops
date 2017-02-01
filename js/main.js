/* Loops allow you to iterate code by telling the computer how many times to run a code block/ Loops are useful for saving time and preventing repetitious tasks. */

// For example instead of this senario...
//var noLoopUser = prompt('How many times between 1-37');

// if (noLoopUser == 1) {
//	document.write('<br> Fruit Loops!');
// }else if (noLoopUser == 2) {
//	document.write('<br> Fruit Loops!');
//	document.write('<br> Fruit Loops!');
// }
/* You can avoid the above bad code by using loops instead. For example...*/

// var loopUser = prompt('How many times do you want to loop?');


//for (var i=0; i<loopUser; i++) {
//	document.write('<br>Fruit Loops!');
// }


/* The most common type of loop is the for loop. It's called a for loop because it runs a specified number of times. It says to itself "for each time this condition is true, O will run until the condition stops being true." A for loop is typically written like this:

for (initialization; condition; iteration) {
	some function;
}
 In the above initialization is typically a variable that starts at 0 or 1. Condition is the conditional statement that is evaluated true or false. Iteration is the increment or decrement to modify the condition so that it will loop up or down. */

 //For loops are often incremented.
 for (var i =0; i<10; i++) {
 	document.write('<br>' + i + " pieces of candy.");

 }
// For loops can be decremented as well.
for (var i =10; i>0; i--) {
 	document.write('<br>' + i + " bottles of rootbeer.");

 }
// For loops can count up or down by intervals.
for (var i =0; i<100; i+= 10) {
 	document.write('<br>' + i + " cans of beans.");
 }

// Loops are particularly useful for iterating through arrays.
var menu = ['Croissant', 'Biscuit', 'Pancakes', 'Sandwich', 'Juice', 'Oatmeal', 'Fuits'];
//document.write(menu.length);
for (var i =0; i<menu.length; i++) {
 	document.write('<br>' + menu[i]);
 }

/* Create a loop that counts up from 5, by increments of 2 until it reaches a number larger than 100. */

for (var i = 5; i < 101; i += 2) {
	document.write('<br>' + i);
}

/* While loops run while a condition remains true. They continue to run until the condition evaluates to false. While loops are helpful for continuing to run something and can run perpetually versus a for loop which typically has a set amount of times it can run. */

var playerHitPoints = 100;

while (playerHitPoints > 0) {
	document.write('<br>Your hitpoints are: ' + playerHitPoints);
	playerHitPoints -= 10;
	document.write('<br>Ouch! You got hit by an ogre.' + '<br>Your hitpoints are now: ' + playerHitPoints + '<br><br>');
}

/* Do while loops are a slight variation of while loops. The do while loops always run at least once before it actually enters into the loop itself. */

var playerExp = 0;

do {
	playerExp += 10;
	document.write('<br>You have defeated a spider.<br> You have earned  10xp for a total of ' + playerExp + 'xp<br><br>');
} while (playerExp < 100);










































