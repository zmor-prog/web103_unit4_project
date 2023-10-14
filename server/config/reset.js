import { pool } from "./database.js";
import './dotenv.js'
import customcarData from "../data/customcarData.js";

const createcustomcarTable=async ()=>{
    const createTableQuery=`
    DROP TABLE IF EXISTS customcar;
    CREATE TABLE IF NOT EXISTS customcar (
        id SERIAL PRIMARY KEY,
        exterior VARCHAR(255) NOT NULL,   
        roof VARCHAR(255) NOT NULL,
        wheels VARCHAR(255) NOT NULL,
        interior VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,        
    );
    `
    try{
        const res =await pool.query(createTableQuery)
        console.log('customcar table created successfully')
    }
    catch (err){
        console.error('Error creating customcar table',err)
    }
}
// Place customcar data into customcar table
const seedcustomcarTable=async () =>{
    await createcustomcarTable()
    customcarData.forEach((customcar)=>{
        const insertQuery={
            text:'Insert INTO customcar(exterior, roof, wheels, interior, image) VALUES ($1,$2,$3,$4,$5)'
        }

        const values = [
            customcar.exterior,            
            customcar.roof,
            customcar.wheels,
            customcar.interior
        ]

        pool.query(insertQuery,values,(err,res)=>{
            if (err){
                console.error(` Error inserting customcar ${customcar.id}`,err)
                return
            }

            console.log(`${customcar.title} added successfully!`)
        })

    })

}
seedcustomcarTable()