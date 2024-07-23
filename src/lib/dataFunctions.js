export const filterData = (data, filterBy, value) => {
  if (value === "all") {
    return data; // Devuelve todos los datos si el valor es "all"
  }
  return data.filter(item => {
    if (filterBy === "gender") {
      return item.facts[filterBy].includes(value); // Filtra por género
    }
    if (filterBy === "year") {
      return item.facts.year === parseInt(value); // Filtra por año
    }
    if (filterBy === "chapters") {
      return item.facts.chapters === parseInt(value); // Filtra por cápitulos
    }
    return false;
  });
  /*const resultFilter = data.filter(item=>{
    return item.facts[filterBy].includes(value);
  });
  return resultFilter;*/
};

export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = data.map(obj => ({ ...obj }));
  if (sortOrder === "asc") {
    return dataCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else {
    return dataCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
};

export const computeStats = (data) => {
  // Calcular el promedio de capítulos
  const totalChapters = data.reduce((sum, item) => sum + item.facts.chapters, 0);

  const averageChapters = (totalChapters / data.length);
  const minValue = Math.floor(averageChapters);//redondear al minimo

  // Calcular el género más común
  const genreCount = {};
  data.forEach(item => {
    if (genreCount[item.facts.gender]) {
      genreCount[item.facts.gender]++;
    } else {
      genreCount[item.facts.gender] = 1;
    }
  });
  const mostCommonGenre = Object.keys(genreCount).reduce((a, b) => genreCount[a] > genreCount[b] ? a : b);

  // Encontrar el dorama con el mayor porcentaje de audiencia
  let highestAudienceDorama = data[0];
  data.forEach(item => {
    if (item.facts.audiencePercentage > highestAudienceDorama.facts.audiencePercentage) {
      highestAudienceDorama = item;
    }
  });

  return {
    minValue,
    mostCommonGenre,
    highestAudienceDorama
  };

};

export const metricsData = (data) => {
  const dataCopy = data.map((obj) => obj);
  return dataCopy.reduce((topObjects, currentObject) => {
    return [...topObjects, currentObject].sort(
      (a, b) =>
        parseFloat(b.facts["audiencePercentage"]) -
        parseFloat(a.facts["audiencePercentage"])
    ).slice(0, 3);
  }, []);


}
