import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/tech/img/2021/08/27/1600x900/RUSSIA-POLITICS-ONLINE-MEDIA-0_1630062053958_1630066558246.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small class="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <div className="d-flex justify-content-center">
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
