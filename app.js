import express from 'express';
const app = express();

app.get('/', (req, res)=>{
    res.send("Sever is running")
})

app.listen(3000 , ()=>{
    console.log("Server is running on port http://localhost:3000");
    
})

export default app;