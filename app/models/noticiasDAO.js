function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticia = function (callback) {
    this._connection.query('SELECT * FROM noticias where id_noticias = 2', callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {    
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao desc limit 5', callback);
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao desc', callback);
}   

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {    
    this._connection.query('insert into noticias set ?', noticia, callback);    
}

module.exports = function () {
    return NoticiasDAO;
}