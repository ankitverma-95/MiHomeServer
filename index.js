// // server.js
const express = require('express');
const { MongoClient, ObjectId, CURSOR_FLAGS } = require("mongodb");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

console.log('')

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Replace the uri string with your connection string.
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);


// async function run() {
//     try {
//       // Connect to the "insertDB" database and access its "haiku" collection
//       const database = client.db("carrer-connect");
//       const haiku = database.collection("user");
      
//       // Create a document to insert
//       const doc = {
//         title: "Record of a Shriveled Datum",
//         content: "No bytes, no problem. Just insert a document, in MongoDB",
//       }
//       // Insert the defined document into the "haiku" collection
//       const result = await haiku.insertOne(doc);
//       // Print the ID of the inserted document
//       console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     } finally {
//        // Close the MongoDB client connection
//       await client.close();
//     }
//   }
//   // Run the function and handle any errors
// run().catch(console.dir);

client.connect().then(() => {
    console.log("Connected to MongoDB");  
  //   try {
      
  //     client.db('renthouse').collection('tenant').insertMany( 
  //       [{
  //         "roomNumber": "1",
  //         "rent": "3325",
  //         "dob": "1994-11-14",
  //         "name": "Griffie Howley",
  //         "contact": "2564756131",
  //         "aadharNumber": "6138792912"
  //       }, {
  //         "roomNumber": "2",
  //         "rent": "7941",
  //         "dob": "1985-06-08",
  //         "name": "Abrahan Haughey",
  //         "contact": "2468358880",
  //         "aadharNumber": "6889001346"
  //       }, {
  //         "roomNumber": "3",
  //         "rent": "9941",
  //         "dob": "1989-12-31",
  //         "name": "Meredith Stairmond",
  //         "contact": "3929310872",
  //         "aadharNumber": "2602965812"
  //       }, {
  //         "roomNumber": "4",
  //         "rent": "9324",
  //         "dob": "2001-01-21",
  //         "name": "Madeleine Petrolli",
  //         "contact": "3658759836",
  //         "aadharNumber": "8772402660"
  //       }, {
  //         "roomNumber": "5",
  //         "rent": "2025",
  //         "dob": "1981-07-18",
  //         "name": "Dona Clay",
  //         "contact": "8027553946",
  //         "aadharNumber": "6902921326"
  //       }, {
  //         "roomNumber": "6",
  //         "rent": "1019",
  //         "dob": "1998-06-10",
  //         "name": "Austin Weepers",
  //         "contact": "0852759290",
  //         "aadharNumber": "2583413813"
  //       }, {
  //         "roomNumber": "7",
  //         "rent": "2680",
  //         "dob": "1993-03-16",
  //         "name": "Ainslee Shedd",
  //         "contact": "3824857251",
  //         "aadharNumber": "7444082030"
  //       }, {
  //         "roomNumber": "8",
  //         "rent": "2108",
  //         "dob": "1991-10-14",
  //         "name": "Agace Livezley",
  //         "contact": "3301791336",
  //         "aadharNumber": "8411974375"
  //       }, {
  //         "roomNumber": "9",
  //         "rent": "1487",
  //         "dob": "1992-10-13",
  //         "name": "Thaxter Elby",
  //         "contact": "6368156287",
  //         "aadharNumber": "2887606204"
  //       }, {
  //         "roomNumber": "10",
  //         "rent": "7858",
  //         "dob": "1986-03-15",
  //         "name": "Ken Reynolds",
  //         "contact": "3551319146",
  //         "aadharNumber": "1345116942"
  //       }, {
  //         "roomNumber": "12",
  //         "rent": "8730",
  //         "dob": "1995-01-17",
  //         "name": "Lucinda Beernaert",
  //         "contact": "8386791543",
  //         "aadharNumber": "2534404784"
  //       }, {
  //         "roomNumber": "13",
  //         "rent": "2192",
  //         "dob": "1991-04-06",
  //         "name": "Ian Giamuzzo",
  //         "contact": "8590456005",
  //         "aadharNumber": "4173550871"
  //       },
  //       {
  //         "roomNumber": "20",
  //         "rent": "1487",
  //         "dob": "1992-10-13",
  //         "name": "Thaxter Elby",
  //         "contact": "6368156287",
  //         "aadharNumber": "2887606204"
  //       }, {
  //         "roomNumber": "21",
  //         "rent": "7858",
  //         "dob": "1986-03-15",
  //         "name": "Ken Reynolds",
  //         "contact": "3551319146",
  //         "aadharNumber": "1345116942"
  //       },]
  //     );

  //     client.db('renthouse').collection('room').insertMany( 
  //       [{
  //         "roomNumber": "1",
  //         "price": "3723",
  //         "availability": "1/17/2024",
  //         "tenantName": "Juliann Aynold",
  //         "tenantContact": "6120085645",
  //         "floor": "First floor"
  //       }, {
  //         "roomNumber": "2",
  //         "price": "4103",
  //         "availability": "5/19/2024",
  //         "tenantName": "Barnett Darrigoe",
  //         "tenantContact": "9210301587",
  //         "floor": "First floor"
  //       }, {
  //         "roomNumber": "3",
  //         "price": "6014",
  //         "availability": "9/10/2024",
  //         "tenantName": "",
  //         "tenantContact": "",
  //         "floor": "First floor"
  //        } ,{
  //         "roomNumber": "4",
  //         "price": "9936",
  //         "availability": "2/28/2024",
  //         "tenantName": "Jolynn Moger",
  //         "tenantContact": "3269283369",
  //         "floor": "First floor"
  //       }, {
  //         "roomNumber": "5",
  //         "price": "3885",
  //         "availability": "2/10/2024",
  //         "tenantName": "Angele Perrone",
  //         "tenantContact": "4482815683",
  //         "floor": "First floor"
  //       }, {
  //         "roomNumber": "6",
  //         "price": "3157",
  //         "availability": "1/30/2024",
  //         "tenantName": "Frasquito Eddow",
  //         "tenantContact": "7882441368",
  //         "floor": "third floor"
  //       }, {
  //         "roomNumber": "7",
  //         "price": "5089",
  //         "availability": "12/30/2023",
  //         "tenantName": "",
  //         "tenantContact": "",
  //         "floor": "third floor"
  //       }, {
  //         "roomNumber": "8",
  //         "price": "4071",
  //         "availability": "12/11/2023",
  //         "tenantName": "Ethelyn Perroni",
  //         "tenantContact": "4796901981",
  //         "floor": "third floor"
  //       }, {
  //         "roomNumber": "9",
  //         "price": "5924",
  //         "availability": "6/25/2024",
  //         "tenantName": "",
  //         "tenantContact": "",
  //         "floor": "First floor"
  //       }, {
  //         "roomNumber": "10",
  //         "price": "7114",
  //         "availability": "1/9/2024",
  //         "tenantName": "Patrice Laurenz",
  //         "tenantContact": "5181783740",
  //         "floor": "third floor"
  //       }, {
  //         "roomNumber": "20",
  //         "price": "2831",
  //         "availability": "10/31/2023",
  //         "tenantName": "Des Sillwood",
  //         "tenantContact": "6809484078",
  //         "floor": "First floor"
  //       }, {
  //         "roomNumber": "22",
  //         "price": "3313",
  //         "availability": "7/7/2024",
  //         "tenantName": "Roth Bodimeade",
  //         "tenantContact": "2947428676",
  //         "floor": "third floor"
  //       }, {
  //         "roomNumber": "11",
  //         "price": "7114",
  //         "availability": "1/9/2024",
  //         "tenantName": "",
  //         "tenantContact": "",
  //         "floor": "third floor"
  //       }, {
  //         "roomNumber": "12",
  //         "price": "2831",
  //         "availability": "10/31/2023",
  //         "tenantName": "Des Sillwood",
  //         "tenantContact": "6809484078",
  //         "floor": "First floor"
  //       }, {
  //         "roomNumber": "13",
  //         "price": "3313",
  //         "availability": "7/7/2024",
  //         "tenantName": "",
  //         "tenantContact": "",
  //         "floor": "third floor"
  //       },]
  //     );

  //     client.db('renthouse').collection('meter').insertMany( 
  //       [{
  //         "roomNumber": "1",
  //         "readingDate": "2005-06-06",
  //         "electricityBill": "446",
  //         "previousReading": "731",
  //         "currentReading": "96307"
  //       }, {
  //         "roomNumber": "2",
  //         "readingDate": "2020-10-30",
  //         "electricityBill": "96357",
  //         "previousReading": "739",
  //         "currentReading": "333"
  //       }, {
  //         "roomNumber": "3",
  //         "readingDate": "2023-01-29",
  //         "electricityBill": "43528",
  //         "previousReading": "17",
  //         "currentReading": "78854"
  //       }, {
  //         "roomNumber": "4",
  //         "readingDate": "2016-01-12",
  //         "electricityBill": "09870",
  //         "previousReading": "05959",
  //         "currentReading": "64359"
  //       }, {
  //         "roomNumber": "5",
  //         "readingDate": "2009-02-24",
  //         "electricityBill": "295",
  //         "previousReading": "0",
  //         "currentReading": "3434"
  //       }, {
  //         "roomNumber": "6",
  //         "readingDate": "2012-05-31",
  //         "electricityBill": "7798",
  //         "previousReading": "1198",
  //         "currentReading": "1390"
  //       }, {
  //         "roomNumber": "7",
  //         "readingDate": "2009-08-25",
  //         "electricityBill": "3185",
  //         "previousReading": "76",
  //         "currentReading": "255"
  //       }, {
  //         "roomNumber": "8",
  //         "readingDate": "2008-03-28",
  //         "electricityBill": "23243",
  //         "previousReading": "13",
  //         "currentReading": "89700"
  //       }, {
  //         "roomNumber": "9",
  //         "readingDate": "2022-03-17",
  //         "electricityBill": "488",
  //         "previousReading": "371",
  //         "currentReading": "2599"
  //       }, {
  //         "roomNumber": "10",
  //         "readingDate": "2014-07-23",
  //         "electricityBill": "801",
  //         "previousReading": "42",
  //         "currentReading": "444"
  //       }, {
  //         "roomNumber": "11",
  //         "readingDate": "2016-09-02",
  //         "electricityBill": "51",
  //         "previousReading": "471",
  //         "currentReading": "31951"
  //       }, {
  //         "roomNumber": "12",
  //         "readingDate": "2012-02-12",
  //         "electricityBill": "3814",
  //         "previousReading": "04308",
  //         "currentReading": "83466"
  //       },]
  //     );

  //     client.db('renthouse').collection('maintenance').insertMany( 
  //       [{
  //         "payeeName": "Frans Haliburn",
  //         "roomNumber": "1",
  //         "description": "Digital enterostomy exam",
  //         "amount": "126"
  //       }, {
  //         "payeeName": "Claudell Pratten",
  //         "roomNumber": "2",
  //         "description": "Multisource radiosurgery",
  //         "amount": "85570"
  //       }, {
  //         "payeeName": "Kaiser Albarez",
  //         "roomNumber": "3",
  //         "description": "Testicular les destruct",
  //         "amount": "15576"
  //       }, {
  //         "payeeName": "Oswald Critchell",
  //         "roomNumber": "4",
  //         "description": "Perirectal excision",
  //         "amount": "5548"
  //       }, {
  //         "payeeName": "Farand Heales",
  //         "roomNumber": "5",
  //         "description": "Decompression chamber",
  //         "amount": "37502"
  //       }, {
  //         "payeeName": "Leodora Arkwright",
  //         "roomNumber": "6",
  //         "description": "Chest cage bone biopsy",
  //         "amount": "93260"
  //       }, {
  //         "payeeName": "Olin Vasilyevski",
  //         "roomNumber": "7",
  //         "description": "Transureth prostatectomy",
  //         "amount": "7"
  //       }, {
  //         "payeeName": "Frasquito Creavin",
  //         "roomNumber": "8",
  //         "description": "Muscle trnsfr/transplant",
  //         "amount": "303"
  //       }, {
  //         "payeeName": "Lidia Relton",
  //         "roomNumber": "9",
  //         "description": "Relaxation of scar",
  //         "amount": "65777"
  //       }, {
  //         "payeeName": "Chrisse Gluyas",
  //         "roomNumber": "10",
  //         "description": "Hemilaryngectomy",
  //         "amount": "51251"
  //       }, {
  //         "payeeName": "Saxe Prinn",
  //         "roomNumber": "11",
  //         "description": "Lobectomy of lung NEC",
  //         "amount": "1"
  //       }, {
  //         "payeeName": "Eolande Kubecka",
  //         "roomNumber": "12",
  //         "description": "Epiglottidectomy",
  //         "amount": "14"
  //       }, {
  //         "payeeName": "Amalita Zylbermann",
  //         "roomNumber": "13",
  //         "description": "Dx ultrasound-thorax NEC",
  //         "amount": "72"
  //       }, {
  //         "payeeName": "Vonny Senton",
  //         "roomNumber": "14",
  //         "description": "Construction ear auricle",
  //         "amount": "9512"
  //       }, {
  //         "payeeName": "Skell De la Eglise",
  //         "roomNumber": "15",
  //         "description": "Perc abltn lung les/tiss",
  //         "amount": "6353"
  //       }]
  //     );

  //     client.db('renthouse').collection('billing').insertMany( 
  //       [{
  //         "roomNumber": "1",
  //         "payeeName": "Emalee Ciobotaro",
  //         "dateOfPayment": "2018-07-29",
  //         "dateTillRent": "6/18/2024",
  //         "payment": "386",
  //         "balance": "67924"
  //       }, {
  //         "roomNumber": "2",
  //         "payeeName": "Pennie Skeermer",
  //         "dateOfPayment": "2021-02-15",
  //         "dateTillRent": "11/1/2023",
  //         "payment": "486",
  //         "balance": "8"
  //       }, {
  //         "roomNumber": "3",
  //         "payeeName": "Prissie Halladay",
  //         "dateOfPayment": "2017-06-07",
  //         "dateTillRent": "5/25/2024",
  //         "payment": "700",
  //         "balance": "50119"
  //       }, {
  //         "roomNumber": "4",
  //         "payeeName": "Rheta Ulyet",
  //         "dateOfPayment": "2021-09-06",
  //         "dateTillRent": "9/7/2024",
  //         "payment": "83729",
  //         "balance": "53498"
  //       }, {
  //         "roomNumber": "5",
  //         "payeeName": "Wright Mowat",
  //         "dateOfPayment": "2017-11-21",
  //         "dateTillRent": "2/3/2024",
  //         "payment": "150",
  //         "balance": "5"
  //       }, {
  //         "roomNumber": "6",
  //         "payeeName": "Corri Mosconi",
  //         "dateOfPayment": "2018-12-21",
  //         "dateTillRent": "7/3/2024",
  //         "payment": "10",
  //         "balance": "0686"
  //       }, {
  //         "roomNumber": "7",
  //         "payeeName": "Harley Hazeltine",
  //         "dateOfPayment": "2016-07-01",
  //         "dateTillRent": "4/19/2024",
  //         "payment": "5",
  //         "balance": "68"
  //       }, {
  //         "roomNumber": "8",
  //         "payeeName": "Guthry Bratten",
  //         "dateOfPayment": "2019-06-12",
  //         "dateTillRent": "9/2/2024",
  //         "payment": "6",
  //         "balance": "7526"
  //       }, {
  //         "roomNumber": "9",
  //         "payeeName": "Danny Szwarc",
  //         "dateOfPayment": "2012-01-27",
  //         "dateTillRent": "10/20/2023",
  //         "payment": "8",
  //         "balance": "6371"
  //       }, {
  //         "roomNumber": "10",
  //         "payeeName": "Morganica Wardhaw",
  //         "dateOfPayment": "2023-09-18",
  //         "dateTillRent": "10/21/2023",
  //         "payment": "0211",
  //         "balance": "1"
  //       },
  //       {
  //         "roomNumber": "33",
  //         "payeeName": "Danny Szwarc",
  //         "dateOfPayment": "2012-01-27",
  //         "dateTillRent": "10/20/2023",
  //         "payment": "83",
  //         "balance": "6371"
  //       }, {
  //         "roomNumber": "20",
  //         "payeeName": "Morganica Wardhaw",
  //         "dateOfPayment": "2023-09-18",
  //         "dateTillRent": "10/21/2023",
  //         "payment": "0211",
  //         "balance": "122"
  //       }
  //     ]
  //     );
  //  } catch (e) {
  //     console.log(e);
  //  }

}).catch((e) => {
    console.log("Error connecting to MongoDB", e);
})


