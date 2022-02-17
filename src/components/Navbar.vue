<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#"><h3>Say-an</h3></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Главная</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/projects">Портфолио</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="contacts">Контакты</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Меню</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><router-link class="dropdown-item" to="dashboard">Личный кабинет</router-link></li>
                        <li><router-link class="dropdown-item" to="login">Вход</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    form {
        button {
            padding: 5px 20px;
            border: 0;
        }
    }
</style>

<script>

</script>