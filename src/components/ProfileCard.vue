<script lang="ts" setup>
import classColors from '@/data/classColors';
import factionColors from '@/data/factionColors';
import type { BattleNetClient } from '@/services/BattleNetClient';
import { type ProfileCard } from '@/types/ProfileCard';
import type { Character } from '@/types/ProfileWowCharacter/Character';
import type { CharacterMedia } from '@/types/ProfileWowCharacterMedia/CharacterMedia';
import { computed, inject, onMounted, ref, watch } from 'vue';

const http: BattleNetClient = inject('battleNetClient')!;

const props = defineProps<{
  realm: string;
  character: string;
}>();

const profile = ref<ProfileCard | null>();

onMounted(async () => {
  await setupCharacter();
});

watch([() => props.realm, () => props.character], async () => {
  await setupCharacter();
});

const setupCharacter = async () => {
  try {
    const p = await http.fetchAnything<Character>(
      `profile/wow/character/${props.realm}/${props.character}`,
      'profile-eu',
    );

    profile.value = {} as ProfileCard;

    profile.value.name = p.name;
    profile.value.guild = p.guild?.name;
    profile.value.level = p.level;
    profile.value.spec = `${p.active_spec.name} ${p.character_class.name}`;
    profile.value.race = p.race.name;
    profile.value.classColor =
      classColors.find(x => x.class === p.character_class.name)?.color ||
      '#000000';
    profile.value.factionColor =
      p.faction.name === 'Alliance'
        ? factionColors.alliance
        : factionColors.horde;

    const media = await http.fetchLink<CharacterMedia>(p.media.href);
    profile.value.avatar = media.assets[0].value;
  } catch {
    profile.value = null;
  }
};

const boxShadow = computed(() => {
  return { boxShadow: `0 0 8px 2px ${profile.value!.factionColor}` };
});

const styleTextColor = computed(() => {
  return { color: profile.value!.classColor };
});

const styleFactionColor = computed(() => {
  return { color: profile.value!.factionColor };
});
</script>
<template>
  <div class="flex flex-row w-[300px]" :style="boxShadow" v-if="profile">
    <div>
      <img :src="profile.avatar" :alt="profile.name" :style="boxShadow" />
    </div>
    <div class="flex flex-col ml-3 justify-between">
      <h1 class="text-xl font-semibold" :style="styleTextColor">
        {{ profile.name }}
      </h1>
      <div v-show="profile.guild"><{{ profile.guild }}></div>
      <div>
        <span :style="styleFactionColor">{{ profile.race }}&nbsp;</span>
        <span :class="styleTextColor">{{ profile.spec }}</span>
      </div>
    </div>
  </div>
</template>