// Get Room
async function getRoom() {
  try {
    const database = client.db("renthouse");
    return database.collection('room').find({}).toArray((err, result) => {
      if (err) {
        return err;
      } else {
        console.log(result);
        return JSON.stringify(result);
      }
    })

  } catch(Error) {
    throw Error;
  }
}

async function getTenant() {
  try {
    const database = client.db("renthouse");
    return database.collection('tenant').find({}).toArray((err, result) => {
      if (err) {
        return err;
      } else {
        console.log(result);
        return JSON.stringify(result);
      }
    })

  } catch(Error) {
    throw Error;
  }
}

async function getMeter() {
  try {
    const database = client.db("renthouse");
    return database.collection('meter').find({}).toArray((err, result) => {
      if (err) {
        return err;
      } else {
        console.log(result);
        return JSON.stringify(result);
      }
    })

  } catch(Error) {
    throw Error;
  }
}

async function getBilling() {
  try {
    const database = client.db("renthouse");
    return database.collection('billing').find({}).toArray((err, result) => {
      if (err) {
        return err;
      } else {
        console.log(result);
        return JSON.stringify(result);
      }
    })

  } catch(Error) {
    throw Error;
  }
}

async function getMaintenance() {
  try {
    const database = client.db("renthouse");
    return database.collection('maintenance').find({}).toArray((err, result) => {
      if (err) {
        return err;
      } else {
        console.log(result);
        return JSON.stringify(result);
      }
    })

  } catch(Error) {
    throw Error;
  }
}





