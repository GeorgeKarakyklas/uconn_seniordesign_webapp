const Web3 = require("web3");

async function getWeb3() {
    new Promise((resolve, reject) => {
      window.addEventListener("load", async () => {
        let web3;
        if(window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          try {
            await window.ethereum.enable();
            resolve(web3);
          } catch(error) {
            reject(error);
          }
        }
      })
    })
  }


async function getBalance() {
    const web3 = window.web3;
    const accounts = await web3.eth.requestAccounts().then(result => {
        console.log(result)
        console.log(web3.eth.getBalance(result[0]));
    });
}

export { getWeb3, getBalance };