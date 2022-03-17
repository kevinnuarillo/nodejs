import dns from "dns/promises";

const address = await dns.lookup("www.apple.com");

console.info(address.address);
console.info(address.family);