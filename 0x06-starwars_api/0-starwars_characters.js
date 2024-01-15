#!/usr/bin/node
/**
 * Printing all characters of a Star Wars movie
 * The first positional argument passed is the Movie ID
 * Display one character name per line in the same order
 * as  list in the /films/ endpoint
 */

const request = require('request');
const filmNum = process.argv[2] + '/';
const filmURL = 'https://swapi-api.hbtn.io/api/films/';
// Making API request, seting async to allow await promise
request(filmURL + filmNum, async (err, res, body) => {
  if (err) return console.error(err);

  // finding URLs of each character in the film as a list object
  const charURLList = JSON.parse(body).characters;

  // Using URL list to character pages to make new requests
  // awaiting queues requests until they resolve in order
  for (const charURL of charURLList) {
    await new Promise((resolve, reject) => {
      request(charURL, (err, res, body) => {
        if (err) return console.error(err);

        // finding each character and printing in URL order
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  }
});
