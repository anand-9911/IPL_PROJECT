import Display from './Display';
import React from 'react';

export default function (matches, season, team1, team2) {
  const seasonArray = [];
  matches.map((match) => {
    if (match.season === season) {
      seasonArray.push(match);
    }
  });
  console.log(seasonArray);
  return <Display match={seasonArray} team1={team1} team2={team2} />;
}

export const matchesWon = (team, matchesCalc) => {
  const win = [];
  matchesCalc.map((match) => {
    if (match.winner === team) win.push(match.winner);
  });
  return win.length;
};
export const matchesTied = (matchesCalc) => {
  const tied = [];
  matchesCalc.map((match) => {
    if (match.result === 'tie') tied.push(match.result);
  });
  return tied.length;
};
export const tossWon = (team, matchesCalc) => {
  const toss = [];
  matchesCalc.map((match) => {
    if (match.toss_winner === team) toss.push(match.toss_winner);
  });
  return toss.length;
};
