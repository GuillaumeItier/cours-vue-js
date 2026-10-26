<template>
    <!-- Le conteneur principal gris (Boîte centrale de l'exercice) -->
<div class="card w-full max-w-4xl bg-base-100 shadow-xl border border-base-300 rounded-xl p-10 my-8 mx-auto">
  
  <!-- Titre central du composant -->
  <h1 class="text-center text-2xl font-bold tracking-tight text-neutral mb-10">
    Dynamic Styling (Class)
  </h1>
  
  <!-- Grille responsive contenant les 4 cartes cliquables -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-6 max-w-2xl mx-auto">
    
    <!-- Carte 1  -->
    <button @click="changeStyle" :style="CardStyle1" class="card bg-info text-info-content h-16 px-8 flex items-center justify-center font-medium shadow-md rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info">
      Carte 1 via style
    </button>

    <!-- Carte 2  -->
    <button @click="changeStyle" :style="CardStyle2" class="card bg-secondary text-secondary-content h-16 px-8 flex items-center justify-center font-medium shadow-md rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
      Carte 2 via style
    </button>

    <!-- Carte 3  -->
    <button @click="toggleStyle" :class="{[classActive] : isActive , [classInactive]: !isActive }" class="card  border border-base-300 h-16 px-8 flex items-center justify-center font-medium shadow-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-content">
      Carte 3 via class
    </button>

    <!-- Carte 4  -->
    <button @click="toggleStyle" :class="{[classActive] : isActive , [classInactive]: !isActive }" class="card bg-base-100 border border-base-300 h-16 px-8 flex items-center justify-center font-medium shadow-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-content">
      Carte 4 via class
    </button>

  </div>
</div>

</template>

<script setup>
import {ref} from 'vue' 

const Cyan = '#00ffcc'
const BlueInfo = '#00b5ff' 
const MagentaSecondary = '#ff007f' 

// changement de style avec v-bind:style="" sur les cards 1 et 2
const CardStyle1 = ref( {
    backgroundColor : BlueInfo ,
});

const CardStyle2 = ref({
    backgroundColor: MagentaSecondary,
});

// changement de style avec v-bind:class sur les cards  3 et 4
function changeStyle (){
    CardStyle1.value.backgroundColor = CardStyle1.value.backgroundColor === BlueInfo ? Cyan : BlueInfo ;
    CardStyle2.value.backgroundColor = CardStyle2.value.backgroundColor === MagentaSecondary ? Cyan : MagentaSecondary ;
};

const isActive = ref(true) ;

const classActive = 'bg-base-100 text-base-content'
const classInactive = 'bg-primary text-primary-content'

function toggleStyle (){
    isActive.value = !isActive.value ;
}

</script>