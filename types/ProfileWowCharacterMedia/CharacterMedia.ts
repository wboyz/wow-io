import { type Links } from './Links';
import { type Character } from './Character';
import { type Asset } from './Asset';

export type CharacterMedia = {
  _links: Links;
  character: Character;
  assets: Asset[];
};
