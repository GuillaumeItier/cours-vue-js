<template>
  <!-- Conteneur centré au milieu de la page (100% DaisyUI) -->
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
    
    <!-- Carte du composant -->
    <div class="card bg-base-100 shadow-xl w-full max-w-3xl p-8 md:p-12">
      
      <!-- Titre du composant -->
      <h2 class="text-xl md:text-2xl font-bold text-center mb-8 text-base-content">
        Compteur avec Watcher
      </h2>

      <!-- Alignement du bouton et de la valeur -->
      <div class="flex items-center justify-between mt-4 px-4 md:px-12">
        
        <!-- Bouton vert (Couleur native 'success' de DaisyUI) -->
        <button 
          @click="count++" 
          class="btn btn-success text-success-content text-xl h-12 w-12 min-h-0 p-0 rounded-md"
        >
          +
        </button>

        <!-- Texte et Badge rose (Couleur native 'secondary' de DaisyUI) -->
        <div class="flex items-center gap-3 font-semibold text-md md:text-lg text-base-content">
          <span>Valeur actuelle :</span>
          <span class="badge badge-secondary text-secondary-content text-md font-bold px-3 py-3 rounded-md">
            {{ count }}
          </span>
        </div>

      </div>
      <div class="mt-8 px-4 md:px-12">
        <div :class="[alert]">
          <span>{{ mess }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const count = ref(0);
const mess = ref("");
const alert = ref("");

watch(count, (newValue, oldValue) => {
  console.log(`Je surveille : Le compteur est passé de ${oldValue} à ${newValue}`)
  if (newValue === 7 ){
    count.value = 0 ;
    mess.value = "La limite est atteinte :( , reinitialisation du compteur à 0 . "
    alert.value = "alert shadow-sm text-sm md:text-base justify-center rounded-md font-medium transition-colors duration-300 "
  }else if (newValue === 1) {
    mess.value = "" ;
    alert.value = "" ;
  }
})
</script>