<template>
    <div class="text-center">
        <v-dialog persistent v-model="dialog" max-width="400" :fullscreen="$vuetify.breakpoint.name === 'xs'">
            <v-card class="mx-auto text-center" dark>

                <v-card-title class="text-h5 green">
                    Graph
                </v-card-title>

                <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline :value="value"
                                    color="rgba(255, 255, 255, .7)"
                                    height="150"
                                    padding="12"
                                    stroke-linecap="round"
                                    smooth>
                            <template v-slot:label="item">
                                ${{ item.value }}
                            </template>
                        </v-sparkline>
                    </v-sheet>
                </v-card-text>

                <v-divider />
                <v-card-actions>
                    <v-spacer />
                    <v-btn text @click="handleClose">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default {
    name: 'Graph',
    data () {
        return {
            value: [423, 446, 675, 510, 590, 610, 760]
        };
    },
    computed: {
        dialog () {
            return this.$store.state.graphDialog;
        }
    },
    methods: {
        handleClose () {
            this.$store.commit("toggleGraphDialog");
        }
    }
};
</script>