import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import PageNumber from "../Components/PageNumber";
import MovieTile from "../Components/MovieTile";
// import InfiniteCarousel from "react-leaf-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { navigate } from "@reach/router";
import DetailsScreen from "./DetailsScreen";

function HomeScreen(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [dataDet, setDataDet] = useState("");
  const [isLoadingDet, setIsLoadingDet] = useState(false);

  const getMovieDetails = (event) => {
    setIsLoadingDet(true);
    let name = event.target.nextSibling.textContent;
    const apiLink = `http://www.omdbapi.com/?i=${name}&apikey=8fd76efe`;
    postData(apiLink, {}).then((data) => {
      if (data) {
        setDataDet(data);
        setIsLoadingDet(false);
      }
    });
  };
  const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  };

  const changePageNumber = (text) => {
    setPageNumber(text.target.value);
  };

  const changeSearchTerm = (text) => {
    setSearchTerm(text.target.value);
  };

  //   const getMovieDetails = (event) => {
  //     //console.log(event);
  //     //const id = event.target.nextSibling.textContent;
  //     setMovieId("");
  //     setMovieId(event.target.nextSibling.textContent);
  //     //navigate(`/Details/${id}`);
  //   };

  const searchMovie = () => {
    setIsLoading(true);
    const apiLink = `http://www.omdbapi.com/?s=${searchTerm}&page=${pageNumber}&apikey=8fd76efe`;
    postData(apiLink, {}).then((data) => {
      if (data) {
        setData(data);
        setIsLoading(false);
      }
    });
  };

  const goToPageNumber = () => {
    //setData("");
    searchMovie();
  };

  return (
    <Layout>
      <Header />
      {isLoading ? (
        <div
          className="loadingText col-12"
          style={{ textAlign: "center", padding: 50 }}
        >
          Loading ......
        </div>
      ) : (
        <div>
          <div
            className="row"
            style={{
              padding: 10,
              marginBottom: 15,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <input
                id="search"
                type="text"
                required
                value={searchTerm}
                className="textInput"
                onChange={changeSearchTerm}
              />
              <button type="button" onClick={searchMovie} className="button">
                Search
              </button>
            </div>
            <div>
              <PageNumber
                onChange={changePageNumber}
                pageNumber={pageNumber}
                data={data.totalResults ? data.totalResults : 0}
                onClick={goToPageNumber}
              />
            </div>
          </div>
          <div>
            {data !== "" ? (
              <div
                className="col-12"
                style={{
                  textAlign: "center",
                  paddingRight: 30,
                  paddingLeft: 30,
                }}
              >
                {/* <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                      },
                    },
                  ]}
                  dots={true}
                  showSides={true}
                  sidesOpacity={0.5}
                  sideSize={0.1}
                  slidesToScroll={1}
                  slidesToShow={7}
                  scrollOnDevice={true}
                > */}
                <Slider {...settings}>
                  {data.Search.map((movie) => {
                    return (
                      <MovieTile
                        key={movie["imdbID"]}
                        data={movie}
                        onClick={getMovieDetails}
                      />
                    );
                  })}
                </Slider>
                {/* </InfiniteCarousel> */}
              </div>
            ) : null}
          </div>
          {isLoadingDet || dataDet !== "" ? (
            <DetailsScreen data={dataDet} isLoading={isLoadingDet} />
          ) : null}
        </div>
      )}
    </Layout>
  );
}

export default HomeScreen;
