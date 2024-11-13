<script lang="ts" setup>
import type { BattleNetClient } from '@/services/BattleNetClient';
import { computed, inject, onMounted } from 'vue';

const http: BattleNetClient = inject('battleNetClient')!;

const props = defineProps<{
  realm: string;
  character: string;
}>();

onMounted(async () => {
  console.log('ProfileCard mounted');
  const p = await http.fetchAnything(
    `profile/wow/character/${props.realm}/${props.character}`,
    'profile-eu',
  );

  console.log(p);
});

const profile = {
  name: 'Eeteron',
  guild: 'Zengo Total Deplete',
  level: 80,
  spec: 'Vengeance Demon Hunter',
  classColor: '#A330C9',
  factionColor: '#1A8CFF',
  avatar:
    'https://render.worldofwarcraft.com/eu/character/ravencrest/56/106737976-avatar.jpg',
  race: 'Night Elf',
};

const boxShadow = computed(() => {
  return { boxShadow: `0 0 8px 2px ${profile.factionColor}` };
});

const classTextColor = computed(() => {
  return `text-[${profile.classColor}]`;
});

const factionTextColor = computed(() => {
  return `text-[${profile.factionColor}]`;
});
</script>
<template>
  <div class="flex flex-row w-auto max-w-[380px]">
    <div>
      <img :src="profile.avatar" :alt="profile.name" :style="boxShadow" />
    </div>
    <div class="flex flex-col ml-3 justify-between">
      <h1 class="text-xl font-semibold" :class="factionTextColor">
        {{ profile.name }}
      </h1>
      <div><{{ profile.guild }}></div>
      <div>
        <span :class="factionTextColor">{{ profile.race }}&nbsp;</span>
        <span :class="classTextColor">{{ profile.spec }}</span>
      </div>
    </div>
  </div>
</template>
