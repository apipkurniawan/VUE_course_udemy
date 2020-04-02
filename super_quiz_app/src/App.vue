<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>The Super Quiz</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <transition name="flip" mode="out-in">
          <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "./Question.vue";
import Answer from "./Answer.vue";

export default {
  name: "app",
  data() {
    return {
      mode: "app-question"
    };
  },
  components: {
    appAnswer: Answer,
    appQuestion: Question
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = "app-answer";
      } else {
        this.mode = "app-question";
        alert("wrong, try again!");
      }
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
.flip-enter {
  /* transform: rotateY(0deg); */
}
.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}
.flip-leave {
  /* transform: rotateY(0deg); */
}
.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
