import { filter } from "lodash"
import * as types from "../../mutation-types"

export default {
    deleteOneService ({ commit }, id) {
        return window.axios.delete("/api/services/" + id)
            .then(response => {
                const r = response.data.data
                commit(types.SERVICES_DELETE_ONE, r)
                return r
            })
            .catch(error => {
                console.log(error)
                commit(types.SERVICES_ERROR, error)
                return error
            })
    },

    fetchAllServices ({ commit, dispatch }) {
        return window.axios.get("/api/services")
            .then(response => {
                const all = response.data.data
                commit(types.SERVICES_FETCH_ALL, all)
                dispatch("mapServicesFeatured", all)
                dispatch("mapServicesNonFeatured", all)
                return all
            })
            .catch(error => {
                console.log(error)
                commit(types.SERVICES_ERROR, error)
                return error
            })
    },

    fetchOneService ({ commit }, id) {
        return window.axios.get("/api/services/" + id)
            .then(response => {
                const one = response.data
                commit(types.SERVICES_FETCH_ONE, one)
                return one
            })
            .catch(error => {
                commit(types.SERVICES_ERROR, error)
                return error
            })
    },

    mapServicesFeatured({ commit, state }, all) {
        const featured = filter(all || state.all, (item)=> item.featured === 1)
        commit(types.SERVICES_FEATURED, featured)
        return featured
    },

    mapServicesNonFeatured({ commit, state }, all) {
        const nonFeatured = filter(all || state.all, (item)=> item.featured !== 1)
        commit(types.SERVICES_NON_FEATURED, nonFeatured)
        return nonFeatured
    },

    reset ({ commit }) {
        commit(types.SERVICES_RESET)
        return null
    }
}
