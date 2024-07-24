import data from '../data/dataset.js';
import { Card } from '../componentes/Card.js'
import { Header } from '../componentes/Header.js'

export const Home = () => {
  const mainElement = document.createElement('div');
  

  const renderItems = (data) => {
    const ulElement = document.createElement("ul");
    data.forEach(item => ulElement.appendChild(Card(item)));
    return ulElement;
  };
  
  mainElement.appendChild(Header());
  mainElement.appendChild(renderItems(data));

  return mainElement;
};