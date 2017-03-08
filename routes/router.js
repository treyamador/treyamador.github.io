/**
 * 
 * 
 * ********************************************************* *
 *                  Features to add                          *
 * ********************************************************* *
 * 
 *      online resume
 *          most important for the time being
 *          download pdf format
 *      project demo video/audio
 *          game engine demo (w/ rainbow background)
 *          mixed/unmixed audio samples from drum machine
 *          webscraping data?
 *          java asteroids
 *      tech/philosophy blog posts
 *          script to update text files in post?
 *      add physics html5 game
 *          high scores on mongo db
 * 
 * 
 * ***********************************************************
 *                  Architecture
 * ***********************************************************
 * 
 *      main page 
 *          'Trey Amador' header in orange
 *          picture at desk
 *      orange (?) sidebar
 *          links for
 *              resume
 *              project demos
 *              blog posts
 *              game
 *              see source code
 *                  github.com/TreyAmador
 *      mean stack
 *          pug view engine
 *          mongo db
 *              user scores
 *              blog posts?
 * 
 * 
 * 
 */



var express = require('express')
var router = express()
var pug = require('pug')


router.get('/resume',function(req,res){
    res.send('Resume, download pdf')
})


router.get('/router',function(req,res){
    res.send('at router')
})


module.exports = router

