import React from "react";

const NewsItem = (props) => {

    let { title, description, imgurl, newsurl, author, date, source } = props;
    return ( <
        div >
        <
        div className = "card" >
        <
        div style = {
            { display: "flex", justifyContent: 'flex-end', right: '0', position: 'absolute' } } >
        <
        span className = "position-absolute top-0 transate-middle badge rounded-pill bg-danger" > { source } < /span> <
        /div> <
        img src = {!imgurl ?
            "https://tse1.mm.bing.net/th?id=OIP.CqQZoxQjtum2oRZVQkjh5wHaHa&pid=Api&P=0&h=220" :
                imgurl
        }
        className = "card-img-top"
        alt = "img" /
        >
        <
        div className = "card-body" >
        <
        h5 className = "card-title" > { title } < /h5> <
        p className = "card-text" > { description } < /p> <
        p className = "card-text" > < small className = "text-muted" > By {!author ? "unknown" : author } - on { new Date(date).toGMTString() } < /small></p >
        <
        a href = { newsurl }
        target = "_blank"
        className = "btn btn-sm btn-dark"
        rel = "noreferrer" > Read More < /a> <
        /div> <
        /div> <
        /div>
    );

}

export default NewsItem;