<script lang="ts" setup>
defineProps<{ code: string }>();
</script>

<template>
  <div class="mockup-code">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>
