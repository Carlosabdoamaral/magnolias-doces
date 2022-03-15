import './BannerStyle.scss'
import candy from '../../static/images/banner_candy.jpeg'

export default function BannerComponent() {

    let frases = ['carinho', 'amor', 'dedicação']

    return (
        <section className={"banner"}>

            <div className={"text"}>
                <h2> Sempre
                    <br/>
                    com <span>{frases[Math.floor(Math.random())]}</span>!
                </h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ante mauris, lacinia quis nisi et, sagittis lacinia nisi. Nulla aliquet tempor dictum. In consequat quam consequat ullamcorper auctor. Proin varius orci in mollis egestas.</p>

                <button>Saber mais</button>
            </div>

            <div className={"image"}>
                <img src={candy} alt={"Doce banner"}/>
            </div>
        </section>
    )
}
