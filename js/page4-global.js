
//获取玩家数量与身份，插入相应的标签
var arrJoin = document.cookie
var arr = arrJoin.split(',')

addHtmls()
function addHtmls() {
	for (i = 0; i < arr.length; i++) {
		$('main').append(addLabels(i))
	}
}

function addLabels(i) {
	var html = ''
	var a = fn()
	var b = i + 1
	html += '<div class="background">'
	html += 	'<p class="role">' + a + '</p>'
	html += 	'<div class="number">' + b + '号</div>'
	html += '</div>'
	return html
}

function fn() {
	if (arr[i] == 1) {
		return '警察'
	}else if (arr[i] == 2) {
		return '杀手'
	}else {
		return '平民'
	}
}
