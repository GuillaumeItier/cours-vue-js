<template>
    <section aria-labelledby="titre-utilisateur"
        class="card bg-primary text-primary-content shadow-xl w-full max-w-md">
        <div class="card-body items-center text-center gap-2">
            <h2 id="titre-utilisateur" class="card-title text-xl">
                Données de l'utilisateur
            </h2>

            <div aria-live="polite" class="flex flex-col gap-1">
                <p class="text-2xl font-bold">{{ userName }}</p>
                <p>{{ userAge }} ans</p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    userName : {
        type : String ,
        required : true
    },
    userAge : {
        type : Number ,
        required : true 
    }
})
</script>