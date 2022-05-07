import "./WelcomeMessage.css";

export const WelcomeMessage = ({ person }) => `${person.toUpperCase()} Welcome to Webpack basics`;
const WelcomeMessageText = WelcomeMessage({ person: 'Arvind Dhakar' });

console.log(`WelcomeMessageText 1 => ${WelcomeMessageText}`);

const WelcomeMessageDiv = document.createElement('div');

WelcomeMessageDiv.innerText = WelcomeMessageText;

document.body.appendChild(WelcomeMessageDiv);
