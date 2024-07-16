import nedb from 'nedb-promises'
import { destinationDb } from './destinations.js'

const savedTripsDb = new nedb ({filename: 'saved-trips.db', autoload: true})

//Save trip

async function saveTrip(req, res){

    const tripID = req.params.id

    try{
        console.log("searching for trip with id:", tripID)
        const trip = await destinationDb.findOne({_id: tripID})
        console.log("THE TRIP", trip)
        if(!trip){
            return res.status(404).json({message: "Trip not found"})
        }

        const saveNewTrip = await savedTripsDb.insert(trip)
        console.log("Trip added")
        res.status(201).json({message: "Trip added successfully", trip: saveNewTrip})
    }catch(error){
        console.error("Error adding new trip", error)
        res.status(500).json({message: "Error adding new trip", error: error.message})
    }

}

//Delete trip

async function deleteTrip(req, res){

    const tripID = req.params.id

    try{
        console.log("searching for trip with id:", tripID)
        const trip = await savedTripsDb.findOne({_id: tripID})
        console.log("THE TRIP", trip)
        if(!trip){
            return res.status(404).json({message: "Trip not found"})
        }

        const deleteNewTrip = await savedTripsDb.remove(trip)
        console.log("Trip Removed")
        res.status(201).json({message: "Trip removed successfully", trip: deleteNewTrip})
    }catch(error){
        console.error("Error deleting trip", error)
        res.status(500).json({message: "Error deleting trip", error: error.message})
    }

}

export {saveTrip, deleteTrip}