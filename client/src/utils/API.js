import axios from "axios";

export default {

    getClientWorkoutPlan: function () {
        return axios.get("/api/workoutPlan")
    },

    addNotes: function (noteObject) {
        return axios.post("/api/client/notes", noteObject)
    }

}

