//express app that serves html files
require("dotenv").config();

const express = require('express');
const app = express();
const path = require('path');



// // Example login handler in your index.html script
// fetch('http://localhost:5000/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username: 'myUsername', password: 'myPassword' })
// })
// .then(res => res.json())
// .then(data => {
//     if (data.success) {
//         window.location.href = "success.html"; // Frontend handles the redirection
//     } else {
//         alert(data.error); // Show error message on frontend
//     }
// });


// app.set('view engine', 'ejs');

// const BACKEND_URL = 'http://localhost:5000/';

// const fetch = (...args) =>
//     import ('node-fetch').then(({default: fetch}) => fetch(...args));

// app.get('/', async function (req, res) {
//     const options = {
//         method: 'GET'
//     };
//     fetch(BACKEND_URL, options)
//          .then(res => res.json())
//          .then(json => console.log(json))
//          .catch(err => console.error('error:'+ err));
//     try{
//         let response = await fetch(BACKEND_URL, options);
//         response = await response.json();
//         res.render('index.html', response)
//     }catch (err) {
//         console.log(err);
//         res.status(500).json({msg: 'Internal server error.'});
//     }
    
// });
app.use(express.static(path.join(__dirname,'templates')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname +'/templates/success.html'));
});

app.listen(3000,function(){
    console.log('frontend listening on port 3000')
});