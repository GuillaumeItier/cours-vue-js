<template>
    <main class="min-h-screen bg-base-200 flex justify-center items-start px-4 py-8">
    
        <!-- 
            Ce bloc fait max 448px (max-w-md), il est centré sur l'écran de gauche à droite 
            et s'agrandira vers le bas au fur et à mesure qu'on ajoute des cartes d'amis.
        -->
        <div class="w-full max-w-md flex flex-col">
            
            <!-- Titre de l'exercice -->
            <h1 class="text-lg md:text-2xl font-bold mb-6 text-center text-base-content">
            EXO PROPS 
            </h1>
            <h2 class="text-lg md:text-l font-bold mb-6 text-center text-base-content">
            Ici c'est le parent (props.vue)
            </h2>

            <!-- Zone responsive pour la liste des composants enfants -->
            <div class="w-full space-y-4" role="region" aria-label="Liste des amis">
            

            <!-- [LES COMPOSANTS ENFANTS "OneFriend.vue" IRONT ICI ET S'EMPILERONT VERS LE BAS] -->
            
            <OneFriend v-for="(oneFriend, index) in friends" :key="index" 
                :name="oneFriend.name" 
                :id="oneFriend.id"
                :rank="oneFriend.rank"
                :phone="oneFriend.phone"
                :email="oneFriend.email"       
            />

            </div>

        </div>
    </main>

</template>

<script setup lang="js">
import OneFriend from '../../components/OneFriend.vue' 

const friends = [
    {
        name: "Goku" ,
        rank: "en Or",
        id: "Goku777",
        phone: "0255542452",
        email: "kakarot@capsule.corp"
    },
    {
        name: "Freezer" ,
        rank: "en Argent",
        id: "SeigneurFreezer",
        phone: "052444242",
        email: "freezer@capsule.corp"
    },
    {
        name: "Vegeta" ,
        rank: "en Or",
        id: "LePrinceSayian",
        phone: "0959598888",
        email: "Vegeta@capsule.corp"
    },
    {
        name: "Papi Génial" ,
        rank: "en Or",
        id: "DonJuan",
        phone: "0255542452",
        email: "BG@capsule.corp"
    },
    {
        name: "Krillin" ,
        rank: "en Or",
        id: "krikri",
        phone: "1212121212",
        email: "krillin@capsule.corp"
    },
    {
        name: "Boo" ,
        rank: "en Or", 
        id: "BooBoo",
        phone: "0255542452",
        email: "ILoveChocolate@capsule.corp"
    }
]
</script>