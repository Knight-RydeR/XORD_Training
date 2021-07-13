const Web3 = require('web3');

const customProvider = {
    sendAsync: (payload, cb) => {
        console.log('You called?');
        console.log(payload);
        cb(undefined, 100);
    }
};

//const provider = new Web3.providers.HttpProvider('http://locahlost:8545');
const web3 = new Web3('http://localhost:8545');
//const web3 = new Web3(customProvider);

//Connected to the Blockchain!

// web3.eth.getBlockNumber()
// .then(() => console.log('Done!'));

const contract  = new web3.eth.Contract(
    abi,
    address //optional
);