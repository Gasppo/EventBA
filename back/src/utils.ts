export function sleep(ms: number) {
  //sleep
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randint(max: number) {
  return Math.floor(Math.random() * max);
}
