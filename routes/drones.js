const express = require('express');
const Dron = require('../models/Drone.model');
const router = express.Router();

const Drone = require('../models/Drone.model')  // require the Drone model here

router.get('/drones', (req, res, next) => {
  
  Dron.find()        // Iteration #2: List the drones
  .then((response) => {      // ... your code here
      res.render("../views/drones/list.hbs", {response})
  })
  .catch((err) => console.log(err))
});

router.get('/drones/create', (req, res, next) => {

  res.render('../views/drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
   const name = req.body.name;
   const propellers = req.body.propellers;
   const maxSpeed = req.body.maxSpeed;

   Dron.create({
     name: name,
     propellers: propellers,
     maxSpeed: maxSpeed
   })
   .then(() => {
     res.redirect('/drones')
   })
   .catch((err) => console.log(err));
});

router.get('/drones/edit/:id', (req, res, next) => {

  Dron.findById(req.params.id)
  .then((response)=>{
  res.render('drones/update-form.hbs', {response})
  })
  .catch((err) => console.log(err))
});

router.post('/drones/edit/:id', (req, res, next) => {
  const nameE = req.body.name;
   const propellersE = req.body.propellers;
   const maxSpeedE = req.body.maxSpeed;
  
   Dron.findByIdAndUpdate(
     {id: req.body.id},
     {   
     name: nameE,
     propellers: propellersE,
     maxSpeed: maxSpeedE
   })

   .then((response)=>{
     res.redirect('/drones', {response})
   })
   .catch(() =>{
     res.render('drones/update-form.hbs')
   })
});

router.post('/drones/:id/delete', (req, res, next) => {
  
    Dron.findByIdAndDelete({id:req.params.id})
    .then((response) =>{ 
      res.redirect('/drones')
    })
});

module.exports = router;
