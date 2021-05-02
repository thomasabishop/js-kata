/*
 * There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The second time, only visit every 2nd door (door #2, #4, #6, ...), and toggle it. The third time, visit every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th door.
 */

function changeDoorState(door) {
  return door.open ? (door.open = false) : (door.open = true);
}

const doors = [];

// Generate each door, with initial state of 'open'
for (let i = 1; i < 101; i++) {
  doors.push({ open: false });
}

// Test changing doors
for (let j = 1; j < doors.length; j++) {
  let it = j + j;
  console.log(it);
  //changeDoorState(doors[j]);
}

//console.log(doors);
