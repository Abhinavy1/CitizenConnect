const dns = require("dns");

console.log("Default DNS Servers:");
console.log(dns.getServers());

dns.resolveSrv("_mongodb._tcp.cluster0.awfq1ku.mongodb.net", (err, records) => {
    if (err) {
        console.error("SRV Error:");
        console.error(err);
    } else {
        console.log("SRV Records:");
        console.log(records);
    }
});