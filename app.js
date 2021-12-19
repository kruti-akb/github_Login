const express = require('express')
let flash = require('connect-flash')
const http = require('http')
const session = require('express-session')
const morgan = require('morgan')
const app = express()

// pass passport object to auth functions
const passport=require('./config/passport') 

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({ resave:true, saveUninitialized: false,secret: 'h33ri3677476247623frfeeh' })) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash()) // use for flash messages stored in session
app.set('view engine', 'ejs')

var routes=require('./routes/authRoute.js')

app.use("/",routes)

app.listen(3080);