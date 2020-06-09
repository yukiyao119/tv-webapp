import React, { Component } from 'react'
import Seasons from './Seasons'
import Episode from './Episode'

const url = "http://api.tvmaze.com"

export default class SearchBar extends Component {

  state = {
    query: '',
    validInput: true,
    searchedShows: [],
    selectedShow: {},
    seasonPicked: false,
    showSeasons: [],
    selectedSeason: {},
    episodes: [],
    selectedEpisode: {},
    episodeOpen: false
  }

  handleSearch = (evt) => {
    let inputVal = evt.target.value
    let regex = /[a-zA-Z ]+$/;
    // console.log('evt.target.value', evt.target.value)
    if (inputVal.length !== 0 && !regex.test(inputVal) ) {
      // evt.preventDefault();
      this.setState({
        validInput: false,
        query: inputVal
      }, () => console.log('this.state', this.state))
    } else {
      this.setState({
        query: inputVal,
        validInput: true
      }, 
        () => fetch(`${url}/search/shows?q=${this.state.query}`)
        .then(res => res.json())
        .then( data => {
          // console.log('data', data)
          const searchedShows = data.map(obj => {
            return {
              id: obj.show.id,
              title: obj.show.name,
              premiered: obj.show.premiered,
              rating: obj.show.rating.average,
              img: obj.show.image,
              summary: obj.show.summary
            }
          });
          // console.log('searchedShows', searchedShows)
          this.setState({
            searchedShows: searchedShows
          })
        })
      )
    }

  }


  handleClear = (evt) => {
    this.setState({
      query: '',
      validInput: true,
      searchedShows: [],
      selectedShow: {},
      showSeasons: [],
      seasonPicked: false
    })
  }


  displayShowInfo = (showObj) => {
    this.setState({
      selectedShow: showObj,
      showPicked: true,
      query: ""
    }, 
      () => fetch(`${url}/shows/${this.state.selectedShow.id}/seasons`)
      .then(res => res.json())
      .then(seasonData =>{
        const selectedShowSeasons = seasonData.map((seasonObj) => {
          return {
            seasonId: seasonObj.id,
            number: seasonObj.number,
          }
        })
        this.setState({
          showSeasons: selectedShowSeasons,
          // showPicked: false,
          // query: this.state.selectedShow.title,
          // validInput: true,
          searchedShows: [],
        })
      })
    
    )
  }


  handleSeasonChange = (evt) => {
    console.log(' evt.target.value', evt.target.value);
    this.setState({
      selectedSeason: this.state.showSeasons[evt.target.value]
    }, 
    () => {
      fetch(`${url}/seasons/${this.state.selectedSeason.seasonId}/episodes`)
      .then(res => res.json())
      .then(episodesData => {
        // console.log('episodesData', episodesData);
        const seasonEpisodes = episodesData.map((episodeObj) => {
          return {
            episodeId: episodeObj.id,
            number: episodeObj.number,
            image: episodeObj.image ? episodeObj.image.medium : "unavailable",
            name: episodeObj.name,
            summary: episodeObj.summary,
            airDate: episodeObj.airdate,
            airStamp: episodeObj.airstamp
          }
        })

        this.setState({
          episodes: seasonEpisodes,
          seasonPicked: true
        }, () => {console.log('episodes', this.state.episodes);
        })
      })
    })
  }

  displayEpisode = (episodeObj) => {
    // console.log('displaying epi obj');
    this.setState({
      selectedEpisode: episodeObj,
      episodeOpen: true
    }, () => {console.log('episodeOpen', this.state.episodeOpen);
    })
  }


  handleClose = (evt) => {
    // console.log("handing close ");
    this.setState({
      episodeOpen: false
    })
  }


  render() {

    return ( // searchbar, dropdown click, summary
      <div className="search">
        {this.state.validInput ? <div>Search TV show</div> : 
        <div className={this.state.validInput ? "" : "alert"}>
          Search TV show * Please enter valid title
        </div>}

        <div className="dropdown">
        <div className="dropdown-content">
            <input id="myInput"
              type="text"
              autoComplete="off"
              placeholder={this.state.selectedShow.title == undefined ? "Please enter TV show title" : this.state.selectedShow.title}
              onChange={this.handleSearch} 
            />
            {this.state.searchedShows.map(show => 
              <div key={show.id} className="dropdown-list"
                onClick={() => this.displayShowInfo(show)}
              >
                {/* <div className="list-container"> */}
                <span className="item">{show.title}</span>
                <span className="item">premiered on {show.premiered}</span>
                <span className="item">Rating : {show.rating}</span>
                {/* </div> */}
              </div>
              )}
        </div>
        </div>
        
        <button className="search__clearBtn" onClick={this.handleClear}>
          <span>Clear</span>
        </button>

        <Seasons 
        selectedShow={this.state.selectedShow}
        handleSeasonChange={this.handleSeasonChange}
        showSeasons={this.state.showSeasons}
        selectedSeason={this.state.selectedSeason}
        />

        {this.state.seasonPicked ? 
        <Episode 
        episodes={this.state.episodes}
        selectedEpisode={this.state.selectedEpisode}
        displayEpisode={this.displayEpisode}
        episodeOpen={this.state.episodeOpen}
        handleClose={this.handleClose}
        />
        : null}

      </div>
    )

  }
}
