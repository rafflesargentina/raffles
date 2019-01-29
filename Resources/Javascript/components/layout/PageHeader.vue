<template>
  <header class="page-header page-header--light">
    <div class="row no-gutters">
      <RouterLink 
        :to="{ name: 'Home' }" 
        class="col-9 col-lg-3 page-header-logo"
      />

      <nav class="col-lg-6 main-nav d-none d-lg-inline-block">
        <ul class="main-nav__list">
          <li class="main-nav__item main-nav__item--light">
            <RouterLink 
              :to="{ name: 'Home' }" 
              class="main-nav__link main-nav__link--light"
            >
              INICIO
            </RouterLink>
          </li>
          <li class="main-nav__item main-nav__item--light">
            <RouterLink 
              :to="{ name: 'Company' }"
              class="main-nav__link main-nav__link--light"
            >
              EMPRESA
            </RouterLink>
          </li>
          <li class="main-nav__item main-nav__item--light">
            <RouterLink 
              :to="{ name: 'ServicesIndex' }"
              class="main-nav__link main-nav__link--light"
            >
              SERVICIOS
            </RouterLink>
          </li>
          <li class="main-nav__item main-nav__item--light">
            <RouterLink 
              :to="{ name: 'Portfolio' }"
              class="main-nav__link main-nav__link--light"
            >
              PORTFOLIO
            </RouterLink>
          </li>
          <li class="main-nav__item main-nav__item--light">
            <RouterLink 
              :to="{ name: 'Contact' }"
              class="main-nav__link main-nav__link--light"
            >
              CONTACTO
            </RouterLink>
          </li>
        </ul>
      </nav>

      <nav 
        id="mainNavMenu" 
        class="main-nav main-nav-menu collapse d-lg-none"
      >
        <ul class="main-nav__list">
          <li class="main-nav__item main-nav__item--dark">
            <RouterLink
              to="/"
              class="main-nav__link main-nav__link--dark"
            >
              INICIO
            </RouterLink>
          </li>
          <li class="main-nav__item main-nav__item--dark">
            <RouterLink
              to="/company"
              class="main-nav__link main-nav__link--dark"
            >
              EMPRESA
            </RouterLink>
          </li>
          <li class="main-nav__item main-nav__item--dark">
            <RouterLink
              to="/services"
              class="main-nav__link main-nav__link--dark"
            >
              SERVICIOS
            </RouterLink>
          </li>
          <li class="main-nav__item main-nav__item--dark">
            <RouterLink
              to="/portfolio"
              class="main-nav__link main-nav__link--dark"
            >
              PORTFOLIO
            </RouterLink>
          </li>
          <li class="main-nav__item main-nav__item--dark">
            <RouterLink
              to="/contact"
              class="main-nav__link main-nav__link--dark"
            >
              CONTACTO
            </RouterLink>
          </li>
        </ul>
      </nav>

      <nav class="col-3 main-nav text-right">
        <ul class="main-nav__list d-lg-none text-right">
          <li class="main-nav__item main-nav__item--light d-inline-block d-lg-none">
            <a
              class="main-nav__link main-nav__link--light navbar-toggler" 
              data-toggle="collapse" 
              data-target="#mainNavMenu" 
              aria-controls="mainNavMenu" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              href="#"
            >
              <span class="fa fa-bars main-nav__icon" />
            </a>
          </li>
        </ul>


        <ul class="main-nav__list d-none d-lg-inline-block">
          <li 
            v-if="!isAuthenticated" 
            class="main-nav__item main-nav__item--light d-none d-lg-inline-block"
          >
            <RouterLink 
              to="/login" 
              class="main-nav__link main-nav__link--light"
            >
              INGRESÁ
            </RouterLink>
          </li>
          <li 
            v-if="!isAuthenticated" 
            class="main-nav__item main-nav__item--light d-none d-lg-inline-block"
          >
            <RouterLink 
              to="/register" 
              class="main-nav__link main-nav__link--light"
            >
              REGISTRATE
            </RouterLink>
          </li>

          <li 
            v-if="isAuthenticated" 
            class="main-nav__item main-nav__item--light"
          >
            <a 
              id="sessionMenuLink" 
              href="#" 
              class="main-nav__link main-nav__link--light dropdown-toggle" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
              <span class="fa fa-user pr-2" />{{ username }}
            </a>
            <div 
              class="dropdown-menu" 
              aria-labelledby="sessionMenuLink"
            >
              <RouterLink 
                class="dropdown-item" 
                to="/account"
              >
                Cuenta
              </RouterLink>
              <div class="dropdown-divider" />
              <RouterLink
                class="dropdown-item" 
                to="/logout"
              >
                Cerrar sesión
              </RouterLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

    name: "PageHeader",

    computed: {
        isAuthenticated() {
            return this.$store.getters["auth/isAuthenticated"]
        },

        username() {
            let username = this.$store.getters["auth/username"]
            if (undefined != username) {
                if (username.length > 20) {
                    return username.substr(0, 17) + "..."
                }

                return username
            }

            return "..."
        }
    },
}
</script>
