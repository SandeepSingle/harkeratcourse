const express = require('express')
const zod = require("zod")
const app = express()
const port = 3000

app.use(express.json())

const schema = zod.array(zod.number());
app.post('/sum', (req, res) => {

  const array = req.body.arr

  const response = schema.safeParse(array)
  console.log(typeof(array))

  if(!response.success)
  {
    res.status(411).json("Wront input")
  }

  ans = array.map((i)=> {this.i+2})

  res.send(response)
})

app.post('/',(req,res) => {
    console.log(req.body.name)
    if(req.body.name=="Sandeep")
    {
        res.send({"Name":"Sandeep"})
    }
    else
    {
        res.status(411).send("Different Name")
    }
    

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})