'user strict';
var sql = require('./db.js');

//Task object constructor
var Question = function(qa){
    this.id = qa.id;
    this.question = qa.question;
    if(qa.option) this.options = qa.option;
    else this.options = '';
    this.answer = qa.answer;
};

Question.createQuestion = function createQuestion(result, newQA) {
        sql.query("INSERT INTO `Questions` (`ID`, `Question`, `Options`, `Answer`) VALUES (NULL, '"+newQA.question+"', '"+newQA.options+"', '"+newQA.answer+"');"
                                           , function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
};

Question.updateQuestion = function updateQuestion(result, newQA) {
        sql.query("UPDATE `Questions` SET `Question` = '"+newQA.question+"', `Options` = '"+newQA.options+"', `Answer` = '"+newQA.answer+"' WHERE `Questions`.`ID` = '"+newQA.id+"'"
                                           , function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res);
                    result(null, res);
                }
            });
};

Question.getAllQuestions = function getAllQuestions(result) {
        console.log('getting all quesitons from db....');
        var sqlcmd = "SELECT * FROM Questions";
        console.log(sqlcmd);
        sql.query(sqlcmd, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('questions : ', res);

                 result(null, res);
                }
            });
};

Question.getAQuestion = function getAQuestion(result, req) {
        console.log('getting a quesitons from db....');
        var sqlcmd = "SELECT * FROM Questions WHERE ID = " + req.params.id;
        sql.query(sqlcmd, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('questions : ', res);

                 result(null, res);
                }
            });
};

Question.getRandomQuestion = function getRandomQuestion(result) {
        var sqlcmd = "SELECT * FROM Questions ORDER BY RAND() LIMIT 1";
        console.log(sqlcmd);
        sql.query(sqlcmd, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('questions : ', res);

                 result(null, res);
                }
            });
};

module.exports= Question;
