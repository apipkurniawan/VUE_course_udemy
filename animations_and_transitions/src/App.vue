<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <!-- dynamic animation -->
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br />
        <br />
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br />
        <br />
        <!-- using dynamic animation -->
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">this is a dynamic text</div>
        </transition>
        <!-- not using dynamic animation -->
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">this is a slide text</div>
        </transition>
        <!-- when loaded the page using 'appear' -->
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="show">this is a fade text</div>
        </transition>
        <!-- using animated class 'https://github.com/daneden/animate.css' -->
        <transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">this is a fade text</div>
        </transition>
        <!-- using multiple element -->
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">this is an info text</div>
          <div class="alert alert-warning" v-else key="warning">this is a warning text</div>
        </transition>
        <hr />
        <!-- javascript animations -->
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width:300px; height:100px; background-color:lightgreen" v-if="load"></div>
        </transition>
        <br />
        <!-- animation with dynamic component -->
        <button
          class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert': selectedComponent = 'app-success-alert' "
        >Toggle dynamic components</button>
        <br />
        <br />
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr />
        <!-- transition and animation group -->
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br />
        <br />
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              @click="removeItem(index)"
              style="cursor:pointer"
              v-bind:key="number"
            >{{ number }}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SuccessAlert from "./SuccessAlert";
import DangerAlert from "./DangerAlert";

export default {
  data() {
    return {
      show: true,
      alertAnimation: "fade",
      load: true,
      elementWidth: 100,
      selectedComponent: "app-success-alert",
      numbers: ["1", "2", "3"]
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
/* .fade-leave {}  */
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
/* .slide-leave {} */
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
}
</style>
