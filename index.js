require('dotenv').config()
const express = require('express')
const fs = require('fs')

const APP = express()

const PORT = process.env.PORT
const RESUME_PATH = process.env.RESUME_PATH

log(req) {

}

APP.get('/resume.pdf', (req,res) => {
	log(req)



	fs.readFile(RESUME_PATH, (err,fileContent) => {
		if(err) {

		} else {
			res.writeHead(200, {
				"Content-Type": "application/pdf"
			})

		  response.send(fileContent)
		}
	})
})

APP.use(function (req, res, next) {
	res.status(404)
	console.log(req.originalUrl)
  res.send("Error 404: File Not Found")
  })


APP.listen(PORT, () => {
  console.log(`Expense APP listening on port ${PORT}!`)
})
