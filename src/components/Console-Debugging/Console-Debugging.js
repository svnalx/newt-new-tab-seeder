// Console Debugging
console.todo = function(msg) {
  console.log(' %c %s %s %s', 'color:#fcba03; background-color:#000000;', 'TODO:', msg);
}

console.important = function(msg) {
  console.log(' %c %s %s %s', 'color:#fc2803; font-weight:bold;', 'IMPORTANT!', msg);
}

/* Reminder that these exist
   console.table();
   console.trace();
   console.dir();
*/
