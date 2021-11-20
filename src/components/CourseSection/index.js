import './styles.scss'

export function CourseSection(){


    return(
        <>
            <section id="coursesection">
                <div className="yellow">
                    <div className="content">
                        <h2>Pesquisa</h2>
                        <h4>A pesquisa no Instituto de Computação inicia-se ainda na graduação com a Iniciação Científica. Nessa etapa os alunos têm a oportunidade de ter o primeiro contato com a pesquisa. No nível de pós-graduação, a pesquisa é realizada nos cursos de mestrado e doutorado, além de pesquisadores que visitam o IC para realizar seu pós-doutorado.</h4>
                        <button>Saiba mais</button>
                    </div>
                </div>
                <div className="green">
                    <div className="content">
                        <h2>Ensino</h2>
                        <h4>O Curso de Bacharelado em Sistemas de Informação fornece a base matemática necessária para uma sólida formação em computação, incluindo componentes curriculares antenados com as demandas da área de Tecnologia como Computação Móvel, Inteligência Artificial, Sistemas Web, Sistemas Multimídia, Segurança e Auditoria, entre outros.</h4>
                        <button>Saiba mais</button>
                    </div>
                </div>
                <div id="yellow2" className="yellow">
                    <div className="content">
                        <h2>Extensão</h2>
                        <h4>A extensão universitária é a interface entre a  universidade e sociedade visando com o objetivo de gerar conhecimento e à interlocução das atividades acadêmicas de ensino e de pesquisa, através de processos ativos de formação. Neste processo, a extensão abrange experiências de popularização da ciência, e promove diálogos com a sociedade a fim de encontrar soluções para problemas e questões sociais</h4>
                        <button>Saiba mais</button>
                    </div>
                </div>
            </section>
        </>
    )
}