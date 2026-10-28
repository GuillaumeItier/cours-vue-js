<template>
    <article class="card bg-base-100 border border-base-300 shadow-md w-full max-w-xl mx-auto">
        <div class="card-body gap-3 p-4 sm:p-6">
            <h3 class="card-title text-lg">{{nom}}</h3>

            <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="text-base-content">
                    <span aria-hidden="true">👤</span>
                    ami : {{niveau}}
                </p>
                <span v-if="isPremium" class="badge badge-success">Premium</span>
                <span v-else class="badge badge-neutral">Standard</span>
                
            </div>

            <div class="flex flex-wrap gap-2">
                <button @click="updatePremium" type="button" class="btn btn-secondary btn-sm">
                    Update Premium
                    <span class="sr-only">{{nom}}</span>
                </button>
                <button type="button" class="btn btn-info btn-sm"
                    aria-expanded="true" aria-controls="details-1">
                    Masquer Détails
                    <span class="sr-only">{{nom}}</span>
                </button>
                <button @click="supprimer" type="button" class="btn btn-error btn-sm">
                    <span aria-hidden="true">🗑️</span>
                    Supprimer
                    <span class="sr-only">{{nom}}</span>
                </button>
            </div>

            <!-- Zone des détails -->
            <dl id="details-1" class="flex flex-col gap-2">
                <div class="flex items-center gap-3">
                    <dt>
                        <span class="badge badge-outline badge-primary text-base-content">ID</span>
                    </dt>
                    <dd>{{ unAmiId }}</dd>
                </div>

                <div class="flex items-center gap-3">
                    <dt>
                        <span class="badge badge-outline badge-secondary text-base-content">
                            <span aria-hidden="true">📞</span>
                            <span class="sr-only">Téléphone</span>
                        </span>
                    </dt>
                    <dd>
                        <a href="tel:+330123456789" class="link link-hover">{{telephone}}</a>
                    </dd>
                </div>

                <div class="flex items-center gap-3 min-w-0">
                    <dt>
                        <span class="badge badge-outline badge-accent text-base-content">
                            <span aria-hidden="true">📧</span>
                            <span class="sr-only">Email</span>
                        </span>
                    </dt>
                    <dd class="min-w-0 break-all">
                        <a href="mailto:janine@delavega.com" class="link link-hover">{{ email }}</a>
                    </dd>
                </div>
            </dl>
        </div>
    </article>
</template>

<!--Enfant 1 : Gestion de l'ami (OneFriendEmit.vue)

Déclarer les émissions (defineEmits) : Déclarez les événements sur-mesure mon-event-premium-update et delete-friend.
Émettre la modification du statut :
Créez une fonction updatePremium() déclenchée au clic du bouton.
Émettez l'événement mon-event-premium-update en passant l'ID (unAmiId) en paramètre.
Émettre la suppression :
Au clic du bouton Supprimer, émettez l'événement delete-friend avec l'ID (unAmiId).-->

<script setup>
import {defineEmits, defineProps} from 'vue'

const props = defineProps({
    unAmiId: {
        type: Number,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    niveau: {
        type: String,
        default: "En Or"
    },
    isPremium: {
        type: Boolean,
        default: true
    },
    telephone: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    }
});

const emit = defineEmits({
    "mon-event-premium-update": (id)=>{
        if(id){
            return true;
        } else {
            console.warn("L'événement mon-event-premium-update a été émis sans id.");
            return false;
        }
    },
    "delete-friend": (id)=>{
        if(id){
            return true;
        } else {
            console.warn("L'événement delete-friend a été émis sans id.");
            return false;
        }
    },
})

function updatePremium(){
    emit("mon-event-premium-update", props.unAmiId)
}

function supprimer(){
    emit("delete-friend", props.unAmiId)
}

</script>