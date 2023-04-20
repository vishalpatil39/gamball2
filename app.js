// const contractAddress = '0x3F99BdADBCaCD4f8c14991680391bF47f605459E';
// const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"enum Gamball.Ball","name":"ball","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum Gamball.Ball","name":"winningBall","type":"uint8"}],"name":"GameEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"GameStarted","type":"event"},{"inputs":[{"internalType":"enum Gamball.Ball","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"bets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creatorFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gameDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum Gamball.Ball","name":"ball","type":"uint8"}],"name":"placeBet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"startNewGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum Gamball.Ball","name":"","type":"uint8"}],"name":"totalBets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

// const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
// const contract = new web3.eth.Contract(abi, contractAddress);

// // Add this event listener
// document.getElementById('connect-wallet').addEventListener('click', connectWallet);

// // Add this function
// async function connectWallet() {
//     if (window.ethereum) {
//         try {
//             await window.ethereum.request({ method: 'eth_requestAccounts' });
//             updateGameStartTime();
//         } catch (error) {
//             console.log('User denied account access');
//         }
//     } else {
//         alert('Please install MetaMask or use a compatible wallet to interact with the app');
//     }
// }

// // window.addEventListener('load', async () => {
// //     await window.ethereum.enable();
// //     updateGameStartTime();
// // });

// // window.addEventListener('load', async () => {
// //     if (window.ethereum) {
// //         window.ethereum.on('accountsChanged', () => location.reload());
// //         try {
// //             await window.ethereum.request({ method: 'eth_requestAccounts' });
// //         } catch (error) {
// //             console.log('User denied account access');
// //         }
// //     } else {
// //         alert('Please install MetaMask or use a compatible wallet to interact with the app');
// //     }
// //     updateGameStartTime();
// // });

// document.getElementById('place-bet').addEventListener('click', async () => {
//     const accounts = await web3.eth.getAccounts();
//     const selectedBall = document.getElementById('ball-selection').value;
//     const betAmount = document.getElementById('bet-amount').value;
//     const betAmountInWei = web3.utils.toWei(betAmount, 'ether');

//     await contract.methods.placeBet(selectedBall).send({ from: accounts[0], value: betAmountInWei });
// });

// document.getElementById('end-game').addEventListener('click', async () => {
//     const accounts = await web3.eth.getAccounts();
//     await contract.methods.endGame().send({ from: accounts[0] });
// });

// document.getElementById('start-new-game').addEventListener('click', async () => {
//     const accounts = await web3.eth.getAccounts();
//     await contract.methods.startNewGame().send({ from: accounts[0] });
//     updateGameStartTime();
// });

// async function updateGameStartTime() {
//     const gameStartTime = await contract.methods.gameStartTime().call();
//     const gameStartTimeDate = new Date(parseInt(gameStartTime) * 1000);
//     document.getElementById('game-start-time').innerText = gameStartTimeDate.toLocaleString();
// }


const contractAddress = '0x3F99BdADBCaCD4f8c14991680391bF47f605459E';
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"enum Gamball.Ball","name":"ball","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum Gamball.Ball","name":"winningBall","type":"uint8"}],"name":"GameEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"GameStarted","type":"event"},{"inputs":[{"internalType":"enum Gamball.Ball","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"bets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creatorFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gameDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum Gamball.Ball","name":"ball","type":"uint8"}],"name":"placeBet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"startNewGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum Gamball.Ball","name":"","type":"uint8"}],"name":"totalBets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
const contract = new web3.eth.Contract(abi, contractAddress);

window.addEventListener('load', async () => {
    await window.ethereum.enable();
    updateGameStartTime();
});

document.getElementById('connect-wallet').addEventListener('click', connectWallet);

document.getElementById('place-bet').addEventListener('click', async () => {
    const accounts = await web3.eth.getAccounts();
    const selectedBall = document.getElementById('ball-selection').value;
    const betAmount = document.getElementById('bet-amount').value;
    const betAmountInWei = web3.utils.toWei(betAmount, 'ether');

    await contract.methods.placeBet(selectedBall).send({ from: accounts[0], value: betAmountInWei });
});

document.getElementById('end-game').addEventListener('click', async () => {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.endGame().send({ from: accounts[0] });
});

document.getElementById('start-new-game').addEventListener('click', async () => {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.startNewGame().send({ from: accounts[0] });
    updateGameStartTime();
});

async function updateGameStartTime() {
    const gameStartTime = await contract.methods.gameStartTime().call();
    const gameStartTimeDate = new Date(parseInt(gameStartTime) * 1000);
    document.getElementById('game-start-time').innerText = gameStartTimeDate.toLocaleString();
}

async function connectWallet() {
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', () => location.reload());
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateGameStartTime();
        } catch (error) {
            console.log('User denied account access');
        }
    } else {
        alert('Please install MetaMask or use a compatible wallet to interact with the app');
    }
}

// Add this to your app.js file
const ballElements = document.querySelectorAll('.ball-container .ball');



ballElements.forEach((ball) => {
    ball.addEventListener('click', () => {
        ballElements.forEach((otherBall) => {
            otherBall.classList.remove('selected');
        });

        ball.classList.add('selected');
        document.getElementById('ball-selection').value = ball.dataset.value;
    });
});

