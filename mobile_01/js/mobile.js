window.onload = function(){
	pag4();
	loadingPag();
	music();
	function pag4(){
		var shareButton = document.getElementsByClassName('pag4-share')[0];
		var sharPag = document.getElementsByClassName('pag4-sharePag')[0];
		sharPag.style.display = 'none';
		shareButton.onclick = function(){
			sharPag.style.display = 'block';
		}
		sharPag.onclick = function(){
			sharPag.style.display = 'none';
		}
	}
	function loadingPag(){
		var loadPag = document.getElementsByClassName('loading-pag')[0];
		var pag1 = document.getElementsByClassName('pag1')[0];
		pag1.style.display="none";
		setTimeout(function(){
			loadPag.style.display = 'none';
			pag1.style.display = 'block';
		},5000);
		var startButton = document.getElementsByClassName('pag1-button')[0];
		var pag2 = document.getElementsByClassName('pag2')[0];
		pag2.style.display="none";
		var pag3 =document.getElementsByClassName('pag3')[0];
		pag3.style.display = 'none';
		startButton.onclick = function(){
			pag1.style.display="none";
			pag2.style.display="block";
			setTimeout(function(){
				pag3.style.display = 'block';
			},28000);
		}
		var pag3Promise = document.getElementsByClassName('pag3-promise')[0];
		var pag3PromiseName = document.getElementsByClassName('pag3-promiseName')[0];
		var pag3Close = document.getElementsByClassName('pag3-close')[0];
		var pag3PromiseNB = document.getElementsByClassName('pag3-button')[0];
		var pag3Iput = document.getElementsByClassName('pag3-input')[0];
		var pag4 = document.getElementsByClassName('pag4')[0];

		pag4.style.display = 'none';
		pag3PromiseName.style.display = 'none';
		pag3Promise.onclick = function(){
			pag3PromiseName.style.display = 'block';
		}
		pag3Close.onclick = function(){
			pag3PromiseName.style.display = 'none';
		}
		pag3PromiseNB.onclick = function(){
		var inputValue = pag3Iput.value;
		var userName = document.getElementsByClassName('pag4-userName')[0];
		var userDate = document.getElementsByClassName('pag4-userDate')[0];
		var t = new Date();
			if(inputValue){
				pag3PromiseName.style.display = 'none';
				userName.innerHTML = inputValue;
				userDate.innerHTML = (t.getFullYear()%100)+'.'+(t.getMonth()+1)+'.'+t.getDate();
				pag4.style.display = 'block';
			}else{
				alert("姓名不能为空!");
			}
		}
	}
	function music(){
		var musicIco = document.getElementsByClassName('music-ico')[0];
		var musicAudio = document.getElementById('music-audio');
		musicAudio.addEventListener('pause',function(e){
			console.log( this.paused );
			musicIco.className = 'music-ico';
		});
		musicAudio.addEventListener('play',function(e){
			console.log( this.paused );
			musicIco.className = 'music-ico active';
		});
	}
}