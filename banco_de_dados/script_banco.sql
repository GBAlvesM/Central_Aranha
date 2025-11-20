CREATE DATABASE central_aranha;
USE central_aranha;


CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(75) NOT NULL,
email VARCHAR(75) NOT NULL UNIQUE,
senha VARCHAR(50) NOT NULL,
preferencia VARCHAR(75)
);

CREATE TABLE quiz (
id INT PRIMARY KEY AUTO_INCREMENT,
nomeQuiz VARCHAR(75)
);


CREATE TABLE jogoQuiz (
id INT AUTO_INCREMENT,
id_usuario INT,
id_quiz INT,
PRIMARY KEY (id, id_usuario, id_quiz),
FOREIGN KEY (id_usuario) REFERENCES usuario (id),
FOREIGN KEY (id_quiz) REFERENCES quiz(id),
pontuacao INT
);

INSERT INTO quiz VALUES 
	(1, 'Quiz Central Aranha');

SELECT 
    MAX(pontuacao) AS 'Maior', 
    (SELECT pontuacao FROM jogoQuiz WHERE id_usuario = 1 ORDER BY id DESC LIMIT 1) AS 'Ultima',
    CONCAT(ROUND((SELECT SUM(pontuacao) FROM jogoQuiz WHERE id_usuario = 1) / ((SELECT COUNT(pontuacao) FROM jogoQuiz WHERE id_usuario = 1) * 10) * 100, 2), '%') AS 'Taxa'
	FROM jogoQuiz 
		WHERE id_usuario = 1;
        
-- Select da taxa de acertos do usuário
SELECT CONCAT(ROUND((SELECT SUM(pontuacao) FROM jogoQuiz WHERE id_usuario = 1) / ((SELECT COUNT(pontuacao) FROM jogoQuiz WHERE id_usuario = 1) * 10) * 100, 2), '%') AS 'Taxa';

SELECT COUNT(pontuacao) FROM jogoQuiz WHERE id_usuario = 1;

SELECT (SELECT ROUND(AVG(pontuacao), 1) FROM jogoQuiz WHERE id_usuario = 1) AS 'MediaU', (SELECT ROUND(AVG(pontuacao), 1) FROM jogoQuiz) AS 'MediaG';

SELECT * FROM jogoQuiz;

SELECT ROW_NUMBER() OVER (ORDER BY id) AS 'Tentativa', pontuacao FROM jogoQuiz 
	WHERE id_usuario = 1;
    
SELECT u.nome, j.pontuacao FROM jogoQuiz j
	JOIN usuario u ON j.id_usuario = u.id
		ORDER BY j.pontuacao DESC
			LIMIT 5;
