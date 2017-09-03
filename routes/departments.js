var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs("mongodb://manikandan:password@ds047085.mlab.com:47085/crm");

module.exports = {

    getDepartments: function (req, res) {
        db.departments.find(function (err, dep) {
            if (err) {
                res.send(err);
            }
            res.json(dep);
        });
    },

    saveDepartment: function (req, res) {
        var dep = req.body;
        console.log("in backend");
        console.log(dep);
        if (!dep.department) {
            res.status(400);
            res.json({
                "error": "Bad Data"
            });
        } else {
            db.departments.save(dep, function (err, dep) {
                if (err) {
                    res.send(err);
                }
                res.json(dep);
                console.log("saved = " + dep);
            });
        }
    },

    updateDepartment: function (req, res) {

        var req_depart = req.body;
          console.log("in server");
         console.log(req.body.department);
         console.log(req.params.id);
        var updDep = {};

        if (req_depart.department) {
            updDep.department = req_depart.department;
        }

        if (!updDep) {
            res.status(400);
            res.json({
                "error": "bad data"
            });
        } else {
            db.departments.update({ _id: mongojs.ObjectId(req.params.id) }, updDep, {}, function (err, department) {
                if (err) {
                    res.json(err);
                }
                res.json(department);
                // console.log("in server");
                // console.log(res.json(designation));
            });
        }

    },

    deleteDepartment: function (req, res) {
        db.departments.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, department) {
            if (err) {
                res.send(err);
            }
            res.json(department);
        });
    }

};