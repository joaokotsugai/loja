import './Produtos.css';

import Leopard from '../../assets/Tiger_Fruit.png';
import Falcon from '../../assets/EagleFruit.png';
import Criação from '../../assets/criacao.png';
import Kitsune from '../../assets/kitsune.png';
import Gravity from '../../assets/GravityFruit.png';
import Gas from '../../assets/Gas_Fruit.png';

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>
                    Conheça nossas frutinhas e escolha as frutas de mais alta qualidade para todas ocasiões, farms, pvp etc
                </p>

                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={Leopard} alt='Fruta Leopard' />
                            <span className='badge-venda'>Mais vendido</span>
                        </div>
                        <div className='card-info'>
                            <h3>Fruta Leopard</h3>
                            <p className='preco'>R$ 167,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={Criação} alt='Fruta Criação'/>
                        </div>
                        <div className='card-info'>
                            <h3>Fruta Criação</h3>
                            <p className='preco'>R$ 50,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={Gas} alt='Fruta Gás' />
                        </div>
                        <div className='card-info'>
                            <h3>Frutas Gás</h3>
                            <p className='preco'>R$ 80,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={Gravity} alt='Fruta Gravity' />
                        </div>
                        <div className='card-info'>
                            <h3>Fruta Gravity</h3>
                            <p className='preco'>R$ 67,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={Kitsune} alt='Fruta Kitsune' />
                        </div>
                        <div className='card-info'>
                            <h3>Fruta Kitsune</h3>
                            <p className='preco'>R$ 210,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={Falcon} alt='Fruta Falcon' />
                        </div>
                        <div className='card-info'>
                            <h3>Fruta Falcon</h3>
                            <p className='preco'>R$ 10,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}