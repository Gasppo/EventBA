export function sleep(ms) {
  //sleep
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randint(max) {
  return Math.floor(Math.random() * max);
}
