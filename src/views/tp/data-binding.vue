<template>
    <!-- LE GRAND CONTENEUR BLANC AVEC OMBRE -->
    <div class="card bg-base-100 shadow-xl p-8 max-w-2xl mx-auto mt-10 text-base-content">
    
        <!-- Titre principal -->
        <h1 class="text-2xl font-extrabold mb-8 text-center md:text-left">
            Tp-Databinding : Profil utilisateur (interpolation + v-bind)
        </h1>

        <!-- ZONE PROFIL CENTRÉE -->
        <div class="flex flex-col items-center gap-4">
            
            <!-- L'avatar circulaire (Composant Avatar de DaisyUI) -->
            <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-md">
                <!-- L'image est liée dynamiquement -->
                <img :src="avatarImage" alt="Avatar de l'utilisateur" />
            </div>
            </div>

            <!-- Nom de l'utilisateur (Interpolation) -->
            <h2 class="text-2xl font-bold mt-2">{{Name}}</h2>

            <!-- Champ de saisie (Composant Input de DaisyUI) -->
            <!-- :value permet d'afficher la variable dans le champ -->
            <input type="text" :value="Name" class="input input-bordered w-full max-w-xs text-center text-sm font-medium" placeholder="Nom de l'utilisateur"/>

            <!-- BLOC DES INFORMATIONS (Âge et Nombre fétiche) -->
            <div class="flex flex-col gap-4 mt-4 w-full max-w-xs">
            
            <!-- Ligne Âge -->
            <div class="flex items-center justify-center gap-2 font-bold">
                <span>Âge :</span>
                <span class="badge badge-primary font-bold text-white px-3 py-3 rounded-md">
                {{ Age }} ans
                </span>
            </div>

            <!-- Ligne Âge + 10 -->
            <div class="flex items-center justify-center gap-2 font-bold">
                <span>Âge + 10 :</span>
                <span class="badge badge-secondary font-bold text-white px-3 py-3 rounded-md">
                {{agePlusDix()}} ans
                </span>
            </div>

            <!-- Ligne Nombre Fétiche -->
            <div class="flex items-center justify-center gap-2 font-bold">
                <span>NB Fétiche :</span>
                <span class="badge badge-accent font-mono text-xs text-white px-3 py-3 rounded-md">
                {{ nombreFetiche() }}
                </span>
            </div>

        </div>

    </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import avatarImage from '../../assets/avatar.jpg'; 

let Name = ref("Xena");
let Age = ref(35) ;


function agePlusDix () {
     return Age.value + 10 ;
};

function nombreFetiche () {
    return Math.ceil(Math.random()*10);
};


</script>

<!-- <script>
export default {
  data() {
    return {
    };
  },

  methods: {
    
  }
}
</script> -->
