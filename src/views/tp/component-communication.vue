<template>
    <main class="container mx-auto p-4 md:p-8 flex flex-col items-center gap-8">
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary text-center">
            Gestion de l'utilisateur
        </h1>

        <ActiveUserComponent
            :user-name="oneUser.name"
            :user-age="oneUser.age"
        />
        <UserDataComponent
            v-on:user-data-emit-update="updateUser"
            :user-name="oneUser.name"
            :user-age="oneUser.age"
        />
    </main>
</template>

<script setup>
import ActiveUserComponent from "../../components/ActiveUserComponent.vue";
import UserDataComponent from "../../components/UserDataComponent.vue";
import {ref} from 'vue'


const oneUser = ref(
    {
        "name" : "Son Goku",
        "age" : 18
    }
)

function updateUser(name, age){
    oneUser.value.name = name 
    oneUser.value.age = age

    }
</script>