// function consoleText(words, id, colors) {
//   // The screen width threshold below which the animation will be shown
//   const screenWidthThreshold = 768;

//   // Check if the screen width is below the threshold
//   const isSmallScreen = window.innerWidth < screenWidthThreshold;

//   if (!isSmallScreen) {
//     // If the screen is not small, display nothing (an empty string)
//     const target = document.getElementById(id);
//     target.innerHTML = '';
//     return;
//   }

//   // If the screen is small, proceed with the animation
//   if (colors === undefined) colors = ['#fff'];
//   var visible = true;
//   var con = document.getElementById('console');
//   var letterCount = 1;
//   var x = 1;
//   var waiting = false;
//   var stringcounnt = 0;
//   var target = document.getElementById(id)
//   target.setAttribute('style', 'color:' + colors[0])
//   window.setInterval(function () {
//     if (stringcounnt === 2) {
//       document.getElementById('text').innerHTML = 'About Me.';
//       // Hide the cursor and stop the function
//       document.getElementById('console').style.display = 'none';
//       return;
//     }
//     if (letterCount === 0 && waiting === false) {
//       waiting = true;
//       target.innerHTML = words[0].substring(0, letterCount)
//       window.setTimeout(function () {
//         var usedColor = colors.shift();
//         colors.push(usedColor);
//         var usedWord = words.shift();
//         words.push(usedWord);
//         x = 1;
//         target.setAttribute('style', 'color:' + colors[0])
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (letterCount === words[0].length + 1 && waiting === false) {
//       stringcounnt++;
//       waiting = true;
//       window.setTimeout(function () {
//         x = -1;
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (waiting === false) {
//       target.innerHTML = words[0].substring(0, letterCount)
//       letterCount += x;
//     }
//   }, 120)
//   window.setInterval(function () {
//     if (visible === true) {
//       con.className = 'console-underscore hidden'
//       visible = false;

//     } else {
//       con.className = 'console-underscore'

//       visible = true;
//     }
//   }, 400)
// }

// // Call the consoleText function with the appropriate parameters
// consoleText(['Hello.', 'About Me.'], 'text', ['black', 'black']);




