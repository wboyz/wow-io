import type { Link } from './Link';
import type { Season } from './Season';
import type { Run } from './Run';
import type { Character } from './Character';
import type { Rating } from './Rating';

export type MythicKeystoneProfileSeason = {
  _links: {
    self: Link;
  };
  season: Season;
  best_runs: Run[];
  character: Character;
  mythic_rating: Rating;
};
