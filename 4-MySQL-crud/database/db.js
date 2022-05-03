const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db'
});

conexion.connect((error) => {
    if (error) {
        console.error('Ha ocurrido un error' + error);
        return
    } else {
        console.log('¡Te haz conectado exitosamente a una BD MySQL usando Nodejs!');
    }
})

module.exports = conexion