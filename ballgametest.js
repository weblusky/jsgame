const {getBallResult, resultMoney} = require('./lib/ballgame.js')

const count = 100
let bossMoney = 0

const playGame = (ct)=>{
    if(ct > 0){
        ct--
        let promise = new Promise(function(resolve, reject) {
            const result = getBallResult()
            resolve(result);
        });
        promise.then(result=>{
            const money = resultMoney(result)
            bossMoney += money
            console.log(count-ct, result, money, bossMoney);
            playGame(ct)
        })
    }else{
        console.log('Finished');
    }
} 

playGame(count)