import React, { Component } from 'react'

// const url = "http://api.tvmaze.com"

export default class Seasons extends Component {

  render() {

    const { handleSeasonChange, showSeasons,  selectedShow } = this.props

    // const filteredSummary = selectedShow.summary.replace('<p>', '').replace('</p>', '')

    return ( // seasons dropdown and click
      <>
        {selectedShow.id === undefined ? null :
        <div className="season">
          <div className="season__summary">
          <div className="season__title">{selectedShow.title}   lato bold 18pt</div>
            <p>lato reg 16pt {selectedShow.summary.replace('<p>', '').replace('</p>', '')}</p>
          </div>

          <div className="season__header">Seasons</div>
          <div className="custom-select"></div>

          <select 
            onChange={handleSeasonChange} 
            placeholder="Please choose a season"
            readonly={true}
            searchable={false}
            blurInputOnSelect={true}
            // className="season__selection"
          >
            {showSeasons.map((season, index) => 
            <option key={season.seasonId} value={index}
              // id="season__option"
            >
              Season {season.number}
            </option> 
            )}
          </select>
        </div>
        }
      </>
    )

  }

}
