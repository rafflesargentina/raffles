<template>
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
                      <router-link
                        :to="{ name: 'WebDevelopment' }"
                        class="btn btn-lg btn-block btn-outline-light"
                      >
                        <span class="fa fa-plus pr-2" />Leer más
                      </router-link>
                    </div>
                    <div class="col-lg-6 mb-3">
                      <router-link
                        :to="{ name: 'Contact' }"
                        class="btn btn-lg btn-block btn-outline-light"
                      >
                        <span class="fa fa-check pr-2" />Contratar
                      </router-link>
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
</template>

<script>
import { chunk } from "lodash"
import { servicesComputed, servicesMethods } from "../../../store/helpers"

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
