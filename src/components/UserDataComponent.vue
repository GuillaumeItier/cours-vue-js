<template>
    <section aria-labelledby="titre-formulaire"
        class="card bg-neutral text-neutral-content shadow-xl w-full max-w-md">
        <form @submit.prevent="updateUser" class="card-body gap-4">
            <h2 id="titre-formulaire" class="card-title text-xl">
                Formulaire d'édition
            </h2>

            <div class="flex flex-col gap-1">
                <label for="user-name" class="font-medium">Votre nom</label>
                <input v-model="name" id="user-name" type="text" autocomplete="name" required
                    placeholder="Entrer votre nom"
                    class="input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/70" />
            </div>

            <div class="flex flex-col gap-1">
                <label for="user-age" class="font-medium">Votre âge</label>
                <input v-model="age" id="user-age" type="number" min="0" inputmode="numeric" required
                    placeholder="Entrer votre âge"
                    class="input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/70" />
            </div>

            <div class="card-actions mt-2">
                <button type="submit" class="btn btn-primary w-full">
                    Mettre à jour
                </button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref, defineProps } from 'vue';

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
const name = ref(props.userName)
const age = ref(props.userAge)

const emit = defineEmits({
    "userDataEmitUpdate": (name, age) => {
        if(name && age){
            return true;
        } else {
            console.warn("L'événement userDataEmitUpdate n'a pas toutes les informations nécéssaires.");
            return false;
        }
    }
})

function updateUser(){
    emit("userDataEmitUpdate", name.value, age.value)
}
</script>