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

exports.get_a_question = function(req, res) {
  Question.getAQuestion(function(err, task) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  }, req);
};

exports.get_random_question = function(req, res) {
  Question.getRandomQuestion(function(err, task) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.create_a_question = function(req, res) {
  console.log(req.body);
  var newQA = new Question(req.body);
  console.log(newQA);
  //handles null error
   if(!newQA.question || !newQA.answer){
      res.status(400).send({ error:true, message: 'Please provide a question and an answer' });
   }else{
      Question.createQuestion(function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      }, newQA);
    }
};

exports.update_question = function(req, res) {
  console.log(req.body);
  var newQA = new Question(req.body);
  console.log(newQA);
  //handles null error
   if(!newQA.id || !newQA.question || !newQA.answer){
      res.status(400).send({ error:true, message: 'Please provide an id, question and an answer' });
   }else{
      Question.updateQuestion(function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      }, newQA);
    }
};
