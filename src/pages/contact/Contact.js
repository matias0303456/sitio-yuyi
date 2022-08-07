import { CgMail } from 'react-icons/cg'
import { TbBrandLinkedin } from 'react-icons/tb'
import { Helmet } from 'react-helmet'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Contact() {
    return (
        <>
            <Header />

            <Helmet>
                <title>Amelia Yuyi Flores | Contacto</title>
            </Helmet>

            <main className="mainContent">

                <h2>Contacto</h2>

                <p>
                    Para más información, me podés contactar por los siguientes medios:
                </p>

                <section id='contactMediaSection'>
                    <article className='contactMedia'>
                        <div className='contactMediaIcon'>
                            <CgMail />
                        </div>
                        <div className='contactMediaText'>
                            yuyiflores26@gmail.com
                        </div>
                    </article>

                    <article className='contactMedia'>
                        <div className='contactMediaIcon'>
                            <TbBrandLinkedin />
                        </div>
                        <div className='contactMediaText cursor-pointer'
                            onClick={() => window.open('https://www.linkedin.com/in/amelia-flores-b70aa7207/', '_blank')}
                        >
                            LinkedIn
                        </div>
                    </article>
                </section>

            </main>

            <Footer />
        </>
    )
}