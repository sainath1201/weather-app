import express from 'express';
//const express = require('express')
import axios from 'axios';
import { request } from 'http';
//import bodyParser from 'body-parser';
const app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
const model = {
  temp:'',
  weatherdec : '',
  icon : '',
}
const port = process.env.port || 3000;
//app.use(bodyparser.urlencoded({extended:ture}));
app.use('/',express.static('client'));


app.post('/weather',(req,res)=>{
  const place = req.body.place;
  axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ place +'&appid=e8a0b01c8d1c637fe7b26ce03cd64464&units=metric',{
  })
  .then((response) => {
    if(response.data.error) {
      console.error('Not Logged In');
    } else {
      model.temp=response.data.main.temp; 
      model.weatherdec = response.data.weather[0].description;  
      model.icon = response.data.weather[0].icon;
      // console.log(model.temp);
      //console.log(model.temp);
      const imgurl = "http://openweathermap.org/img/wn/"+model.icon+"@2x.png";
      res.write( `<h1>the temperature in ${place} ${model.temp} degress Celcius<h1>`);
      res.write(`<p1>the weather is currently  ${model.weatherdec}</p>`)
      res.write(`<img src=${imgurl}>`);
      res.send();   
    }
  })
  .catch((err) => {
    console.error(err);  
  });    
})  
 

  
app.listen(port, () => {
  console.log(`Example app at ${port}`);
});