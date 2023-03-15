// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


const shoppingList = ['frutta', 'pasta', 'verdura', 'sugo', 'dolci'];

let indice = 0;
while (indice < shoppingList.length) {
    document.querySelector("ul").innerHTML += `<li>${shoppingList[indice]}</li>`
    indice++
}