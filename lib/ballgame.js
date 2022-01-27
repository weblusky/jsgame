var ballArr = []
var newArr = []
var redArr = []
var greenArr = []
var blueArr = []

const matchTb = {
    '840': 100,
    '831': 10,
    '822': 10,
    '750': 20,
    '741': 2,
    '732': 2,
    '660': 20,
    '651': 1,
    '642': 1,
    '633': 1,
    '552': 1,
    '444': 1,
    '543': -10
}

// 初始化球箱
function init() {
    ballArr = []
    newArr = []
    redArr = []
    greenArr = []
    blueArr = []
    for (let i = 0; i < 8; i++) {
        ballArr.push('r'+i)
        ballArr.push('g'+i)
        ballArr.push('b'+i)
    }
}

// 随机整数
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// 随机抓12个球
function getBall(arr) {
    if (arr.length < 12) {
        const rndnum = getRandomInt(ballArr.length)
        const rndball = ballArr[rndnum]
        if (!newArr.includes(rndball)) {
            newArr.push(rndball)
            if (rndball.startsWith('r')) redArr.push(rndball)
            if (rndball.startsWith('g')) greenArr.push(rndball)
            if (rndball.startsWith('b')) blueArr.push(rndball)
        }
        getBall(newArr)
    } else {
        // console.log('Finished');
    }
}

const getBallResult = () => {
    init()
    getBall(newArr)
    const rtArr = [redArr.length, greenArr.length, blueArr.length]
    return rtArr.sort().reverse().join('')
}

const resultMoney = (rt) => {
    return matchTb[rt]
}

module.exports = { getBallResult, resultMoney }