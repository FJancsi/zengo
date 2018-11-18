<template>
    <div id="app" class="app-container">
        <h1>Megye - Város</h1>
        <hr/>
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

<style src="@/assets/css/app.css"></style>
