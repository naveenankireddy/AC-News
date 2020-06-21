import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }
  componentDidMount() {
    var url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=in&" +
      "apiKey=33b71d1d07e049b2874093e3de9e2087";
    var req = new Request(url);
    fetch(req)
      .then((res) => res.json())
      .then(({ status, articles }) => {
        //   console.log(articles, "article");
        let article = articles[0];
        //   console.log(article);

        if (status === "ok") {
          this.setState({ article: article });
        }
      });
  }

  render() {
    const { article } = this.state;
    if (!article) return <h1>loading......</h1>;
    return (
      <div className="apply-border">
        <div className="hero-img">
          <img src={article.urlToImage} alt={article.title} />
        </div>
        <div className="hero-content">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <button>Read More</button>
        </div>
      </div>
    );
  }
}

export default Main;
