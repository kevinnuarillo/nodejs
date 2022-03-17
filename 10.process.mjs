import process from "process";

process.addListener("exit", (exitCode) => {
    console.info(`exit with code ${exitCode}`);
});

console.info(process.version)
console.table(process.argv)