
//import pg from "pg"
const { Pool } = require("pg")
const chalk = require ("chalk")
// creamos nuestro pool de conexiones
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'always_music',
    password: '1234',
    max: 20,
    min: 2,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000
})

// ejemplo de consulta con Pool
async function consultar() {
// Primero solicitamos un cliente al pool, en caso de error , tiramos el error a la consola (con el "catch")
    let client
    try {
        client = await pool.connect()
    } catch (error_conexion) {
        console.log(error_conexion)
        return
    }

//Después realizamos la consulta
    let res;
    try {
        res = await client.query({
            text: 'select * from estudiante',
            rowMode: 'array',
            name:'ingreso'
        })
    } catch (pg_error) {
        console.log(pg_error)
        return;
    }
    console.log(res.rows)
    // Finalmente liberamos el cliente
    client.release()
    pool.end()
}



// ejemplo de ingreso con Pool
async function insertar() {
// Primero solicitamos un cliente al pool, en caso de error , tiramos el error a la consola (con el "catch")
    let client
    try {
        client = await pool.connect()
    } catch (error_conexion) {
        console.log(error_conexion)
        return
    }

//Después realizamos el insert
    let res;
        try {
            res = await client.query({
        text: `insert into estudiantes (nombre,rut,curso,nivel) values ($1, $2, $3)`,
        values: [nombre,rut,curso,nivel],
        rowMode: 'array'
        })
    } catch (pg_error) {
        console.log(pg_error)
        return;
    }
    console.log(res.rows)
    // Finalmente ingresamos el cliente
    client.release()
    pool.end()
}


// ejemplo de editar con Pool
async function editar() {
// Primero solicitamos un cliente al pool, en caso de error , tiramos el error a la consola (con el "catch")
    let client
    try {
        client = await pool.connect()
    } catch (error_conexion) {
        console.log(error_conexion)
        return
    }

//Después editamos
    let res;
    try {
        res = await client.query({
            text: "UPDATE estudiante set nombre= 'catalina' WHERE id ='12929934-5'",
            rowMode: 'array',
            name:'ingreso'
        })
    } catch (pg_error) {
        console.log(pg_error)
        return;
    }
    console.log(res.rows)
    // Finalmente liberamos el cliente
    client.release()
    pool.end()
}

// ejemplo de eliminar con Pool
async function eliminar() {
// Primero solicitamos un cliente al pool, en caso de error , tiramos el error a la consola (con el "catch")
    let client
    try {
        client = await pool.connect()
    } catch (error_conexion) {
        console.log(error_conexion)
        return
    }

//Después eliminamos
    let res;
    try {
        res = await client.query({
            text: 'delete from estudiante',
            rowMode: 'array',
            name:'ingreso'
        })
    } catch (pg_error) {
        console.log(pg_error)
        return;
    }
    console.log(res.rows)
    
    // Finalmente liberamos el cliente
    client.release()
    pool.end()
}

const accion = process.argv[2]

if (accion == 'nuevo') {
    insertar()
}
else if (accion == 'consulta') {
    consultar()
}
else if (accion == 'editar') {
    editar()
}
else if (accion == 'eliminar') {
    eliminar()
}
else {
    console.log('Esta operacion no existe');
}




