<template>
    <main class="container mx-auto p-4 md:p-8 flex flex-col gap-10">
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary text-center">
            Remontée d'événements avec defineEmits
        </h1>

        <section aria-labelledby="titre-formulaire">
            <h2 id="titre-formulaire" class="text-2xl font-bold mb-4 text-center">
                Ajouter un ami
            </h2>
            <NewFriend v-on:add-friend="createNewFriend"
                 />
        </section>

        <section aria-labelledby="titre-liste">
            <h2 id="titre-liste" class="text-2xl font-bold mb-4 text-center">
                Liste de mes amis
            </h2>
            <div class="flex flex-col gap-4">
                <OneFriendEmit v-for="friend in friends" :key="friend.id" v-on:mon-event-premium-update="toggleLevel" v-on:delete-friend="deleteOneFriend" 
                    v-bind:un-ami-id="friend.id"
                    v-bind:nom="friend.name"
                    v-bind:email="friend.email"
                    v-bind:telephone="friend.phone" 
                    v-bind:is-premium="friend.isPremium"
                    v-bind:niveau="friend.level"   
                />
            </div>
        </section>
    </main>
</template>

<script setup>
import {ref} from 'vue'
import OneFriendEmit from "../../components/OneFriendEmit.vue";
import NewFriend from "../../components/NewFriend.vue";

const friends = ref([])
const nextId = ref(1)

function createNewFriend(ami){
    friends.value.push(
        {
            name : ami.nom.trim(),
            phone : ami.telephone.trim(),
            email : ami.email.trim(),
            id : nextId.value ++ ,
            isPremium : true , 
            level : "en Or"
        }
    )
}

function deleteOneFriend(id){
    friends.value = friends.value.filter((x)=>{ return x.id !== id})
    console.log(id)
}

function toggleLevel(id){
    const friend = friends.value.find((x) => x.id === id)
    friend.isPremium = !friend.isPremium
    friend.level = friend.isPremium ? "en Or" : "en Plomb"
}
</script>
