import './Header.css'

export default function Header() {
    return(
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                <p>Leopard de GRAÇA!!! E robux barato é só na BloxBrasil</p>
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