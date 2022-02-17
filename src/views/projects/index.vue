<template>
    <div class="view-projects">
        <div class="row">
            <aside class="sidebar col-lg-2">
                <h4>Проекты</h4>
                <form @submit.prevent="sendForm">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="turnkeyWebsite">
                        <label class="form-check-label" for="turnkeyWebsite">
                            Сайт под ключ
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="cms">
                        <label class="form-check-label" for="cms">
                            Работа с CMS
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="landing">
                        <label class="form-check-label" for="landing">
                            Лендинг
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="html">
                        <label class="form-check-label" for="html">
                            Верстка
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="programming">
                        <label class="form-check-label" for="programming">
                            Программирование
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="bots">
                        <label class="form-check-label" for="bots">
                            Разработка ботов
                        </label>
                    </div>
                </form>
            </aside>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>

    .sidebar {
        padding: 15px;
        background: #000;
        box-shadow: -4px 3px 0px 0px #7b2c2c;
        border-radius: 3px;
    }

    ul {
        li {
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }

</style>