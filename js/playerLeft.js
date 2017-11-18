
//通过cookie获取玩家的数量及身份
var arrJoin = document.cookie
var arr = arrJoin.split(',')
var playerNumber = arr.length
//通过url获取已经死亡的玩家序号
var deadList = location.search.substr(1)
var arrDead = deadList.split(',')
var deadNumber = arrDead.length

//统计剩余玩家的数量与身份
var playerLeft = []
var police = 0
var killer = 0
var people = 0

statistic()
function statistic() {
	//生成一个包含所有玩家编号的数组
	for (var i = 0; i < playerNumber; i++) {
		playerLeft.push(i + 1)
	}
	//用新数组与已经死亡的玩家数组相减，得出剩余玩家的编号
	for (var i = playerLeft.length - 1; i >= 0; i--) {
		outloop:
	    for (var j = 0; j < deadNumber; j++) {
	        if (playerLeft[i] == arrDead[j]) {
	        	playerLeft.splice(i, 1)
	        	break outloop
	        }
	    }
	}
	//根据玩家编号计算得出剩余玩家的身份数量
	for (var i = 0; i < playerLeft.length; i++) {
		if (arr[playerLeft[i] - 1] == 1) {
			police += 1
		}else if (arr[playerLeft[i] - 1] == 2) {
			killer += 1
		}else {
			people += 1
		}
	}
}
