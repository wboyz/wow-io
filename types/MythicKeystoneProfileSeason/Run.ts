import type { Affix } from './Affix';
import type { Character } from './Character';
import type { Dungeon } from './Dungeon';
import type { Rating } from './Rating';

export type Run = {
  completed_timestamp: number;
  duration: number;
  keystone_level: number;
  keystone_affixes: Affix[];
  members: Character[];
  dungeon: Dungeon;
  is_completed_within_time: boolean;
  mythic_rating: Rating;
  map_rating: Rating;
};
