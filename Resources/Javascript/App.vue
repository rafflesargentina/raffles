<template>
  <div id="app">
    <PageHeader />
    <RouterView />
    <PageFooter v-if="showFooter" />
    <vue-snotify />

    <!-- Terms and Conditions Modal -->
    <div 
      id="modalTermsAndConditions"
      aria-hidden="true"
      aria-labelledby="modalTitleTermsAndConditions"
      class="modal fade"
      role="dialog"
      tabindex="-1"
    >
      <div 
        class="modal-dialog modal-lg" 
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 
              id="modalTitleTermsAndConditions"
              class="modal-title"
            >
              Términos y Condiciones
            </h5>
            <button 
              aria-label="Close"
              class="close" 
              data-dismiss="modal"
              type="button"
            >
              <span aria-hidden="true">
                &times;
              </span>
            </button>
          </div>
          <div class="modal-body">
            <terms-and-conditions />
          </div>
          <div class="modal-footer">
            <button 
              class="btn btn-secondary" 
              data-dismiss="modal"
              type="button"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Policy of Privacy Modal -->
    <div 
      id="modalPolicyOfPrivacy"
      aria-hidden="true"
      aria-labelledby="modalTitlePolicyOfPrivacy"
      class="modal fade"
      role="dialog"
      tabindex="-1"
    >
      <div 
        class="modal-dialog modal-lg" 
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 
              id="modalTitlePolicyOfPrivacy"
              class="modal-title"
            >
              Política de Privacidad
            </h5>
            <button 
              aria-label="Close"
              class="close"
              data-dismiss="modal"
              type="button"
            >
              <span aria-hidden="true">
                &times;
              </span>
            </button>
          </div>
          <div class="modal-body">
            <policy-of-privacy />
          </div>
          <div class="modal-footer">
            <button 
              class="btn btn-secondary" 
              data-dismiss="modal"
              type="button"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Access to Personal Data Modal -->
    <div 
      id="modalAccessPersonalData"
      aria-labelledby="modalTitleAccessPersonalData"
      aria-hidden="true"
      class="modal fade"
      role="dialog"
      tabindex="-1"
    >
      <div 
        class="modal-dialog modal-lg" 
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 
              id="modalTitleAccessPersonalData"
              class="modal-title"
            >
              Acceso a Datos Personales
            </h5>
            <button 
              aria-label="Close"
              class="close"
              data-dismiss="modal"
              type="button"
            >
              <span aria-hidden="true">
                &times;
              </span>
            </button>
          </div>
          <div class="modal-body">
            <access-personal-data />
          </div>
          <div class="modal-footer">
            <button 
              class="btn btn-secondary" 
              data-dismiss="modal"
              type="button"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

    name: "App",

    data() {
        return {
            showFooter: true
        }
    },

    watch: {
        "$route" () {
            this.getMetaFooter()
        }
    },

    created() {
        return this.getMetaFooter()
    },

    methods: {
        getMetaFooter() {
            return this.showFooter = false !== this.$route.meta.footer
        }
    },
}
</script>
