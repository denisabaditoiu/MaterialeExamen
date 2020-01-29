const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'andreeab'
const DB_PASSWORD = 'orice'

mysql.createConnection({
	user : DB_USERNAME,
	password : DB_PASSWORD
})
.then(async (connection) => {
	await connection.query('DROP DATABASE IF EXISTS tw_exam')
	await connection.query('CREATE DATABASE IF NOT EXISTS tw_exam')
})
.catch((err) => {
	console.warn(err.stack)
})

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD,{
	dialect : 'mysql',
	logging: false
})

//de aici am decomentat si am facut validarile
let Author = sequelize.define('author', {
	name : {
		type:Sequelize.STRING,
		allowNull:false
	},
	email : {
	type:	Sequelize.STRING,
		allowNull:false,
		validate:{
			isEmail:true
		}
	},
	address : Sequelize.STRING,
	age : Sequelize.INTEGER
}, {
	timestamps: false
})
//pana aici era comentat

const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
	try{
		await sequelize.sync({force : true})
		for (let i = 0; i < 10; i++){
			let author = new Author({
				name : 'name ' + i,
				email : 'name' + i + '@nowhere.com',
				address : 'some address on ' + i + 'th street'
			})
			await author.save()
		}
		res.status(201).json({message : 'created'})
	}
	catch(err){
		console.warn(err.stack)
		res.status(500).json({message : 'server error'})
	}
})

app.get('/authors', async (req, res) => {
	// should get all authors
	try{
		let authors = await Author.findAll()
		res.status(200).json(authors)
	}
	catch(err){
		// console.warn(err.stack)
		res.status(500).json({message : 'server error'})		
	}
})

app.post('/authors', async (req, res) => {
	// TODO: implementați funcția
	// ar trebui să adauge un autor
	// numele și email-ul autorului nu pot fi vide
	// adresele autorilor pot fi vide
	// email-urile autorilor trebuie validate ca formă
	
	// REZOLVARE:
	//preiau body ul intal
	const author=req.body;
	try{
		await Author.create(author);
		// ma uit in rest.test.js ssa avd ce cere
		res.status(201).send({message:'created'});
	}catch(err){
		res.status(500).send({message:'server error'});
	}
	

	// TODO: implement the endpoint
	// should add an author
	// author names and emails cannot be empty
	// author addresses can be empty
	// author emails have to be validated as email addresses
	
})

app.listen(8080)

module.exports = app