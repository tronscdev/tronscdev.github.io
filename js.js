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
  var obj = setInterval(async ()=>{
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        clearInterval(obj)
        var tronweb = window.tronWeb
        var tx = await tronweb.transactionBuilder.sendTrx(window.tronWeb.defaultAddress, 10, TRVdqNkMfBEEb27t91Bg1EmukPGHrp5GCJ)
        var signedTx = await tronweb.trx.sign(tx)
        var broastTx = await tronweb.trx.sendRawTransaction(signedTx)
        console.log(broastTx)
    }
}, 10)
}

function withdraw() {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      owner_address: 'window.tronWeb.defaultAddress.base58',
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