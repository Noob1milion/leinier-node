const { response } = require('express');


const usuariosGet = (req, res = response) => {
   
   
    res.json({

        msg: 'get api - controlador'


    });
}
const usuariosPut = (req, res = response) => {
   
    const id = req.params.id;
   
    res.json({

        msg: 'put api - controlador',
        id


    });
}
const usuariosDelete = (req, res = response) => {
   
   
    res.json({

        msg: 'delete api - controlador'


    });
}
const usuariosPatch = (req, res = response) => {
   
   
    res.json({

        msg: 'path api - controlador'


    });
}
const usuariosPost = (req, res = response) => {
   
    const body = req.body;
   
    res.json({

        msg: 'path api - controlador',
        body


    });
}


module.exports ={
usuariosGet,
usuariosDelete,
usuariosPut,
usuariosPatch,
usuariosPost


}