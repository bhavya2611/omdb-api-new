import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
// import Layout from "../Components/Layout";
// import Header from "../Components/Header";
// import BackButton from "../Components/Backbutton";

function DetailsScreen(props) {
  const isLoading = props.isLoading;
  const data = props.data;
  return (
    // <Layout>
    //   <Header />
    <div style={{ marginTop: 20 }}>
      {isLoading ? (
        <div
          className="loadingText col-12"
          style={{ textAlign: "center", padding: 50 }}
        >
          Loading ......
        </div>
      ) : (
        <div>
          {/* <BackButton path={"/"} /> */}
          <div className="row movieDetails">
            <div
              className="col-lg-4 col-md-5 col-sm-12"
              style={{ padding: 10, textAlign: "center" }}
            >
              <img
                src={data["Poster"]}
                alt="Not-found"
                className="bigMoviePoster"
              />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 descp">
              <span style={{ fontSize: 22 }}>{data["Title"]} </span>
              <span>({data["Year"]} - )</span>
              <br />
              <span>
                <span style={{ color: "white" }}>Runtime:</span>{" "}
                {data["Runtime"]} |
                <span style={{ color: "white" }}> Genre: </span>{" "}
              </span>
              <span>{data["Genre"]}</span>
              <hr color="white" />
              <span style={{ color: "white" }}> Rated: </span>{" "}
              <span>{data["Rated"]}</span> |
              <span style={{ color: "white" }}> Date of realese: </span>{" "}
              <span>{data["Released"]}</span>
              <br />
              <span style={{ color: "white" }}> Director: </span>
              <span>{data["Director"]}</span> |
              <span style={{ color: "white" }}> Writer: </span>
              <span>{data["Writer"]}</span>
              <br />
              <span style={{ color: "white" }}> Stars: </span>{" "}
              <span>{data["Actors"]}</span>
              <br />
              <span style={{ color: "white" }}> Dscription: </span> <br />
              <span>{data["Plot"]}</span>
              <br />
              <span style={{ color: "white" }}> Country: </span>{" "}
              <span>{data["Country"]}</span> |
              <span style={{ color: "white" }}> Awards: </span>{" "}
              <span>{data["Awards"]}</span>
              <br />
              <span style={{ color: "gold" }}> &#x2605; </span>{" "}
              <span>{data["imdbRating"]}</span>
              <br />
              <span style={{ color: "white" }}> Votes: </span>
              <span>{data["imdbVotes"]}</span>
            </div>
          </div>
        </div>
      )}
    </div>
    // </Layout>
  );
}

export default DetailsScreen;
