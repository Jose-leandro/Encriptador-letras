


var btnCriptografar = document.querySelector(".criptografar__btn");

var iconeDeErro = document.querySelector(".iconeInformacao");

var inputDescriptografar = document.querySelector(".descriptografar__input").value;

var btnDescriptografar = document.querySelector(".descriptografar__btn");

var inputDeResultadoDaEncriptacao =  document.querySelector(".resultados_input");

var btnAreaDeResultado = document.querySelector(".resultados_btn");

var spanErro = document.querySelector(".campo_erro");


function verificarSerHaCaracteresEspeciaisNoCampoCriptografar() {

	var inputCriptografar = document.querySelector(".criptografar__input").value;

	var regexParaCaracteresEspeciais  = new RegExp("[!@#$%^&*~[_}=.>'+-]");

	var	resultadoDaRegexParaCaracteresEspeciais = regexParaCaracteresEspeciais.test(inputCriptografar);


	return resultadoDaRegexParaCaracteresEspeciais;
}
verificarSerHaCaracteresEspeciaisNoCampoCriptografar();


function verificarSerHaNumerosNoCampoCriptografar() {

	var inputCriptografar = document.querySelector(".criptografar__input").value;

	var regexParaNumeros  = new RegExp("[0-9]");

	var	resultadoParaNumeros = regexParaNumeros.test(inputCriptografar);

	return resultadoParaNumeros;
}
verificarSerHaNumerosNoCampoCriptografar();


function acoesQueOcorreQuandoClicadoNoBntCriptografar() {
	
	btnCriptografar.addEventListener("click", function (event) {
		event.preventDefault();
	});

	var inputCriptografar = document.querySelector(".criptografar__input");

	inputDeResultadoDaEncriptacao.classList.add("areaDetransferencia");

	var textoCriptografado = logicaDaCriptografar(inputCriptografar.value);


	if(verificarSerHaCaracteresEspeciaisNoCampoCriptografar() == true) {
		console.log("erro")
		iconeDeErro.classList.add("adicionarAnimacao");
		spanErro.textContent = "Não é permitido caracteres especiais ou números, apenas letras";

	}else if(verificarSerHaNumerosNoCampoCriptografar() == true) {
		console.log("erro")
		iconeDeErro.classList.add("adicionarAnimacao");
		spanErro.textContent = "Não é permitido caracteres especiais ou números, apenas letras";

	}else {
		console.log("certo")
		iconeDeErro.classList.remove("adicionarAnimacao");
		inputDeResultadoDaEncriptacao.value = textoCriptografado;
	}
}


// tem como função ober o que for digitado no campo criptografar e realizar a criptografia do que foi digitado
function logicaDaCriptografar(textoDigitadoDoCampoCriptografa) {

	var inputCriptografar = document.querySelector(".criptografar__input").value;
	
	for (var i = 0; i < inputCriptografar.length; i++) {
		console.log(i)
		if (inputCriptografar.includes(textoDigitadoDoCampoCriptografa)) {
			textoDigitadoDoCampoCriptografa = textoDigitadoDoCampoCriptografa.replace("u", "mxb");

			textoDigitadoDoCampoCriptografa = textoDigitadoDoCampoCriptografa.replaceAll("r", "gqt");

			textoDigitadoDoCampoCriptografa = textoDigitadoDoCampoCriptografa.replaceAll("c", "dfp");

			textoDigitadoDoCampoCriptografa = textoDigitadoDoCampoCriptografa.replaceAll("i", "wyz");

			textoDigitadoDoCampoCriptografa = textoDigitadoDoCampoCriptografa.replaceAll("e", "lnt");

			textoDigitadoDoCampoCriptografa = textoDigitadoDoCampoCriptografa.replaceAll("o", "hus");
		}

	}
	return textoDigitadoDoCampoCriptografa
}

function verificarSerHaCaracteresEspeciaisENumerosNoCampoDescriptografar() {

	var expressaoRegular =	"(?!.*[0-9])(?!.*[ !@#$%^&*~[_}=.>'(+-])";

	var objetoRegex  = new RegExp( expressaoRegular, 'g');

	var	resultado = objetoRegex.exec(inputCriptografar);

	return resultado;
}

function acoesQueOcorreQuandoClicadoNoBntDescriptografar() {

	btnDescriptografar.addEventListener("click", function (event) {
		event.preventDefault();
	});

	inputDeResultadoDaEncriptacao.classList.add("areaDetransferencia");
	

	var textoDescriptografado = logicaDaDescriptacao(inputDescriptografar);


	if(verificarSerHaCaracteresEspeciaisENumerosNoCampoDescriptografar == true) {
		alert(erro)
		iconeDeErro.classList.add("adicionarAnimacao");
		spanErro.textContent = "Não digite caracteres especiais ou numeros, apenas letras";

	}else {

		iconeDeErro.remove("adicionarAnimacao")
		inputDeResultadoDaEncriptacao.textContent = textoDescriptografado;
	}
}

// possui uma função de descriptografar o texto que foi digitado para ser criptografado 
function logicaDaDescriptacao(textoDigitadoDoCampoDescriptografa) {

	for (var i = 0; i < textoDigitadoDoCampoDescriptografa.length; i++) {
		if (textoDigitadoDoCampoDescriptografa.includes(textoDigitadoDoCampoDescriptografa)) {
			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replace("mxb", "u");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("gqt", "r");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("dfp", "c");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("wyz", "i");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("lnt", "e");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("hus", "o");
		}
	}
	return textdescrip
}

btnAreaDeResultado.addEventListener("click", function (event) {
	event.preventDefault();
});

// lógica responsável por enviar para área de transferência do usuário, o que foi criptografado ou descriptografado, quando clicado no botão colar
document.getElementById("clipboardCopy");
async function colar() {
	let text = document.querySelector(".resultados_input").value;
	await navigator.clipboard.writeText(text);
	alert("o conteúdo foi copiado para sua área de transferência");
}




