<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {};
</script>
<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header .slot-header {
  margin: 0;
  color: #202020;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .sc-modal__header-close {
    cursor: pointer;
  }
}

.modal-body {
  padding: 0 20px 30px;
}

.modal-footer {
  border-top: 1px solid #d8d8d8;
  padding: 15px 20px;
  div {
    display: flex;
    justify-content: flex-end;
  }
  span {
    color: #dd0000;
    font-size: 15px;
    cursor: pointer;
  }
}
.modal-default-button {
  border: none;
  padding: 10px;
  border-radius: 4px;
  background-color: #0a0a0a;
  color: #ffffff;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: #7a7a7a;
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.sc-modal__body-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  .snippet {
    margin-top: 20px;
    // margin-left: 20px;
  }
}
.dot-flashing {
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: #444444;
  color: #444444;
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;
}

.dot-flashing::before,
.dot-flashing::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}

.dot-flashing::before {
  left: -25px;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: #444444;
  color: #444444;
  animation: dotFlashing 1s infinite alternate;
  animation-delay: 0s;
}

.dot-flashing::after {
  left: 15px;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #444444;
  color: #444444;
  animation: dotFlashing 1s infinite alternate;
  animation-delay: 1s;
}

@keyframes dotFlashing {
  0% {
    background-color: #444444;
  }
  50%,
  100% {
    background-color: #999999;
  }
}
</style>
