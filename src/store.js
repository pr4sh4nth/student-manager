import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const errorSystem = {
    state : {
        show: false,
        text: "error",
    },

    mutations: {
        showError(state, message){
            state.show = true;
            state.text = message;
        }
    }
}

export default new Vuex.Store({
    state : {
        students: [],
       
    },
    getters: {
        students: state => state.students.map((s) => ({...s, fullName: s.firstName + ' '+ s.lastName})),
        findStudent: state => id => state.students.find(s=> s.id==id),
        isLoaded: state => !!state.students.length
    },
    mutations: {
        setStudents(state, students){
            state.students = students
        },
        addStudent(state, student){
            state.students.push(student)
        },
        editStudent(state, student){
            const index = state.students.findIndex(s=> s.id==student.id);
           Vue.set(state.students, index, student);
        },
     
    },
    actions: {
        async getStudents({commit}){
            try{
                const { data: students } = await axios.get("http://localhost:3000/students");
           
                commit('setStudents', students);
            }
            catch(err){
                commit('showError', err)
            }
            
        },

        async createStudent({commit}, names){
            const { data: student } = await axios.post(
                "http://localhost:3000/students",
               names
              );
        
              commit('addStudent', student);
        },

        async editStudent({commit}, {id, names}){
            const {data: student} = await axios.put(`http://localhost:3000/students/${id}`, names);
            commit('editStudent',student )

            
        }
    },
    modules: {
        error: errorSystem
    }
})