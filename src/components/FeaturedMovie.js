import React from 'react';
import './FeaturedMovie.css';

export default function FeaturedMovie({item}) {

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push( item.genres[i].name);
    }

    let description = item.overview;
    
    if(description > 10) {
        description = description.substring(0, 200)+'...';
    }


    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured-descripton">{description}</div>
                    <div className="featured--buttons">
                        <a className="btn-watch" href={`/watch/${item.id}`}>► Assistir</a>
                        <a className="btn-list" href={`/list/add${item.id}`}>+ Minha lista</a>
                    </div>
                    <div className="featured--genres">Gêneros: <strong>{genres.join(', ')}</strong></div>
                </div>
            </div>
        </section>
    )
}