// User Login email and password
async function login(req, res) {
  // req.body.email, req.body.password
  const user = req.body;
  try {   
    await client.connect();
    // Get the database and collection on which to run the operation
    const database = client.db("renthouse");
    const users = database.collection("user");
    
    // const idToFind = '60d5f47b8d1b2c1a4c8e4d72';
    const getUser = await users.findOne({
      emailId: user.email,
      password: user.password
    })

    if(!getUser) {
      return res.status(401).json({
        status: "failed",
        message:
          "Invalid email or password. Please try again with the correct credentials.",
      });
    }

    res.status(200).json({
      status: "success",
      // data: [],
      message: "You have successfully logged in.",
    });

    
  } catch(error) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  } finally {
    res.end();
    // await client.close();
  }
}



// // User login email and password closing

// // company login email and password opening
// async function getCompany(email, password) {
//   try {   
//     await client.connect();
//     // Get the database and collection on which to run the operation
//     const database = client.db("carrer-connect");
//     const companys = database.collection("company");
    
//     const idToFind = '60d5f47b8d1b2c1a4c8e4d72';
//     const company = await companys.findOne({
//       email: email,
//       password: password
//       });

      

//     if (company) {
//       console.log('company found:', company);
//     } else {
//       throw new Error("company not found")
//       // console.log('No student matches the provided ID.');
//     }
    
