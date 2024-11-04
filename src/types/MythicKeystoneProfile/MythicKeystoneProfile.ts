import type { Links } from './Links';
import type { CurrentPeriod } from './CurrentPeriod';
import type { Season } from './Season';
import type { Character } from './Character';
import type { CurrentMythicRating } from './CurrentMythicRating';

export type MythicKeystoneProfile = {
  _links: Links;
  character: Character;
  current_period: CurrentPeriod;
  seasons: Season[];
  current_mythic_rating: CurrentMythicRating;
};
