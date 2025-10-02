<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'IaaS permite a los usuarios gestionar infraestructura física sin preocuparse por el <em>hardware</em>.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'PaaS ofrece únicamente almacenamiento en la nube sin herramientas de desarrollo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'SaaS entrega software directamente a los usuarios a través de Internet sin necesidad de instalación local.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Google Cloud se destaca principalmente por su integración con sistemas Windows y Microsoft 365.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Microsoft Azure ofrece un portal <em>web</em> para administrar recursos y servicios.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'AWS es conocida por su limitada oferta de servicios en la nube.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Oracle Cloud Infrastructure tiene un enfoque robusto en bases de datos y seguridad empresarial.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Todas las plataformas en la nube requieren necesariamente instalar software local para operar.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El almacenamiento en la nube permite acceder a archivos desde cualquier dispositivo con Internet.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La colaboración en línea no permite editar documentos simultáneamente entre varios usuarios.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Google Workspace y Microsoft 365 facilitan productividad sin instalar programas en la computadora.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La sincronización de archivos garantiza que se trabaje siempre con la versión más reciente.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Las tecnologías nativas de la nube no utilizan microservicios ni contenedores.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Kubernetes es un orquestador que ayuda a gestionar contenedores automáticamente.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La automatización en la nube reduce la intervención humana en tareas repetitivas y optimiza tiempos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Zapier, Make y Power Automate solo funcionan con aplicaciones de escritorio y no con servicios en línea.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'La seguridad en la nube incluye cifrado de datos, autenticación multifactor y <em>backups</em> automáticos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Cumplir con normas internacionales en la nube no es relevante para proteger datos sensibles.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'La inteligencia artificial integrada en la nube puede anticipar problemas y optimizar recursos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Las plataformas en la nube no ofrecen tutoriales ni laboratorios de práctica para usuarios.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre servicios, plataformas, aplicaciones y tendencias en la nube, demostrando comprensión de su funcionamiento, ventajas, herramientas y procesos clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
