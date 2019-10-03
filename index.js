var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return (kittens);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return (kittens);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return (kittens);
}

function destructivelyRemoveFirstKitten (name) {
  kittens.shift(name);
  return (kittens);
}

function appendKitten(name) {
  var newKittens = [...kittens, name];
  return (newKittens);
}

function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return (newKittens);
}

function removeLastKitten() {
  return kittens.slice(0, slice.length - 1);
}