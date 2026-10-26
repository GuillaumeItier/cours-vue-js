<template>
    <div class="w-full flex flex-col space-y-1.5">
        <!-- Carte principale -->
        <article class="card bg-[#f0f7ff] text-[#0f294a] shadow-md rounded-xl border border-blue-100/50">
                
            <div class="card-body p-5 space-y-4">
                <span class="text-xs font-mono font-semibold text-base-content/70 px-1">
                Composant OneFriend.vue
                </span>
            
            <!-- En-tête : Identité + Badge -->
            <div class="flex justify-between items-start gap-4">
                <div class="flex items-center gap-2">
                <!-- Icône décorative masquée pour les lecteurs d'écran (évite les répétitions lues à haute voix) -->
                <span class="text-lg" aria-hidden="true">👤</span>
                <h2 class="font-bold text-base md:text-lg tracking-tight flex flex-wrap items-center gap-x-1">
                <!-- Le nom reste à la taille normale (text-base md:text-lg) -->
                <span>{{ name }}</span>
                <span class="text-xs md:text-sm font-medium text-base-content/80">un ami :</span>
                <span>{{localRank}}</span>
                </h2>
                </div>
                
                <!-- Badge DaisyUI : Standard / Premium -->
                <span :class="localRank === 'en Or' ? 'bg-success' : 'bg-warning'" class="badge rounded  text-white font-semibold text-xs py-2.5 px-3 border-none shadow-sm">
                {{localRank === 'en Or' ? 'Premium' : 'Warning'}}
                </span>
            </div>

            <!-- Informations de contact (Liste sémantique pour l'accessibilité) -->
            <ul class="space-y-2 text-sm font-medium" Skinner-attributes>
                <li class="flex items-center gap-3">
                <!-- Badge ID contrasté -->
                <span class="inline-flex items-center justify-center bg-[#deedff] text-[#0f294a] text-[10px] font-bold px-1.5 py-0.5 rounded min-w-[24px]" aria-label="Identifiant">
                    ID
                </span>
                <span class="font-mono">{{id}}</span>
                </li>
                <li class="flex items-center gap-3">
                <span class="text-base" aria-hidden="true">📞</span>
                <span class="sr-only">Téléphone :</span>
                <span>{{phone}}</span>
                </li>
                <li class="flex items-center gap-3">
                <span class="text-base" aria-hidden="true">✉️</span>
                <span class="sr-only">Email :</span>
                <a :href="'mailto:' + email" class="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0f294a] rounded px-0.5">
                    {{email}}
                </a>
                </li>
            </ul>

            <!-- Section Action : Bouton rose/violet à gauche -->
            <div class="card-actions justify-start pt-1">
                <button
                @click="changePremium()"
                class="btn btn-sm bg-[#be185d] hover:bg-[#9d114b] text-white font-semibold border-none rounded shadow-sm px-4 normal-case transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#be185d]">
                {{localRank === 'en Or' ? 'Modif en Warning' : 'Modif en Premium' }}
                </button>
            </div>

            </div>
        </article>
    </div>
</template>
<script setup lang="js">
import { defineProps, ref , computed } from 'vue'

// const props = defineProps(['name', 'rank' , 'id', 'phone', 'email'])
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: false,
        default: 'en Or' // Sécurité : si le parent oublie de donner un rang, l'application ne plante pas
    },
    id: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


const localRank = ref(props.rank)




const changePremium = () => {
    if (localRank.value === "en Or"){
        localRank.value = "en Argent"
    }else{
        localRank.value = "en Or"
    }
}

</script>