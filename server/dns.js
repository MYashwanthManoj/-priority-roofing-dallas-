import dns from 'dns';

// Atlas connection strings use mongodb+srv:// which requires SRV DNS records.
// Some local/corporate DNS servers mishandle SRV lookups (this dev machine's
// default resolver refused them entirely). Route lookups through public
// resolvers so the app always reaches MongoDB Atlas.
dns.setServers(['8.8.8.8', '1.1.1.1']);
