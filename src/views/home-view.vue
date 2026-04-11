<template>
  <Transition name="fade" appear>
    <section>
      <div class="welcome">
        <h1>Hi! <span class="wave">👋</span> I'm Pablo Bonucci<small>Principal Frontend Engineer</small></h1>
        <p class="tagline">+15 years building frontend systems and the teams that build them well.</p>
        <p class="bio">
          I focus on design systems, frontend architecture, and the foundations that make product
          teams faster and less frustrated.
        </p>
        <p class="bio">
          Currently setting the technical vision at iubenda, a product used by 1M+ people.
        </p>
        <p class="open-to-work">
          Exploring remote Principal / Staff roles with US-equivalent compensation. →
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
