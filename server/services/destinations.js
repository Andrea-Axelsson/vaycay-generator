import nedb from 'nedb-promises'

const destinationDb = new nedb ({filename: 'destination.db', autoload: true})



//Get all destinations

async function getAllDestinations (req, res) {
    try {
      const allDestinations = await destinationDb.find({});
      res.send(allDestinations);
    } catch (error) {
      res.status(500).send({ error: 'Could not get find destinations' });
    }
  };

//Create new destination

async function createDestination(dest){
    try{
        const newDest = await destinationDb.insert(dest)
        console.log(newDest)
    }catch(error){
        console.log(error)
    }
}



/* console.log("CREATE DEST SERVICE 1")
async function createDestination(dest){
    console.log("CREATE DEST SERVICE 2")
    try{
        console.log("CREATE DEST SERVICE 3")
        const newDestination = await destinationDb.insert(dest)
        console.log(newDestination)
        console.log("CREATE DEST SERVICE 4")
        return newDestination
    }catch(error){
        console.log(error)
        throw error
    }
} */

export {createDestination, getAllDestinations, destinationDb}