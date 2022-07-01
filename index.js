const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
.then(()=>{
    console.log("Connection Open")
})
.catch(err=>{
    console.log("Error")
    console.log(err)
})
const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
})

const Movie = mongoose.model('Movie',movieSchema);
// const troy =  new Movie({title:"Troy",year:2001,score:8.1,rating:"G"})

// Movie.insertMany([
//     { title:"Alien",year:2004,score:8,rating:"A"},
//     { title:"Boyz",year:2002,score:6.5,rating:"A"},
//     { title:"Diabolical",year:2007,score:7,rating:"G"},
//     { title:"Speak",year:2009,score:4,rating:"G"},
//     { title:"Laping",year:2010,score:5.5,rating:"R"},
//     { title:"Cars",year:2015,score:6.5,rating:"R"},
//     { title:"Revenge",year:2002,score:7,rating:"B"},
//     { title:"Little",year:2001,score:9,rating:"G"},
//     { title:"Troy",year:2005,score:7,rating:"A"},
//     { title:"Archiles",year:2006,score:9,rating:"B"},
//     { title:"Moana",year:2008,score:7.6,rating:"C"},
// ])
// .then(data=>{
//     console.log("It worked")
//     console.log(data);
// })