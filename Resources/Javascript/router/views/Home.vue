<template>
  <div class="home-page">
    <div 
      id="carousel-one" 
      class="carousel carousel-one slide" 
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          v-for="(item, index) in servicesFeatured"
          :key="index"
          data-target="#carousel-one"
          :data-slide-to="index"
          :class="{ 'active': index === 0 }"
        />
      </ol>
      <div class="carousel-inner">
        <section
          v-for="(item, index) in servicesFeatured"
          :key="index"
          :class="[{ 'active': index === 0 }, 'carousel-one__item-' + item.slug]"
          class="carousel-item"
        >
          <div class="row">
            <div class="col-md-6">
              <div class="carousel-one-header">
                <h4 class="carousel-one__subtitle">
                  Servicios
                </h4>
                <h1 class="carousel-one__title display-4">
                  {{ item.name }}
                </h1>
                <p
                  class="carousel-one__p"
                  v-html="item.description"
                />
                <div class="row">
                  <div class="col-md-6 col-lg-4">
                    <RouterLink 
                      :to="{ name: 'WebDevelopment' }" 
                      class="btn btn-lg btn-block btn-outline-light d-none d-md-inline-block"
                    >
                      <span class="fa fa-plus pr-2" />Leer más
                    </RouterLink>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <RouterLink 
                      :to="{ name: 'Contact' }"
                      class="btn btn-lg btn-block btn-outline-light d-none d-md-inline-block"
                    >
                      <span class="fa fa-check pr-2" />Contratar
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <img 
                class="carousel-one__img" 
                :src="item.featured_photo.url"
              >
            </div>
          </div>
        </section>
      </div>
      <a 
        class="carousel-control-prev" 
        href="#carousel-one" 
        role="button" 
        data-slide="prev"
      >
        <span 
          class="carousel-control-prev-icon" 
          aria-hidden="true"
        />
        <span class="sr-only">
          Previous
        </span>
      </a>
      <a 
        class="carousel-control-next" 
        href="#carousel-one" 
        role="button" 
        data-slide="next"
      >
        <span 
          class="carousel-control-next-icon" 
          aria-hidden="true"
        />
        <span class="sr-only">
          Next
        </span>
      </a>
    </div>
    <div class="company">
      <main class="company-content">
        <section class="company-section">
          <div class="row">
            <div class="col-md-6 order-md-2">
              <div class="company-header">
                <h4>Empresa</h4>
                <h1 class="display-4">
                  QUIÉNES<br>SOMOS
                </h1>
              </div>
            </div>
            <div class="col-md-6">
              <p class="company__p">
                Somos una empresa Argentina formada por profesionales con una amplia trayectoria en la industrias de la informática y la comunicación. <strong>RAFFLES conecta a la gente con la tecnología de forma amigable y creativa.</strong> Creemos en una estructura de trabajo <strong>simple y optimizada</strong> con el foco puesto en <strong>reducir costo y maximizar las ganacias</strong>. Nos encontramos en etapa Startup desde el año 2015.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
    <div class="services">
      <div class="services-inner">
        <main class="services-content">
          <section class="services-section">
            <div class="services-header">
              <h1>SERVICIOS</h1>
            </div>
            <div
              v-for="chunk in serviceChunks"
              class="row"
            >
              <div
                v-for="item in chunk"
                class="col-sm-6 col-md-4 d-flex mb-3"
              >
                <div
                  :class="'services__card--' + item.slug"
                  class="card services__card flex-fill shadow--one"
                >
                  <div class="services__card-img pb-0">
                    <div class="services__card-img-inner">
                      <img 
                        :class="'services__card-img--' + item.slug"
                        :src="item.featured_photo.url"
                        class="services__img shadow--one" 
                      >
                    </div>
                  </div>
                  <div class="card-body services__card-body text-center">
                    <h3 class="card-title">
                      {{ item.name }}
                    </h3>
                    <p
                      class="card__p"
                      v-html="item.description"
                    />
                    <div class="row">
                      <div class="col-lg-6 mb-3">
                        <RouterLink 
                          :to="{ name: 'WebDevelopment' }" 
                          class="btn btn-lg btn-block btn-outline-light"
                        >
                          <span class="fa fa-plus pr-2" />Leer más
                        </RouterLink>
                      </div>
                      <div class="col-lg-6 mb-3">
                        <RouterLink 
                          :to="{ name: 'Contact' }" 
                          class="btn btn-lg btn-block btn-outline-light"
                        >
                          <span class="fa fa-check pr-2" />Contratar
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    <div 
      id="carousel-two" 
      class="carousel carousel-fade carousel-two slide w-100 d-none d-lg-block"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item carousel-two-item-one active">
          <div class="card-deck">
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://www.apache.org" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--apache embed-responsive-item"
              />
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://secure.php.net" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--php embed-responsive-item"
              />
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://javascript.com" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--javascript embed-responsive-item"
              />
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://laravel.com" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--laravel embed-responsive-item"
              />
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://vuejs.org" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--vue embed-responsive-item"
              />
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://sass-lang.com" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--sass embed-responsive-item"
              />
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://www.w3.org" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--html embed-responsive-item"
              />
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://nodejs.org" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--nodejs embed-responsive-item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { chunk } from "lodash"
import { servicesComputed, servicesMethods } from "../../store/helpers"

export default {
    data() {
        return {
            prepared: false
        }
    },

    computed: {
        ...servicesComputed,

        serviceChunks() {
            return chunk(this.allServices, 3)
        }
    },

    watch: {
        "$route" (value) {
            if (value.name === "Home" && this.prepared === false) {
                return this.prepare()
            }
        }
    },

    created() {
        return this.prepare()
    },

    methods: {
        ...servicesMethods,

        prepare() {
            return this.fetchAllServices().then(()=> this.prepared = true)
        }
    },
}
</script>
