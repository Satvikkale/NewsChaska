import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

    const [articles, setArticals] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [totalResults, setTotalResults] = useState(0)



    const capitalizedfirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    const updateNews = async() => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticals(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizedfirstletter(props.category)} - NewsChaska`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    // const handleprevious = async () => {
    //   setPage(page - 1)
    //   updateNews();
    // };

    // handlenext = async () => {
    //   console.log("next");
    //   setPage(page + 1)
    //   updateNews();
    // };

    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticals(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };


    return ( <
        >
        <
        h2 className = "text-center"
        style = {
            { margin: "35px 0px", marginTop: '90px' } } >
        NewsChaska - Top { capitalizedfirstletter(props.category) } -
        Headlines { " " } <
        /h2>{" "} { loading && < Spinner / > } <
        InfiniteScroll dataLength = { articles.length }
        next = { fetchMoreData }
        hasMore = { articles.length < totalResults }
        loader = { < Spinner / > } >
        <
        div className = "container" >
        <
        div className = "row my-1" > { " " } {
            articles.map((element, index) => {
                return ( <
                    div className = "col-md-3 my-1"
                    key = { `${element.url}-${index}` } >
                    <
                    NewsItem title = { element.title ? element.title : "" }
                    description = {
                        element.description ? element.description : ""
                    }
                    imgurl = { element.urlToImage }
                    newsurl = { element.url }
                    author = { element.author }
                    date = { element.publishedAt }
                    source = { element.source.name }
                    />{" "} <
                    /div>
                );
            })
        } <
        /div> <
        /div> <
        /InfiniteScroll> <
        />
    );

}


News.defaultProps = {
    country: "in",
    pageSize: "8",
    category: "general",
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};