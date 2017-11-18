
//游戏目录左右切换
var left = document.querySelector('.left')
var right = document.querySelector('.right')

var leftCircle = document.querySelector('.leftcircle')
var rightCircle = document.querySelector('.rightcircle')

var title = document.querySelector('.title')
var btn2 = document.querySelector('.btn2')
var btn3 = document.querySelector('.btn3')
var number1 = document.querySelector('.number1')
var number2 = document.querySelector('.number2')
var number3 = document.querySelector('.number3')

left.addEventListener('click', function () {
	turnLeft()
})
right.addEventListener('click', function () {
	turnRight()
})
leftCircle.addEventListener('click', function () {
	turnLeft()
})
rightCircle.addEventListener('click', function () {
	turnRight()
})

function turnLeft() {
	leftCircle.classList.add('active')
	rightCircle.classList.remove('active')
	title.innerHTML = '捉鬼游戏'
	btn2.innerHTML = '猜 词 版'
	btn3.innerHTML = '杀 人 版'
	number1.innerHTML = '有11个用户玩过此游戏'
	number2.innerHTML = '有12个用户玩过此游戏'
	number3.innerHTML = '有13个用户玩过此游戏'
}
function turnRight() {
	leftCircle.classList.remove('active')
	rightCircle.classList.add('active')
	title.innerHTML = '杀人游戏'
	btn2.innerHTML = '警 版'
	btn3.innerHTML = '3.0 版'
	number1.innerHTML = '有21个用户玩过此游戏'
	number2.innerHTML = '有22个用户玩过此游戏'
	number3.innerHTML = '有23个用户玩过此游戏'
}


//页面跳转按钮
var section = document.querySelector('section')
section.addEventListener('click', function () {
	window.location.href = './html/page2-setNumber.html'
})

var btn1 = document.querySelector('.btn1')
btn1.addEventListener('click', function () {
	window.location.href = './html/page2-setNumber.html'
})
btn2.addEventListener('click', function () {
	window.location.href = './html/page2-setNumber.html'
})
btn3.addEventListener('click', function () {
	window.location.href = './html/page2-setNumber.html'
})
