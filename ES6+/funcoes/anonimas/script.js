
function adicionar(...numeros) {
	//só o function() é uma funçãoanonima, sem nome 
	// let total = numeros.reduce(function(total, proximo){ 
	// 	return total + proximo
	// });
	//ou
	//só o () => `{ é uma funçãoanonima, sem nome 
	let total = numeros.reduce((total, proximo) =>
		total + proximo
	);
	console.log("🚀 ~ total", total)
}

adicionar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);