import { type Realm } from './Realm';

export type Character = {
  key: {
    href: string;
  };
  name: string;
  id: number;
  realm: Realm;
};
