<template>
  <h1 class="text-3xl font-extrabold text-base-content mb-6">Exercice Text Interpolation</h1>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th class="w-64">Variables</th>
          <th class="w-64">Valeurs</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <td>UnLivre</td>
          <td><div class="badge badge-primary">{{UnLivre}}</div></td>
        </tr>
        <!-- row 2 -->
        <tr>
          <td>IsOnline</td>
          <td>{{IsOnline}}</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <td>UnNombre</td>
          <td><div class="badge badge-info">{{UnNombre}}</div></td>
        </tr>
          <!-- row 4 -->
        <tr>
          <td>UnTableau</td>
          <td><div class="badge badge-warning">{{UnTableau}}</div></td>
        </tr>
        <!-- row 5 -->
        <tr>
          <td>unTableau[0]</td>
          <td><div class="badge badge-warning">{{UnTableau[0]}}</div></td>
        </tr>
        <!-- row 6 -->
        <tr>
          <td>UnObjet</td>
          <td><div class="badge badge-success">{{UnObjet}}</div></td>
        </tr>
          <!-- row 7 -->
        <tr>
          <td>UnObjet.name</td>
          <td><div class="badge badge-success">{{UnObjet.name}}</div></td>
        </tr>
        <!-- row 8 -->
        <tr>
          <td>UnObjet['name']</td>
          <td><div class="badge badge-success">{{UnObjet['name']}}</div></td>
        </tr>
        <!-- row 9 -->
        <tr>
          <td>UnObjet.tel</td>
          <td><div class="badge badge-success">{{UnObjet.tel}}</div></td>
        </tr>
          <!-- row 10 -->
        <tr>
          <td>fonctionTest()</td>
          <td><div class="badge badge-secondary">{{fonctionTest()}}</div></td>
        </tr>
        <!-- row 11 -->
        <tr>
          <td>Une ternaire pour la route</td>
          <td><div class="badge badge-secondary">{{Cool.includes('ok') ? 'Cool' : 'n'}}</div></td>
        </tr>
        <!-- row 12 -->
        <tr>
          <td>On affiche du html ?</td>
          <td><div class="badge badge-secondary" >{{Code}}</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- <script>
  export default {
    data() {
      return {
        UnLivre : 'UnLivre',
        IsOnline : true,
        UnNombre : 999,
        UnTableau : ["du Texte", 99],
        UnObjet : {
          'name' : 'COOL',
          'tel' : '060503030' ,
        },
        Cool : 'ok',
        Code : '<h1>du html</h1>'
        


      }
    },
    methods: {
      fonctionTest() {
        return 'Hello World'
      }
    }
  }
  </script> -->

 <script setup>
  import { ref } from 'vue'
  
  const UnLivre = ref('UnLivre');
  const IsOnline = ref('true');
  const UnNombre = ref(999);
  const UnTableau = ref(["du Texte", 99]);
  const UnObjet = ref({
          'name' : 'COOL',
          'tel' : '060503030' ,
        });
  const Cool = ref("ok");
  const Code = ref('<h1>du html</h1>');
  
  function fonctionTest() {
    return 'Hello World'
  }
  </script>