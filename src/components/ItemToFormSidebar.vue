<template> <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" :id=meta>
        <label class="form-check-label" :for="meta">{{ title }}</label>
    </div>
</template>

<script>
export default {
    props: {
        title: String, meta: String
    }
}
</script>

<style lang="scss" scoped>

    input, label {
        cursor: pointer;    
    }

</style>