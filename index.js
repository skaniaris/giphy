const img = document.querySelector('img');
const search = document.querySelector('.searchButton');
const newGiph = document.querySelector('.newGiph')
let userSearch = document.querySelector('input').value; 

search.addEventListener("click", () => {
    userSearch = document.querySelector('input').value; 
    fetchGiph(userSearch);
})

newGiph.addEventListener("click", () => {
    fetchGiph(userSearch);
})

function fetchGiph(userData) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Uzy5d4Nn4IqcIXeMe7HJQAwJth88pQmF&s=${userData}`, {mode: "cors"})
        .then(response => response.json())
        .then(data => {
            img.src = data.data.images.original.url});
}
