export const ionianNotes = ["C", "D", "E", "F", "G", "A", "B"];
export const ionianIntervals = [2, 2, 1, 2, 2, 2, 1];
export const ionianChords = ["", "m", "m", "", "", "m", "dim"];

const modes = {
  ionian: 0,
  dorian: 1,
  mixolydian: 4,
};

export const availableModes = Array.from(Object.keys(modes))

function rotate(array, num) {
  const result = array.slice();
  const elements = result.splice(0, num);
  result.push(...elements);
  return result;
}

function sum(array, lastIndex) {
  return array.slice(lastIndex).reduce((a, b) => a + b, 0);
}

export function getNote(key, num, mode) {
  let keySharpFlatModifier = 0;
  const [k, keySharpFlat] = key.split("");
  if (keySharpFlat === "b") keySharpFlatModifier = -1;
  if (keySharpFlat === "#") keySharpFlatModifier = 1;

  const keyIndex = ionianNotes.indexOf(k);
  const index = num - 1;
  const notes = rotate(ionianNotes, keyIndex);
  const cIntervalsStartingWithKey = rotate(ionianIntervals, keyIndex);
  const intervals = rotate(ionianIntervals, modes[mode]);
  const chords = rotate(ionianChords, modes[mode]);
  const note = notes[index];
  const chord = chords[index];

  const sharpFlatModifier =
    sum(intervals, index) -
    sum(cIntervalsStartingWithKey, index) -
    keySharpFlatModifier;
  let sharpFlatString = "";
  if (sharpFlatModifier === -1) sharpFlatString = "#";
  if (sharpFlatModifier === 1) sharpFlatString = "b";

  return note + sharpFlatString + chord;
}

export const keys = [
  "C",
  "C#",
  "Db",
  "D",
  "D#",
  "Eb",
  "E",
  "F",
  "F#",
  "Gb",
  "G",
  "G#",
  "Ab",
  "A",
  "A#",
  "Bb",
  "B",
];

// const key = "Db";
// const mode = "ionian";
// console.log(getNote(key, 1, mode));
// console.log(getNote(key, 2, mode));
// console.log(getNote(key, 3, mode));
// console.log(getNote(key, 4, mode));
// console.log(getNote(key, 5, mode));
// console.log(getNote(key, 6, mode));
// console.log(getNote(key, 7, mode));
