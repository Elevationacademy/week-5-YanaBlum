// const express = require('express')
// const app = express()
// const path = require('path')

// app.use(express.static(path.join(__dirname, 'dist')))
// app.use(express.static(path.join(__dirname, 'node_modules')))

// app.get('/', function (request, response) {
//   console.log("Someone has come into the server. Brace yourselves.")
//   response.send("Ending the cycle, thanks for visiting")
// })


//Routes
// app.get('/maps', function (request, response) {
//   response.send("Here's some stuff related to maps")
// })

// app.get('/shoobi', function (request, response) {
//   response.send("This here is the shoobi *route*")
// })


//spot check1

// app.get('/life', function(request, response){
//   response.send("42")
// })



//params
// app.get('/landing/:username', function (request, response) {
//   response.send(`Hi there, ${request.params.username}`)
// })
// localhost:3000/landing/Tilda


//spot check2

// const users = {
//   tilda: "You've done a wonderful job",
//   riva: "You need to improve your form, but good perseverance",
//   jeremy: "You're incredible"
// }

// app.get('/users/:userID', function(request, response){
//   response.send(users[request.params.userID])
// })




// app.get('/routeWithOptionalParameters', (request, response) => {
//   let params = request.query
//   response.send(params)
// })
///add   ?{KEY}={VALUE}
//http://localhost:3000/routeWithOptionalParameters/?name=robert



//spot check3

// app.get('/details', (request, response) => {
//   let params = request.query
//   console.log(params.city)

//   response.send(params)
// })

//http://localhost:3000/details/?zipcode=6863155&city=Ankh Morpork&middleName=Wilfred 



//spot check4

// const data = {
//   8112: {
//       title: "Name of the Wind",
//       author: "Patrick Rothfuss"
//   },
//   9121: {
//       title: "The Catcher in the Rye",
//       author: "J.D. Salinger"
//   },
//   1081: {
//       title: "The Giver",
//       author: "Lois Lowry"
//   }
// }


// app.get('/books/:bookID', function(request, response){
//   let bookID = request.params.bookID
//   response.send(data[bookID])
// })






// const port = 3000
// app.listen(port, function(){
//     console.log(`Running server on port ${port}`)
// })
