x = 0

//while = Enquanto
while (x < 10) {
	document.write("</br>o valor do X é: " + x);
	x++
}

document.write("</br></br></br>o valor do X agora é: " + x + "</br></br>");

//For = Para
for (var a = 0; a < 10; a++) {
	document.write("</br>o valor do X é: " + a);
}

//Switch

document.write("</br></br></br>o valor do X vai ser 0");
document.write("</br>o valor do X vai ser 1");
document.write("</br>o valor do X vai ser 2</br></br>");

function eventSwitch() {
	x = prompt("Digita um numero")

	switch (x) {
		case "0":
			alert("O x vale 0 !")
			break;
		case "1":
			alert("O x vale 1 !")
			break;
		case "2":
			alert("O x vale 2 !")
			break;

		default:
			alert("Não existe isso");
			break;

	}
}