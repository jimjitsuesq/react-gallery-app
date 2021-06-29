import React from 'react';
import Photo from './Photo';
import NoMatch from './NoMatch';

const PhotoList = props => {
    const results = props.data
    let photos;
    if(props.loading) {
        <p>Loading...</p>
    } else {
        if (props.data.length) {
            photos = results.map(photo => <Photo url1={`https://flickr.com/photos/${photo.owner}`} url2={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} key={`${photo.id}`}/>);
        } else {
            photos = <NoMatch />
        }
    }
    return(
        <div>
           {(props.loading)
                ?  <p>Loading...</p>
                :
                <div>
                <h2>Search Results for "{(props.query).slice(8)}"</h2>
                    <ul>
                        {photos}
                    </ul>
                </div>
            }
        </div>
    )
}
export default PhotoList;