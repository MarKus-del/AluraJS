const express = require('express');
const puppeteer = require('puppeteer');

const PORT = 3333
const server = express();

server.get('/',  async (request, response) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.alura.com.br/formacao-front-end');
  
  const pageContent = await page.evaluate(() => {
    return {
      subtitle: document.querySelector('.formacao-headline-subtitulo').innerHTML,
    };
  });
  await browser.close();

  response.json(pageContent);
})

server.listen(PORT, () => {
  console.log(`server esta rudando na porta ${PORT}`)
})