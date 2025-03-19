// function changes(){
//     // document.getElementById("change").innerHTML = [`"Be yourself; everyone else is already taken." , "So many books, so little time." , "You only live once, but if you do it right, once is enough."`];

//     let index  = 0;

//     let quotes = ["Be yourself; everyone else is already taken." , "So many books, so little time." , "You only live once, but if you do it right, once is enough."];


//         document.getElementById("change").innerHTML = quotes[index];
        
//         index++;
       
//     };



    


// document.getElementById("changed").addEventListener("click",changes)





const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt"
];

function changeQuote() {
    const quoteElement = document.querySelector(".quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

changeQuote(); // Load first quote