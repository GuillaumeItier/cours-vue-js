<template>
    <form @submit.prevent="submit" class="card bg-info text-info-content shadow-xl w-full max-w-xl mx-auto">
        <div class="card-body gap-4">
            <h2 class="card-title text-2xl">Ajouter un Nouvel Ami</h2>

            <div class="flex flex-col gap-1">
                <label for="friend-name" class="font-medium">Nom</label>
                <input v-model="nom" id="friend-name" type="text" autocomplete="name" required
                    placeholder="Votre nom"
                    class="input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/70" />
            </div>

            <div class="flex flex-col gap-1">
                <label for="friend-phone" class="font-medium">Téléphone</label>
                <input v-model="telephone" id="friend-phone" type="tel" autocomplete="tel"
                    placeholder="Ex : 06 00 00 00 00"
                    class="input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/70" />
            </div>

            <div class="flex flex-col gap-1">
                <label for="friend-email" class="font-medium">Email</label>
                <input v-model="email" id="friend-email" type="email" autocomplete="email"
                    placeholder="Votre email"
                    class="input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/70" />
            </div>

            <div class="card-actions mt-2">
                <button  type="submit" class="btn btn-primary w-full">Ajouter Ami</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import {defineEmits, defineProps, ref} from 'vue'

const nom = ref("")
const telephone = ref("")
const email = ref("")

const emit = defineEmits({
    "add-friend": (ami) => {
        if (ami.nom) {
            return true;
        } else {
            console.warn("add-friend a été émis sans nom.");
            return false;
        }
    }
});

function submit () {
    emit("addFriend", { nom: nom.value, telephone: telephone.value, email: email.value })
}
</script>