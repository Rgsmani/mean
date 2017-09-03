var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs("mongodb://manikandan:password@ds047085.mlab.com:47085/crm");

module.exports = {
    getDesignations: function (req, res) {
        db.designations.find(function (err, des) {
            if (err) {
                res.send(err);
            }
            res.json(des);
        });
    },

    saveDesignation: function (req, res) {
        var des = req.body;
        console.log("in backend");
        console.log(des);
        if (!des.designation) {
            res.status(400);
            res.json({
                "error": "Bad Data"
            });
        } else {
            db.designations.save(des, function (err, des) {
                if (err) {
                    res.send(err);
                }
                res.json(des);
                console.log("saved = " + des);
            });
        }
    },

    updateDesignation: function (req, res) {

        var designation = req.body;
          console.log("in server");
         console.log(req.body.designation);
         console.log(req.params.id);
        var updDes = {};

        if (designation.designation) {
            updDes.designation = designation.designation;
        }

        if (!updDes) {
            res.status(400);
            res.json({
                "error": "bad data"
            });
        } else {
            db.designations.update({ _id: mongojs.ObjectId(req.params.id) }, updDes, {}, function (err, designation) {
                if (err) {
                    res.json(err);
                }
                res.json(designation);
                // console.log("in server");
                // console.log(res.json(designation));
            });
        }

    },

    deleteDesignation: function (req, res) {
        db.designations.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, designation) {
            if (err) {
                res.send(err);
            }
            res.json(designation);
        });
    }

};