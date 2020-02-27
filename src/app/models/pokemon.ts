export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonGameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  };
}

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: 64;
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: number;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: 'bulbasaur';
  order: number;
  species: {
    name: string;
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: PokemonStat[];
  types: {
    slot: 2;
    type: { name: string; url: string };
  };
  weight: number;
}
