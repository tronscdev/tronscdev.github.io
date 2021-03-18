var contractAddress = 'TRVdqNkMfBEEb27t91Bg1EmukPGHrp5GCJ';
var contractAddressHex = '41AA4B185EAEBDE537323C157576A8CC2595778D70';

function getContract() {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({value: contractAddressHex, visible: false})
      };
    fetch('https://api.trongrid.io/wallet/getcontract', options)
    .then(response => console.log(response.json()))
    .catch(err => console.error(err));
}

function getContractWallet() {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({address: contractAddressHex})
      };
      
      fetch('https://api.trongrid.io/wallet/getaccount', options)
        .then(response => console.log(response.json()))
        .catch(err => console.error(err));
}

function storeData(recievedData) {
    recievedData.data.forEach(element => console.log(element));
}