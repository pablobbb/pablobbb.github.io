<template>
  <Transition name="fade" appear>
    <section>
      <div class="welcome">
        <h1>Hi! <span class="wave">👋</span><span class="name"> I'm Pablo Bonucci</span><small>Principal Frontend Engineer</small></h1>
        <p class="bio">+15 years building frontend systems and the teams that build them well.
          <br>
          I focus on design systems, frontend architecture, and the foundations that make product
          teams faster and less frustrated.
          <br><br>
          Currently setting the technical vision at iubenda, a product used by 1M+ people.
        </p>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .name {
    display: block;
  }
}

.wave {
  display: inline-block;
  animation: wave 0.5s linear 1.5;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
