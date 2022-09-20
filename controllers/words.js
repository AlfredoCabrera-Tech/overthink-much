const Words = require('../models/Words')
const User = require('../models/User')

module.exports = {
    timerWords: async (req,res) => {
        console.log(req.user)
        try{
            res.render('timerWords.ejs', {user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getWords: async (req,res)=>{
        try{
            const globalEntries = await Words.find()
            const everyName = await User.find({}, {"userName": 1})
            const wordsEntry = await Words.find({userId:req.user.id})

            let average = 0
            let lengths = []

            for(let i=0; i<globalEntries.length; i++){
                lengths.push(globalEntries[i].words.length)
            }
            
            let sum = lengths.reduce((ac,cu) => ac+cu,0)
            average = Number((sum/lengths.length).toFixed(2))

            res.render('words.ejs', {
                wordsEntry: wordsEntry,
                words: wordsEntry.words,
                globalEntries: globalEntries,
                everyName: everyName,
                average, average,
                user: req.user
            })
        }catch(err){
            console.log(err)
        }
    },
    createWords: async (req, res)=>{
        try{
            await Words.create({words: req.body.listOfWords.split(' '), userId: req.user.id})
            console.log('Words have been added!')
            res.redirect('/words')
        }catch(err){
            console.log(err)
        }
    },
    deleteWords: async (req, res)=>{
        console.log(req.body.wordIdFromJSFile)
        try{
            await Words.findOneAndDelete({_id:req.body.wordIdFromJSFile})
            console.log('Deleted Word')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    