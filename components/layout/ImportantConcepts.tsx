import ConceptCard from '@/components/ui/ConceptCard'
import React from 'react'

function ImportantConcepts() {
    return (
        <div className='p-10 flex flex-col items-center'>
            <h1 className='text-5xl font-bold text-center mb-5'>Conceptos importantes a conocer</h1>
            <p className='text-center mb-10'>
                Haz clic en cualquiera de los conceptos para aprender más sobre ellos.
            </p>
            <div className='grid grid-cols-2 gap-10'>
                <ConceptCard
                    image="/concepts/grooming2.png"
                    title="Grooming"
                    content="El proceso mediante el cual un adulto se gana la confianza de un menor en internet con fines de abuso sexual o explotación."
                    detailContent='Es una táctica de manipulación psicológica donde un agresor, a menudo ocultando su verdadera identidad y edad, establece una conexión emocional con un niño o adolescente. El agresor busca aislar a la víctima, normalizar comportamientos inapropiados y, finalmente, obtener material íntimo (fotos o videos) o llegar a un encuentro físico.'
                    examples={[
                        "Un supuesto adolescente en un chat de un videojuego que empieza a pedir fotos a cambio de regalos virtuales o skins.",
                        "Un adulto que pide mantener su amistad como un secreto especial entre ellos."
                    ]}
                    protectionTips={[
                        "Configurar los perfiles de redes sociales y videojuegos en modo privado.",
                        "Enseñar a los menores a no aceptar solicitudes de amistad de personas que no conocen en la vida real.",
                        "Fomentar una comunicación abierta para que los menores se sientan seguros de contar si alguien les pide guardar un 'secreto' en línea o les solicita fotos."
                    ]}
                />
                <ConceptCard
                    image="/concepts/doxing2.png"
                    title="Doxing"
                    content="La publicación de información privada o identificativa de una persona en internet sin su consentimiento."
                    detailContent='Consiste en investigar y recopilar datos personales (como el nombre real, la dirección física, el lugar de trabajo, números de teléfono o datos financieros) para publicarlos en foros, redes sociales o sitios web. El objetivo suele ser intimidar, humillar, extorsionar o incitar al acoso físico o digital contra la víctima.'
                    examples={[
                        "Publicar la dirección de la casa y el lugar de trabajo de alguien tras un debate acalorado en redes sociales para que otros vayan a acosarlo.",
                        "Revelar la identidad real de una persona que utiliza un seudónimo anónimo en un foro."
                    ]}
                    protectionTips={["Limitar la cantidad de información personal (como ubicación, universidad o lugar de trabajo) que se comparte públicamente en redes sociales.",
                        "Utilizar diferentes nombres de usuario y correos electrónicos para distintos foros o plataformas (no vincular toda la presencia en línea a una sola identidad).",
                        "Revisar regularmente la configuración de privacidad en todas las cuentas sociales."
                    ]}
                />
                <ConceptCard
                    image="/concepts/phishing2.png"
                    title="Phishing"
                    content="Una técnica de engaño para robar datos confidenciales (como contraseñas o datos bancarios) haciéndose pasar por una entidad de confianza."
                    detailContent='Es un ataque de ingeniería social donde los delincuentes envían mensajes fraudulentos (por correo electrónico, SMS o mensajes directos) que parecen provenir de fuentes legítimas, como bancos, empresas de paquetería o redes sociales. El objetivo es manipular a la víctima para que haga clic en un enlace malicioso, descargue un archivo infectado o ingrese sus credenciales en una página web falsa.'
                    examples={[
                        "Un correo electrónico que parece ser del banco advirtiendo que tu cuenta será bloqueada si no verificas tus datos aquí.",
                        "Un mensaje de texto (SMS) sobre un paquete retenido que requiere un pequeño pago a través de un enlace."
                    ]}
                    protectionTips={[
                        "Nunca hacer clic en enlaces inesperados ni descargar archivos adjuntos de remitentes desconocidos.",
                        "Verificar siempre la dirección de correo electrónico real del remitente, no solo el nombre que aparece.",
                        "Habilitar la autenticación de dos factores (2FA) en todas las cuentas importantes para añadir una capa extra de seguridad si la contraseña es comprometida."
                    ]}
                />
                <ConceptCard
                    image="/concepts/cyberbulling2.png"
                    title="Cyberbullying"
                    content="El uso de medios digitales para acosar, intimidar, humillar o amenazar a una persona de manera repetida."
                    detailContent='A diferencia del acoso tradicional, el ciberacoso puede ocurrir las 24 horas del día, los 7 días de la semana, y a menudo deja una huella digital pública y permanente. Involucra enviar mensajes hirientes, difundir rumores, publicar fotos vergonzosas o excluir deliberadamente a alguien de comunidades en línea.'
                    examples={[
                        "Crear un perfil falso en Instagram o TikTok exclusivamente para burlarse de un compañero de clase.",
                        "Enviar mensajes de texto constantes con amenazas o insultos.",
                        "Difundir un rumor falso sobre alguien en un grupo de WhatsApp escolar o laboral."
                    ]}
                    protectionTips={[
                        "No responder ni tomar represalias, ya que esto suele alimentar al acosador.",
                        "Bloquear y reportar las cuentas del acosador en la plataforma correspondiente.",
                        "Guardar evidencias (como capturas de pantalla de los mensajes o publicaciones) antes de borrarlos, en caso de que sea necesario denunciar la situación a autoridades escolares o policiales."
                    ]}
                />
            </div>
        </div>
    )
}

export default ImportantConcepts