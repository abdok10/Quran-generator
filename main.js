let btn = document.querySelector('#new-quote') ;
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

function getAyah(value){
    fetch('http://api.alquran.cloud/v1/ayah/'+value)
    .then(response => response.json())
    .then(result => {
        let quran = result.data
        console.log(quran)
        quote.innerHTML = quran.text
        person.innerText = quran.surah.name
    })
}

btn.addEventListener('click' , _ =>{
    let number = Math.round(Math.random() * 6236)
    console.log(number)
    getAyah(number)
})