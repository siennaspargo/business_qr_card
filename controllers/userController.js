const db = require("../models");

module.exports = {
    findById: function(req, res){
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createUser: function(req, res){
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    updateProfile: function(req, res){
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findConnections: function(req, res){
        db.User.findOne({_id: req.params.id})
        .populate("connection")
        .then(function(connections){
            res.json(connections)
        })
        .catch(function(err){
            res.json(err)
        })
    },
    addConnection: function(req, res){
        db.Connection.create(req.body)
            .then(function(dbConnection){
                return db.User.findOneAndUpdate({_id: req.params.id},{ $push: { connection: dbConnection}}, {new: true})
            })
            .then(function(dbUser){
                res.json(dbUser)
            })
            .catch(function(err){
                res.json(err)
            })
    },
    removeConnection: function(req, res){
        db.Connection.remove({
                _id: req.params.id
            }),
            function(err, removed){
                if(err){
                    console.log(err)
                } else{
                    console.log(removed)
                    res.json(removed)
                }
            }
    }    
}

