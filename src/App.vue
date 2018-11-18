<template>
    <div id="app">
        <h1>Megye - Város</h1>
        <states-view></states-view>
    </div>
</template>

<script>
    import StatesView from '@/components/StatesView';
    export default {
        name: 'app',
        components: {
           StatesView
        }
    };
</script>

<style scoped></style>
