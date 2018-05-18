import React from 'react'

const newsItem = ({item}) => {
    return(
        <div>
            <div className="news_item">
                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
            </div>
        </div>
    )
}

export default newsItem