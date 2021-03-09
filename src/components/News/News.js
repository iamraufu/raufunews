import './News.css';
import { Card, Button,Image } from 'react-bootstrap';

const News = (props) => {      
      const {title, description,url,urlToImage,source} = props.article;
      return (
            <Card>
                  <Card.Header as='h5'>Source: {source.name}</Card.Header>
                  <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                              {description}
                              <Image src={urlToImage} thumbnail />
                        </Card.Text>
                        <Button variant="primary"><a style={{color:"white"}}href={url}>Check News</a></Button>
                  </Card.Body>
            </Card>
      );
};

export default News;