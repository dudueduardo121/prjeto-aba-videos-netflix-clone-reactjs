import React, {useEffect, useState} from 'react';
import Api from './Api';
import './App.css';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuderData, setfeaturedData] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
        // pegando alista dos filmes
        let list = await Api.getHomeList();
        setMovieList(list);

        //pegar filme em destaque
        let originals = list.filter(i => i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv');
        console.log(chosenInfo);
        setfeaturedData(chosenInfo);
    }

    loadAll();
  }, []);


  useEffect(()=>{
    const scrollListener = () => {
        if(window.scrollY > 10) {
          setBlackHeader(true);
        }else {
          setBlackHeader(false);
        }

        
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
    <div className="page">
        {/* header */}
        <Header black={blackHeader}/>

        {/* Destaque */}
        {
          featuderData && <FeaturedMovie item={featuderData} />
        }
        

        {/* Listas diversas de filmes */}
        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>


        {/* roda pé basico */}
        <footer>
          Feito com <span role="img" aria-label="coração">♥</span> por EdDev <br/>
          Direitos de imagem para Netflix <br/>
          Dados do site Themoviedb.org
        </footer>
        {movieList.length <= 0 &&
          <div className="loading">
            <img src="https://media.giphy.com/media/3oz8xKutcr3DkNZ2Bq/giphy.gif" alt="carregando"/>
          </div>
        }
    </div>
  );
}

export default App;
