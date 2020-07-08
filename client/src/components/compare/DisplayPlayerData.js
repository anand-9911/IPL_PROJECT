import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import _ from 'lodash';

const SEARCH_API_KEY = 'AIzaSyCw_VleFVIDfaAEral8OZcpJiVIrko27RY';

const DisplayPlayerData = ({ batsman, bowler }) => {
  if (batsman) {
    //Computes batsmans total Score and return the value
    const computeBatsmanScore = () => {
      let totalRunsScored = 0;
      for (let i = 0; i < batsman.length; i++) {
        totalRunsScored += batsman[i].batsman_runs;
      }
      return totalRunsScored;
    };

    //Find the type of Player
    const findPlayer = () => {
      if (batsman.length > 300 && bowler.length > 300) {
        if (batsman.length > bowler.length) {
          return 'Batting AllRounder';
        } else return 'Bowling AllRounder';
      } else if (batsman.length > 0 && bowler.length == 0) return 'Batsman';
      else if (batsman.length == 0 && bowler.length > 0) return 'Bowler';
      else if (batsman.length > 0 && bowler.length < 300) return 'Batsman';
      else if (batsman.length < 300 && bowler.length > 0) return 'Bowler';
    };

    //Find the teams and add to the array teams[]

    const computeTeams = () => {
      const teamArray = [];
      if (batsman.length > bowler.length)
        batsman.map((item) => teamArray.push(item.batting_team));
      else bowler.map((item) => teamArray.push(item.bowing_team));
      const uniqTeam = _.uniq(teamArray);
      return uniqTeam.toString();
    };
    // Find number of Match played by each player
    const computeNumberOfMatchesPlayed = () => {
      const matches = [];
      if (batsman.length > 0)
        batsman.map((item) => matches.push(item.match_id));
      if (bowler.length > 0) bowler.map((item) => matches.push(item.match_id));

      const uniqMatches = _.uniq(matches);
      return uniqMatches.length;
    };
    //Find number of fours and sixes hit by a player
    const computeBoundries = (check) => {
      const runs = [];
      if (check) {
        batsman.map((item) => runs.push(item.batsman_runs));
        const sixes = _.pull(runs, 0, 1, 2, 3, 4, 5);
        return sixes.length;
      } else {
        batsman.map((item) => runs.push(item.batsman_runs));
        const fours = _.pull(runs, 0, 1, 2, 3, 6, 5);
        return fours.length;
      }
    };

    //Find Number of wickets taken by a player
    const wicketTaken = () => {
      const balled = [];
      if (bowler.length > 0) {
        bowler.map((item) => balled.push(item.dismissal_kind));
        const wickets = _.pull(balled, '');
        return wickets.length;
      } else return 0;
    };

    //Find Number of runs given by a Bowler

    const runsGiven = (test) => {
      if (bowler.length > 0 && test) {
        return getRuns(bowler, true);
      } else if (bowler.length > 0 && !test) {
        return getRuns(bowler, false);
      } else return 0;
    };

    const getRuns = (bowler, check) => {
      let totalRunsGiven = 0;
      let extraRuns = 0;
      let batsmanScored = 0;
      let bye_runs = 0;
      let legbye_runs = 0;
      let noball_runs = 0;
      let penalty_runs = 0;
      let wide_runs = 0;
      for (let i = 0; i < bowler.length; i++) {
        batsmanScored += bowler[i].batsman_runs;
        bye_runs += bowler[i].bye_runs;
        legbye_runs += bowler[i].legbye_runs;
        noball_runs += bowler[i].noball_runs;
        penalty_runs += bowler[i].penalty_runs;
        wide_runs += bowler[i].wide_runs;
      }
      extraRuns =
        bye_runs + legbye_runs + noball_runs + penalty_runs + wide_runs;
      totalRunsGiven = extraRuns + batsmanScored;
      if (check) return totalRunsGiven;
      else return extraRuns;
    };

    return (
      <div>
        <h1>{batsman[0].batsman}</h1>
        <h2>{findPlayer()}</h2>
        <table>
          <tr>
            <td>Teams Played for:</td>
            <td>{computeTeams()}</td>
          </tr>
          <tr>
            <td>Total Matches:</td>
            <td>{computeNumberOfMatchesPlayed()}</td>
          </tr>
          <tr>
            <td>Total Runs Scored:</td>
            <td>{computeBatsmanScore()}</td>
          </tr>
          <tr>
            <td>Sixes:</td>
            <td>{computeBoundries(true)}</td>
          </tr>
          <tr>
            <td>Fours:</td>
            <td>{computeBoundries(false)}</td>
          </tr>
          <tr>
            <td>Total Wickets Taken:</td>
            <td>{wicketTaken()}</td>
          </tr>
          <tr>
            <td>Total Runs Given:</td>
            <td>{runsGiven(true)}</td>
          </tr>
          <tr>
            <td>Extras:</td>
            <td>{runsGiven(false)}</td>
          </tr>
        </table>
      </div>
    );
  } else return <Spinner />;
};

DisplayPlayerData.propTypes = {
  batsman: PropTypes.array.isRequired,
  bowler: PropTypes.array.isRequired,
};

export default DisplayPlayerData;
