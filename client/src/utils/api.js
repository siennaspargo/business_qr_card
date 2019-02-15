import axios from "axios";

export default {
    getUser: function(){
        return axios.get("/api/users");
    },
    createUser: function(newUser){
        return axios.post("/api/users", newUser);
    },
    updateUser: function(id, updatedData){
        return axios.put("/api/users/" + id, updatedData);
    },
    getConnections: function(id){
        return axios.get("/api/users/" + id);
    },
    addConnection: function(id, newConnection){
        return axios.post("/api/users/"+ id, newConnection)
    },
    removeConnection: function(id){
        return axios.delete("/api/users/" + id)
    }
}