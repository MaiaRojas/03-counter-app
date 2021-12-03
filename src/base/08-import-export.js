//import { heroes } from './data/heroes';
import heroes from '../data/heroes';
//console.log('owners', owners);

export const getHeroeById = (id) => heroes.find(hero => id === hero.id);

//console.log(getHeroeById(2));

export const getHeroesByOwners = (owner) => heroes.filter(hero => owner === hero.owner);

//console.log(getHeroesByOwners('Marvel'))