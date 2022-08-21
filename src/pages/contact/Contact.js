import { TbBrandInstagram } from 'react-icons/tb'
import { TbBrandTwitter } from 'react-icons/tb'
import { TbBrandFacebook } from 'react-icons/tb'
import { TbBrandYoutube } from 'react-icons/tb'
import { TbBrandLinkedin } from 'react-icons/tb'
import { TbBrandGmail } from 'react-icons/tb'
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

                <section className='contact-container'>

                    <h2>Contacto</h2>

                    <p className='contact-p'>
                        Para más información, me podés contactar por los siguientes medios:
                    </p>

                    <section id='contactMediaSection'>

                        <article className='contactMedia'>
                            <div className='contactMediaIcon'>
                                <TbBrandInstagram />
                            </div>
                            <div className='contactMediaText cursor-pointer'
                                onClick={() => window.open('https://www.instagram.com/yuyi63yuyiflores/', '_blank')}
                            >
                                Instagram
                            </div>
                        </article>

                        <article className='contactMedia'>
                            <div className='contactMediaIcon'>
                                <TbBrandTwitter />
                            </div>
                            <div className='contactMediaText cursor-pointer'
                                onClick={() => window.open('https://twitter.com/yuyiflores26', '_blank')}
                            >
                                Twitter
                            </div>
                        </article>

                        <article className='contactMedia'>
                            <div className='contactMediaIcon'>
                                <TbBrandFacebook />
                            </div>
                            <div className='contactMediaText cursor-pointer'
                                onClick={() => window.open('https://www.facebook.com/yuyi.a.flores/', '_blank')}
                            >
                                Facebook
                            </div>
                        </article>

                        <article className='contactMedia'>
                            <div className='contactMediaIcon'>
                                <TbBrandYoutube />
                            </div>
                            <div className='contactMediaText cursor-pointer'
                                onClick={() => window.open('https://www.youtube.com/channel/UC2k_bqNr_859nR6SIUHi_4A', '_blank')}
                            >
                                YouTube
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

                        <article className='contactMedia'>
                            <div className='contactMediaIcon'>
                                <TbBrandGmail />
                            </div>
                            <div className='contactMediaText'>
                                yuyiflores26@gmail.com
                            </div>
                        </article>
                    </section>

                </section>

                <p className="backName">
                    Fondo: "Células" de Y.F.
                </p>

            </main>

            <Footer />
        </>
    )
}