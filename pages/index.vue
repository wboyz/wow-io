<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});
const { user } = useUserSession();
</script>

<template>
  <div class="hero mt-16">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold">Welcome {{ user?.login }}</h1>
        <p class="py-10 text-lg/loose">
          Introducing our Mythic Plus Score Tracker for World of Warcraft, a
          convenient and powerful tool to help you quickly check the performance
          and progression of your characters in Mythic+ dungeons! Whether you're
          looking to review your current rankings, track your best scores, or
          monitor your overall improvement, this tool makes it easy.
        </p>
        <RouterLink to="/mythic-profile" class="btn btn-primary text-lg">
          Get Started
        </RouterLink>
      </div>
    </div>
  </div>
</template>
