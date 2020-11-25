//spotcheck 1+2
// $.get('/randomWord')
//   .then(function (word) {
//     console.log(word)
//   })

// $.get('/sentiment/Ploy')
//   .then(function (result) {
//     console.log(result)
//   })




// $.get('/randomWord')
//   .then(function (word) {
//     // console.log(word)
//     return $.get(`/synonyms/${word}`)
//     //the return inside of a chained then allows us to return the resolve of the async code to the next then in the chain
//   })
//   .catch(function (error) { console.log(error) })
//   .then(function (synonyms) {
//     console.log(synonyms)
//   })
//   .catch(function (error) { console.log(error) })





// $.get('/randomWord')
//   .then(function (word) {
//     let synonymsPromise = $.get(`/synonyms/${word}`)
//     let sentimentPromise = $.get(`/sentiment/${word}`)
//     Promise.all([synonymsPromise, sentimentPromise])
//       .then(function (results) {
//         console.log(results)
//       })
//   })





// const printResults = function (word, synonyms, sentiment) {
//   console.log(`
//         The word ${word} has a 
//         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//         its synonyms are: ${synonyms}`
//   )
// }

// $.get('/randomWord')
//   .then(function (word) {
//     let synonymsPromise = $.get(`/synonyms/${word}`)
//     let sentimentPromise = $.get(`/sentiment/${word}`)
//     Promise.all([synonymsPromise, sentimentPromise])
//       .then(function (results) {
//         printResults(word, results[0], results[1])
//       })
//   })





// class APIManager {
//   fetch() {
//     return $.get('/data')
//   }
// }

// class Renderer {
//   render(dataPromise) {
//     dataPromise
//       .then(function (data) {
//         $("#body").append(`<div>${data}</div>`)
//       })
//   }
// }

// const apiManager = new APIManager()
// const renderer = new Renderer()

// let initialDataPromise = apiManager.fetch()
// renderer.render(initialDataPromise) //initial page load

// $(".some-thing").on("click", function () {
//   let newDataPromise = apiManager.fetch()
//   renderer.render(newDataPromise)
// })




//exrec1

// $.get('/randomWord')
//   .then(function (word) {
//     console.log(word)
//     return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
//   })
//   .then(function (book) {
//     console.log(book);
//   })


//exrec2

// $.get('/randomWord')
//   .then(function (word) {
//     console.log(word)
//     let randomBook = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
//     let randomGif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`)
//     Promise.all([randomBook, randomGif])
//       .then(function (result) {
//         $("body").append(`<div>${result[0].items[0].volumeInfo.title}</div>`)
//         $("body").append(`<iframe src="${result[1].data[0].embed_url}">`)
//       })
//   })
