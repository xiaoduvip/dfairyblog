<template>
   <div class="load-container">
        <div class="load"></div>
  </div>
</template>



<style lang='scss' scoped>
.load-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
 .load {
    width: 50px;
    height: 50px;
    margin: 20px auto;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(0, 169, 178,.2);;
    &::before {
        content: "";
        width: 70px; // 50 * √2
        height: 70px; // 50 * √2
        background-color: #00adb5;
        position: absolute;
        left: 50%;
        bottom: 50%;
        z-index: 1;
        transform-origin: left bottom;
        animation: rotate 1.5s infinite linear;
    }
    &::after {
        content: "";
        width: 40px;
        height: 40px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background-color: #fff;
        z-index: 2;
        border-radius: 50%;
    }
    }
    @keyframes rotate {
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
}
</style>