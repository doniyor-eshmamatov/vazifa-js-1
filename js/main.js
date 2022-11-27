var yourMoney = +prompt('Sayohat uchun mo`ljallagan pulingizni yozing');
var displayResult = document.querySelector('.text');

var priceTicket = 500;  // dollar
var priceHotel = 250;   // dollar
var priceMuseum = 120;  // Euro

var priceTicketToSum = 11225 * priceTicket;  // convert dollar to sum
var priceHotelToSum = 11225 * priceHotel;   // convert dollar to sum
var priceMuseumToSum = 11686 * priceMuseum;  // convert euro to sum

var allPrice = priceHotelToSum + priceTicketToSum + priceMuseumToSum;

if (allPrice <= yourMoney) {
    displayResult.textContent = 'Oq yo`l Alisher';
}

else {
    displayResult.textContent = 'Afsuski sizda yetarlicha mablag` yo`q';
}