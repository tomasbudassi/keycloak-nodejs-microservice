var mysql = require('mysql');

// Parámetros de conexión a la base de datos
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'seguridad_tp3'
});

// Comprobar la conexión a la base de datos.
con.connect(function(err) {
   if (err) throw err;
   console.log("DB Connected");
 });

// Devolverá resultados de la base de datos.
con.connect(function(err) {
  if (err) throw err;
  console.log("DB Connected");
  con.query(sql, function (err, result) {
    if (err) throw err;

    // Bucle que recorre los resultados
    for(i=0; i<result.length; i++){
    	console.log("Result: " + result[i].name);
    }

  });
});