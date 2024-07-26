export const Details = (props) => {
  const viewEl = document.createElement('div');
  const item = props.item;

  if (item) {
    viewEl.innerHTML = `
      <h1>${item.name}</h1>
      <img src="${item.imageUrl}" alt="${item.name}" />
      <p>${item.shortDescription}</p>
      <p><strong>Género:</strong> ${item.facts.gender}</p>
      <p><strong>Año:</strong> ${item.facts.year}</p>
      <p><strong>Número de capítulos:</strong> ${item.facts.chapters}</p>
    `;
  } else {
    viewEl.textContent = 'Item not found';
  }

  return viewEl;
};