<template>
    <div class="login-vue">
        <div class="container">
            <Authorization/>
            <Registration/>
        </div>
    </div>
</template>

<script>
import Authorization from '@/components/Auth/Authorization.vue'
import Registration from '@/components/Auth/Registration.vue'
export default {
    components: {
        Authorization,
        Registration
    }
}
</script>