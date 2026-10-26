<template>
    <main class="min-h-screen bg-base-100 px-4 py-6 md:py-10">
        <div class="mx-auto w-full max-w-2xl">

            <h1 class="text-2xl md:text-3xl font-bold text-center mb-6">
                TP : Conditional / List Rendering
            </h1>

            <section aria-labelledby="titre-liste">
                <h2 id="titre-liste" class="text-xl font-semibold mb-3">
                    La liste des courses <span aria-hidden="true">🛍️</span>
                </h2>

                <form class="flex flex-col items-start gap-3">
                    <label for="article" class="sr-only">Nom de l'article à ajouter</label>
                    <input
                        :aria-invalid="isInputEmpty"
                        :aria-describedby="isInputEmpty ? 'erreur-article' : undefined"
                        v-model="item"
                        id="article"
                        name="article"
                        type="text"
                        autocomplete="off"
                        class="input input-bordered w-full"
                    />
                    <p v-if="isInputEmpty" id="erreur-article" role="alert" class="text-error text-sm">
                        Veuillez saisir le nom d'un article.
                    </p>
                    <button
                        @click.prevent="addItem()"
                        type="submit"
                        class="btn btn-success h-auto min-h-10 py-2 whitespace-normal text-left"
                    >
                        Ajouter à votre Liste de Courses
                    </button>
                </form>

                <hr class="my-5 border-base-300" />

                <div v-show="isDisplay" id="liste-articles">

                    <!-- État : liste vide (ajout de ma part, absent des captures) -->
                    <p v-if="listItems.length === 0">La liste est vide.</p>

                    <div  v-else>
                        <!-- État : liste remplie -->
                        <p class="text-sm mb-2">Cliquez sur un élément pour le supprimer.</p>
                        <ul   class="list-disc pl-6 space-y-1">
                            <!-- Un élément (à répéter) -->
                            <li v-for="oneItem in listItems" :key="oneItem.id">
                                <button
                                    @click="removeItem(oneItem.id, oneItem.name)"
                                    type="button"
                                    class="link link-hover inline-block py-1 text-left break-words rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    <span  class="sr-only">Supprimer</span>
                                      {{oneItem.name}}
                                </button>
                            </li>
                        </ul>
                        <p role="status" class="sr-only">{{statusMessage}}</p>
                    </div>

                    
                </div>

                <button
                    @click="isDisplay = !isDisplay"
                    type="button"
                    :aria-expanded="isDisplay"
                    aria-controls="liste-articles"
                    class="btn btn-info mt-6"
                >
                    {{isDisplay ? "Masquer la liste" : "Afficher la liste"}}
                </button>

                <!-- Annonce pour les lecteurs d'écran (optionnel) -->
                <p role="status" class="sr-only"></p>
            </section>
        </div>
    </main>
</template>

<script setup>
import {ref} from 'vue'

const item = ref("")
const listItems = ref([])
const isInputEmpty = ref(false)
const isDisplay = ref(true)
const statusMessage = ref("")
let id = 1

function addItem (){
    const inputValue = item.value.trim()
    if(inputValue === ""){
        isInputEmpty.value = true
    }else{
        listItems.value.push({"id" : id , "name" : inputValue}) 
        item.value = ""
        isInputEmpty.value = false
        id ++
    }
    
}

function removeItem(itemId, itemName) {
    listItems.value = listItems.value.filter((n) => n.id !== itemId)
    statusMessage.value = `${itemName} supprimé`
}




</script>