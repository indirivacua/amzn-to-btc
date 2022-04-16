let endpoint = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
fetch(endpoint)
	.then(response => response.json())
	.then(data => replacePrice(data))
	.catch(error => console.log(error))

function replacePrice(data) {
	const items = document.querySelectorAll('.a-text-price span');
	items.forEach((item) => {
		item.innerHTML = `${data.symbol} ${(parseFloat(item.innerHTML.slice(3))/parseFloat(data.price)).toFixed(10)}`
	});
}