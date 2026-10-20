<template>
  <div class="navbar bg-base-100 shadow-sm relative z-50"">
    <a class="btn btn-ghost text-xl">Guill.vue</a>
    <router-link to="/home" class="btn btn-ghost">Home</router-link>
    <router-link to="/about" class="btn btn-ghost">About</router-link>
    <router-link to="/contact" class="btn btn-ghost">Contact</router-link>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <!-- <li><a>Link</a></li> -->
        <li>
          <details>
            <summary>Leçons</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><router-link to="/lesson-setup">Setup Vue</router-link></li>
              <li><router-link to="/lesson-introduction">Introduction Vue</router-link></li>
              <li><router-link to="/lesson-syntax">Syntax Vue</router-link></li>
              <li><router-link to="/lesson-text-interpolation">Text Interpolation</router-link></li>
              <li><router-link to="/lesson-attribute-binding">Attribute Binding</router-link></li>
              <li><router-link to="/lesson-event-binding">Event Binding</router-link></li>
              <li><router-link to="/lesson-dynamic-styling">Dynamic styling</router-link></li>
              <li><router-link to="/lesson-two-way-binding">Two way binding</router-link></li>
              <li><router-link to="/lesson-conditional-rendering">Conditional rendering</router-link></li>
              <li><router-link to="/lesson-list-rendering">List rendering</router-link></li>
              <!-- <li><a>Link 2</a></li> -->
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>