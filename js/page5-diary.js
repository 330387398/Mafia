
//通过cookie获取玩家的数量及身份
var arrJoin = document.cookie
var arr = arrJoin.split(',')
//通过url获取已经死亡的玩家序号
var deadList = location.search.substr(1)
var arrDead = deadList.split(',')
var deadNumber = arrDead.length


//根据已经死亡的玩家数量，推断出当前游戏的天数，并插入相应数量的标签
addHtmls()
function addHtmls() {
	var a = Math.ceil(deadNumber/2)
	for (var i = 0; i < a - 1; i++) {
		$('.connect').before(addLabels(a))
	}
}
function addLabels(i) {
	var a
	if (i == 2) {
		a = '二'
	}else if (i == 3) {
		a = '三'
	}else if (i == 4) {
		a = '四'
	}else if (i == 5) {
		a = '五'
	}else if (i == 6) {
		a = '六'
	}else if (i == 7) {
		a = '七'
	}else {
		a = '八'
	}
	var html = ''
	html += '<div class="days">第' + a + '天</div>'
	return html
}


//根据已经死亡的玩家人数判断当前进行到哪个步骤，并进行相应的页面渲染
alreadyKilled()
function alreadyKilled() {
	if (deadNumber%2 == 0) {
		killedState()
		$('.triangle2, .square2').addClass('active1')
	}
}
function killedState() {
	$('.triangle1').css('borderRight','2rem solid rgb(131,176,154)').removeClass('active1')
	$('.square1').css('background','rgb(131,176,154)').removeClass('active1')
	$('.text1').addClass('active2')
	$('.number1').html(arrDead[deadNumber - 1])
	$('.role1').html(roleName(deadNumber))
}
//根据玩家序号，计算出对应的身份
function roleName(i) {
	if (arr[arrDead[i - 1] - 1] == 1) {
		return '警察'
	}else if (arr[arrDead[i - 1] - 1] == 2) {
		return '杀手'
	}else {
		return '平民'
	}
}


//设置一个代表当前游戏步骤的参数，根据参数数值激活后续的游戏步骤
var $step = 1

$('.triangle1, .square1').on('click', stepOne)
$('.triangle2, .square2').on('click', stepTwo)
$('.triangle3, .square3').on('click', stepThree)
$('.triangle4, .square4').on('click', stepFour)

function stepOne() {
	if (deadNumber%2 == 1) {
		window.location.href = './page6-playerList.html' + '?' + deadList
	}
}
function stepTwo() {
	if ((deadNumber%2 == 0) && ($step == 1)) {
		$('.triangle2').css('borderRight','2rem solid rgb(131,176,154)').removeClass('active1')
		$('.square2').css('background','rgb(131,176,154)').removeClass('active1')
		$('.triangle3, .square3').addClass('active1')
		$('.modal-global1').addClass('active2')
		$step = 2
	}
}
function stepThree() {
	if ($step == 2) {
		$('.triangle3').css('borderRight','2rem solid rgb(131,176,154)').removeClass('active1')
		$('.square3').css('background','rgb(131,176,154)').removeClass('active1')
		$('.triangle4, .square4').addClass('active1')
		$('.modal-global2').addClass('active2')
		$step = 3
	}
}
function stepFour() {
	if ($step == 3) {
		window.location.href = './page6-playerList.html' + '?' + deadList
	}
}

//当模态框出现时，点击任意位置即可消失
$('.background1, .cancel1, .sure1').on('click', function () {
	$('.modal-global1').removeClass('active2')
})
$('.background2, .cancel2, .sure2').on('click', function () {
	$('.modal-global2').removeClass('active2')
})


//为结束游戏按钮绑定事件，强制结束游戏并跳转页面
$('.gameover').on('click', function () {
	window.location.href = './page7-result.html' + '?' + deadList
})


//当点击对应天数时，显示当天的游戏记录
$('.days').on('click', function () {
	$('.connect, .process').remove()
	$(this).after(addProcess())
	var i = ($(this).index('.days') + 1) * 2
	if (i < deadNumber) {
		$('.triangle').css('borderRight','2rem solid rgb(131,176,154)').removeClass('active1')
		$('.square').css('background','rgb(131,176,154)').removeClass('active1')
		$('.text').addClass('active2')
		$('.number1').html(arrDead[i - 1])
		$('.role1').html(roleName(i))
		$('.number2').html(arrDead[i])
		$('.role2').html(roleName(i + 1))
	}else {
		if (deadNumber%2 == 0) {
			killedState()
			if ($step == 1) {
				$('.triangle2, .square2').addClass('active1')
			}else if ($step == 2) {
				$('.triangle2').css('borderRight','2rem solid rgb(131,176,154)')
				$('.square2').css('background','rgb(131,176,154)')
				$('.triangle3, .square3').addClass('active1')
			}else {
				$('.triangle2, .triangle3').css('borderRight','2rem solid rgb(131,176,154)')
				$('.square2, .square3').css('background','rgb(131,176,154)')
				$('.triangle4, .square4').addClass('active1')
			}
		}
		$('.triangle1, .square1').on('click', stepOne)
		$('.triangle2, .square2').on('click', stepTwo)
		$('.triangle3, .square3').on('click', stepThree)
		$('.triangle4, .square4').on('click', stepFour)
	}
})

//在被点击的标签下面插入相应的DOM
function addProcess() {
	var html = ''
	html += '<div class="connect"></div>'
	html += '<div class="process">'
	html += '	<img src="../img/night.png" class="img1" />'
	html += '	<div class="border">'
	html += '		<div class="triangle triangle1 active1"></div>'
	html += '		<div class="square square1 active1">杀手杀人</div>'
	html += '		<div class="text text1"><span class="number1"></span>号玩家被杀死，Ta的真实身份是<span class="role1"></span></div>'
	html += '		<img src="../img/day.png" class="img2" />'
	html += '		<div class="triangle triangle2"></div>'
	html += '		<div class="square square2">亡灵发表遗言</div>'
	html += '		<div class="triangle triangle3"></div>'
	html += '		<div class="square square3">玩家依次发言</div>'
	html += '		<div class="triangle triangle4"></div>'
	html += '		<div class="square square4">全民投票</div>'
	html += '		<div class="text text0"><span class="number2"></span>号玩家被投死，Ta的真实身份是<span class="role2"></span></div>'
	html += '	</div>'
	html += '</div>'
	return html
}
