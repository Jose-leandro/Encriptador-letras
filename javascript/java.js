var textarea = document.querySelector(".textarea");
var textareadescrip = document.querySelector(".segundotextarea");
var textareacolar = document.querySelector(".terceirotextarea");
var imagem = document.querySelector(".imagem");

var botao1 = document.querySelector(".botao3");
botao1.addEventListener("click", function(event){
    event.preventDefault();
});

function clicarbotaocrip() {  
	imagem.style.visibility="hidden";
	var nadaenco = document.querySelector(".infor");
	nadaenco.textContent ="";
	var digitalgo = document.querySelector(".seginfor");
	digitalgo.textContent = "";
	var textcriptografado = criptografar(textarea.value);
	textareacolar.value = textcriptografado;
}

function criptografar(textcrip) {
	
	var textarea = document.querySelector(".textarea").value;
	 
	for(var i=0; i < textarea.length; i++) {
		if(textcrip.includes(textarea)) {
		textcrip = textcrip.replace("a", "mxb");

		textcrip = textcrip.replaceAll("r", "gqt");
	
		textcrip = textcrip.replaceAll("c", "dfp");

		textcrip = textcrip.replaceAll("i", "wyz");
	
		textcrip = textcrip.replaceAll("e", "lnt");
	
		textcrip = textcrip.replaceAll("o", "hus");
	}
			
	}
return textcrip
}

var botao2 = document.querySelector(".botao2");
botao2.addEventListener("click", function(event){
    event.preventDefault();
});

function clicarbotaodes() {  
	
	imagem.style.visibility= "hidden";
	var nadaenco = document.querySelector(".infor");
	nadaenco.textContent = "";
	var digitalgo = document.querySelector(".seginfor");
	digitalgo.textContent = "";
	var textdescriptografado = descriptografar(textareadescrip.value);
	textareacolar.value = textdescriptografado;
}

function descriptografar(textdescrip) {
	var textareadescrip = document.querySelector(".segundotextarea").value;

	for(var i=0; i < textareadescrip.length; i++) {
		if(textdescrip.includes(textareadescrip)) {
			textdescrip = textdescrip.replace("mxb", "a");
	
			textdescrip = textdescrip.replaceAll("gqt", "r");
		
			textdescrip = textdescrip.replaceAll("dfp", "c");
	
			textdescrip = textdescrip.replaceAll("wyz", "i");
		
			textdescrip = textdescrip.replaceAll("lnt", "e");
		
			textdescrip = textdescrip.replaceAll("hus", "o");
		}
}
return textdescrip
}

var botao1 = document.querySelector(".botao1");
botao1.addEventListener("click", function(event){
    event.preventDefault();
});

document.getElementById("clipboardCopy");
async function colar() {
	let text = document.querySelector(".terceirotextarea").value;
	await navigator.clipboard.writeText(text);
	alert("o conteúdo foi copiado para sua área de transferência");
}




