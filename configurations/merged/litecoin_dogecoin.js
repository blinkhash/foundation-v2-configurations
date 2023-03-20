/*
 *
 * Example (Litecoin-Dogecoin)
 *
 */

// Litecoin/Dogecoin Configuration File
// https://blinkhash.com/docs/foundation/configurations
// Consult the above link if you have any questions

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.enabled = true;
config.name = 'Pool-Litecoin-Dogecoin';
config.template = 'litecoin';

// Primary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.primary = {};
config.primary.address = '[address]';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Litecoin';
config.primary.coin.symbol = 'LTC';
config.primary.coin.algorithm = 'scrypt';

// Checks Configuration
config.primary.checks = {};
config.primary.checks.enabled = true;

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = '[host]';
daemons1.port = 9332;
daemons1.username = '[username]';
daemons1.password = '[password]';
config.primary.daemons.push(daemons1);

// Payment Configuration
config.primary.payments = {};
config.primary.payments.enabled = true;
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment = 0.005;
config.primary.payments.transactionFee = 0.004;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host = '[host]';
config.primary.payments.daemon.port = 9332;
config.primary.payments.daemon.username = '[username]';
config.primary.payments.daemon.password = '[password]';

// Recipients Configuration
config.primary.recipients = [];

const recipient1 = {};
recipient1.address = '[address]';
recipient1.percentage = 0.05;
config.primary.recipients.push(recipient1);

// Blinkhash Donation Address
const recipient2 = {};
recipient2.address = 'M8hA7wbyw39qChoDYerR1Gyp9pdDCZvpvz';
recipient2.percentage = 0.001;
config.primary.recipients.push(recipient2);

// Statistics Configuration
config.primary.statistics = {};
config.primary.statistics.enabled = true;

// ZMQ Configuration
config.primary.zmq = {};
config.primary.zmq.enabled = false;
config.primary.zmq.host = '127.0.0.1';
config.primary.zmq.port = 29000;

// Auxiliary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.auxiliary = {};
config.auxiliary.enabled = true;

// Coin Configuration
config.auxiliary.coin = {};
config.auxiliary.coin.name = 'Dogecoin';
config.auxiliary.coin.symbol = 'DOGE';
config.auxiliary.coin.header = 'fabe6d6d';

// Checks Configuration
config.auxiliary.checks = {};
config.auxiliary.checks.enabled = true;

// Daemon Configuration
config.auxiliary.daemons = [];

const auxDaemons1 = {};
auxDaemons1.host = '[host]';
auxDaemons1.port = 22555;
auxDaemons1.username = '[username]';
auxDaemons1.password = '[password]';
config.auxiliary.daemons.push(auxDaemons1);

// Payment Configuration
config.auxiliary.payments = {};
config.auxiliary.payments.enabled = true;
config.auxiliary.payments.minConfirmations = 10;
config.auxiliary.payments.minPayment = 0.005;
config.auxiliary.payments.transactionFee = 0.004;
config.auxiliary.payments.daemon = {};
config.auxiliary.payments.daemon.host = '[host]';
config.auxiliary.payments.daemon.port = 22555;
config.auxiliary.payments.daemon.username = '[username]';
config.auxiliary.payments.daemon.password = '[password]';

// Statistics Configuration
config.auxiliary.statistics = {};
config.auxiliary.statistics.enabled = true;

// ZMQ Configuration
config.auxiliary.zmq = {};
config.auxiliary.zmq.enabled = false;
config.auxiliary.zmq.host = '127.0.0.1';
config.auxiliary.zmq.port = 29001;

// Shared Configuration
////////////////////////////////////////////////////////////////////////////////

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = [port];
ports1.enabled = true;
ports1.type = '[type]';
ports1.tls = false;
ports1.difficulty = {};
ports1.difficulty.initial = [initial];
ports1.difficulty.minimum = [minimum];
ports1.difficulty.maximum = [maximum];
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 0.3;
config.ports.push(ports1);

// Settings Configuration
config.settings = {};

// Banning Configuration
config.settings.banning = {};
config.settings.banning.banLength = 600000; // ms
config.settings.banning.checkThreshold = 500;
config.settings.banning.invalidPercent = 50;
config.settings.banning.purgeInterval = 300000; // ms

// Batch Configuration
config.settings.batch = {};
config.settings.batch.limit = 200;

// Timeout Configuration
config.settings.timeout = {};
config.settings.timeout.connection = 600000; // ms
config.settings.timeout.rebroadcast = 60000; // ms

// Interval Configuration
config.settings.interval = {};
config.settings.interval.blocks = 1000; // ms
config.settings.interval.checks = 90000; // ms
config.settings.interval.historical = 600000; // ms
config.settings.interval.payments = 7200000; // ms
config.settings.interval.recent = 600000; // ms
config.settings.interval.rounds = 60000; // ms
config.settings.interval.statistics = 90000; // ms

// Window Configuration
config.settings.window = {};
config.settings.window.hashrate = 300000; // ms
config.settings.window.inactive = 604800000; // ms
config.settings.window.rounds = 21600000; // ms
config.settings.window.updates = 300000; // ms

// Export Configuration
module.exports = config;
