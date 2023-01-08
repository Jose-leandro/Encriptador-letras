let btnCriptografar = document.querySelector(".criptografar__btn");

let iconeDeErro = document.querySelector(".erros__icone");

let btnDescriptografar = document.querySelector(".descriptografar__btn");

let inputDeResultadoDaEncriptacao = document.querySelector(".resultados_input");

let btnAreaDeResultado = document.querySelector(".resultados_btn");

let spanErro = document.querySelector(".erros__descricao");


function previnindoEventosDosBtns() {

	btnCriptografar.addEventListener("click", function (event) {
		event.preventDefault();
	});

	btnDescriptografar.addEventListener("click", function (event) {
		event.preventDefault();
	});

	btnAreaDeResultado.addEventListener("click", function (event) {
		event.preventDefault();
	});
}
previnindoEventosDosBtns();


function verificarSerHaCaracteresEspeciaisNoCampoCriptografar() {

	let inputCriptografar = document.querySelector(".criptografar__input").value;

	let regexParaCaracteresEspeciais = new RegExp("[!@#$%^&*~[_}=.>'+-]");

	let resultadoDaRegexParaCaracteresEspeciais = regexParaCaracteresEspeciais.test(inputCriptografar);

	return resultadoDaRegexParaCaracteresEspeciais;
}
verificarSerHaCaracteresEspeciaisNoCampoCriptografar();


function verificarSerHaNumerosNoCampoCriptografar() {

	let inputCriptografar = document.querySelector(".criptografar__input").value;

	let regexParaNumeros = new RegExp("[0-9]");

	let resultadoParaNumeros = regexParaNumeros.test(inputCriptografar);

	return resultadoParaNumeros;
}
verificarSerHaNumerosNoCampoCriptografar();


function acoesQueOcorreQuandoClicadoNoBntCriptografar() {

	let inputCriptografar = document.querySelector(".criptografar__input").value;

	inputDeResultadoDaEncriptacao.classList.add("areaDetransferencia");

	let textoCriptografado = criptografarPalavrasDigitadasNoCampoCriptografar(inputCriptografar);


	if (verificarSerHaCaracteresEspeciaisNoCampoCriptografar() == true) {
		console.log("erro")
		iconeDeErro.style.visibility = "visible";
		spanErro.style.visibility = "visible";
		iconeDeErro.classList.add("adicionarAnimacao");
		spanErro.textContent = "Não é permitido caracteres especiais ou números, apenas letras";

	} else if (verificarSerHaNumerosNoCampoCriptografar() == true) {
		console.log("erro")
		iconeDeErro.style.visibility = "visible";
		spanErro.style.visibility = "visible";
		iconeDeErro.classList.add("adicionarAnimacao");
		spanErro.textContent = "Não é permitido caracteres especiais ou números, apenas letras";

	} else {
		console.log("certo")
		iconeDeErro.style.visibility = "hidden";
		spanErro.style.visibility = "hidden";
		iconeDeErro.classList.remove("adicionarAnimacao");
		inputDeResultadoDaEncriptacao.value = textoCriptografado;
	}
}

// objetivo, ober o que for digitado no campo criptografar e realizar a criptografia do que foi digitado
function criptografarPalavrasDigitadasNoCampoCriptografar(textoDigitadoDoCampoCriptografa) {

	let inputCriptografar = document.querySelector(".criptografar__input").value;

	for (let i = 0; i < inputCriptografar.length; i++) {
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

function verificarSerHaCaracteresEspeciaisNoCampoDescriptografar() {

	let inputDescriptografar = document.querySelector(".descriptografar__input").value;

	let regexParaCaracteresEspeciais = new RegExp("[!@#$%^&*~[_}=.>'+-]");

	let resultadoDaRegexParaCaracteresEspeciais = regexParaCaracteresEspeciais.test(inputDescriptografar);

	return resultadoDaRegexParaCaracteresEspeciais;
}
verificarSerHaCaracteresEspeciaisNoCampoDescriptografar();


function verificarSerHaNumerosNoCampoDescriptografar() {

	let inputDescriptografar = document.querySelector(".descriptografar__input").value;

	let regexParaNumeros = new RegExp("[0-9]");

	let resultadoParaNumeros = regexParaNumeros.test(inputDescriptografar);

	return resultadoParaNumeros;
}
verificarSerHaNumerosNoCampoDescriptografar();


function acoesQueOcorreQuandoClicadoNoBntDescriptografar() {

	let inputDescriptografar = document.querySelector(".descriptografar__input").value;

	inputDeResultadoDaEncriptacao.classList.add("areaDetransferencia");

	let textoCriptografado = descriptografarPalavrasDigitadasNoCampoDescriptografar(inputDescriptografar);


	if (verificarSerHaCaracteresEspeciaisNoCampoDescriptografar() == true) {
		console.log("erro")
		iconeDeErro.style.visibility = "visible";
		spanErro.style.visibility = "visible";
		iconeDeErro.classList.add("adicionarAnimacao");
		spanErro.textContent = "Não é permitido caracteres especiais ou números, apenas letras";

	} else if (verificarSerHaNumerosNoCampoDescriptografar() == true) {
		console.log("erro")
		iconeDeErro.style.visibility = "visible";
		spanErro.style.visibility = "visible";
		iconeDeErro.classList.add("adicionarAnimacao");
		spanErro.textContent = "Não é permitido caracteres especiais ou números, apenas letras";

	} else {
		console.log("certo")
		iconeDeErro.style.visibility = "hidden";
		spanErro.style.visibility = "hidden";
		iconeDeErro.classList.remove("adicionarAnimacao");
		inputDeResultadoDaEncriptacao.value = textoCriptografado;
	}
}


// tem como função ober o que for digitado no campo descriptografar e realizar a descriptografia do que foi digitado
function descriptografarPalavrasDigitadasNoCampoDescriptografar(textoDigitadoDoCampoDescriptografa) {

	let inputDescriptografar = document.querySelector(".descriptografar__input").value;

	for (let i = 0; i < inputDescriptografar.length; i++) {
		console.log(i)
		if (inputDescriptografar.includes(textoDigitadoDoCampoDescriptografa)) {
			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replace("mxb", "u");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("gqt", "r");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("dfp", "c");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("wyz", "i");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("lnt", "e");

			textoDigitadoDoCampoDescriptografa = textoDigitadoDoCampoDescriptografa.replaceAll("hus", "o");
		}

	}
	return textoDigitadoDoCampoDescriptografa
}


// lógica responsável por enviar para área de transferência do usuário, o que foi criptografado ou descriptografado, quando clicado no botão colar
document.getElementById("clipboardCopy");
async function copiarParaAreaDeTransferencia() {
	let text = document.querySelector(".resultados_input").value;
	await navigator.clipboard.writeText(text);
	popupSucessoAoColar();
}


function popupSucessoAoColar() {
	let popup = document.querySelector(".popup__copiar");
	popup.classList.add("popup_animacao")
	popup.style.visibility = "visible";
}


function fecharPopupCopiar() {

	let xParaFecharPopup = document.querySelector(".copiar__fechar");

	xParaFecharPopup.addEventListener("click", function () {
		let popupCopiar = document.querySelector(".popup__copiar");
		popupCopiar.style.visibility = "hidden";
	});
}
fecharPopupCopiar();





