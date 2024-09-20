import "./playViedo.css";
import viedo1 from "../../assets/viedo1.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/post.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayViedo = () => {
  return (
    <div className="play-viedo">
      <video src={viedo1} controls autoPlay muted></video>
      <h3>
        Nisi ex minim sit officia aliquip exercitation consectetur cillum minim
        commodo est. Duis ullamco nulla id aliquip sunt ipsum elit
      </h3>
      <div className="play-video-info">
        <p>1525 Views & bull ; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="like" />
            125
          </span>
          <span>
            <img src={dislike} alt="dislike" />2
          </span>
          <span>
            <img src={share} alt="share" />
            share
          </span>
          <span>
            <img src={save} alt="save" />
            save{" "}
          </span>
        </div>
        <hr />
       
        <div className="publisher">
          <img src={jack} alt="jack" />
          <p>Jack</p>
          <span>!M Subscribers</span>
        </div>
        <button>Subscribed</button>
      </div>
      <hr/>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscripe Ad commodo ad adipisicing proident nostrud duis esse.</p>
        
        <h4>130 comments</h4>
        <div className="comment">
          <img src={user_profile} alt="user" />
        </div>
        <div>
          <h3>
            Jack Nichoa
            <span>1 day ago</span>
          </h3>
          <p>
            A golbal Ex anim amet irure ad sit enim officia sit veniam esse.
            Enim deserunt voluptate id est laboris non tempor pariatur consequat
            non eiusmod dolor sit mollit. Adipisicing magna eiusmod anim enim
            voluptate reprehenderit dolore laboris culpa sunt reprehenderit.
            Laboris cupidatat magna elit enim labore labore non aliquip culpa
            ullamco fugiat.
            <div
            className="comment-action"
            >
              <img src={like}
              alt=""
              />
              <span>244</span>
              <img src={dislike} alt="dislike" />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayViedo;
