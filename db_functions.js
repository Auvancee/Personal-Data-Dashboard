const fs = require('fs')
const { json } = require('stream/consumers')

const readDb = (dbName = 'db.json') => {
    // read json obj
    const data = fs.readFileSync(dbName, 'utf-8')
    // parse json from json to object and return it
    const convertedData = JSON.parse(data)
    return convertedData 
} 


const writeDb = (obj, dbName = 'db.json') => {
    // check that a user has passed in an object
    if (!obj) {
        return
    } 

    try {     // convert our object to the JSON format
        let convertedData = JSON.stringify(obj)
        fs.writeFileSync(dbName, convertedData)
        console.log("Save Successful")
        
            // save JSON to our JSON database
    } catch (error) {
        console.log('Failed To Save Data\n', error.message)
    }


}

module.exports = {
    readDb, writeDb
}