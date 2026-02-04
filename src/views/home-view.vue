<template>
  <Transition name="fade" appear>
    <section>
      <div class="welcome">
        <h1>
          Hi! <span class="wave">👋</span> I'm Pablo
          <small>Principal Frontend Engineer @ iubenda</small>
        </h1>
        <p>
          I'm a Web Developer who builds advanced apps and makes development work better. I'm really
          passionate about creating high-quality software, while making sure it's still enjoyable
          for developers to work with! <br /><br />I strongly believe in Agile methods to help with
          Continuous Integration / Continuous Delivery (CI/CD) for complex projects that need to
          evolve and change over time. I love improving code quality and optimizing processes.
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
