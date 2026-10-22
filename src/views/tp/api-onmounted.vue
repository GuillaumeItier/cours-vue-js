<template>
    <!-- Conteneur principal centré et responsive (de mobile à PC) -->
    <main class="w-full max-w-4xl mx-auto p-4 md:py-12">
        
        <!-- Titre Principal H1 centré (Couleur de base : Primary) -->
        <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary">
            Une simple requête HTTP GET
        </h1>
        </div>

        <!-- BLOC 1 : Les Pokémon -->
        <section class="mb-6">
            <!-- Titre Rose (Couleur de base : Secondary) -->
            <h2 class="text-xl font-bold text-secondary mb-4">Les Pokémon :</h2>
            <p v-if="pokemonsLoading">Chargement des Pokémon...</p>
           
            <p v-else-if="pokemonsError" class="text-error">{{ pokemonsError }}</p>
            <!-- Grille responsive : s'aligne et revient à la ligne seule sur mobile -->
            <div v-else class="flex flex-wrap gap-2">
                <span 
                    v-for="pokemon in pokemons"
                    :key="pokemon.name"
                    class="badge badge-primary badge-lg font-medium px-4 py-3 rounded-xl border-none"
                >
                    {{ pokemon.name}}
                </span>
                
            </div>
        </section>

        <!-- Ligne de séparation officielle DaisyUI -->
        <div class="divider my-6 opacity-40"></div>

        <!-- BLOC 2 : Météo Toulouse -->
        <section class="mb-6">
            <!-- Titre Rose (Couleur de base : Secondary) -->
            <h2 class="text-xl font-bold text-secondary mb-4">Météo Toulouse :</h2>
            <!-- Condition : si le fetch rencontre une erreur-->
            <p v-if="meteoError" class="text-error">{{ meteoError }}</p>
            <!-- Condition : sinon si le fetch fonctionne -->
            <div v-else-if="meteo" class="flex flex-col gap-2.5">
                
                <!--  Ligne Température Max (Avec icône Thermomètre) -->
                <div class="bg-base-100 border border-base-300 rounded-lg p-3 flex items-center gap-3 shadow-2xs">
                <!-- Icône Thermomètre colorée en Rose avec text-secondary -->
                <span class="text-secondary font-bold text-lg">🌡️</span>
                <p class="text-sm text-base-content">
                    Température max : <span class="font-bold">{{meteo.daily.temperature_2m_max[0]}} °C</span>
                </p>
                </div>

                <!--  Ligne Température Min (Avec icône Thermomètre) -->
                <div class="bg-base-100 border border-base-300 rounded-lg p-3 flex items-center gap-3 shadow-2xs">
                <span class="text-secondary font-bold text-lg">🌡️</span>
                <p class="text-sm text-base-content">
                    Température min : <span class="font-bold">{{meteo.daily.temperature_2m_min[0]}} °C</span>
                </p>
                </div>

                <!--  Ligne Température Actuelle (Avec icône Thermomètre) -->
                <div class="bg-base-100 border border-base-300 rounded-lg p-3 flex items-center gap-3 shadow-2xs">
                <span class="text-secondary font-bold text-lg">🌡️</span>
                <p class="text-sm text-base-content">
                    Température actuelle : <span class="font-bold">{{meteo.current.temperature_2m}} °C</span>
                </p>
                </div>

                <!--  Ligne Condition Météo (Avec icône Nuage) -->
                <div class="bg-base-100 border border-base-300 rounded-lg p-3 flex items-center gap-3 shadow-2xs">
                <!-- Icône Nuage ou éclaircie -->
                <span class="text-xl">⛅</span>
                <p class="text-sm text-base-content">
                    Condition météo : <span class="font-bold">{{ conditionMeteo }} </span>
                </p>
                </div>

            </div>
            <!-- Condition : sinon un message de chargement par defaut en attendant le resultat du fetch -->
            <p v-else>Chargement de la météo...</p>
        </section>
            
        <!-- Deuxième ligne de séparation officielle DaisyUI -->
        <div class="divider my-6 opacity-40"></div>

            <!-- BLOC 3 : Digimons -->
        <section class="mb-6">
            <h2 class="text-xl font-bold text-secondary mb-4">Digimons :</h2>

            <p v-if="digimonsLoading">Chargement en cours ...</p>
            <p v-else-if="digimonsError" class="text-error">{{ digimonsError }}</p>

            <!-- Grille responsive : 1 colonne sur mobile, 2 sur tablette, 3 sur PC -->
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">

                <!-- Carte DaisyUI : image en haut, texte centré en dessous -->
                <div
                    v-for="digimon in digimons"
                    :key="digimon.name"
                    class="card bg-base-100 border border-base-300 shadow-sm"
                >
                    <figure class="px-4 pt-4">
                        <img
                            :src="digimon.img"
                            :alt="`Image du digimon : ${digimon.name}`"
                            class="w-full max-w-[12rem] h-auto object-contain rounded-xl"
                        />
                    </figure>

                    <div class="card-body items-center text-center p-4 gap-1">
                        <h3 class="card-title text-lg font-extrabold text-primary uppercase tracking-wide">
                            {{ digimon.name }}
                        </h3>
                        <span class="badge badge-secondary badge-outline">
                            {{ digimon.level }}
                        </span>
                    </div>
                </div>

            </div>
        </section>

    </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// Fetch Pokemon avec variable de chargement initialisée à true 
