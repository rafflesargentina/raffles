<template>
  <form 
    :action="action"
    :class="[validated ? 'needs-validation' : 'needs-validation']"
    :method="method"
    aria-label="Ingresá"
    novalidate
    @keydown="form.errors.clear($event.target.name)"
    @submit.prevent="login"
  >
    <div class="form-group">
      <label for="email">
        Email
      </label>
      <input 
        v-model="form.email" 
        :class="{ 'is-invalid': form.errors.has('email') }"
        class="form-control gradient-border--one" 
        name="email" 
        placeholder="Email"
        type="email"
      >
      <span 
        v-if="form.errors.has('email')"
        class="invalid-feedback"
        role="alert"
      >
        <strong v-text="form.errors.get('email')" />
      </span>
    </div>

    <div class="form-group">
      <label 
        class="w-100"
        for="password" 
      >
        Contraseña <router-link
          class="auth__link auth__link--forgot-password"
          to="/password/request"
        >
          ¿Olvidaste tu contraseña?
        </router-link>
      </label>
      <input 
        v-model="form.password" 
        :class="{ 'is-invalid': form.errors.has('password') }"
        class="form-control gradient-border--one" 
        name="password"
        placeholder="Contraseña"
        type="password"
      >
      <span 
        v-if="form.errors.has('password')"
        class="invalid-feedback"
        role="alert"
      >
        <strong v-text="form.errors.get('password')" />
      </span>
    </div>

    <div class="form-group">
      <div class="form-check">
        <label>
          <input 
            v-model="form.remember" 
            class="form-check-input"
            name="remember"
            type="checkbox"
          > Mantener mi sesión abierta.
        </label>
      </div>
    </div>

    <button 
      :disabled="submitted"
      type="submit" 
      class="btn btn-block btn-lg border-0 btn-primary gradient-background--one"
    >
      <span class="fa fa-sign-in pr-2" />Ingresá
    </button>
  </form>
</template>

<script>
import Form from "@/utilities/Form"

let fields = {
    email: "",
    password: "",
    remember: "",
}

export default {

    name: "LoginForm",

    props: {
        action: {
            type: String,
            required: true
        },

        method: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            form: new Form(fields),
            submitted: false
        }
    },

    computed: {
        validated() {
            return this.form.errors.any()
        }
    },

    methods: {
        login() {
            this.submitted = true

            this.form[this.method](this.action)
                .then(response => {
                    return this.$store.dispatch("auth/login", response)
                })
                .then(response => {
                    console.log(response)
                    let intended = this.$route.query.intended
                    let redirect = intended || response.redirect
                    return this.$router.push({ path: redirect })
                })
                .catch(error => {
                    this.submitted = false
                    console.error(error)
                })
        },
    },
}
</script>
