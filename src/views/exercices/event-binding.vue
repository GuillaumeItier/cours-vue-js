<template>
        <!-- LE GRAND CONTENEUR BLANC AVEC OMBRE -->
    <div class="card bg-base-100 shadow-xl p-8 max-w-4xl mx-auto mt-10 text-base-content">
    
        <h1 class="text-3xl font-extrabold mb-8 text-center sm:text-left">
            Event Binding Mode : Composition
        </h1>

        <!-- ZONE DU COMPTEUR CENTRÉE -->
        <div class="flex justify-center items-center my-6">
            
            <!-- Groupe d'éléments soudés ensemble (Boutons + Texte) -->
            <div class="join border border-base-300 shadow-sm bg-base-100 p-2 items-center">
            
            <!-- Bouton Moins (Rouge / Secondary) -->
            <button v-on:click.right="decrement" class="btn btn-secondary btn-square join-item text-white font-bold text-lg">
                -
            </button>
            
            <!-- Affichage du Nombre (Texte central) -->
            <span class="px-6 font-bold text-xl text-base-content min-w-44 text-center join-item">
                le nombre : {{ compteur }}
            </span>
            
            <!-- Bouton Plus (Vert / Success) -->
            <button @click.left="increment" class="btn btn-success btn-square join-item text-white font-bold text-lg">
                +
            </button>
            
            </div>

        </div>

    </div>

</template>


<!-- <script setup>
import { ref } from 'vue';

let compteur = ref(0);

function increment () {
    compteur.value += 1000; 
}
function decrement () {
    compteur.value -= 77; 
}

</script> -->

<script>
export default {
  data() {
    return {
      compteur: 0 
    };
  },

  methods: {
    increment() {
      this.compteur += 1000;
    },
    
    decrement() {
      this.compteur -= 77;
    }
  }
}
</script>
