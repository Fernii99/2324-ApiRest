const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const mongodbRoute = 'mongodb+srv://asierfernandez:uPipu0HdLFQinW4o@workouts.40fapzu.mongodb.net/E4P1';

const workoutRouter = require("./routes/WorkoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

//user Bodyparser
app.use(bodyParser.json());

app.use("/api/workouts", workoutRouter);

async function start(){
    try{
        await mongoose.connect(mongodbRoute);
        app.listen(PORT, () =>{
            console.log(`API is listening on port ${PORT}`);
        });
        console.log(`Conexion con Mongo correcta`);
    }
    catch(error)
    {
        console.log(`Error al conectar con la base de datos: ${error.message}`);
    }
}

start();