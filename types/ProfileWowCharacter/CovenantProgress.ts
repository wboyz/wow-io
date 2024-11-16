import { type Link } from './Link';

export type ChosenCovenant = {
  key: Link;
  name: string;
  id: number;
};

export type CovenantProgress = {
  chosen_covenant: ChosenCovenant;
  renown_level: number;
  soulbinds: Link;
};
