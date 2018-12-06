'use strict';
module.exports = function(app) {
  var qa = require('../controller/appController.js');

  // Routes
  app.route('/questions')
    .get(qa.list_all_questions);

  app.route('/question/:id')
    .get(qa.get_a_question);

  app.route('/random_question')
    .get(qa.get_random_question);

  app.route('/create_question/:info')
    .post(qa.create_a_question);

  app.route('/update_question/:info')
    .put(qa.update_question);
//   app.route('/tasks/:taskId')
//    .get(todoList.get_a_question)
//    .put(todoList.update_a_question)
//    .delete(todoList.delete_a_question);
   };
