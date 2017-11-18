
//将各类角色的剩余人数写入页面的相应位置
roleNumber()
function roleNumber() {
	$('.police').html(police)
	$('.killer').html(killer)
	$('.people').html(people)
}
	

//如果用户强制结束游戏，则重置页面样式
reset()
function reset() {
	if (deadNumber == 1) {
		$('.border').css('display','none')
	}
}


//根据游戏进行的天数，添加相应数量的标签
addHtmls()
function addHtmls() {
	var a = Math.floor(deadNumber/2)
	for (var i = 0; i < a - 1; i++) {
		$('main').append(addLabels(a))
	}
}
function addLabels(i) {
	var html = ''
	html += '<div class="border">'
	html += '	<p class="row">第 ' + i + ' 天</p>'
	html += '	<div class="time">'
	html += '		<p>夜晚：<span class="number"></span>号玩家被杀死，Ta的真实身份是<span class="role"></span></p>'
	html += '		<p class="day">白天：<span class="number"></span>号玩家被投死，Ta的真实身份是<span class="role"></span></p>'
	html += '	</div>'
	html += '</div>'
	return html
}

//依次向标签中添加玩家的序号和身份
setNumber()
function setNumber() {
	for (var i = 1; i < deadNumber; i++) {
		$('.number').eq(i-1).html(arrDead[i])
		if (arr[arrDead[i] - 1] == 1) {
			$('.role').eq(i-1).html('警察')
		}else if (arr[arrDead[i] - 1] == 2) {
			$('.role').eq(i-1).html('杀手')
		}else {
			$('.role').eq(i-1).html('平民')
		}
	}
	if (deadNumber%2 ==0) {
		$('.day').eq(deadNumber/2-1).css('display','none')
	}
}
