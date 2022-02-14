import React from "react";
import "./card.styles.css";
import allData from "../../allCat.json";
import Button from "../button/button.component";

const Card = ({newsType}) => {
  const mydata = allData[newsType]
  return (
    <div className="wrapper">
      {mydata?.map((data) => {
        return (
          <div className="wrapper">
            <div className="container">
              <div className="card" >
                <div className="card__header">
                  <img
                    src={
                      data.urlToImage
                        ? data.urlToImage
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                    }
                    alt="card__image"
                    className="card__image"
                    width="600"
                    style={{ height: "212px" }}
                  />
                </div>           
                <div className="card__body">
                
                  <span className="tag tag-red">{data.source.name}</span>
                  <h4>{data.title}</h4>
                  <p>
                    {data.description
                      ? data.description
                      : "Please vist To the website .the description is not currently available"}
                  </p>
                </div>
                <div className="card__footer">
                  <div className="user">
                    <img
                      src={"https://robohash.org/" + data.title.slice(0, 9)}
                      alt="user__image"
                      className="user__image"
                      style={{ width: "30px" }}
                    />
                  
                    <div className="user__info">
                      <div className="user__info1">
                      
                        <h5>{data.author ? data.author.slice(0,15) : " Unknown "}</h5>
                        <small>{data.publishedAt.slice(11,13)} hr ago</small>
                      </div>
                      
                    </div>
                  </div>
                  <a rel="noreferrer" target="_blank"href={data.url}>
                        <Button />
                      </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
