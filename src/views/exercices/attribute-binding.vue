<template>
    <!--template généré par IA , J'ai rajouté des variables qui contiennent des liens , je les ais ensuite bindées dans le template avec leurs attributs respectifs -->
<!-- LE GRAND CONTENEUR BLANC AVEC OMBRE -->
<div class="card bg-base-100 shadow-xl p-8 max-w-4xl mx-auto mt-10 text-base-content">
  
    <h1 class="text-3xl font-extrabold mb-6">Attribute Binding Mode : Composition</h1>

    <!-- BLOC GRIS ENFANT 1 : Pour le lien dynamique -->
    <div class="card bg-base-200 p-6 mb-6">
        <h2 class="text-xl font-bold mb-2">Lien dynamique</h2>
        <p class="text-sm text-neutral-500 mb-4">
        Nous utilisons ici v-bind:href ou sa syntaxe abrégée :href pour lier l'attribut 'href' à une variable.
        </p>
        
        <!-- Zone des boutons centrés -->
        <div class="flex flex-col items-center gap-3">
        <a v-bind:href="Lien" class="btn btn-primary text-white w-60">LIEN DYNAMIQUE (v-bind)</a>
        <a :href="Lien" class="btn btn-secondary text-white w-60">LIEN DYNAMIQUE (:)</a>
        </div>
    </div>

    <!-- BLOC GRIS ENFANT 2 : Pour la liaison d'image -->
    <div class="card bg-base-200 p-6">
        <h2 class="text-xl font-bold mb-2">Liaison d'image</h2>
        <p class="text-sm text-neutral-500 mb-4">
        La liaison d'attributs s'applique également aux balises &lt;img&gt; pour charger des images dynamiquement.
        </p>
        
        <!-- L'image centrée avec les coins arrondis du thème -->
        <div class="flex justify-center">
        <img :src="Image" class="rounded-box max-w-sm shadow-md" alt="Photo d'exercice" />
        </div>
    </div>

    <!-- LE PETIT CODE TOUT EN BAS -->
    <div class="text-center font-mono text-xs text-neutral-400 mt-6 bg-base-200 p-3 rounded-lg border border-base-300">
        Le lien et l'image sont tirés de la variable ref suivante : 
        <span class="text-primary font-bold">{{Lien}}</span> | 
        <span class="text-secondary font-bold">{{Image}}</span>
    </div>

</div>
</template>

<script setup>
import { ref } from 'vue';


const Lien = ref('https://vuejs.org');
const Image = ref('https://picsum.photos/800/300');

</script>
