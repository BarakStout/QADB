'user strict';
var sql = require('./db.js');

//Task object constructor
var Question = function(qa){
    this.id = qa.id;
    this.question = qa.question;
    this.options = qa.option;
    this.answer = qa.answer;
};

Question.createQuestion = function createUser(newQA, result) {
        sql.query("INSERT INTO `Questions` (`ID`, `Question`, `Options`, `Answer`) VALUES (NULL, '"+newQA.question+"', '"+neqQA.options+"', '"+newQA.answer+"');"
                                           , newTask, function (err, res) {

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

module.exports= Question;
