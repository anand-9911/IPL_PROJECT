import React from 'react';
import PropTypes from 'prop-types';
import mum from '../../images/mumbai-indians-team.png';
import hyd from '../../images/sunrisers-hyderabad-team.png';
import decc from '../../images/deccan.png';
import blr from '../../images/banglore.png';
import chn from '../../images/chennai.png';
import dhl from '../../images/delhi.png';
import guj from '../../images/gujarat-lions.png';
import koc from '../../images/kochi.png';
import kol from '../../images/kolkata.png';
import pun from '../../images/pune.png';
import puj from '../../images/punjab.png';
import raj from '../../images/rajasthan.png';
import pageNotFound from '../../images/blank.png';

const Hyderabad = 'Hyderabad';
const Mumbai = 'Mumbai';
const Gujarat = 'Gujarat';
const Bangalore = 'Bangalore';
const Kolkata = 'Kolkata';
const Delhi = 'Delhi';
const Punjab = 'Punjab';
const Chennai = 'Chennai';
const Rajasthan = 'Rajasthan';
const Deccan = 'Deccan';
const Kochi = 'Kochi';
const Pune = 'Pune';

const mapImages = (team) => {
  if (team.includes(Mumbai)) return mum;
  else if (team.includes(Gujarat)) return guj;
  else if (team.includes(Hyderabad)) return hyd;
  else if (team.includes(Bangalore)) return blr;
  else if (team.includes(Kolkata)) return kol;
  else if (team.includes(Delhi)) return dhl;
  else if (team.includes(Punjab)) return puj;
  else if (team.includes(Chennai)) return chn;
  else if (team.includes(Rajasthan)) return raj;
  else if (team.includes(Deccan)) return decc;
  else if (team.includes(Kochi)) return koc;
  else if (team.includes(Pune)) return pun;
  else return pageNotFound;
};
const mapTagLines = (team) => {
  if (team.includes(Mumbai)) return 'Money Matters!';
  else if (team.includes(Gujarat)) return 'Modiji Matters';
  else if (team.includes(Hyderabad)) return 'Without Warner No Winner!';
  else if (team.includes(Bangalore)) return 'Luck should complement Talent! ';
  else if (team.includes(Kolkata)) return 'Thank you West Indies!';
  else if (team.includes(Delhi)) return 'Keep calm and believe in astrology!';
  else if (team.includes(Punjab)) return 'First Half Kings!';
  else if (team.includes(Chennai)) return 'Age is just a number! ';
  else if (team.includes(Rajasthan))
    return 'Dont Underestimate the power of young guns!';
  else if (team.includes(Deccan)) return "I dont't know where am I";
  else if (team.includes(Kochi)) return "God's Own Country";
  else if (team.includes(Pune)) return 'The Team With An Attitude';
  else return pageNotFound;
};

const TeamItem = ({ teams }) =>
  teams.map((team) => {
    return (
      <div class='card width-card'>
        <img
          src={mapImages(team)}
          class='card-img-top'
          id='image-card'
          alt='...'
        />
        <div class='card-body' style={{ borderTop: '3px solid #bbb' }}>
          <h5 class='card-title'>{team}</h5>
          <p class='card-text'>{mapTagLines(team)}</p>
        </div>
      </div>
    );
  });

TeamItem.propTypes = {
  teams: PropTypes.array.isRequired,
};

export default TeamItem;
