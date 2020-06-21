import React from "react";
import Articles from "./Articles";
import Main from "./Main";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: null,
      articles: null,
      filteredArticles: null,
      searchQuery: "",
    };
  }

  handleSearchbar = (inputValue) => {
    let searchQuery = inputValue.toLowerCase();
    this.setState({ searchQuery });
  };

  componentDidMount() {
    var sourceUrl = `https://newsapi.org/v2/sources?language=en&country=us&apiKey=33b71d1d07e049b2874093e3de9e2087
        `;
    var articleUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=33b71d1d07e049b2874093e3de9e2087
        `;
    var articles = fetch(articleUrl).then((res) => res.json());
    var sources = fetch(sourceUrl).then((res) => res.json());
    Promise.all([sources, articles]).then((data) => {
      var sources = this.random(data[0].sources, 8);
      //   console.log(sources);
      this.setState({
        sources,
        articles: data[1].articles,
      });
    });
  }

  handleClick = (name) => {
    console.log(name);
    fetch(
      `https://newsapi.org/v2/everything?q=${name}&apiKey=33b71d1d07e049b2874093e3de9e2087 `
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          return this.setState({ articles: data.articles });
        }
      });
  };
  random = (data, count) => {
    var arr = [];
    for (let index = 0; index < count; index++) {
      var n = Math.floor(Math.random() * data.length);
      arr.push(data[n]);
    }
    return arr;
  };

  render() {
    let allArticles = this.state.searchQuery
      ? this.state.articles.filter((a) =>
          a.source.name.toLowerCase().includes(this.state.searchQuery)
        )
      : this.state.articles;

    return (
      <>
        <Searchbar handleSearchbar={this.handleSearchbar} />
        {this.state.sources ? (
          <div className="buttons">
            {this.state.sources.map((source, i) => {
              return (
                <button
                  className="category-buttons"
                  key={i}
                  onClick={() => this.handleClick(source.name)}
                >
                  {source.name}
                </button>
              );
            })}
          </div>
        ) : (
          <p>loding...</p>
        )}
        <div className="flex">
          <div class="content">
            <Main />
            <div>
              <>
                <Articles
                  article={allArticles}
                  //   articles={this.sortArticles(filteredArticles)}
                  //   handleArticleView={this.handleArticleView}
                  //   articleFilterOnchange={this.handleArticleView}
                  //   inputValue={this.state.inputValue}
                />
              </>
            </div>
          </div>
          <div className="headings">
            <Sidebar />
          </div>
        </div>
        <footer>
          <div>
            <h5>All Countries News(ACN) Powered By @AltCampus</h5>
          </div>
        </footer>
      </>
    );
  }
}

export default Header;
