
//获取玩家数量，随机分配身份
var playerNumber = location.search.substr(1)
var arr = []
setRole()
function setRole() {
	//通过计算得出不同身份的玩家数量
	var police
	var people
	if (playerNumber <= 5) {
		police = 1
	}else if (playerNumber<= 8) {
		police = 2
	}else if (playerNumber <= 12) {
		police = 3
	}else if (playerNumber <= 15) {
		police = 4
	}else if (playerNumber <= 17) {
		police = 5
	}else {
		police = 6
	}
	people = playerNumber - police * 2
	for (i = 0; i < police; i++) {
		arr.push('1','2')
	}
	for (i = 0; i < people; i++) {
		arr.push('3')
	}
	//随机分配身份
	var array = []
	var len = arr.length
	for (var i=0; i<len; i++) {
		var a = Math.floor(Math.random()*arr.length)
		array.push(arr[a])
		arr.splice(a, 1)
	}
	arr = array
}
//将分配好的身份以字符串的形式写入cookie，其中1代表警察，2代表杀手，3代表平民
var arrJoin = arr.join(',')
document.cookie = arrJoin


//绑定点击事件，按顺序展示身份，最终跳转页面
$('main').on('click', function () {
	if ($('.check3').hasClass('active')) {
		window.location.href = './page4-global.html'
	}else {
		change()
	}
})
$('.check1, .check2').on('click', function () {
	change()
})
$('.check3').on('click', function () {
	window.location.href = './page4-global.html'
})

//判断页面当前状态，执行相应跳转
function change() {
	if ($('.emperor').hasClass('active')) {
		pageTwo()
	}else {
		pageOne()
	}
}

//页面的两种不同状态间的切换
var $number = 1
function pageOne(){
	$number += 1
	$('.emperor').addClass('active')
	$('.wow, .text').removeClass('active')
	$('.check1').addClass('active')
	$('.check2').removeClass('active')
	$('.border > .number').text($number)
	$('.number1').text($number)
}
function pageTwo(){
	$('.emperor').removeClass('active')
	$('.wow, .text').addClass('active')
	$('.check1').removeClass('active')
	$('.check2').addClass('active')
	if (arr[$number-2] == 1) {
		$('.text').text('警察')
	}else if (arr[$number-2] == 2) {
		$('.text').text('杀手')
	}else {
		$('.text').text('平民')
	}
	if ($number < playerNumber) {
		$('.number2').text($number + 1)
	}else {
		$('.check2').removeClass('active')
		$('.check3').addClass('active')
	}
}
