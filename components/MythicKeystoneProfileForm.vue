<script setup lang="ts">
import { ref } from 'vue';
import RealmSelector from './RealmSelector.vue';

const realm = ref('');
const character = ref('');
const emit =
  defineEmits<(e: 'submit', realm: string, character: string) => void>();

function submit() {
  emit('submit', realm.value.toLowerCase(), character.value.toLowerCase());
}

function realmSelected(selectedRealm: string) {
  realm.value = selectedRealm;
}
</script>
<template>
  <form
    action=""
    class="grid grid-cols-1 sm:grid-cols-3 gap-4"
    autocomplete="on"
    @submit.prevent="submit"
  >
    <RealmSelector @selected="realmSelected" />

    <label class="input input-bordered flex items-center gap-2" for="character">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
        />
      </svg>
      <input
        type="text"
        class="h-12 w-full"
        placeholder="Character"
        id="character"
        name="character"
        v-model="character"
      />
    </label>

    <button type="submit" class="btn btn-outline btn-primary w-full">
      Get
    </button>
  </form>
</template>
