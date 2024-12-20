import { type Link } from './Link';
import { type Gender } from './Gender';
import { type Faction } from './Faction';
import { type Race } from './Race';
import { type CharacterClass } from './CharacterClass';
import { type ActiveSpec } from './ActiveSpec';
import { type Realm } from './Realm';
import { type Guild } from './Guild';
import { type CovenantProgress } from './CovenantProgress';

export type Character = {
  _links: {
    self: Link;
  };
  id: number;
  name: string;
  gender: Gender;
  faction: Faction;
  race: Race;
  character_class: CharacterClass;
  active_spec: ActiveSpec;
  realm: Realm;
  guild: Guild;
  level: number;
  experience: number;
  achievement_points: number;
  achievements: Link;
  titles: Link;
  pvp_summary: Link;
  encounters: Link;
  media: Link;
  last_login_timestamp: number;
  average_item_level: number;
  equipped_item_level: number;
  specializations: Link;
  statistics: Link;
  mythic_keystone_profile: Link;
  equipment: Link;
  appearance: Link;
  collections: Link;
  active_title: {
    key: Link;
    name: string;
    id: number;
    display_string: string;
  };
  reputations: Link;
  quests: Link;
  achievements_statistics: Link;
  professions: Link;
  covenant_progress: CovenantProgress;
  name_search: string;
};
