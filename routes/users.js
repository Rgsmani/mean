var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var mongojs = require('mongojs');
var db = mongojs("mongodb://manikandan:password@ds047085.mlab.com:47085/crm");

module.exports = {

    getUsers: function (req, res) {
        db.users.find(function (err, users) {
            if (err) {
                res.send(err);
            }
                  res.json(users);
          });
     },

    saveUser: function (req, res) {
        var save_data = req.body;
        console.log("in backend");
        console.log(save_data);


         bcrypt.hash(save_data.password, 10, function (err, hash){
                if (err) {
               res.send(err);
                }
                save_data.password = hash;
                console.log("hash");
                console.log(save_data.password);
                console.log(save_data);
                if (!save_data.empid) {
                    res.status(400);
                    res.json({
                        "error": "Bad Data"
                    });
                } else {                
        
                    db.users.save(save_data, function (err, users) {
                        if (err) {
                            res.send(err);
                        }
                        res.json(users);
                        // console.log("saved = " + dep);
                    });
                }
            });

         
    },

    updateUser: function (req, res) {

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

           bcrypt.hash(update_data.password, 10, function (err, hash){
                if (err) {
               res.send(err);
                }
                update_data.password = hash;
                console.log("hash");
                console.log(update_data.password);
                if (!update_data) {
                    res.status(400);
                    res.json({
                        "error": "bad data"
                    });
                } else {
                    db.users.update({ _id: mongojs.ObjectId(req.params.id) }, update_data, {}, function (err, user) {
                        if (err) {
                            res.json(err);
                        }
                        res.json(user);               
                    });
                }
            });

      

    },

    deleteUser: function (req, res) {
        db.users.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

};