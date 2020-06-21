import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
    };
  }
  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=33b71d1d07e049b2874093e3de9e2087
        `)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ articles: data.articles });
      });
  }

  render() {
    return (
      <>
        <h2 className="headlines-title" style={{ textAlign: "center" }}>
          Headlines
        </h2>
        {/* {console.log(props.article)} */}
        {this.state.articles ? (
          <div>
            <marquee direction="up" loop="true" scrollamount="8">
              <ul className="sidebar">
                {this.state.articles.map((article) => {
                  return (
                    <li className="headlines-border">
                      <h3>{article.author}</h3>
                      <p>{article.title}</p>
                    </li>
                  );
                })}
              </ul>
            </marquee>
          </div>
        ) : (
          <p>Loading.......</p>
        )}
      </>
    );
  }
}

export default Sidebar;
