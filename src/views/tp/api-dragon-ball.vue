<template>
    <main class="min-h-screen bg-base-200">

        
        <header class="text-center py-10 md:py-14 px-4">
            <h1 class="text-4xl md:text-6xl font-extrabold text-primary">Dragon Ball</h1>
            <p class="mt-3 text-base md:text-lg font-semibold text-secondary">
            Race, affiliation, niveau de ki
            </p>

            <!--  Test --
             <p>{{ selectedCharacter?.name }}</p> -->
        </header>

        <!-- Conteneur centré -->
        <section class="w-full max-w-6xl mx-auto p-4 md:py-10">

            <!-- ÉTAT : chargement -->
            <p v-if="charactersLoading" class="text-center">
                <span  class="loading loading-spinner loading-lg text-primary"></span>
            </p>

            <!-- ÉTAT : erreur -->
            <div v-else-if="charactersError" class="alert alert-error max-w-md mx-auto">
                <span>{{charactersError}}</span>
            </div>

            <!-- ÉTAT : liste vide -->
            <p v-else-if="charactersEmpty" class="text-center opacity-70">
                {{charactersEmpty}}
            </p>

            <!-- ÉTAT : succès. Grille responsive : 1 / 2 / 3 / 4 colonnes -->
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                <!-- Une carte (à répéter) -->
                <article v-for="character in characters" :key="character.id" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
                    <figure class="bg-base-200 h-56 p-4">
                        <button
                            type="button"
                            @click="openModal(character)"
                            :aria-label="`Agrandir l'image de ${character.name}`"
                            class="w-full h-full flex items-center justify-center cursor-zoom-in rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <img
                                :src="character.image"
                                alt=""
                                class="h-full w-auto object-contain"
                                loading="lazy"
                            />
                        </button>
                    </figure>

                    <div class="card-body gap-3 p-4">
                        <h2 class="card-title text-primary">{{character.name}}</h2>

                        <div class="flex flex-wrap gap-2">
                            <span class="badge badge-secondary">{{character.race}}</span>
                            <span class="badge badge-outline">{{character.gender}}</span>
                        </div>

                        <p class="text-sm">
                            <span class="font-semibold">Affiliation :</span>
                            {{character.affiliation}}
                        </p>

                        <div class="stats stats-vertical bg-base-200 w-full">
                            <div class="stat p-3">
                                <div class="stat-title text-xs">Ki</div>
                                <div class="stat-value text-lg text-accent break-words">{{character.ki}}</div>
                            </div>
                            <div class="stat p-3">
                                <div class="stat-title text-xs">Ki max</div>
                                <div class="stat-value text-lg text-secondary break-words">{{character.maxKi}}</div>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </section>
        <dialog ref="dialogRef" class="modal" aria-labelledby="modal-title">
            <div v-if="selectedCharacter" class="modal-box max-w-3xl">
                <img
                    :src="selectedCharacter.image"
                    :alt="`représentation de ${selectedCharacter.name}`"
                    class="w-full max-h-[75vh] object-contain"
                />
                <h3 id="modal-title" class="font-bold text-lg mt-3">{{selectedCharacter.name}}</h3>
                <div class="modal-action">
                    <form method="dialog">
                        <button @close="selectedCharacter = null"  class="btn">Fermer</button>
                    </form>
                </div>
            </div>
        </dialog>
    </main>
</template>

<script setup>
import {ref, onMounted, nextTick} from 'vue' 

const characters = ref([])
const charactersLoading = ref(true)
const charactersError = ref("")
const charactersEmpty = ref("")
const selectedCharacter = ref(null)
const dialogRef = ref(null)

async function fetchDragonBall() {
    try {
        const response = await fetch('https://dragonball-api.com/api/characters?limit=100')
        if(!response.ok){
            throw new Error (`Erreur HTTP : ${response.status}`)
        }
        const data = await response.json()
        characters.value = data.items
        if (characters.value.length === 0  ){
            charactersEmpty.value = "La liste des personnages est vide :("
        }
    } catch(e) {
        charactersError.value = "Impossible de charger les personnages :("
        console.error(e)
    }finally {
        charactersLoading.value = false 
    }
}

async function openModal(character) {
    selectedCharacter.value = character
    await nextTick()
    dialogRef.value.showModal()
    console.log(character);
}

onMounted(() => {
    fetchDragonBall()
})


</script>