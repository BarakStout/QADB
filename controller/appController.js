'use strict';

var Question = require('../model/appModel.js');

exports.list_all_questions = function(req, res) {
  Question.getAllQuestions(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.create_a_question = function(req, res) {
  var newQA = new Question(req.body);

  //handles null error
   if(!newQA.question || !newQA.answer){

            res.status(400).send({ error:true, message: 'Please provide a question and an answer' });

        }
else{

  Question.createTask(newQA, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}
};
