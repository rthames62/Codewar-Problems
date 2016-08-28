function isValidWalk(walk) {
  //insert brilliant code here
  var distance = 0;
  var lastDirection = '';
  var backTrack = 0;
  var time = 0;

  for (var i = 0; i < walk.length; i++) {
    if (lastDirection === '') {
      distance += 1;
    }
    if (lastDirection === 's' && walk[i] === 'n') {
      if (backTrack === 0) {
      	backTrack = 1;
      	distance -= 1;
      } else {
      	backTrack = 0;
      	distance += 1;
      }
    } else if (lastDirection === 'n' && walk[i] === 's') {
      if (backTrack === 0) {
      	backTrack = 1;
      	distance -= 1;
      } else {
      	backTrack = 0;
      	distance += 1;
      }
    } else if (lastDirection === 'e' && walk[i] === 'w') {
      if (backTrack === 0) {
      	backTrack = 1;
      	distance -= 1;
      } else {
      	backTrack = 0;
      	distance += 1;
      }
    } else if (lastDirection === 'w' && walk[i] === 'e') {
      if (backTrack === 0) {
      	backTrack = 1;
      	distance -= 1;
      } else {
      	backTrack = 0;
      	distance += 1;
      }
    } else if (lastDirection !== '') {
      distance += 1;
    }
    lastDirection = walk[i];
    time ++;
  }

  if (distance === 0 && time <= 10) {
    return true;
  } else {
    return false;
  }

}
