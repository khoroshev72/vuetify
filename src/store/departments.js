
export default {
    namespaced: true,
    state() {
        return {
            departments: []
        }
    },
    mutations: {
        setDepartments(state, departments) {
            state.departments = departments
        },
        addDepartment(state, department) {
            state.departments.push(department)
        }
    },
    actions: {
        async loadFirstLevel({commit}) {
            const response = await fetch('http://localhost:3000/departments1')
            const data = await response.json()
            commit('setDepartments', data)
        },
        async loadOne(_, id) {
            const response = await fetch(`http://localhost:3000/departments2/${id}`)
            return await response.json()
        }
    },
    getters: {
        departments(state) {
            return state.departments
        }
    }
}