const pokemons = ref([])
const pokemonsLoading = ref(true)
const pokemonsError = ref("")


async function fetchPokemons() {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        if ( !response.ok ){
            throw new Error (`Erreur HTTP : ${response.status} `)
        }
        const data = await response.json()
        pokemons.value = data.results 
        console.log(data)

    }catch (e){
        pokemonsError.value = 'Impossible de récupérer les pokemons :('
        console.error(e)
    } finally {
        pokemonsLoading.value = false 
    }
}

////// Fetch meteo avec variable meteo initialisée a null /////

//Variable meteo qui contiendra le résultat du fetch, initialisé à null
const meteo = ref(null)
const meteoError = ref("")
// Objet qui contient la traduction du code contenu dans le fetch selon meteoFrance 
const conditions = {
    0: "Ciel dégagé",
    1: "Plutôt dégagé",
    2: "Partiellement nuageux",
    3: "Couvert",
    45: "Brouillard",
    48: "Brouillard givrant",
    51: "Bruine légère",
    53: "Bruine modérée",
    55: "Bruine dense",
    61: "Pluie faible",
    63: "Pluie modérée",
    65: "Pluie forte",
    71: "Neige faible",
    73: "Neige modérée",
    75: "Neige forte",
    80: "Averses légères",
    81: "Averses modérées",
    82: "Averses violentes",
    95: "Orage"
}



async function fetchMeteo() {
    try{
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.6047&longitude=1.4442&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FParis')

        if(!response.ok){
            throw new Error(`Erreur HTTP : ${response.status}`)
        }
        const data = await response.json()
        meteo.value = data
        console.log(meteo.value)
    }catch (e) {
        meteoError.value = "Impossible de récupérer la météo."
        console.error(e)
    }
}

const conditionMeteo = computed(() => {
    // return "" en attendant que le fetch s'execute au moment du <onMounted>
    if (!meteo.value) return ""
    //return la valeur qui correspond a l'indice ,sinon return "Condition inconnu"
    return conditions[meteo.value.current.weather_code] ?? "Condition inconnue"
})

// Fetch digimons

const digimons = ref([])
const digimonsLoading = ref(true)
const digimonsError = ref("")

async function fetchDigimons() {
    try{
        const response = await fetch("https://digimon-api.vercel.app/api/digimon")
        if (!response.ok){
            throw new Error(`Erreur HTTP : ${response.status}`)
        }
        const data = await response.json()
        digimons.value = data 
        console.log(digimons.value);
    }catch (e){
        digimonsError.value = "Impossible de récupérer les Digimons :("
        console.error(e)
    }finally {
        digimonsLoading.value = false
    }
}


onMounted(() => {
    fetchPokemons()
    fetchMeteo()
    fetchDigimons()
})


</script> 
