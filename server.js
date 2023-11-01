
// require('express-async-errors');

import express from 'express';
// const morgan = require('morgan')
// const express = require('express')
// const cors = require('cors')
// const dotenv = require('dotenv')
// dotenv.config()
import 'express-async-errors';
import 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './client/build')));

// app.use(express.static(path.join(__dirname, './client/build')))
app.use(cors())
app.use(express.json())
app.use(express.static('public'));


// if (process.env.NODE_ENV !== 'production') {
//     app.use(morgan('dev'))
// }
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});


//mongodb connection


import mongoose from 'mongoose'
import { dirname } from 'path';
import { connect } from 'http2';
// const mongoose = require('mongoose')
// import morgan from 'morgan';
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(console.log('connected'))
const UserSchema = new mongoose.Schema({
    Secrateriat: String,
    HouseHoldHead: String,
    Volunteer: String,


})
const Data = mongoose.model('Data', UserSchema)
const UserSchema1 = new mongoose.Schema({
    Secrateriat: String,
    HouseHoldHead: String,
    Volunteer: String,


})
const Data2 = mongoose.model('Data2', UserSchema1)
const UserSchema2 = new mongoose.Schema({
    headName: String,
    Adhar: String,
    checkbox: String,
    Volunteer: String,
    Secrateriat: String

})
const user = mongoose.model('User', UserSchema2)


app.post('/', function (req, res) {
    const name = req.body.vilName;
    console.log(req.body.vilName)
    const maxTimeInMilliseconds = 20000;

    Data.find({ Secrateriat: name }).maxTimeMS(maxTimeInMilliseconds)
        .then((data) => {
            const uniqueVolunteerNames = new Set();

            data.forEach((item) => {
                uniqueVolunteerNames.add(item.Volunteer);
            })
            const uniqueVolunteerNamesArray = [...uniqueVolunteerNames];

            res.json(uniqueVolunteerNamesArray)
            // console.log(uniqueVolunteerNamesArray)


        })
        .catch((err) => {
            console.log(err)
        })




});
app.post('/household', function (req, res) {
    req.body.currentName
    const maxTimeInMilliseconds = 20000;

    Data.find({ Volunteer: req.body.currentName }).maxTimeMS(maxTimeInMilliseconds).then((data) => {
        const uniqueHouseHoldNames = new Set();


        data.forEach((item) => {

            uniqueHouseHoldNames.add(item.HouseHoldHead);
        })
        const uniqueHouseHoldNamesArray = [...uniqueHouseHoldNames];
        res.json(uniqueHouseHoldNamesArray)



    })
        .catch((err) => {
            console.log(err)
        })
})
app.post('/user', function (req, res) {
    // console.log(req.body.values.Adhar)
    const { headName, Adhar, checkbox, Secrateriat, Volunteer } = req.body.values;
    const maxTimeInMilliseconds = 20000;

    user.create({ Secrateriat, Volunteer, headName, Adhar, checkbox })
    Data.deleteOne({ HouseHoldHead: headName }).maxTimeMS(maxTimeInMilliseconds).then((data) => {
        console.log(data.length)
    })
    res.json('success')
})

app.post('/Reports', function (req, res) {
    const maxTimeInMilliseconds = 20000;

    Data.find({}).maxTimeMS(maxTimeInMilliseconds).then((data) => {



        const volunteerCounts = {}; // Create an empty object to store volunteer counts

        data.forEach((item) => {
            const volunteerName = item.Volunteer;

            // Check if the volunteer name exists in the volunteerCounts object
            if (volunteerCounts[volunteerName]) {
                // If it exists, increment the count
                volunteerCounts[volunteerName]++;

            } else {
                // If it doesn't exist, initialize the count to 1
                volunteerCounts[volunteerName] = 1;
            }

        });
        res.json(volunteerCounts)
    })

})


const port = process.env.PORT || 5000;


app.listen(port, function () {

    console.log(`server running on port ${port}`)
})



