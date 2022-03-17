function samplePromise() {
  return Promise.resolve("Kevin");
}

async function run() {
  const name =  await samplePromise();
  console.info(name);
}

run();
