import * as types from "../../mutation-types"
import { initialState } from "./services"

export default {
    [types.SERVICES_DELETE_ONE] () {},

    [types.SERVICES_ERROR] (state, payload) {
        state.error = JSON.stringify(payload)
    },

    [types.SERVICES_FEATURED] (state, payload) {
        state.featured = payload
    },

    [types.SERVICES_FETCH_ALL] (state, payload) {
        state.all = payload
    },

    [types.SERVICES_FETCH_ONE] (state, payload) {
        state.one = Object.freeze(payload)
    },

    [types.SERVICES_NON_FEATURED] (state, payload) {
        state.nonFeatured = payload
    },

    [types.SERVICES_RESET] (state) {
        Object.assign(state, { initialState: initialState(), ...initialState() })
    }
}
