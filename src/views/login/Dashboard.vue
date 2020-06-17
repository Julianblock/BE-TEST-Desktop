<template>
    <div class="dashboard-w">
        <Greeting />
    </div>
</template>

<style scoped>
    .dashboard-w {
        padding: 5%;
        display: flex;
        flex-flow: column;
    }
</style>

<script>
import Greeting from './Greeting';

export default {
    components: {
        Greeting
    }
}
</script>