<template>
  <div class="auth">
    <div class="auth-inner">
      <main class="auth-content card auth__card shadow--two">
        <section class="auth-section">
          <h3 class="auth-header">
            <RouterLink 
              :to="{ name: 'Login' }"
              class="auth__link auth__link--login"
            >
              INGRESÁ
            </RouterLink> / <RouterLink 
              :to="{ name: 'Register' }"
              class="auth__link auth__link--register"
            >
              REGISTRATE
            </RouterLink>
          </h3>
          <register-form
            :action="'/register'"
            :method="'post'"
          />
        </section>
      </main>
    </div>
    <form-legal />
  </div>
</template>
