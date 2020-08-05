import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <main>
            <article className="teacher-item">
                <header>
                    <img src="https://image.flaticon.com/icons/svg/147/147144.svg" alt="Rafhael Gigante"/>
                    <div>
                        <strong>Rafhael Gigante</strong>
                        <span>Física</span>
                    </div>
                </header>
                <p>
                    Entusiasta das melhores tecnologias de química avançada
                    <br/> <br/>
                    Apaixonado por explodir coisas em laboratórios e por mudar a vida das
                    pessoas através de experiências. Mais de 200.000 pessoas já passaram por
                    umas das minhas explosões.
                </p>

                <footer>
                    <p>preço/hora <strong>R$ 80,00</strong></p>
                    <button type='button'>
                        <img src={whatsappIcon} alt="Icone WhatsApp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
        </main>
    )
}

export default TeacherItem