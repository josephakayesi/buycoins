import React, { Component } from 'react'

import NewsFeedItem from '../NewsFeedItem/NewsFeedItem'

class NewsFeedList extends Component {
    constructor() {
        super()

        this.state = {
            newsFeed: [
                {
                    headline: 'First ttitle',
                    link: 'firstlink.com',
                    points: 100,
                    author: 'johndoe',
                    comments: 20
                },
                {
                    headline: 'Second ttitle',
                    link: 'secondlink.com',
                    points: 70,
                    author: 'rickjames',
                    comments: 3
                },
                {
                    headline: 'Third ttitle',
                    link: 'thirdlink.com',
                    points: 85,
                    author: 'thomaspartey',
                    comments: 17
                }
            ]
        }
    }
    render() {
        const newsFeed = this.state.newsFeed
        return (
            <div>
                {newsFeed.map(function (news, index) {
                    return <NewsFeedItem
                        key={index}
                        number={index+1}
                        headline={news.headline}
                        link={news.link}
                        points={news.points}
                        author={news.author}
                        comments={news.comments} />
                })
                }
            </div>
        )
    }
}

export default NewsFeedList