const http=require('http');
const fs=require('fs');
 
const server=http.createServer((req,res)=>{

    console.log('request done');
    
    //res.setHeader('Content-Type','plain-text');
    //res.write('hello');
   res.setHeader('Content-Type','text/html');
   let path='./views'
   switch(req.url){
       case '/':
           res.statusCode=200;
           path+='/index.html'
           break;
        case '/about':
            res.statusCode=200;
            path+='/about.html'
            break;
        case '/about-me7888d':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            res.statusCode=404;
            path+='/404.html'
            break;
        
   }

    //res.write('<h1>hello</h1>');
    fs.readFile(path,(err,filedata)=>{
        if(err){
            console.log(err);
        }else{
            res.write(filedata);
            res.end();
        }
    })
    

});
server.listen(3000,'localhost',()=>{
    console.log("shivansh")
})
