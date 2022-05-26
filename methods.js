const express = require('express')
const app = express()
app.listen(3000)
app.use(express.json());

let users=[
    {
    "id": 21 ,
    "name": "shivansh"
    },
    {
    "id": 22 ,
    "name": "shivansh1"
     },
    {
    "id": 23,
    "name": "shivansh3"
     }
    ];

app.get('/users',(req,res)=>{
    console.log(req.query);
    res.send(users);
});

app.post('/users',(req,res)=>{
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data inserted",
        user:req.body
    })
});
//for update we use patch
app.patch('/users',(req,res)=>{
    console.log('req.body=>',req.body);
//update data in users opject
    let datatobeupdated=req.body;
    for(key in datatobeupdated){
        users[key]=datatobeupdated[key];
    }
    res.json({
        message:"updated",
        
    })
})

// to delete data
app.delete('/users',(req,res)=>{
    users={};
    req.json({
        message:"data deleted"
    });

})


app.get('/users/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("user id recieved");

})
app.get('/users/:username',(req,res)=>{
    console.log(req.params.username);
    console.log(req.params);
    res.send("user id recieved");

})



