<template>
    <div class="title">
        <Button class="close-button" size="small" type="error" shape="circle" @click="closeWin"/>
        <Button class="min-button" size="small" type="warning" shape="circle" @click="minWin"/>
        <Button class="max-button" size="small" type="success" shape="circle" @click="maxWin"/>
    </div>
</template>

<script>

    const {ipcRenderer: ipc} = require('electron')
    export default {
        name: "Title",
        methods: {
            closeWin() {
                ipc.send('close')
            },
            minWin() {
                ipc.send('hide-window')
            },
            maxWin() {
                ipc.send('max-window')
            }
        },
        computed: {}

    }
</script>

<style scoped>

    .title {
        position: relative;
    }

    .min-button {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #f29100;
        display: inline-block;
        vertical-align: middle;
        -webkit-app-region: no-drag;
    }

    .max-button {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #19be6b;
        display: inline-block;
        vertical-align: middle;
        -webkit-app-region: no-drag;
    }

    .close-button {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #ed4014;
        display: inline-block;
        vertical-align: middle;
        -webkit-app-region: no-drag;
    }

</style>