const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser') // simplifies access to request body
const app = express()  // make express app
const port = process.env.PORT || 8081
const logfile = '/access.log'

// Automatic mailing
const fs = require('fs')
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')

// ADD THESE COMMENTS AND IMPLEMENTATION HERE 
// 1 set up the view engine
// 2 include public assets and use bodyParser
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request
// 6 respond with 404 if a bad URI is requested

console.log(process.env);

// 1 set up the view engine
app.set('views', path.resolve(__dirname, 'views')) // path to views
app.set('view engine', 'ejs') // specify our view engine

// 2 include public assets and use bodyParser
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
/* var accessLogStream = fs.createWriteStream(path.join(__dirname, logfile), { flags: 'a' })
app.use(logger('dev'))
app.use(logger('combined', { stream: accessLogStream }))

if (process.env.NODE_ENV === 'production') {
    app.get('*', function (req, res, next) {
    if (req.headers['x-forwarded-proto'] != 'https') {
      res.redirect('https://resumesite563.herokuapp.com/' + req.url)
    } else { next() }
  })
}
 */
// 4 http GET default page at /
app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render('index.ejs')
})

// 4 http GET /tic-tac-toe
app.get('/About', function (req, res) {
  res.render('About.ejs')
})

// 4 http GET /about
app.get('/Contact', function (req, res) {
  res.render('Contact.ejs')
})

app.get('/Upcoming', function (req, res) {
  res.render('Upcoming.ejs')
})

app.get('/Game', function (req, res) {
  res.render('Game.ejs')
})

app.get('/Calculate', function (req, res) {
  res.render('Calculate.ejs')
})

app.get('/Assassins', function (req, res) {
  res.render('Assassins.ejs')
})

app.get('/Gallery', function (req, res) {
  res.render('Gallery.ejs')
})

/* app.get('/test', function (req, res) {
  res.render('\\test\\test.ejs')
}) */
/* 
// 4 http GET /contact
app.get('/contact', function (req, res) {
  res.render('contact.ejs')
})
 */
// 5 http POST /contact
app.post('/Contact', function (req, res) {
  const name = req.body.name
  const email = req.body.email
  const mobile = req.body.mobile
  const subject = req.body.subject
  const mes = req.body.message
  const isError = false

  // logs to the terminal window (not the browser)
  const s = '\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + mobile + ' ' + subject + ' ' + mes +'\n'
  console.log(s)

/*   app.post('/contact', function (req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'nodemailertestinga03@gmail.com',
        pass: 'Amazon@123'
      }
    });
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: 's533708@nwmissouri.edu',
      subject: 'New message from contact form',
      text: s
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        res.render('contact-failure');
      }
      else {
        res.render('contact-success');
      }
      console.log('done')
    });
  }); */

   const mailOptions = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;', // sender address
    to: 's533708@nwmissouri.edu', // list of receivers
    subject: 'Message from Website Contact page', // Subject line
    text: s,
    err: isError
  }

  try {
/*     const auth = require('./config.json')
 */
    // create transporter object capable of sending email using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      port: 25,
      auth: {
        user: 'nodemailertestinga03@gmail.com',
        pass: 'Amazon@123'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('\nERROR: ' + error + '\n')
        window.alert("Error Occured")
/*         res.render('contact-error.ejs')
 */      } else {
        console.log('Sending email...')
        if (info) { console.log('\nres SENT: ' + info.res + '\n') }
        res.redirect('/');
        /*         res.render('contact-confirm.ejs')
 */      }
    })
  }
  catch (e) {
    console.log(e.message)
/*     res.render('contact-error.ejs')
 */  }
})
 
// 6 this will execute for all unknown URIs not specifically handled
app.get(function (req, res) {
  res.render('404')
})

// Listen for an application request on designated port
app.listen(port, function () {
  console.log('\nWeb app started and listening on http://localhost:' + port + '.')
  console.log('\nLogs will be sent to this terminal and ' + logfile + '.')
  console.log('\nKeep this open while serving, and use CTRL-C to quit.')
})
