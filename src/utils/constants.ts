import {
  Animal,
  Cartoon,
  Color,
  Country,
  HomeScreen,
  Letter,
  Number,
  Password,
  Recipe,
} from '@/screens';
import colors from './themes/colors';
import {CartoonEnum, Item} from '@/types/enums';
import Config from 'react-native-config';

export const API_KEY = Config.CLIENT_API_KEY;
export const baseUrl = Config.BASE_URL as string;

export const wheelItems = [
  {item: 'Password', color: colors.bitterSweet},
  {item: 'Recipe', color: colors.carolinaBlue},
  {item: 'Letter', color: colors.lightOil},
  {item: 'Animal', color: colors.sunGlow},
  {item: 'Number', color: colors.persimmon},
  {item: 'Color', color: colors.shinnyOcean},
  {item: 'Country', color: colors.sandyBrown},
  {item: 'Cartoon', color: colors.yellowGreen},
];

export const choices = [
  {
    route: 'Home',
    label: 'Home',
    type: Item.home,
    component: HomeScreen,
  },
  {
    route: 'Password',
    label: 'Password',
    type: Item.password,
    component: Password,
  },
  {
    route: 'Recipe',
    label: 'Recipe',
    type: Item.recipe,
    component: Recipe,
  },
  {
    route: 'Letter',
    label: 'Letter',
    type: Item.letter,
    component: Letter,
  },
  {
    route: 'Animal',
    label: 'Animal',
    type: Item.animal,
    component: Animal,
  },
  {
    route: 'Number',
    label: 'Number',
    type: Item.number,
    component: Number,
  },
  {
    route: 'Color',
    label: 'Color',
    type: Item.color,
    component: Color,
  },
  {
    route: 'Country',
    label: 'Country',
    type: Item.country,
    component: Country,
  },
];

export const cartoons = [
  {
    title: 'Hey Arnold',
    color: colors.shinnyOcean,
    type: CartoonEnum.arnold,
    component: Cartoon,
  },
  {
    title: 'As Told By Ginger',
    color: colors.maize,
    type: CartoonEnum.ginger,
    component: Cartoon,
  },
  {
    title: 'Pokemon',
    color: colors.salmon,
    type: CartoonEnum.pokemon,
    component: Cartoon,
  },
];
