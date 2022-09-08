import React, { useState, useEffect, useRef } from "react";

const axios = require('axios');

const Backend = ({ label }) => {
  // don't need both of these
  const [dotaGames, setDotaGames] = useState([]);
  const [renderedGames, setRenderedGames] = useState([]);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   const onBodyClick = (event) => {
  //     if (ref.current.contains(event.target)) {
  //       return;
  //     }
  //     setOpen(false);
    // };
    // document.body.addEventListener("click", onBodyClick, { capture: true });

  //   return () => {
  //     document.body.removeEventListener("click", onBodyClick, {
  //       capture: true,
  //     });
  //   };
  // }, []);

  async function getDotaGames() {
    setDotaGames([
      {
          "duration_min": 75,
          "win_team_barracks_dif": -47,
          "lead_is_small_score": 0.10526315789473695,
          "swing_score": 1,
          "swing": 14256,
          "title": "PSG.LGD vs Team Spirit game 2 PGL Arlington Major 2022",
          "min_in_lead": 0,
          "min_in_lead_score": 1,
          "highlights_score": 4.11,
          "duration_min_score": 1,
          "time_ago": "2 weeks ago",
          "barracks_comeback_score": 1
      },
      {
          "duration_min": 67,
          "win_team_barracks_dif": -37,
          "lead_is_small_score": 0.8208955223880596,
          "swing_score": 0,
          "swing": 6687,
          "title": "HellRaisers vs Natus Vincere game 3 EEU TI 11 Regional Qualifiers",
          "min_in_lead": 4,
          "min_in_lead_score": 1,
          "highlights_score": 3.82,
          "duration_min_score": 1,
          "time_ago": "1 days ago",
          "barracks_comeback_score": 1
      },
      {
          "duration_min": 64,
          "win_team_barracks_dif": 36,
          "lead_is_small_score": 0.90625,
          "swing_score": 0,
          "swing": 5300,
          "title": "BOOM Esports vs Talon game 1 DPC SEA Division I Tour 3 - 2021/2022 by Beyond The Summit",
          "min_in_lead": 1,
          "min_in_lead_score": 1,
          "highlights_score": 3.07,
          "duration_min_score": 0.9500000000000001,
          "time_ago": "1 months ago",
          "barracks_comeback_score": 0.21818181818181825
      },
      {
          "duration_min": 44,
          "win_team_barracks_dif": -3,
          "lead_is_small_score": 0.5,
          "swing_score": 1,
          "swing": 17995,
          "title": "Royal Never Give Up vs Thunder Awaken game 2 PGL Arlington Major 2022",
          "min_in_lead": 0,
          "min_in_lead_score": 1,
          "highlights_score": 3.03,
          "duration_min_score": 0,
          "time_ago": "4 weeks ago",
          "barracks_comeback_score": 0.5333333333333334
      },
      {
          "duration_min": 56,
          "win_team_barracks_dif": 12,
          "lead_is_small_score": 0.894736842105263,
          "swing_score": 0,
          "swing": 5810,
          "title": "Team Spirit vs Outsiders game 2 PGL Arlington Major 2022",
          "min_in_lead": 5,
          "min_in_lead_score": 1,
          "highlights_score": 2.86,
          "duration_min_score": 0.55,
          "time_ago": "3 weeks ago",
          "barracks_comeback_score": 0.41212121212121217
      },
      {
          "duration_min": 57,
          "win_team_barracks_dif": 12,
          "lead_is_small_score": 0.7586206896551724,
          "swing_score": 0.07740000000000001,
          "swing": 7387,
          "title": "Outsiders vs Royal Never Give Up game 1 PGL Arlington Major 2022",
          "min_in_lead": 4,
          "min_in_lead_score": 1,
          "highlights_score": 2.85,
          "duration_min_score": 0.6000000000000001,
          "time_ago": "3 weeks ago",
          "barracks_comeback_score": 0.41212121212121217
      },
      {
          "duration_min": 44,
          "win_team_barracks_dif": -36,
          "lead_is_small_score": 0.5555555555555556,
          "swing_score": 0.41500000000000004,
          "swing": 9075,
          "title": "Evil Geniuses vs Entity game 1 PGL Arlington Major 2022",
          "min_in_lead": 0,
          "min_in_lead_score": 1,
          "highlights_score": 2.77,
          "duration_min_score": 0,
          "time_ago": "3 weeks ago",
          "barracks_comeback_score": 0.8
      },
      {
          "duration_min": 61,
          "win_team_barracks_dif": 51,
          "lead_is_small_score": 0.4516129032258065,
          "swing_score": 0.38680000000000003,
          "swing": 8934,
          "title": "Wildcard Gaming vs nouns game 1 DPC NA Division I Summer Tour - 2021/2022 - ESL One Summer",
          "min_in_lead": 1,
          "min_in_lead_score": 1,
          "highlights_score": 2.74,
          "duration_min_score": 0.8,
          "time_ago": "2 months ago",
          "barracks_comeback_score": 0.09696969696969704
      },
      {
          "duration_min": 64,
          "win_team_barracks_dif": 9,
          "lead_is_small_score": 0.3125,
          "swing_score": 1,
          "swing": 12250,
          "title": "Royal Never Give Up vs Team Liquid game 1 PGL Arlington Major 2022",
          "min_in_lead": 40,
          "min_in_lead_score": 0,
          "highlights_score": 2.7,
          "duration_min_score": 0.9500000000000001,
          "time_ago": "3 weeks ago",
          "barracks_comeback_score": 0.4363636363636364
      },
      {
          "duration_min": 46,
          "win_team_barracks_dif": 51,
          "lead_is_small_score": 0.8297872340425532,
          "swing_score": 0.7134,
          "swing": 10567,
          "title": "SG esports vs No Runes game 3 SA TI 11 Regional Qualifiers",
          "min_in_lead": 0,
          "min_in_lead_score": 1,
          "highlights_score": 2.69,
          "duration_min_score": 0.05,
          "time_ago": "22 hours ago",
          "barracks_comeback_score": 0.09696969696969704
      }
  ])
    // try {
    //   console.log('fetching games')
    //   const response = await axios.get('http://127.0.0.1:8000/dota');
    //   console.log(response);
    //   setDotaGames(response.data);
    // } catch (error) {
    //   console.error(error);
    //   setDotaGames(error);
    // }
  }
  // let dotaGames = getDotaGames();
  // useEffect(() => {
    console.log('dotagames');
    console.log(dotaGames)
    let games = []
    // if (dotaGames === []){
    //   return null
    // }
    // debugger;
    games = dotaGames.map((game) => {
      return (
      <tr>
        <td data-label="Name">{game.title}</td>
        <td data-label="Highlights Score">{game.highlights_score}</td>
        <td data-label="Job">{game.time_ago}</td>
      </tr>
        // <div
        //   key={game.match_id}
        //   className="item"
        // >
        //   {game.title}
        // </div>
      );
    })
  // })
  

  return (
    // <div class="ui container">
    <div class="ui existing segment">
      <button 
        class="ui button"
        onClick={() => getDotaGames()}
      >
        Get interesting dota games
      </button>
      <table class="ui celled striped table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Highlights Score</th>
      <th>Time Ago</th>
    </tr>
  </thead>
  <tbody>
    {games}
  </tbody>
</table>
      {/* <p>text goes here</p>
      <p>text goes here</p> */}
    </div>
  );
};

export default Backend;
