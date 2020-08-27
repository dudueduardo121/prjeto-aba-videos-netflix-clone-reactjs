import React, {useState} from 'react';
import './MovieRow.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default function MovieRow({title,items}) {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let scrolLeft = scrollX + Math.round(window.innerWidth / 2);
        if(scrolLeft > 0){
            scrolLeft = 0;
        }
        setScrollX(scrolLeft);
    }

    const handleRightArrow = () => {
        let scrolRight = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;

        if((window.innerWidth - listW) > scrolRight){
            scrolRight = (window.innerWidth - listW) - 60;
        }
        setScrollX(scrolRight);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="moviRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>

            <div className="moviRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}>

                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movieRow--item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
