import type { Realm } from './Realm';
import type { Specialization } from './Specialization';
import type { Race } from './Race';

export type Character = {
  name: string;
  id: number;
  realm: Realm;
  specialization: Specialization;
  race: Race;
  equipped_item_level: number;
};
