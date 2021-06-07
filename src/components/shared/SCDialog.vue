<template>
  <SCModal>
    <h3 slot="header">
      <div class="sc-modal__header-title">
        {{ getTitle }}
      </div>
      <div class="sc-modal__header-close" @click="handleDialogClose">
        <font-awesome-icon icon="times" />
      </div>
    </h3>
    <div slot="body">
      <div v-if="!showPin && mode === 'card'" class="sc-modal__body-text">
        Tap your Smart Card on RFID Reader
        <div class="snippet" data-title=".dot-flashing">
          <div class="stage">
            <div class="dot-flashing"></div>
          </div>
        </div>
      </div>
      <div v-else-if="!showPin && mode === 'qr'" class="sc-modal__body-text">
        Show your QR Code in Camera
        <div class="snippet" data-title=".dot-flashing">
          <div class="stage">
            <div class="dot-flashing"></div>
          </div>
        </div>
        <div class="web-camera-container">
          <div v-if="isCameraOpen" class="camera-box">
            <video ref="camera" :width="450" :height="337.5" autoplay></video>
          </div>
        </div>
      </div>
      <div class="pin-code__container" v-else-if="showPin">
        <span class="pin-code__text">
          Please enter your 6-digit secure PIN
        </span>
        <div class="input-wrapper">
          <PincodeInput
            :length="6"
            :secure="true"
            :characterPreview="false"
            v-model="securePin"
          />
        </div>
        <span v-if="pinError" class="pin-code__error">
          <font-awesome-icon icon="exclamation-circle" /> Invalid PIN enetered.
          Failed {{ pinFailedCount }} of 3 attempts.
        </span>
      </div>
    </div>
    <div slot="footer">
      <button class="modal-default-button" @click="handleModeChange">
        {{ mode === "card" ? "QR Code" : "Card" }}
      </button>
    </div>
  </SCModal>
</template>
<script>
import SCModal from "@/components/shared/SCModal";
import PincodeInput from "vue-pincode-input";

import { mapActions } from "vuex";

export default {
  components: {
    SCModal,
    PincodeInput,
  },
  data() {
    return {
      showPin: false,
      mode: "card",
      isCameraOpen: false,
      securePin: "",
      pinError: false,
      pinFailedCount: 0,
    };
  },
  props: {
    activeOption: {
      type: String,
    },
  },
  computed: {
    getTitle() {
      if (this.showPin) {
        return "Authentication";
      } else if (this.mode === "qr") {
        return "QR Code";
      }
      return "Scan";
    },
  },
  methods: {
    handleModeChange() {
      this.showPin = false;
      this.mode = this.mode === "card" ? "qr" : "card";
    },
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    createCameraElement() {
      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          alert("May the browser didn't support or there is some errors.");
        });
    },
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    },
    handleDialogClose() {
      this.$emit("close");
      this.stopCamera();
    },
    stopCamera() {
      if (this.$refs.camera) {
        this.stopCameraStream();
      }
    },
    ...mapActions(["setIsEntryAllowed"]),
  },
  mounted() {
    document.addEventListener("keyup", (e) => {
      if (e.key === "=") {
        this.stopCamera();
        this.showPin = true;
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener("keyup", (e) => {
      this.stopCamera();
    });
    this.showPin = false;
  },
  watch: {
    mode(val) {
      this.toggleCamera();
    },
    showPin(val) {
      if (val) {
        requestAnimationFrame(() => {
          let inputBox = document.querySelector(".vue-pincode-input");
          inputBox.focus();
        });
      }
    },
    securePin(val) {
      if (val.length === 6 && val !== "123456") {
        this.pinFailedCount += 1;
        this.pinError = true;
        this.securePin = "";
      } else if (val.length === 6 && val === "123456") {
        this.$emit("event-started", this.activeOption);
      }
    },
    pinFailedCount(val) {
      if (val === 3) {
        this.$swal({
          icon: "error",
          text: "Maximum attempts reached. Please contact Admin.",
        });
        this.setIsEntryAllowed(false);
      }
    },
  },
};
</script>
<style lang="scss">
.web-camera-container {
  padding: 2rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;

  .camera-button {
    margin-bottom: 2rem;
  }

  .camera-box {
    .camera-shutter {
      opacity: 0;
      width: 450px;
      height: 337.5px;
      background-color: #fff;
      position: absolute;

      &.flash {
        opacity: 1;
      }
    }
  }

  .camera-shoot {
    margin: 1rem 0;

    button {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;

      img {
        height: 35px;
        object-fit: cover;
      }
    }
  }

  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;

    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }

    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;

      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;

        &:nth-child(2) {
          animation-delay: 0.2s;
        }

        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }

  @keyframes preload {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
}
.pin-code__container {
  display: flex;
  align-items: center;
  flex-direction: column;
  .pin-code__text {
    margin-bottom: 20px;
  }
  .vue-pincode-input {
    padding: 0px;
    font-size: 40px;
  }
  .pin-code__error {
    color: #dd0000;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
