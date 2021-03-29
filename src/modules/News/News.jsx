import React, { useEffect } from 'react';
import { loadNews } from '../../api.js';
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';

const News = ({ symbol }) => {
    let [newsList, setNewsList] = React.useState(
        []
    )



    useEffect(() => { loadNews(symbol).then(data => { console.log(data.news); setNewsList(data.news); return data.news }) }, [symbol])


    return (
        <ListGroup variant="flush" className="new-card">
            {newsList.map((item, index) => {
                return (
                    <ListGroup.Item key={`news${index}`} style={{ width: "85%" }}>
                        <h4>
                            <a href={item.link}>{item.title}</a>
                        </h4>
                        <p>{item.publisher}</p>
                    </ListGroup.Item>
                )
            })
            }

        </ListGroup>
    );
}
export default News

