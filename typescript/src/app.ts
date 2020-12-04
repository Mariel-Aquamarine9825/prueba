import express from 'express';

const app = express();
const port: number = 3000;

interface Direccion {
    ciudad: string,
    avenida: string,
    vecindario: string
}
const direcciones = new Array<Direccion>();
direcciones.push({
    ciudad:'Cochabamba',
    avenida:'Avenida',
    vecindario:'Norte'
})
app.get('/',(req,res)=> {
    res.end('Hola mundo desde typescript');
});

app.get('/direcciones',(req,res)=>{
    res.writeHead(200,{'Content-type': 'aplication/json'});
    res.end(JSON.stringify(direcciones));
})

app.listen(port,() => {
    let mensaje : string = `El servidor esta activo en el puerto ${port}`;
    return console.log(mensaje);
});