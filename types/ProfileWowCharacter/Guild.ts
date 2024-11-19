import { type Link } from './Link';
import { type Realm } from './Realm';
import { type Faction } from './Faction';

export type Guild = {
  key: Link;
  name: string;
  id: number;
  realm: Realm;
  faction: Faction;
};
