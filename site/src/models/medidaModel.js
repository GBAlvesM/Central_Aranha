var database = require("../database/config");


function buscarPreferencia() {
    var instrucaoSql = `SELECT 
    preferencia, 
    COUNT(*) AS 'Total'
	FROM usuario
		WHERE preferencia IN ('Peter Parker', 'Miles Morales')
			GROUP BY preferencia;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpis(id) {
    var instrucaoSql = `SELECT 
    MAX(pontuacao) AS 'Maior', 
    (SELECT pontuacao FROM jogoQuiz WHERE id_usuario = '${id}' ORDER BY id DESC LIMIT 1) AS 'Ultima',
    CONCAT(ROUND((SELECT SUM(pontuacao) FROM jogoQuiz WHERE id_usuario = '${id}') / ((SELECT COUNT(pontuacao) FROM jogoQuiz WHERE id_usuario = '${id}') * 10) * 100, 1), '%') AS 'Taxa', (SELECT ROUND(AVG(pontuacao), 1) FROM jogoQuiz WHERE id_usuario = 1) AS 'MediaU', (SELECT ROUND(AVG(pontuacao), 1) FROM jogoQuiz) AS 'MediaG'
	FROM jogoQuiz 
		WHERE id_usuario = '${id}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarPreferencia,
    buscarKpis
}
