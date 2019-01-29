
import * as middleware from "@/router/middleware"
import router from "@/router"

router.addRoutes(
    [
        {
            beforeEnter: middleware.authRequired,
            children: [
                {
                    name: "Account",
                    path: "",
                    component: require("./views/Account/PersonalData.vue")
                },
                {
                    beforeEnter: middleware.authRequired,
                    name: "AuthorizedClientTokens",
                    path: "/account/authorized-client-tokens",
                    component: require("./views/Account/AuthorizedClientTokens.vue")
                },
                {
                    beforeEnter: middleware.authRequired,
                    name: "PersonalTokens",
                    path: "/account/personal-tokens",
                    component: require("./views/Account/PersonalTokens.vue")
                },
                {
                    beforeEnter: middleware.authRequired,
                    name: "ClientTokens",
                    path: "/account/client-tokens",
                    component: require("./views/Account/TokenClients.vue")
                },
            ],
            component: require("./views/Account/Account.vue"),
            path: "/account"
        },
        {
            component: require("./views/Company.vue"),
            name: "Company",
            path: "/company"
        },
        {
            component: require("./views/Contact.vue"),
            meta: {
                footer: false
            },
            name: "Contact",
            path: "/contact"
        },
        {
            component: require("./views/Consulting.vue"),
            name: "Consulting",
            path: "/services/consulting"
        },
        {
            component: require("./views/VirtualCTO.vue"),
            name: "VirtualCTO",
            path: "/services/virtual-cto",
        },
        {
            component: require("./views/Home.vue"),
            name: "Home",
            path: "/"
        },
        {
            beforeEnter: middleware.authNotRequired,
            component: require("./views/auth/Login.vue"),
            meta: {
                footer: false
            },
            name: "Login",
            path: "/login"
        },
        {
            beforeEnter: middleware.authNotRequired,
            component: require("./views/auth/passwords/Request.vue"),
            meta: {
                footer: false
            },
            name: "PasswordRequest",
            path: "/password/request"
        },
        {
            beforeEnter: middleware.authNotRequired,
            component: require("./views/auth/passwords/Reset.vue"),
            meta: {
                footer: false
            },
            name: "PasswordReset",
            path: "/password/reset/:token"
        },
        {
            component: require("./views/Portfolio.vue"),
            name: "Portfolio",
            path: "/portfolio"
        },
        {
            beforeEnter: middleware.authNotRequired,
            component: require("./views/auth/Register.vue"),
            meta: {
                footer: false
            },
            name: "Register",
            path: "/register"
        },
        {
            component: require("./views/Services.vue"),
            name: "Services",
            path: "/services"
        },
        {
            component: require("./views/WebDevelopment.vue"),
            name: "WebDevelopment",
            path: "./views/services/web-development"
        },
        {
            name: "Unauthorized",
            path: "/unauthorized",
            component: require("./views/Errors/Unauthorized")
        },
        {
            name: "PageNotFound",
            path: "*",
            component: require("./views/Errors/PageNotFound")
        },
    ]
)
