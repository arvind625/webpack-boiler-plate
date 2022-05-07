import { add, multiply } from './math';
import { WelcomeMessage } from './WelcomeMessage.js/WelcomeMessage';

const result = add(5, 6, 7);
console.log('result -> ', result);
console.log('add -> ', add(1, 2, 3))
console.log('multiply -> ', multiply(4, 5));
const WelcomeMessageDiv = WelcomeMessage({ person: "Arvind Dhakar" });
console.log('WelcomeMessageDiv', WelcomeMessageDiv);