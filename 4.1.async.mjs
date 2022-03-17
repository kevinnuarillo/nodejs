function samplePromise() {
  return Promise.resolve("Kevin");
}

const name = await samplePromise();
console.info(name);