<template>
    <main class="container mx-auto max-w-3xl p-4 md:p-8 flex flex-col gap-6">
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary text-center">
            Dashboard de Support Technique
        </h1>

        <!-- Statistiques -->
        <section aria-label="Statistiques des tickets" aria-live="polite">
            <div class="stats stats-vertical sm:stats-horizontal shadow border border-base-300 w-full">
                <div class="stat place-items-center">
                    <div class="stat-title">Tickets affichés</div>
                    <div class="stat-value">6</div>
                </div>
                <div class="stat place-items-center">
                    <div class="stat-title">Part de tickets « Haute »</div>
                    <div class="stat-value text-error">33 %</div>
                </div>
            </div>
        </section>

        <!-- Filtres -->
        <section aria-labelledby="titre-filtres">
            <h2 id="titre-filtres" class="sr-only">Filtrer les tickets</h2>
            <form role="search" @submit.prevent
                class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-box bg-base-200">
                <div class="flex flex-col gap-1">
                    <label  for="ticket-search" class="font-medium">Rechercher un ticket</label>
                    <input v-model="ticket" id="ticket-search" type="search" autocomplete="off"
                        placeholder="Ex : base de données"
                        class="input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/70" />
                </div>

                <div class="flex flex-col gap-1">
                    <label for="ticket-priority" class="font-medium">Filtrer par priorité</label>
                    <select v-model="priority" id="ticket-priority"
                        class="select select-bordered w-full bg-base-100 text-base-content">
                        <option value="">Toutes les priorités</option>
                        <option value="Haute">Haute</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Basse">Basse</option>
                    </select>
                </div>
            </form>
        </section>

        <!-- Liste des tickets -->
        <section aria-labelledby="titre-liste">
            <h2 id="titre-liste" class="text-xl font-bold mb-3" aria-live="polite">
                Liste des incidents (6)
            </h2>

            <!-- Si aucun ticket : <p class="alert alert-warning">Aucun ticket ne correspond à votre recherche.</p> -->

            <ul class="flex flex-col gap-3">
                <li v-for="currentTicket in filteredTickets"
                    :key="currentTicket.id"
                    :class="priorityBorder[currentTicket.priorite]"
                    class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-box bg-base-100 border border-base-300 border-l-4 shadow-sm">
                    <div class="flex flex-col items-start gap-1">
                        <span class="badge badge-neutral badge-sm">{{currentTicket.categorie}}</span>
                        <p>{{currentTicket.titre}}</p>
                    </div>
                    <span :class="priorityBadge[currentTicket.priorite]">{{currentTicket.priorite}}</span>
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const tickets = ref([
    { id: 1, titre: "Impossible de se connecter à la base de données", categorie: "Infrastructure", priorite: "Haute" },
    { id: 2, titre: "Erreur 500 lors de la validation du panier", categorie: "Backend", priorite: "Haute" },
    { id: 3, titre: "Le bouton de déconnexion est mal aligné sur mobile", categorie: "UI/UX", priorite: "Basse" },
    { id: 4, titre: "Lenteur excessive sur l'affichage du tableau de bord", categorie: "Performance", priorite: "Moyenne" },
    { id: 5, titre: "Le formulaire de contact n'envoie pas d'email", categorie: "Backend", priorite: "Moyenne" },
    { id: 6, titre: "Mettre à jour le logo dans le header", categorie: "UI/UX", priorite: "Basse" }
])

const ticket = ref("")
const priority = ref("")

const filteredTickets = computed( () =>{
    const findTickets = tickets.value.filter( (x) => {
        return x.titre.toLowerCase().includes(ticket.value.toLowerCase().trim()) 
    })
    const finalTickets = findTickets.filter( (x) => {
        if (priority.value == ""){
            return true
        }else {
            return x.priorite == priority.value   
        }
    })

    return finalTickets
})

const priorityBorder = {
    Haute: "border-l-error",
    Moyenne: "border-l-warning",
    Basse: "border-l-success"
}
const priorityBadge = {
    Haute: "badge badge-error",
    Moyenne: "badge badge-warning",
    Basse: "badge badge-info"
}

</script>