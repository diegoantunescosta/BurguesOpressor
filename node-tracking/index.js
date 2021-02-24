const express = require ('express'); 
const cors = require ('cors');
const TrackingCorreios = require ('tracking-correios');
const app =express();
app.use (cors());


const port = 3001;


app.get ('/',(req, res) => {
    const{tracking} = req.query;

    TrackingCorreios.track(tracking)
        .then ((result) =>{
        res.json({message:'Encomenda do Opressor encontrada',tracking,result})
        })
        .catch((error)=>{
        res.json({message: 'Encomenda Extraviada, sinto muito !', error});
        });
});

app.listen (port,() => console.log(`Listening on port ${port}`));