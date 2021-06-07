export default {
    methods: {
        handleOptionClick(option) {
            if (!this.isEntryAllowed) {
                this.$swal({
                icon: "error",
                text: "Invalid authorization detected. Please contact Admin.",
                });
            } else {
                this.showDialog = true;
                this.activeOption = option;
            }
        },
        handleEventStarted(option) {
            this.activeEvent = option;
            this.showDialog = false;
        },
        handleCloseDialog() {
            this.showDialog = false;
            this.activeOption = null;
        },
        handleBack() {
            this.showDialog = false;
            this.activeEvent = null;
            this.activeOption = null;
        },
    },
    props: {
        templateType: {
            type: Object,
        },
    },
    beforeRouteLeave(to, from, next) {
        this.activeEvent = null;
    },
}