//   } catch(Error) {
//     throw Error
//   }
//    finally {
//     await client.close();
//   }
// }
// // company login email and password closing

// // college login email and password opening
// async function getCollege(email, password) {
//   try {   
//     await client.connect();
//     // Get the database and collection on which to run the operation
//     const database = client.db("carrer-connect");
//     const colleges = database.collection("college");
    
//     const idToFind = '60d5f47b8d1b2c1a4c8e4d72';
//     const college = await colleges.findOne({
//       email: email,
//       password: password
//       });

      

//     if (college) {
//       console.log('college found:', college);
//     } else {
//       throw new Error("college not found")
//       // console.log('No student matches the provided ID.');
//     }
    
//   } catch(Error) {
//     throw Error
//   }
//    finally {
//     await client.close();
//   }
// }
// college login email and password closing

async function registerUser(user) {
  try {
    await client.connect();
    const database = client.db('renthouse');
    const users = database.collection('user');
    const result = users.insertOne(user);
    return result.insertedId;
  } catch(err) {
    return Error(err);
  } 
}

async function addRoom(room) {
  try {
    await client.connect();
    const database = client.db("renthouse");
    const rooms = database.collection("room");
    console.log(room);
    const result = await rooms.insertOne(room);
    return result.insertedId;

  } catch(err) {
    return Error(err);
  }
  finally {
    // await client.close();
  }
}

