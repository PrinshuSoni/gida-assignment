<template>
    <v-app>
        <v-app-bar app dark>
            <v-toolbar-title>Assignment</v-toolbar-title>
        </v-app-bar>
        
        <v-main>
            <v-container class="text-center" fluid fill-height justify-center align-start>
                <v-btn color="purple" dark @click="handleClick">Click Me</v-btn>
                <div v-if="loading" class="text-center spinner">
                    <v-progress-circular indeterminate size="64" />
                </div>
                <ActionDialog @cancel="handleActionDialogCancelled" @confirm="handleActionDialogConfirmed" />
                <Graph />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import ActionDialog from './components/ActionDialog';
import Graph from './components/Graph';

export default {
    name: 'App',
    components: {
        ActionDialog,
        Graph
    },
    data () {
        return {
            loading: false
        };
    },
    methods: {
        handleClick () {
            this.$store.commit("toggleActionDialog");
        },
        handleActionDialogCancelled () {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 20000);
        },
        handleActionDialogConfirmed () {
            this.$store.commit("toggleGraphDialog");
        }
    }
};
</script>

<style lang="scss" scoped>
.spinner {
    width: 100%;
}
</style>