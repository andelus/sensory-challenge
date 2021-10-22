export const DinoService =  {
  getRandomDinos: async () => {
    return fetch('https://dinoipsum.com/api/?format=json&paragraphs=1')
    .then(response => response.json());
  }
}

