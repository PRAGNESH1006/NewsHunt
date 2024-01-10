import "../App.css";
import React, { Component } from "react";


export class NewsItem extends Component {
  render() {
    let {title,descipsion,imgUrl,newsUrl,url}=this.props
    return (
      <div className="container my-4">
        <div className="card mx-2 my-2" >
          <img src={!imgUrl?"https://findlogovector.com/wp-content/uploads/2018/07/headline-news-logo-vector.png":imgUrl} className="card-img-top" alt="Img" style={{height:"12rem"}} />
          <div className="card-body" >
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
            {descipsion}...
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
// style={{ width: "18rem"}} style={{height:"22rem"}}