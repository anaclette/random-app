import {Item} from '@/types/types';
import colors from '../themes/colors';

export const getCurrentColor = (currentAngle: number) => {
  // FIXME: change this function so it gets angle inner content
  if (currentAngle < 45) {
    return colors.carolinaBlue;
  } else if (currentAngle < 90) {
    return colors.maize;
  } else if (currentAngle < 135) {
    return colors.bitterSweet;
  } else if (currentAngle < 180) {
    return colors.yellowGreen;
  } else if (currentAngle < 225) {
    return colors.salmon;
  } else if (currentAngle < 270) {
    return colors.shinnyOcean;
  } else if (currentAngle < 315) {
    return colors.sunGlow;
  } else {
    return colors.lightOil;
  }
};

export const removeTags = (inputString: string) => {
  let stringWithBreaks = inputString.replace(/<[^>]*>/g, '\n');
  // Add a hyphen before each line that is followed by text
  let finalString = stringWithBreaks.replace(/\n(?=\S)/g, '\n- ');
  // Check if the first character is a newline and remove it if necessary
  if (finalString.startsWith('\n')) {
    finalString = finalString.slice(1);
  }

  return finalString;
};

export const getCoordinates = (percent: number) => {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return {x, y};
};

export const getCoordinatesPosition = (index: number) => {
  let topPosition: number = 0;
  let leftPosition: number = 0;
  let rotateValue: number = 0;

  switch (index) {
    case 0:
      topPosition = 111;
      leftPosition = 120;
      rotateValue = 20;

      break;
    case 1:
      topPosition = 150;
      leftPosition = 100;
      rotateValue = -110;
      break;
    case 2:
      topPosition = 150;
      leftPosition = 50;
      rotateValue = -65;
      break;
    case 3:
      topPosition = 115;
      leftPosition = 15;
      rotateValue = -20;
      break;
    case 4:
      topPosition = 65;
      leftPosition = 20;
      rotateValue = 30;
      break;
    case 5:
      topPosition = 30;
      leftPosition = 60;
      rotateValue = 75;
      break;
    case 6:
      topPosition = 35;
      leftPosition = 95;
      rotateValue = -70;
      break;
    case 7:
      topPosition = 65;
      leftPosition = 125;
      rotateValue = -25;
      break;
  }

  return {
    topPosition,
    leftPosition,
    rotateValue,
  };
};

export const setImageSource = (item: Item) => {
  let source;
  switch (item) {
    case 'animal':
      source = require('../../assets/images/Animal.png');
      break;
    case 'arnold':
      source = require('../../assets/images/Arnold.png');
      break;
    case 'ginger':
      source = require('../../assets/images/Ginger.jpeg');
      break;
    case 'pokemon':
      source = require('../../assets/images/pokeball.png');
      break;
    case 'color':
      source = require('../../assets/images/Color.png');
      break;
    case 'country':
      source = require('../../assets/images/Country.png');
      break;
    case 'letter':
      source = require('../../assets/images/Letter.png');
      break;
    case 'number':
      source = require('../../assets/images/Number.png');
      break;
    case 'password':
      source = require('../../assets/images/Password.png');
      break;
    case 'recipe':
      source = require('../../assets/images/Recipe.png');
      break;
    case 'home':
      source = require('../../assets/images/wheel.jpeg');
      break;
    default:
      source = require('../../assets/images/wheel.jpeg');
  }
  return source;
};

const getRandomCharacter = (characters: string | any[]) => {
  const randomIndex = getRandomNumber(characters.length);
  return characters[randomIndex];
};

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const generatePassword = (length: number) => {
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_-+=';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let password = '';
  password += getRandomCharacter(numbers);
  password += getRandomCharacter(specialChars);
  password += getRandomCharacter(uppercaseLetters);

  for (let i = 0; i < length - 3; i++) {
    const category = getRandomNumber(3);
    if (category === 0) {
      password += getRandomCharacter(numbers);
    } else if (category === 1) {
      password += getRandomCharacter(specialChars);
    } else {
      password += getRandomCharacter(uppercaseLetters);
    }
  }

  return password;
};
