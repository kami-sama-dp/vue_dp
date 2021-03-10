<template>
    <div class="dashboard-container">
        <component :is='currentRole'/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentRole: 'adminDashboard'
        }
    }
}
</script>