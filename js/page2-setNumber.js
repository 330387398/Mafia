
var playerNumber = document.querySelector('.playernumber')
var slide = document.querySelector('.slide')

var minus = document.querySelector('.minus')
var plus = document.querySelector('.plus')

var police = document.querySelector('.police')
var killer = document.querySelector('.killer')
var people = document.querySelector('.people')

var line1 = document.querySelector('.line1')
var line2 = document.querySelector('.line2')
var img = document.querySelector('.img')


//监听玩家数量输入框
playerNumber.addEventListener('keypress', function (e) {
	if (e.key == 'Enter') {
		playerNumber.blur()
	}
})
playerNumber.addEventListener('blur', function () {
	if (isLegal(playerNumber.value) && (playerNumber.value >= 4) && (playerNumber.value <= 18)) {
		slide.value = playerNumber.value
		setNumber()
	}else {
		reset()
	}
})

//监听加减玩家数量的按钮
minus.addEventListener('click', function () {
	if (parseInt(slide.value) > 4) {
		slide.value -= 1
		playerNumber.value = slide.value
		setNumber()
	}
})
plus.addEventListener('click', function () {
	if (parseInt(slide.value) < 18) {
		slide.value = parseInt(slide.value) + 1
		playerNumber.value = slide.value
		setNumber()
	}
})

//监听滑块
slide.addEventListener('input', function () {
	playerNumber.value = slide.value
	setNumber()
})


//判断用户的输入是否合法
function isLegal(str) {  
    var i = /^\d{1,2}$/
    return i.test(str)
}

//设置玩家配比栏各角色的数量
function setNumber() {
	setRange()
	if (slide.value <= 5) {
		police.innerHTML = 1
	}else if (slide.value <= 8) {
		police.innerHTML = 2
	}else if (slide.value <= 12) {
		police.innerHTML = 3
	}else if (slide.value <= 15) {
		police.innerHTML = 4
	}else if (slide.value <= 17) {
		police.innerHTML = 5
	}else {
		police.innerHTML = 6
	}
	killer.innerHTML = police.innerHTML
	people.innerHTML = slide.value - police.innerHTML * 2
}

//当用户输入不合法时对页面进行重置
function reset(){
	alert('请您输入正确的玩家数量~')
	police.innerHTML = ''
	killer.innerHTML = ''
	people.innerHTML = ''
	playerNumber.value = ''
	slide.value = 4
	setRange()
}

//设置滑块的移动和进度条的颜色变化
function setRange(){
	line1.style.width = (slide.value - 4) * 4.5 + '%'
	line2.style.width = 63 - parseFloat(line1.style.width) + '%'
	img.style.left = (slide.value - 4) * 4.5 + 18.5 + '%'
	img.style.marginLeft = -(slide.value - 4) * 0.2 + 'rem'
}


//页面跳转
var start = document.querySelector('.start')
start.addEventListener('click', function () {
	if (playerNumber.value) {
		window.location.href = './page3-checkRole.html' + '?' + playerNumber.value
	}else {
		alert('请先输入参与游戏的玩家数量~')
	}
})
