import React from 'react'
import './VideoFooter.css'
import record from "../../../Images/recordSpin.png"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import Ticker from "react-ticker"

function VideoFooter({channel,description,song}) {
    return (
      <div className="footer">
        <div className="footer__text">
          <h3>@{channel}</h3>
          <p>{description}</p>
          <div className="footer__ticker">
            <MusicNoteIcon className="footer__icon" />
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p>{song}</p>
                </>
              )}
            </Ticker>
          </div>
        </div>
        <img className="footer__record" src={record} alt="record" />
      </div>
    );
}

export default VideoFooter
