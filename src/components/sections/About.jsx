function About() {
    return (
        <section id="sobre-mi" class="section">
            <div class="section__head">
                <p class="eyebrow">// quién soy</p>
                <h2 class="section__title">Sobre mí</h2>
                <p class="section__subtitle">Contenido aquí</p>
            </div>

            <div class="about">
                <div class="about__photo glass">
                    <img src="/src/assets/fotoCV.png" alt="" width="100%"></img>
                </div>
                <div class="about__text glass">
                    <p>Johann Branco Lara Ortega</p>
                    <p>Full Stack Developer</p>
                    <p>Desarrollo Web • Mobile • IA • Backend</p>
                    <div class="about__facts">
                        <div class="fact">
                            <span class="fact__label">Ubicación</span>
                            <span class="fact__value">La Paz, Bolivia</span>
                        </div>
                        <div class="fact">
                            <span class="fact__label">Disponibilidad</span>
                            <span class="fact__value">Remoto, Tiempo completo</span>
                        </div>
                        <div class="fact">
                            <span class="fact__label">Idiomas</span>
                            <span class="fact__value">Español</span>
                            <span class="fact__value">Inglés Técnico</span>
                        </div>
                        <div class="fact">
                            <span class="fact__label">Especialidades</span>
                            <span class="fact__value">Desarrollo Web</span>
                            <span class="fact__value">Aplicaciones Móviles</span>
                            <span class="fact__value">Arquitectura Backend</span>
                            <span class="fact__value">Inteligencia Artificial</span>
                        </div>
                        <div class="fact">
                            <span class="fact__label">Fortalezas</span>
                            <span class="fact__value">Resolución de problemas</span>
                            <span class="fact__value">Pensamiento analítico</span>
                            <span class="fact__value">Aprendizaje continuo</span>
                            <span class="fact__value">Trabajo en equipo</span>
                        </div>
                        <div class="fact">
                            <span class="fact__label">Intereses</span>
                            <span class="fact__value">Open Source</span>
                            <span class="fact__value">IA</span>
                            <span class="fact__value">Arquitectura de Software</span>
                            <span class="fact__value">Innovación</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;