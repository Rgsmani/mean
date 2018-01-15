var express = require('express');
var router = express.Router();
var session = require('express-session')
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
var mongojs = require('mongojs');
var db = mongojs("mongodb://manikandan:password@ds047085.mlab.com:47085/crm");


var index = require('./index');
var users = require('./users');
var designations = require('./designations');
var roles = require('./roles');
var departments = require('./departments');
var dynamicform = require('./dynamicform');
var auth = require('./authentication');



router.route('/').get(index.index);

// Designation
router.route('/designations').get(designations.getDesignations);
router.route('/savedesignation').post(designations.saveDesignation);
router.route('/updatedesignation/:id').put(designations.updateDesignation);
router.route('/deletedesignation/:id').delete(designations.deleteDesignation);

// Role
router.route('/roles').get(roles.getRoles);
router.route('/saverole').post(roles.saveRole);
router.route('/updaterole/:id').put(roles.updateRole);
router.route('/deleterole/:id').delete(roles.deleteRole);

// Departments
router.route('/departments').get(departments.getDepartments);
router.route('/savedepartment').post(departments.saveDepartment);
router.route('/updatedepartment/:id').put(departments.updateDepartment);
router.route('/deletedepartment/:id').delete(departments.deleteDepartment);

// Users
router.route('/users').get(users.getUsers);
router.route('/saveuser').post(users.saveUser);
router.route('/updateuser/:id').put(users.updateUser);
router.route('/deleteuser/:id').delete(users.deleteUser);

// Users
router.route('/dynamicforms').get(dynamicform.getDynamicForm);
router.route('/savedynamicforms').post(dynamicform.saveDynamicForm);
router.route('/updatedynamicforms/:id').put(dynamicform.updateDynamicForm);
router.route('/deletedynamicforms/:id').delete(dynamicform.deleteDynamicForm);

// Auth
router.route('/checkuser', passport.authenticate('local'), ).post(auth.loginUser);



module.exports = router;