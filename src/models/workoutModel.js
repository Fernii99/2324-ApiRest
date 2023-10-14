//Carga del modulo de mongoose
const mongoose = require('mongoose');

//Uso de los esquemas 
const { Schema } = mongoose;

//Creacion del objeto del esquema y sus atributos
const workoutSchema = new Schema({
    name: String,
    mode: String,
    equipment: [String],
});

//export del modulo para usarlo en otros ficheros
module.exports = mongoose.model('Workout', workoutSchema);