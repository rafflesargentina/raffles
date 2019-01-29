<template>
  <div class="contact">
    <div class="contact-inner">
      <main class="card contact-content contact__card shadow--two">
        <section class="contact-section">
          <h4 class="contact-header">
            ENVIANOS UN MENSAJE
          </h4>
          <contact-form
            :action="'/contact'"
            :method="'post'"
          />
        </section>
      </main>
    </div>
    <form-legal />
  </div>
</template>
