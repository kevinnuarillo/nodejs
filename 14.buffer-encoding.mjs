const buffer = Buffer.from("Ryujin so Pretty", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("Unl1amluIHNvIFByZXR0eQ==", "base64");

console.log(bufferBase64.toString())
