const express = require('express')
const app = express()
app.listen(3000)
app.use(express.json());
let users=[
    {
    id: 21 ,
    name: "shivansh"
    },
    {
    id: 22 ,
    name: "shivansh1"
     },
    {
    id: 23,
    name: "shivansh3"
     }
    ];

 const userRouter=express.Router();
 app.use('/user',userRouter);

 userRouter
 .route('/')
 .get(getuser)
 .post(postuser)
 .patch(updateuser)
 .delete(deleteuser);

 userRouter
 .route('/:id').get(getuserbyid);

function getuser(req,res){
    console.log(req.query);
    res.send(users);
}

function postuser(req,res){
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data inserted",
        user:req.body
    })
}

function updateuser(req,res){
    console.log('req.body=>',req.body);
//update data in users opject
    let datatobeupdated=req.body;
    for(key in datatobeupdated){
        users[key]=datatobeupdated[key];
    }
    res.json({
        message:"updated",
        
    })
}

function deleteuser(req,res){
    users={};
    req.json({
        message:"data deleted"
    });
}
function getuserbyid(req,res){
    console.log(req.params.id);
    let paramId=req.params.id;
    let obj={};
    for(let i=0;i<users.length;i++){
        if(users[i]['id']==paramId){
            obj=users[i];
        }
    }
    res.json({
        message:"req recieved",
        data:obj
    });
}