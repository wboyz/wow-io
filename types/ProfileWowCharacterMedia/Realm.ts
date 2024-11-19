import { type RealmName } from './RealmName';

export type Realm = {
  key: {
    href: string;
  };
  name: RealmName;
  id: number;
  slug: string;
};
