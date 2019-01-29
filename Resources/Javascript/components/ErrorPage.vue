<template>
  <div class="error full-height bg-white">
    <div class="error-inner">
      <main class="error-content">
        <section class="error-section">
          <div class="error-header">
            <slot name="subtitle" />
            <slot name="title" />
          </div>
          <slot name="description" />
          <div class="row no-gutters">
            <router-link 
              to="/" 
              class="col-sm-4 btn btn-lg btn-primary gradient-background--one border-0"
            >
              <span class="fa fa-arrow-left pr-2" />Volver al inicio
            </router-link>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
    name: "ErrorPage"
}
</script>
