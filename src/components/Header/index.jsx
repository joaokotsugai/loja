import './Header.css'

export default function Header() {
    return(
        <header>
            <div className='anuncio'>
                <p>10x sem juros!</p>
            </div>

            <div className='topo'>
                <picture>
                    <a href="#">
                        <img src='./logoLoja.png'/>
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