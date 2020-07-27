import React from 'react';
import dadosInicias from './data/dados_iniciais';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import VideoCardGroup from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
      <div style={{ background: "#141414"}}>

        <Menu/>

        <BannerMain
          videoTitle={dadosInicias.categorias[0].videos[6].titulo}
          url={dadosInicias.categorias[0].videos[6].url}
          videoDescription={"Fique por dentro das novidades"}
        />

        <VideoCardGroup
            ignoreFirstVideo
            category={dadosInicias.categorias[0]}
        />

        <VideoCardGroup
            ignoreFirstVideo
            category={dadosInicias.categorias[1]}
        />

        <VideoCardGroup
            ignoreFirstVideo
            category={dadosInicias.categorias[2]}
        />

        <VideoCardGroup
            ignoreFirstVideo
            category={dadosInicias.categorias[3]}
        />

        <VideoCardGroup
            ignoreFirstVideo
            category={dadosInicias.categorias[4]}
        />

        <VideoCardGroup
            ignoreFirstVideo
            category={dadosInicias.categorias[5]}
        />

        <Footer />

      </div>
  );
}

export default App;