async function addTenant(tenant) {
  try {
    await client.connect();
    const database = client.db("renthouse");
    const tenants = database.collection("tenant");
    console.log(tenant);
    const result = await tenants.insertOne(tenant);
    return result.insertedId;

  } finally {
    // await client.close();
  }
}

async function addBilling(billing) {
  try {
    await client.connect();
    const database = client.db("renthouse");
    const billings = database.collection("billing");
    console.log(billing);
    const result = await billings.insertOne(billing);
    return result.insertedId;

  } finally {
    // await client.close();
  }
}

async function addMeter(meter) {
  try {
    await client.connect();
    const database = client.db("renthouse");
    const meters = database.collection("meter");
    console.log(meter);
    const result = await meters.insertOne(meter);
    return result.insertedId;

  } finally {
    // await client.close();
  }
}

async function addMaintenance(maintenance) {
  try {
    await client.connect();
    const database = client.db("renthouse");
    const maintenances = database.collection("maintenance");
    console.log(maintenance);
    const result = await maintenances.insertOne(maintenance);
    return result.insertedId;

  } finally {
    // await client.close();
  }
}

async function addfield(studentId, field) {
  try {
    // Connect to the MongoDB server
    await client.connect();
    const database = client.db("carrer-connect");
    const students = database.collection("student");

    // Update the document by adding a new key-value pair
    const result = await students.updateOne(
      { _id: new ObjectId(studentId) },
      { $set: field }
    );

    if (result.matchedCount === 0) {
      console.log('No document found with the provided ID.');
    } else {
      console.log('Document updated successfully:', result.modifiedCount);
    }
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});


