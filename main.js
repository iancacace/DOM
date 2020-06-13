document.addEventListener ('DOMContentLoaded', function () {

const botonMas = document.querySelector('#mas')
const botonMenos = document.querySelector('#menos')
const sillas = document.querySelectorAll('.sillas')
let cuenta = 0
	
	document.onkeyup = function(event){teclas()}
	
	 function teclas(){
		if (event.key === 'Enter') {
			sumar()
			} if (event.key === 'Backspace') {
				 restar()
				 }
	}
	
	botonMas.onclick = function(){
		sumar()
		botonMas.blur()
	}
	botonMenos.onclick = function(){
		restar()
		botonMenos.blur()
	}

	function sumar(){
		sillas[cuenta-1].style = 'display: inline-block;'
		cuenta--	
	}
	function restar() {
		sillas[cuenta].style = 'display: none;'
		cuenta++
	}
})

/*for (var i = 0; i < sillas.length; i++) {
				sillas[i].style = 'display: none;'
			}
		*/