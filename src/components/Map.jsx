import movies from "../utils/movies";
import '../css/card.css'


const Map = () => {
    return <div className="cards">
        {movies.map((movies) => {
            const {
                title,
                director,
                year,
                genre,
                imdbRating,
            } = movies; 
            
            const image = 'https://placebear.com/300/500';
            return <div key={`${title}${director}${year}`} className="cards--card">
                <img className="cards--image" src={image} alt={title} />
                <div className="cards--text-content">
                    <p className="cards--title">{title} ({year})</p>
                    <p className="cards--directed-by">{director}</p>
                    <p className="cards--imdbRating">{imdbRating}</p>
                </div>

                <div>
                    {genre.map(genreSingle => {
                        return <span className="cards-genre">{genreSingle}</span>
                    })}
                </div>
                
            </div>
        })}

        
    </div>
    
}

export default Map;