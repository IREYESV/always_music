const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'always_music',
    password: '1234',
    port: 5432
}) 

client.connect(err => {
    if (err) {
    console.log('Error en la conexión a postgres', error);
    }
})

async function consulta() {
  const res = await client.query('select * from estudiantes');
    console.log('Resultado', res.rows);
    console.log('Columnas', res.fields);
    client.end()
}

//● Agregar un nuevo estudiante.
async function insert() {
    await client.query(
        "insert into estudiante (nombre,rut,curso,nivel) values ('catalina','12345678-9', 'primero', 9)"
    )
}
//● Consultar los estudiantes registrados.
async function consultar() {
    await client.query('')
}

    /* Creamos la base de datos y Consultamos por el estudiante atraves del rut.
    create database always_music(
    create table estudiante(
        nombre varchar(255) not null,
        rut varchar(255) not null primary key,
        curso varchar(255) not null,
        nivel integer not null
    )
    );
*/
    
//● Actualizar la información de un estudiante.
async function actualizar() {
    await client.query('unpade')
}

// Paso 1
async function actualizar(nombre,rut,curso,nivel) {
// Paso 2
const res = await client.query(
"UPDATE estudiante set = '' WHERE id = 2 RETURNING *;"
);
// Paso 3
console.log('Registro modificado', res.rows[0]);
// Paso 4
console.log('Cantidad de registros afectados',res.rowCount);
client.end();
}
editar();

//● Eliminar el registro de un estudiante.
async function eliminar() {
    const res = await client.query('delete from estudiante')
    console.log(res.rows)
    client.end
}
//lo que queremos probar
insert()
        


