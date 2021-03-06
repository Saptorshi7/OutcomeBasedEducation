var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/HomeController');
var CourseController = require('../controllers/CourseController');
var GroupController = require('../controllers/GroupController');
var ToolController = require('../controllers/ToolController');
var ProgramOutcomeController = require('../controllers/ProgramOutcomeController');
var DepartmentController = require('../controllers/DepartmentController');
var StudentController = require('../controllers/StudentController');

router.get('/', HomeController.Index);

// Courses
router.get('/courses', CourseController.Index);
router.get('/courses/create', CourseController.Create);
router.post('/courses', CourseController.Store);
router.get('/courses/:id/edit', CourseController.Edit);
router.put('/courses/:id', CourseController.Update);
router.delete('/courses/:id', CourseController.Destroy);

// Groups
router.get('/groups', GroupController.Index);
router.get('/groups/create', GroupController.Create);
router.post('/groups', GroupController.Store);
router.get('/groups/:id/edit', GroupController.Edit);
router.put('/groups/:id', GroupController.Update);
router.delete('/groups/:id', GroupController.Destroy);

// Tools
router.get('/tools', ToolController.Index);
router.get('/tools/create', ToolController.Create);
router.post('/tools', ToolController.Store);
router.get('/tools/:id/edit', ToolController.Edit);
router.put('/tools/:id', ToolController.Update);
router.delete('/tools/:id', ToolController.Destroy);

// Program Outcomes
router.get('/programoutcomes', ProgramOutcomeController.Index);
router.get('/programoutcomes/create', ProgramOutcomeController.Create);
router.post('/programoutcomes', ProgramOutcomeController.Store);
router.get('/programoutcomes/:id/edit', ProgramOutcomeController.Edit);
router.put('/programoutcomes/:id', ProgramOutcomeController.Update);
router.delete('/programoutcomes/:id', ProgramOutcomeController.Destroy);

// Department
router.get('/departments', DepartmentController.Index);
router.get('/departments/create', DepartmentController.Create);
router.post('/departments', DepartmentController.Store);
router.get('/departments/:id/edit', DepartmentController.Edit);
router.put('/departments/:id', DepartmentController.Update);
router.delete('/departments/:id', DepartmentController.Destroy);

// Students
router.get('/students', StudentController.Index);
router.get('/students/create', StudentController.Create);
router.post('/students', StudentController.Store);
router.get('/students/:id/edit', StudentController.Edit);
router.put('/students/:id', StudentController.Update);
router.delete('/students/:id', StudentController.Destroy);

module.exports = router;