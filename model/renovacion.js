const { Pool, Client } = require('pg')

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'crud',
	password: '12345',
	port: 5432
});






module.exports = {
	read : function(solicitud,callback) {
		pool.query('SELECT * FROM v_renovaciones WHERE nombre_solicitud=\''+solicitud+'\'', (err, res) => {
			if (err) {
			
				callback(err,null)
			} else {
				
				callback(null, res.rows)
			};
		})

	},

	readOne : function(solicitud,callback) {
		pool.query('SELECT * FROM v_renovaciones WHERE id_renovaciones='+solicitud, (err, res) => {
			if (err) {
				console.log(err);
				callback(err,null)
			} else {
				
				callback(null, res.rows[0])
			};
		})

	},

	create : function(data,callback) {
		pool.query('INSERT INTO '
		 +'renovaciones'
		 +'(ren_estado, ren_fecha_pre,ren_sol_iepi,ren_nu_com_pre_sol, ren_nu_com_emi_cert,tren_titulo_renov,ren_titularactual) '
		 +'VALUES'
		 +'(\''+data.ren_estado+'\','
		 +'\''+data.ren_fecha_pre+'\','
		 +'\''+data.ren_sol_iepi+'\','
		 +'\''+data.ren_nu_com_pre_sol+'\','
		 +'\''+data.ren_nu_com_emi_cert+'\','
		 +'\''+data.tren_titulo_renov+'\','
		 +'\''+data.ren_titularactual+'\')',

		 (err, res) => {
			if (err) {
				console.log(err);
				callback(err,null)
			} else {
				console.log(res.rowCount);
				callback(null, res)
			};
		})

	},

}


