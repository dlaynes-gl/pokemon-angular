export type PokemonMetaLink = {
  name: string;
  url: string;
};

export interface PokemonAbilityItem {
  ability: PokemonMetaLink;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonGameIndexItem {
  game_index: number;
  version: PokemonMetaLink;
}

export interface PokemonItemVersionDetail {
  rarity: number;
  version: PokemonMetaLink;
}

export interface PokemonHeldItem {
  item: PokemonMetaLink;
  version_details: PokemonItemVersionDetail[];
}

export interface PokemonMoveItem {
  move: PokemonMetaLink;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: PokemonMetaLink;
    version_group: PokemonMetaLink;
  }[];
}

export interface SpriteList {
  back_default?: string;
  back_female?: string | null;
  back_gray?: string;
  back_shiny?: string;
  back_shiny_female?: string | null;
  back_shiny_transparent?: string;
  front_default: string;
  front_female?: string | null;
  front_shiny?: string;
  front_shiny_female?: string | null;
  front_transparent?: string;
  front_shiny_transparent?: string;
}

export interface PokemonStatItem {
  base_stat: number;
  effort: number;
  stat: PokemonMetaLink;
}

export interface PokemonTypeItem {
  slot: number;
  type: PokemonMetaLink;
}

export interface Pokemon {
  abilities: PokemonAbilityItem[];
  base_experience: number;
  forms: PokemonMetaLink[];
  game_indices: PokemonGameIndexItem[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMoveItem[];
  name: string;
  order: number;
  past_types: unknown[];
  species: PokemonMetaLink;
  sprites: SpriteList & {
    other: Record<string, SpriteList>;
  } & {
    versions: Record<
      string,
      Record<string, SpriteList & { animated?: SpriteList }>
    >;
  };
  stats: PokemonStatItem[];
  types: PokemonTypeItem[];
  weight: number;
}
