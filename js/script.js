// // il prezzo del biglietto è definito in base ai km (0.21 € al km)
// // va applicato uno sconto del 20% per i minorenni
// // va applicato uno sconto del 40% per gli over 65.

   const kmPrice = 0.21;
   const discountUnder18 = 20/100;
   const discountOver65 = 20/100;
   
   let km, age, price;
   let message = 'il prezzo del tuo biglietto è: ';
   
   km = parseInt(prompt('quanti Km vuoi percorrere ?'));
   age = parseInt(prompt('Quanti anni hai ?'));
   
   if(isNaN(km) || isNaN(age)){
       location.reload();
   }
   
   price = kmPrice * km;
   
   if(age < 18){
       price = price - (price * discountUnder18);
   } else if(age >= 65){
       price = price- (price * discountOver65)
   }
   
   const ticketContainer = document.getElementById('ticket');
   ticketContainer.innerHTML = `
   Il prezzo del tuo biglietto è:
       <em>${price} $</em>
   `;
   

