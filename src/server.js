
const express = require('express')
const server = express()
const {
	pageLanding,
	pageStudy,
	pageGiveClasses,
	saveClasses
} = require('./pages')
//configurar o nunjuks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
	express: server,
	coCache: true
})
//início e config. do server
server
	//receber os dados da req.body
	.use(express.urlencoded({ extended: true }))
	//configurar arquivos estáticos (css, scripts, imagens)
	.use(express.static('public'))
	//rotas da aplicação
	.get('/', pageLanding)
	.get('/study', pageStudy)
	.get('/give-classes', pageGiveClasses)
	.post('/save-classes', saveClasses)
	//start do server
	.listen(5500)
