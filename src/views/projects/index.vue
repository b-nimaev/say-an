<template>
    <div class="view-projects">
        <div class="row">
            <aside class="sidebar col-lg-2">
                <h4>Проекты</h4>
                <form @submit.prevent="sendForm">
                    <InputCheck 
                        v-for="post in posts" 
                        :key="post.id" 
                        :title="post.title" 
                        :meta="post.meta" />
                </form>
            </aside>
        </div>
    </div>
</template>

<script>
    import InputCheck from '@/components/ItemToFormSidebar.vue'
    
    export default {
        components: {
            InputCheck
        },
        data () {
            return {
                posts: [
                    { id: 1, title: 'Сайт под ключ', meta: 'turnkeyWebsite' },
                    { id: 2, title: 'Работа с CMS', meta: 'cms' },
                    { id: 3, title: 'Лендинг', meta: 'landing' },
                    { id: 4, title: 'Верстка', meta: 'html' },
                    { id: 5, title: 'Программирование', meta: 'programming' },
                    { id: 6, title: 'Разработка ботов', meta: 'bots' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        padding: 15px;
        background: #fff;
        box-shadow: -4px 3px 0px 0px #c0c0c0;
        border-radius: 3px;
        color: #222;
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