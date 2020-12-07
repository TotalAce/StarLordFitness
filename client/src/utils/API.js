/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {

    getClientWorkoutPlan: function () {
        return axios.get("/api/workoutPlan")
    },

    addNotes: function (noteObject) {
        return axios.post("/api/client/notes", noteObject)
    },

    checkLoggedIn: () => {
        return (axios.get("/api/user"))
    }

}

