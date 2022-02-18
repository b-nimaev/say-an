<template>
    <div class="row">
        <div class="col-md-5 m-auto">
            <h4 class="mb-3">Login template</h4>
            <form @submit.prevent="">
                <div class="mb-3">
                    <label for="emailInput" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="emailInput">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Пароль</label>
                    <input type="password" class="form-control" id="password">
                </div>
                <div class="mb-3 d-flex justify-content-between">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
                    </div>
                    <button @click.prevent="goToDashboard" type="submit" class="btn btn-primary">Войти</button>
                </div>
                <div class="d-flex justify-content-end">
                    <button @click.prevent="registration" type="submit" class="btn btn-primary">Регистрация</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
   methods: {
        goToDashboard: function () {
            if (this.$store.state.isAuthenticated) {
                this.$router.push('/dashboard')
            } else {
                this.$router.push('/login')
            }
        },
        registration: function () {
            this.$router.push('/registration')
        }
    }
}
</script>