app.get("/room", (req, res) => {
  getRoom().then((rooms) => {
    // console.log(rooms);
    res.send(rooms);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.get("/tenant", (req, res) => {
  getTenant().then((rooms) => {
    // console.log(rooms);
    res.send(rooms);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.get("/meter", (req, res) => {
  getMeter().then((rooms) => {
    // console.log(rooms);
    res.send(rooms);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.get("/billing", (req, res) => {
  getBilling().then((rooms) => {
    // console.log(rooms);
    res.send(rooms);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.get("/maintenance", (req, res) => {
  getMaintenance().then((rooms) => {
    // console.log(rooms);
    res.send(rooms);
  }).catch(err => {
    res.status(500).send(err);
  })
})



app.post("/room/add", (req, res) => {
  addRoom(req.body).then((rid) => {
    res.send(rid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/tenant/add", (req, res) => {
  addTenant(req.body).then((tid) => {
    res.send(tid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/billing/add", (req, res) => {
  addBilling(req.body).then((bid) => {
    res.send(bid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/meter/add", (req, res) => {
  // const id = req.params.id
  addMeter(req.body).then((mid) => {
    res.send(mid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/maintenance/add", (req, res) => {
  // const id = req.params.id
  addMaintenance(req.body).then((mid) => {
    res.send(mid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/user/register", (req, res) => {
  registerUser(req.body).then((uid) => {
    res.send(uid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/user/login", (req, res) => {
  login(req, res);
})



// app.post("/company/:id/field/add", (req, res) => {
//   const id = req.params.id
//   addfield(id, req.body).then(() => {
//     res.send('add successfully '+id);
//   }).catch(err => {
//     res.status(500).send(err);
//   })
// })

// app.post("/companylogin", (req, res) => {
//   getCompany(req.body.email, req.body.password).then(() => {
//     res.send('company found ');
//   }).catch(err => {
//     res.status(500).send(err);
//   })
// })

// app.post("/collegelogin", (req, res) => {
//   getCollege(req.body.email, req.body.password).then(() => {
//     res.send('college found ');
//   }).catch(err => {
//     res.status(500).send(err);
//   })
// })

// app.post("/college/:id/field/add", (req, res) => {
//   const id = req.params.id
//   addfield(id, req.body).then(() => {
//     res.send('add successfully '+id);
//   }).catch(err => {
//     res.status(500).send(err);
//   })
// })

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});