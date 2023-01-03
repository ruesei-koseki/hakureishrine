// isDoneは一回だけ実行する時用です
let isDone = 0;
	window.addEventListener('scroll', function () {
		
		// ターゲットの画面トップからの距離
		taeget_position = document.querySelector('.docho').getBoundingClientRect().top;
		
		// 画面トップからの距離から画面の高さより小さければ実行する
			if (taeget_position <= window.innerHeight && isDone !== 1) {
				isDone += 1;
				document.querySelector('.docho').classList.add('isAnimated')
				document.querySelector('.docho').classList.remove('preAnimated')
			}
            
		// ターゲットの画面トップからの距離
		taeget_position = document.querySelector('.dochoImage').getBoundingClientRect().top;
		
		// 画面トップからの距離から画面の高さより小さければ実行する
			if (taeget_position <= window.innerHeight && isDone !== 2) {
				isDone += 1;
				document.querySelector('.dochoImage').classList.add('isAnimated')
				document.querySelector('.dochoImage').classList.remove('preAnimated')
			}

	});

