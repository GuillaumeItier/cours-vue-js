<template>
    <!-- Conteneur principal bleu de l'exercice -->
    <main class="w-full bg-[#dce4ff] p-8 md:p-12 flex flex-col items-center font-sans">
    
    <!-- Grand Titre Principal de la page -->
    <h1 class="text-center text-3xl font-medium text-neutral tracking-tight mb-8">
        TP:Dynamic Styling Mode : Composition
    </h1>
    
    <!-- Zone de l'exercice (Formulaires + Titres H2) -->
    <div class="w-full max-w-4xl flex flex-col gap-4 mb-8">
        
        <!-- 1ère PARTIE : Premier champ et son titre associé -->
        <div class="flex flex-col gap-2">
        <!-- Vrai champ de formulaire DaisyUI (Saisie de texte) -->
        <input 
            type="text" 
            placeholder="world" 
            value=""
            @input="getInput($event)"
            class="input input-bordered w-full h-9 px-4 text-sm bg-base-100 text-base-content rounded-none focus:outline-none" 
        />
        <!-- Titre H2 Violet (Class dynamique) -->
        <h2 v-bind:class="maClasse , classesDeVisibilite" class="w-full bg-[#a855f7] text-white font-medium text-xl px-4 py-2 shadow-sm rounded-none tracking-wide">
           {{texte}}
        </h2>
        </div>

        <!-- 2ème PARTIE : Deuxième champ et son titre associé -->
        <div class="flex flex-col gap-2 mt-2">
        <!-- Vrai champ de formulaire DaisyUI (Saisie de texte) -->
        <input 
            type="text" 
            placeholder="lightgreen" 
            value=""
            @input="changeColor($event)"
            class="input input-bordered w-full h-9 px-4 text-sm bg-base-100 text-base-content rounded-none focus:outline-none" 
        />
        <!-- Titre H2 Vert (Couleur dynamique) -->
        <h2 v-bind:style="colorStyle" class="w-full bg-[#86efac] text-neutral font-medium text-xl px-4 py-2 shadow-sm rounded-none tracking-wide">
            Hello World      (couleur dynamique)
        </h2>
        </div>

    </div>

    <!-- Alignement du Bouton d'action en bas à gauche -->
    <div class="w-full max-w-4xl flex justify-start">
        <button @click="toggle()" class="btn btn-primary btn-sm rounded-md normal-case font-medium shadow-md px-4">
        Afficher 1er Titre
        </button>
    </div>

    </main>

</template>

<script setup>
import {ref, computed} from 'vue'

// CLASS DYNAMIC
const maClasseHello = 'bg-info text-neutral-content';
const maClasseWorld = 'bg-neutral text-neutral-content';
const texte = ref(" Hello World (class dynamique) ") ;

const maClasse = ref("");

function getInput (event) {
    const input = event.target.value ;

    if (input === "world"){
        maClasse.value = maClasseWorld ;
        texte.value = "maClasseWorld ;)"
    }else if (input === "hello"){
        maClasse.value = maClasseHello ;
        texte.value = "maClasseHello :)"
    }else {
        maClasse.value = "" ;
        texte.value = " Hello World (class dynamique) "
    };
}

//COULEUR DYNAMIC 

const couleur = ref("") ;

const colorStyle = computed(() =>{
    return {
         backgroundColor : couleur.value ,
    }
})

function changeColor (event) {
    couleur.value = event.target.value ;
    console.log(couleur.value);
    console.log(colorStyle.value.backgroundColor);

}

// DISPLAY OR NOT DISPLAY

const isActive = ref(true) ;

const classesDeVisibilite = computed(() => {
  return {
    'block': isActive.value,
    'hidden': !isActive.value
  }
})


function toggle () {
    isActive.value = !isActive.value;
   
}






</script>

