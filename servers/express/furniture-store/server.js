const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



// app.get('/priceCheck/:name', function(req, res){
//   let name = request.params.name
// 	    let priceObj = {price: null}
// 	    for(let obj of store) {
// 	        if(obj.name === name) {
// 	            priceObj = {price: obj.price}
// 	        }
// 	    }
// 	    res.send(priceObj)
// })



const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function(request, response){
  let name = request.params.name
  let price = {price: null}
  let item = store.find(item => item.name === name)
  if(item){
      price.price = item.price
  }
  response.send(price)
})

app.get('/buy/:name', function(request, response) {
  let name = request.params.name
  for(let obj of store) {
      if(obj.name === name) {
          obj.inventory -= 1
          response.send(`Congrats! You've just bought ${obj.name} for ${obj.price}$. There are ${obj.inventory} left in stock.`)
      }
  }
  response.end()
})



const port = 3000
app.listen(port, function(){
    console.log(`Server is up and running smoothly on port ${port}`)
})