'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController.js');

  // todoList Routes
  app.route('/questions')
    .get(todoList.list_all_questions)
    .post(todoList.create_a_question);

//   app.route('/tasks/:taskId')
//    .get(todoList.get_a_question)
//    .put(todoList.update_a_question)
//    .delete(todoList.delete_a_question);
   };
