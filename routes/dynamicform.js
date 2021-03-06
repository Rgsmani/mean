var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var mongojs = require('mongojs');
var db = mongojs("mongodb://manikandan:password@ds047085.mlab.com:47085/crm");

module.exports = {

    getDynamicForm: function (req, res) {
        db.dynamicform.find(function (err, forms) {
            if (err) {
                res.send(err);
            }
            res.json(forms);
        });
    },

    saveDynamicForm: function (req, res) {
        var save_data = req.body;
        console.log("in backend");
        console.log(save_data);      

             
        if (!save_data) {
            res.status(400);
            res.json({
                "error": "Bad Data"
            });
        } else {

           

            db.dynamicform.save(save_data, function (err, forms) {
                if (err) {
                    res.send(err);
                }
                res.json(forms);
                // console.log("saved = " + dep);
            });
        }
    },

    updateDynamicForm: function (req, res) {

        var update_data = req.body;
          console.log("in server");
            console.log(req.params.id);
         console.log(update_data);       
        // var upduser = {};

        // if (update_data.empid) {
        //     upduser = update_data;
        // }
        // console.log(upduser);

        // if (typeof(req.params.id) === 'string' ) {
        //      log('Fixing id')
        //  req.params.id = mongojs.ObjectId(req.params.id);
        //     }
        delete update_data._id;

          
        if (!update_data) {
            res.status(400);
            res.json({
                "error": "bad data"
            });
        } else {
            db.dynamicform.update({ _id: mongojs.ObjectId(req.params.id) }, update_data, {}, function (err, user) {
                if (err) {
                    res.json(err);
                }
                res.json(user);               
            });
        }

    },

    deleteDynamicForm: function (req, res) {
        db.dynamicform.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, form) {
            if (err) {
                res.send(err);
            }
            res.json(form);
        });
    }

};