const fromAmountElement = document.querySelector('.amount');
const fromCurrencyElement = document.querySelector('.formCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');
function btn(){
	if(fromAmountElement.value == ""){
		alert("Please type your amount")
	}
}
//Array to populate the select tags with these  countries
const countries = [{code: "USD", name: "America Rs"},
	{code: "INR", name:"Indian Rs"},
	{code: "PKR", name:"Indian Rs"},
	{code: "CNY", name:"China Rs"},
	{code: "AFN", name:"Afghanistan Rs"},
	{code: "Italy", name:"Italy Rupees"},
	{code: "SAR", name:"Saudi Arabia Rs"},] ;

countries.forEach(country => {
const option1 = document.createElement('option');
const option2 = document.createElement('option');
option1.value = country.code;
option1.textContent = `${country.code} (${country.name})`;
fromCurrencyElement.appendChild(option1);
option2.value = country.code;
option2.textContent = `${country.code} (${country.name})`;
toCurrencyElement.appendChild(option2);
});

const getExchangeRate = async () =>{
	const amount = parseFloat(fromAmountElement.value);
	const fromCurrency = fromCurrencyElement.value;
	const toCurrency = toCurrencyElement.value;
	const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data  = await response.json();
      const conversionRate = data.rates[toCurrency]  ;
      const convertAmount = (amount * conversionRate).toFixed(2);
      resultElement.value = convertAmount;
      resultElement.textContent = `${amount} ${fromCurrency} = ${convertAmount} ${toCurrency}`

}
fromAmountElement.addEventListener('input', getExchangeRate);
fromCurrencyElement.addEventListener('change',getExchangeRate)   ;
toCurrencyElement.addEventListener('change',getExchangeRate);

