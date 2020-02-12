<template>
    <div id="app">
        <router-view></router-view>

        <img alt="Vue logo" src="./assets/logo.png">
            <vuescroll>
                <todo />
            </vuescroll>
    </div>
</template>

<script>
    import todo from "@/components/todo";
    import style from "@/components/style.scss";
    import vuescroll from 'vuescroll';

    export default {
        name : 'app',
        components:{
            todo,
            style,
            vuescroll
        }
    }
</script>
