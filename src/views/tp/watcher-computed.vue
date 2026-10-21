<template>
    <!-- Conteneur pour centrer la carte au milieu parfait de l'écran -->
    <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
    
        <!-- Carte principale (DaisyUI Card) -->
        <div class="card bg-base-100 shadow-2xl w-full max-w-lg overflow-hidden rounded-xl">
      
            <!-- En-tête bleu-violet (Couleur Primary de DaisyUI) -->
            <div class="bg-primary text-primary-content text-center py-5 px-4 font-bold text-xl md:text-2xl uppercase tracking-wider">
                TP Réactivité : Le numéro gagnant
            </div>

            <!-- Corps de la carte -->
            <div class="card-body items-center text-center p-8 gap-6">
            
                <!-- Encart gris pour l'affichage du nombre -->
                <div class="bg-base-200 rounded-xl p-6 w-full max-w-xs shadow-inner">
                    <span class="block text-xs text-base-content/60 font-semibold mb-1">le nombre :</span>
                    <!-- Remplacez le chiffre 5 statique par votre variable réactive -->
                    <span class="block text-5xl font-black text-primary">{{count}}</span>
                </div>

               <!-- Zone conteneur à hauteur fixe pour bloquer le mouvement des boutons -->
                <div class="h-32 flex flex-col items-center justify-center gap-3 w-full max-w-md px-4">
                
                    <!-- Message principal -->
                    <div class="font-black text-xl md:text-2xl tracking-wide uppercase" :class="count === 7 ? 'text-success' : 'text-error'">
                    {{ indice }}
                    </div>

                    <!-- Bloc d'avertissement rouge (DaisyUI Alert-error) -->
                    <!-- On utilise l'opacité pour le masquer sans casser la hauteur de la page -->
                    <div class="alert alert-error shadow-sm text-sm font-semibold justify-center py-3 rounded-xl transition-all duration-300" :class="msg ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'">
                        <span>{{ msg }}</span>
                    </div>

                </div>

                <!-- Zone des boutons en bas -->
                <div class="flex gap-4 justify-center w-full">
                
                <!-- Bouton vert (Couleur Success de DaisyUI) -->
                <button @click="add(numberLeft)" :disabled="msg !== ''" class="btn btn-success font-bold px-6 rounded-md shadow-md min-w-[70px]">
                +{{numberLeft}}
                </button>

                <button @click="add(numberRight)" :disabled="msg !== ''" class="btn btn-secondary font-bold px-6 rounded-md shadow-md min-w-[70px]">
                +{{numberRight}}
                </button>

                </div>

            </div>
            
        </div>
    </div>
</template>
<script setup>
import {ref, watch, computed} from 'vue'

const count = ref(0) ;
const msg = ref("");
const numberLeft = ref(1) ;
const numberRight = ref(5) ;

function add (n) {
    count.value += n ; 
}

const indice = computed(() => {
    if (count.value < 7) {
        return "ESSAIE ENCORE !"
    } else if (count.value === 7) {
        return "7... BINGO !"
    } else {
        return "Tu as dépassé le nombre !"
    }
})

watch (count, (newValue) => {
    
    if (newValue > 30){
        msg.value = "Tu es allé trop loin !!!! Le compteur va se réinitialisé :)))" ;
        setTimeout( () => {
            count.value = 0 ; 
            msg.value = "" ;
        }, 7000 )
    }
})
</script>
