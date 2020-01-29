let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp)

describe('authors', () => {
	describe('/POST authors', () => {
		before((done) => {
						chai.request(server)
				.get('/create')
				.send()
				.end((err, res) => {
					res.should.have.status(201)
					should.exist(res.body)
					res.body.should.have.property('message').eql('created')
					done()
				})			
		})
		it('it should return an error', (done) => {
			chai.request(server)
				.post('/authors')
				.send({name : '', email : '', address : ''})
				.end((err, res) => {
					res.should.have.status(500)
					should.exist(res.body)
					res.body.should.have.property('message').eql('server error')
					done()
				})
		})
		it('it should return an error', (done) => {
			chai.request(server)
				.post('/authors')
				.send({name : 'aaa', email : 'aaa', address : 'aaa'})
				.end((err, res) => {
					res.should.have.status(500)
					should.exist(res.body)
					res.body.should.have.property('message').eql('server error')
					done()
				})
		})
		it('it should add an author', (done) => {
			chai.request(server)
				.post('/authors')
				.send({name : 'test', email : 'test@b.com', address : 'test', age : 33})
				.end((err, res) => {
					res.should.have.status(201)
					should.exist(res.body)
					res.body.should.have.property('message').eql('created')
					done()
				})
		})
		it('result should be in get listing', (done) => {
			chai.request(server)
				.get('/authors')
				.end((err, res) => {
					res.should.have.status(200)
					should.exist(res.body)
					res.body.should.be.a('array')
					res.body.length.should.be.eql(11)
					done()
				})
		})
		it('result should be what we sent', (done) => {
			chai.request(server)
				.get('/authors')
				.end((err, res) => {
					res.should.have.status(200)
					should.exist(res.body)
					res.body.should.be.a('array')
					res.body.should.deep.include({id: 11, name : 'test', email : 'test@b.com', address : 'test', age : 33})
					done()
				})
		})		

	})
})

