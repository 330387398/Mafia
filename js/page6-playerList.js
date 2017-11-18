
//根据玩家数量添加相应的标签，并写入编号和角色
addHtmls()
function addHtmls() {
	for (var i = 0; i < playerNumber; i++) {
		$('main').append(addLabels(i))
	}
}
function addLabels(i) {
	var html = ''
	var a = roleName(i)
	var b = i + 1
	html += '<div class="border">'
	html += '	<div class="label active">'
	html += '		<p class="role">' + a + '</p>'
	html += '		<div class="number">' + b + '号</div>'
	html += '	</div>'
	html += '	<div class="mark"></div>'
	html += '</div>'
	return html
}
function roleName(i) {
	if (arr[i] == 1) {
		return '警察'
	}else if (arr[i] == 2) {
		return '杀手'
	}else {
		return '平民'
	}
}


//根据已经死亡的玩家数量，判断当前游戏进度
judgeStep()
function judgeStep() {
	if (deadNumber%2 == 0) {
		$('title').html('玩家投票')
		$('header > div').html('请全体玩家进行投票')
		$('section1 > p').html('发言讨论结束，请各位玩家进行投票')
		$('section2 > p').html('请点击选择得票数最多的玩家，并进行确认')
	}else {
		noKillers()
	}
}
//如果游戏处于杀人阶段，则杀手标签无法被选中
function noKillers(){
	for(var i = 0; i < playerNumber; i++){
		if(arr[i] == 2){
			$('.label').eq(i).removeClass('active').on('click', function () {
				alert('请注意：杀手玩家不可以杀死自己！')
			})
		}
	}
}


//对于已经死亡的玩家，改变其标签样式
isDead()
function isDead() {
	for (var i = 1; i < deadNumber; i++) {
		$('.label').eq(arrDead[i] - 1).css('background', 'rgb(131,176,154)').removeClass('active').unbind('click')
	}
}


//设置本轮出局玩家的编号，并在用户点击标签时执行相应指令
var $chosen = 0
$('.label').on('click', function () {
	if ($(this).hasClass('active')) {
		$('.mark').css('opacity','0')
		$(this).siblings('.mark').css('opacity','1')
		$chosen = $(this).parent().index() + 1
	}
})


//点击确定按钮，判断本轮游戏是否结束，并进行相应的页面跳转
$('.decide').on('click', function () {
	if ($chosen == 0) {
		alert('请先点击选择相应的目标玩家，再进行确认')
	}else {
		if (arr[$chosen - 1] == 1) {
			police -= 1
		}else if (arr[$chosen - 1] == 2) {
			killer -= 1
		}else {
			people -= 1
		}
		if ((police == 0) || (killer == 0) || (people == 0) || (killer == (police + people))) {
			$('.modal-global').css('display','block')
			if (killer == 0) {
				$('.gameover').html('游戏结束。好人获胜！')
			}
		}else {
			window.location.href='./page5-diary.html' + '?' + deadList + ',' +$chosen
		}
	}
})

//当游戏结束，点击模态框中的确定按钮跳转页面
$('.sure').on('click',function(){
	window.location.href='./page7-result.html' + '?' + deadList + ',' +$chosen
})
