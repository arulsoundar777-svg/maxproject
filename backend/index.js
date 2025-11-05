const express= require("express")
const jwt=require("jsonwebtoken")


const bcrypt=require("bcryptjs")
const cors = require("cors")

const app = express()
const port = 6200

app.use(cors({
  origin: ["http://localhost:3000", "https://maxproject.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
  credentials: true
}));app.use(express.json())

const user=[]
const secretkey='your secretkey'


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://arulsoundar777_db_user:max123@cluster0.7mahony.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const address=client.db("items").collection("women")
    const usersCollection =client.db("demo").collection("users")

   app.post("/maxsignup",async(req,res)=>{
      const data=req.body;
      const result=await usersCollection.insertOne(data);
      res.send(result);
    })
  app.post("/max",async(req,res)=>{
      const data=req.body;
      const result=await address.insertOne(data);
      res.send(result);
    })
  app.get("/getmax",async(req,res)=>{
    const sdata=address.find()
    const result=await sdata.toArray();
    res.send(result);
  })
   app.get("/getsignup",async(req,res)=>{
    const sdata=usersCollection.find()
    const result=await sdata.toArray();
    res.send(result);
  })
  app.get("/getmaxproid/:id",async(req,res)=>{
    const id=req.params.id;
    const obj={_id:new ObjectId(id)}
    const result=await address.findOne(obj);
    res.send(result);
  })
    app.get("/getuserid/:id",async(req,res)=>{
    const id=req.params.id;
    const obj={_id:new ObjectId(id)}
    const result=await usersCollection.findOne(obj);
    res.send(result);
  })
  app.delete("/del/:id",async(req,res)=>{
    const id=req.params.id;
    const obj={_id:new ObjectId(id)};
    const result=await address.deleteOne(obj);
    res.send(result);
  })
    app.delete("/delsignup/:id",async(req,res)=>{
    const id=req.params.id;
    const obj={_id:new ObjectId(id)};
    const result=await usersCollection.deleteOne(obj);
    res.send(result);
  })
  app.patch("/maxedit/:id",async(req,res)=>{
    const id=req.params.id;
    const obj={_id:new ObjectId(id)};
    const data=req.body;

    const updatedata={$set:{...data}};
    const options={upsert:true};
    const result=await address.updateOne(obj,updatedata,options);
    res.send (result);
  })
  app.patch("/maxsignedit/:id",async(req,res)=>{
    const id=req.params.id;
    const obj={_id:new ObjectId(id)};
    const data=req.body;

    const updatedata={$set:{...data}};
    const options={upsert:true};
    const result=await usersCollection.updateOne(obj,updatedata,options);
    res.send (result);
  })

  

  app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log("Username:", username);
    // console.log("Password:", password);

    const existingUser = await usersCollection.findOne({ username });
    // console.log("Existing user:", existingUser);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("Hashed password:", hashedPassword);

    const result = await usersCollection.insertOne({ username, password: hashedPassword });
    // console.log("Insert result:", result);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});


    app.post('/login', async (req, res) => {
        try {
          const { username, password } = req.body;
    // console.log("Username:", username);
    // console.log("Password:", password);

          const user = await usersCollection.findOne({ username });
          console.log(user)
          if (!user) {
            return res.status(401).json({ message: "User not found. Please register." });
          }

          const isValidPassword = await bcrypt.compare(password, user.password);
          // console.log(isValidPassword)
          if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
          }

          const token = await jwt.sign({ username }, secretkey, { expiresIn: '1h' });
          // console.log(token)
          res.json({ token });
          console.log("User logged in:", username);
        } catch (error) {
          res.status(500).json({ message: "Error logging in", error });
        }
    });

    app.post('/verifyToken', (req, res) => {
        const token = req.headers.authorization?.split(' ')[1]; 
        if (!token) {
          return res.status(401).json({ valid: false, message: 'No token provided' });
        }

        jwt.verify(token, secretkey, (err, decoded) => {
          if (err) {
            return res.status(401).json({ valid: false, message: 'Invalid or expired token' });
          }
          res.json({ valid: true, username: decoded.username });
        });
});



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Register route
// app.post('/register',async(req,res)=>{
//     const {username,password}=req.body;
//     const hashedPassword= await bcrypt.hash(password,10);
//     users.push({username,password:hashedPassword});
//     res.sendStatus(201);
//     console.log("User registered Successfully")
// })

// Login route
// app.post('/login',async(req,res)=>{
//     const {username,password}=req.body;
//     const user=users.find((us)=>us.username===username)
//     if(user){
//        const isValiduser=await bcrypt.compare(password,user.password,);
//        if(isValiduser){
//             const token=await jwt.sign({username},secretKey,{expiresIn:'1hr'})
//             res.json({ token });
//             console.log("login Successfully");
//        }else{
//             res.status(401).json({message:'Invalid Credential,since Password Does not match'})
//        }

//     }else{
//       res.status(401).json({message:'Invalid Credential,since User Not Found,SignUp to Login plz'})
//     }
// })


app.listen(port,()=>{
    console.log("Port running on",port)
})
