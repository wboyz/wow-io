import type { Key } from './Key';
import type { Realm } from './Realm';

export type Character = {
  key: Key;
  name: string;
  id: number;
  realm: Realm;
};
