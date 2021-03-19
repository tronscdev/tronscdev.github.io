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

function commit() {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      owner_address: window.tronWeb.defaultAddress.base58,
      contract_address: contractAddressHex,
      function_selector: 'invest(referrer,0,1)',
      call_value: 0
    })
  };
  
  fetch('https://api.trongrid.io/wallet/triggersmartcontract', options)
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

function withdraw() {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      owner_address: '41F3002C8F3FFF1B5696C1CD7D54DE80EDB1DA2C2E',
      contract_address: '41AA4B185EAEBDE537323C157576A8CC2595778D70',
      function_selector: 'withdraw()',
      call_value: 0
    })
  };
  
  fetch('https://api.trongrid.io/wallet/triggersmartcontract', options)
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

function storeData(recievedData) {
    recievedData.data.forEach(element => console.log(element));
}