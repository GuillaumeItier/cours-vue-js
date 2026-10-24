<template>
  <div class="navbar bg-base-100 shadow-sm relative z-50"">
    <a class="btn btn-ghost text-xl">Guill.vue</a>
    <router-link to="/home" class="btn btn-ghost">Home</router-link>
    <router-link to="/about" class="btn btn-ghost">About</router-link>
    <router-link to="/contact" class="btn btn-ghost">Contact</router-link>
    <!--lessons menu-->
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <!-- <li><a>Link</a></li> -->
        <li>
          <details>
            <summary>Lessons</summary>
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
              <li><router-link to="/lesson-computed-properties">Computed properties</router-link></li>
              <li><router-link to="/lesson-lifecycle">Lifecycle</router-link></li>
              <li><router-link to="/lesson-watchers">Watchers</router-link></li>
              <!-- <li><a>Link 2</a></li> -->
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <!--exercices menu-->
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <!-- <li><a>Link</a></li> -->
        <li>
          <details>
            <summary>Exercices</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><router-link to="/text-interpolation">Text interpolation</router-link></li>
              <li><router-link to="/attribute-binding">Attribute binding</router-link></li>
              <li><router-link to="/event-binding">Event binding</router-link></li>
              <li><router-link to="/dynamic-styling">Dynamic styling</router-link></li>
              <li><router-link to="/watchers">Watchers</router-link></li>
              <!-- <li><router-link to="/"></router-link></li> -->
              <!-- <li><a>Link 2</a></li> -->
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <!-- TP menu -->
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <!-- <li><a>Link</a></li> -->
        <li>
          <details>
            <summary>TP</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><router-link to="/data-binding">Data binding</router-link></li>
              <li><router-link to="/style-dynamic">Style dynamic</router-link></li>
              <li><router-link to="/watcher-computed">Watcher & Computed</router-link></li>
              <li><router-link to="/api-onmounted">API onMounted</router-link></li>
              <!-- <li><router-link to="/"></router-link></li> -->
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