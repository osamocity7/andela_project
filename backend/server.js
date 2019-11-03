import express from "express"

const app= express();
const port = process.env.PORT || '3000'
//app.set('port', process.env.PORT || '3000')
app.get('/',(req,res)=>{

    res.send('hello  world ttttttttttt');
});

app.listen(port);

//app.listen(port,()=>Console.log(`server runnning on port ${port}`));