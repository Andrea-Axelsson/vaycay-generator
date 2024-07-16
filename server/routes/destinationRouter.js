import { Router } from "express"
import { createDestination, getAllDestinations } from "../services/destinations.js"
import { saveTrip, deleteTrip } from "../services/saveTrip.js"
const router = Router()

//GET all destinations

router.get('/', getAllDestinations)

//POST new destination

router.post('/', async (req, res) =>{
    try{
        const newDestination = await createDestination(req.body)
        res.json({message: 'Destination created successfully', destination: newDestination})
    }catch(error){
        res.status(500).json({message: 'Error creating item', error: error.message})
    }
})

//Add to saved trips

router.post('/:id', async (req, res) =>{
    saveTrip(req, res)
})

//Delete saved trip

router.delete('/:id', async (req, res) =>{
    deleteTrip(req, res)
})


export default router