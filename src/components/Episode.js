import React, { Component } from 'react'

export default class Episode extends Component {

  // local state for doc click
  state = {
    dotClicked: false
  }


  render() {

    const { episodes, selectedEpisode, displayEpisode, episodeOpen, handleClose } = this.props

    // console.log("episode component episodeOpen", episodeOpen);
    
    return ( // timeline, dot click and tooltip
      <>

      <div className="episode">
        <ul id="timeline">
          {episodeOpen === false ? null :
            <div className="tooltip">
              <div>
                {selectedEpisode.image !== null ? 
                <img src={selectedEpisode.image.medium} alt="episode" width="50" height="50"/>
                :
                <svg>
                  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="lightgray" />
                </svg>
                }
              </div>
              <div className="bubble__col2">
                <div className="bubble__title">{selectedEpisode.name}</div>
                <div className="bubble_sum">{selectedEpisode.summary.replace('<p>', '').replace('</p>', '')}</div>
              </div>
              <div className="close alert" onClick={handleClose}> X </div>
            </div>
          }
          {episodes.map( (episode) => 
            <li key={episode.episodeId}>
            {/* {episodeOpen === false ? null :
              <div className="bubble">
                <div>
                  {selectedEpisode.image !== null ? 
                  <img src={selectedEpisode.image.medium} alt="episode" width="50" height="50"/>
                  :
                  <svg>
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="lightgray" />
                  </svg>
                  }
                </div>
                <div className="bubble__col2">
                  <div className="bubble__title">{selectedEpisode.name}</div>
                  <div className="bubble_sum">{selectedEpisode.summary.replace('<p>', '').replace('</p>', '')}</div>
                </div>
                <div className="close alert" onClick={handleClose}> X </div>
              </div>
            } */}
              <div className="dot" onClick={() => displayEpisode(episode)}>
                <span className='circle'></span>
              </div>
              <div className="title">Episode {episode.number}</div>
            </li>
          )}
        </ul>
      </div>
    </>
    )
  }
}
