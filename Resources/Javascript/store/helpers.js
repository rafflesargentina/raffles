import { mapActions, mapState } from "vuex"

export const servicesComputed = {
    ...mapState(
        "services", {
            allServices: state => state.all,
            oneService: state => state.one,
            servicesFeatured: state => state.featured,
            servicesNonFeatured: state => state.nonFeatured,
        }
    ),
}

export const servicesMethods = {
    ...mapActions(
        "services", [
            "deleteOneService",
            "fetchAllServices",
            "fetchOneService"
        ]
    )
}
