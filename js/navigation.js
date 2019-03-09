
let currWeek = 9; //current week
let week7 = 7;
let week8 = 8; //for files completed in week 8, for files that will be static
let week9 = 9; //this file will be updated/tweaked in week 9, unless it becomes part of a future assignment, only then the reference will change
let updateHref = ['../lesson-' + week9 + '/index.html', '../lesson-' + currWeek + '/preston-' + currWeek + '.html', '#', '#', '../lesson-' + week8 + '/stormcenter.html', '../lesson-' + week7 + '/gallery-' + week7 + '.html'];

  document.getElementById("nav-home").href = updateHref[0];
  document.getElementById("nav-preston").href = updateHref[1];
  document.getElementById("nav-soda").href = updateHref[2];
  document.getElementById("nav-fish").href = updateHref[3];
  document.getElementById("nav-storm").href = updateHref[4];
  document.getElementById("nav-gallery").href = updateHref[5];

