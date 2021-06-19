<template>
    <div class="text-center">
        <v-dialog persistent v-model="dialog" max-width="400" :fullscreen="$vuetify.breakpoint.name === 'xs'">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2 dark">
                    Action Dialog
                </v-card-title>

                <v-card-text>
                    Click Cancel to close the dialog and show the spinner for 20 seconds.
                    Click Confirm to close the dialog and show the graph on new dialog.
                </v-card-text>

                <v-divider />

                <v-card-actions>
                    <v-spacer />
                    <v-btn text @click="handleCancel">Cancel</v-btn>
                    <v-btn color="primary" text @click="handleConfirm">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default {
    name: 'ActionDialog',
    computed: {
        dialog () {
            return this.$store.state.actionDialog;
        }
    },
    methods: {
        handleCancel () {
            this.$store.commit("toggleActionDialog");
            this.$emit("cancel");
        },
        handleConfirm () {
            this.$store.commit("toggleActionDialog");
            this.$emit("confirm");
        }
    }
};
</script>