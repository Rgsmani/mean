var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs("mongodb://manikandan:password@ds047085.mlab.com:47085/crm");

module.exports = {
    getRoles: function (req, res) {
        db.roles.find(function (err, role) {
            if (err) {
                res.send(err);
            }
            res.json(role);
        });
    },

    saveRole: function (req, res) {
        var role = req.body;
        console.log("in backend");
        console.log(role);
        if (!role.role) {
            res.status(400);
            res.json({
                "error": "Bad Data"
            });
        } else {
            db.roles.save(role, function (err, role) {
                if (err) {
                    res.send(err);
                }
                res.json(role);
                // console.log("saved = " + des);
            });
        }
    },

    updateRole: function (req, res) {

        var role_data = req.body;
          console.log("in server");
         console.log(req.body.designation);
         console.log(req.params.id);
        var updRole = {};

        if (role_data.role) {
            updRole.role = role_data.role;
        }

        if (!updRole) {
            res.status(400);
            res.json({
                "error": "bad data"
            });
        } else {
            db.roles.update({ _id: mongojs.ObjectId(req.params.id) }, updRole, {}, function (err, role) {
                if (err) {
                    res.json(err);
                }
                res.json(role);
                // console.log("in server");
                // console.log(res.json(designation));
            });
        }

    },

    deleteRole: function (req, res) {
        db.roles.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, role) {
            if (err) {
                res.send(err); 
            }
            res.json(role);
        });
    }

};