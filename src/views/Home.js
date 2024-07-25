import data from "../data/dataset.js";
import { Cards } from '../components/cards.js';
import { Header } from '../components/header.js';

export const Home = () => {
  const mainElement = document.createElement('div');

  const renderItems = (data) => {
    const ulElement = document.createElement("ul");
    data.forEach(item => ulElement.appendChild(Cards(item)));
    return ulElement;
  };
  
  mainElement.appendChild(Header());
  mainElement.appendChild(renderItems(data));

  return mainElement;
}
