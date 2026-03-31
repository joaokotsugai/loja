import './Header.css'

export default function Header() {
    return(
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                <p>Já viu o preço da Kitsune, ta mó caro</p>
                </div>
            </div>

            <div className='topo'>
                <picture>
                    <a href="#">
                        <img src='./bloxbrasil.png'/>
                    </a>
                </picture>  

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Produtos</a>
                    <a href="#">Lançamentos</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}