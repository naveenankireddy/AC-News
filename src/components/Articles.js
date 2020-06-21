import React from "react";

export default function Articles(props) {
  return (
    <>
      {props.article ? (
        <div className="all-articles">
          <button>Top News</button>
          <ul className="articles">
            {props.article.map((article) => {
              return (
                <li>
                  <div>
                    <img src={article.urlToImage} alt={article.title} />
                  </div>
                  <div className="article-li">
                    <h4> {article.source.name}</h4>
                    {/* <h4>{article.author}</h4> */}
                    <p>{article.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Loading.......</p>
      )}
    </>
  );
}
