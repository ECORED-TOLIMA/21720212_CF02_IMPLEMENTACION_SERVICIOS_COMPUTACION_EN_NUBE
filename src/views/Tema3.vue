<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Aplicaciones cotidianas de la nube
    
    .row.justify-content-center.mb-5
      .col-lg-8.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--C03.p-4
          .row
            .col-8.mb-3.d-none.d-lg-block
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/img02.svg', alt='Imagen decorativa')
            .col-12
              p.mb-0(data-aos="fade-down") La computación en la nube ha transformado la manera en que se realizan actividades diarias relacionadas con el almacenamiento de información, la colaboración entre personas y la productividad en entornos educativos y empresariales. Estos usos, cada vez más frecuentes, han convertido la nube en una herramienta indispensable tanto en el ámbito personal como en el profesional.
      .col-lg-4.col-md-7.col-10.mb-3.order-lg-1.order-1.mb-lg-0
        .row.justify-content-center
          .col
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Almacenamiento en la nube

    p(data-aos="fade-down") El almacenamiento en la nube es una de las aplicaciones más extendidas y utilizadas de la computación en la nube. Consiste en guardar archivos en servidores remotos administrados por proveedores especializados, en lugar de hacerlo únicamente en el disco duro de un computador o en la memoria de un dispositivo móvil. Esta modalidad permite que los datos estén disponibles desde cualquier lugar del mundo con conexión a Internet y se mantengan seguros gracias a sistemas de respaldo y cifrado.
    p.mb-5(data-aos="fade-down") El proceso de almacenamiento en la nube suele seguir pasos sencillos y accesibles para cualquier usuario:

    .tarjeta.tarjeta--BG05.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Registro en la plataforma
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 El primer paso consiste en crear una cuenta en un servicio de nube, como Google Drive, OneDrive, Dropbox o iCloud.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Generalmente basta con un correo electrónico para registrarse.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 La mayoría de los proveedores ofrecen planes gratuitos con cierta capacidad de almacenamiento inicial, que luego se pueden ampliar pagando una suscripción.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img03.svg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Acceso a la interfaz
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 El almacenamiento se gestiona desde un portal <em>web</em> accesible con un navegador, o bien desde una aplicación móvil o de escritorio.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Estas interfaces están diseñadas para que el usuario pueda subir, organizar y recuperar archivos sin necesidad de conocimientos técnicos.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img04.svg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Carga de archivos (upload)
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Los usuarios seleccionan los documentos, imágenes, videos u otros contenidos desde su dispositivo y los suben a la nube mediante la función de “Subir archivo” o “Cargar carpeta”.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 El sistema inicia una transferencia cifrada de los datos al servidor remoto, garantizando su seguridad durante el proceso.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img05.svg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Organización y gestión
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Una vez en la nube, los archivos pueden organizarse en carpetas y clasificarse según las necesidades del usuario.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Es posible renombrar, mover, duplicar o eliminar documentos de forma similar a como se hace en un explorador de archivos local.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Muchas plataformas ofrecen un buscador interno que facilita encontrar documentos rápidamente mediante palabras clave o filtros de fecha.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img06.svg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Acceso multiplataforma y sincronización
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Los cambios realizados en un archivo desde un dispositivo (por ejemplo, un celular) se sincronizan de manera automática en todos los dispositivos conectados a la misma cuenta.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Esto garantiza que siempre se trabaje con la versión más actualizada, evitando problemas de duplicidad o confusión entre versiones.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img07.svg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Descarga y recuperación
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Los archivos almacenados en la nube pueden descargarse en cualquier momento, ya sea de manera individual o masiva.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 En caso de borrado accidental, la mayoría de los proveedores mantiene una papelera de reciclaje que permite restaurar los documentos durante un tiempo determinado.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img08.svg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Escalabilidad del servicio
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Si el usuario requiere más espacio, puede adquirir planes de mayor capacidad sin necesidad de comprar <em>hardware</em> adicional.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Esta flexibilidad es una de las principales ventajas del modelo en la nube frente al almacenamiento físico tradicional.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img09.svg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Seguridad y respaldo
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Los proveedores implementan cifrado de extremo a extremo, autenticación en dos pasos y políticas de respaldo automático.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Esto protege la información frente a pérdidas accidentales, ataques cibernéticos o daños en el dispositivo del usuario.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img10.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.mb-3
        p.mb-5(data-aos="fade-down") Ejemplos cotidianos de almacenamiento en la nube incluyen:
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-11
              img(data-aos="fade-right")(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01
            .p-3
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Un aprendiz que guarda sus evidencias y presentaciones en Google Drive para acceder a ellas desde el aula, su casa o incluso un café Internet.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Un trabajador independiente que utiliza Dropbox para compartir diseños gráficos con sus clientes y recibir comentarios en tiempo real.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Una familia que almacena sus fotos y videos en iCloud, asegurando que los recuerdos estén disponibles para todos sus miembros en diferentes dispositivos.
    
    p.mb-0(data-aos="fade-down") En síntesis, el almacenamiento en la nube no solo ofrece un espacio virtual donde guardar información, sino que también brinda seguridad, sincronización automática, acceso universal y escalabilidad, transformando la manera en que se gestiona la información en la vida diaria.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Colaboración en línea

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.tarjeta.BG06.p-4
          .col-lg-3
            figure
              img(data-aos="fade-right")(src='@/assets/curso/temas/tema3/img12.svg' alt='AvatarTop')
          .col-lg-9
            p(data-aos="fade-down") Es una de las funciones más poderosas que ofrece la nube, ya que permite a varias personas trabajar de manera conjunta en un mismo archivo o proyecto sin importar la distancia geográfica. Gracias a esta característica, aprendices, instructores y profesionales pueden compartir información, editar documentos en tiempo real y comunicarse de forma más efectiva.
            p.mb-0(data-aos="fade-down") El proceso de colaboración en la nube se da en varias etapas clave:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-9.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
          p(data-aos="fade-down") 
          LineaTiempoD.color-acento-botones.especial
            .row(numero="A" titulo="Creación o carga de un documento")
              .col-12.mb-4.mb-md-0
                p.mb-0 El usuario inicia un documento en una plataforma como Google Docs, Microsoft Word Online o Dropbox Paper, o bien sube un archivo desde su dispositivo.
            .row(numero="B" titulo="Configuración de permisos del propietario del archivo")
              .col-12.mb-4.mb-md-0
                ul.lista-ul
                  li
                    ul
                      li 
                        i.lista-ul__vineta
                        | Solo lectura: los invitados pueden ver el documento, pero no modificarlo.
                      li 
                        i.lista-ul__vineta
                        | Comentario: los usuarios pueden añadir observaciones sin alterar el contenido principal.
                      li 
                        i.lista-ul__vineta
                        | Edición: todos los participantes pueden modificar el archivo en tiempo real.
            .row(numero="C" titulo="Compartir con otros usuarios")
              .col-12.mb-4.mb-md-0
                ul.lista-ul
                  li
                    ul
                      li 
                        i.lista-ul__vineta
                        | Se genera un enlace de acceso o se añaden correos electrónicos específicos de las personas con quienes se desea colaborar.
                      li 
                        i.lista-ul__vineta
                        | El sistema envía notificaciones por correo o dentro de la propia plataforma para facilitar la conexión inmediata.
            .row(numero="D" titulo="Edición en tiempo real")
              .col-12.mb-4.mb-md-0
                ul.lista-ul
                  li
                    ul
                      li 
                        i.lista-ul__vineta
                        | Cada usuario puede escribir, modificar o insertar elementos en el documento, y los cambios aparecen de inmediato para todos los participantes.
                      li 
                        i.lista-ul__vineta
                        | Muchas plataformas muestran colores o identificadores para señalar quién está realizando cada aporte.
            .row(numero="E" titulo="Historial de cambios y control de versiones")
              .col-12.mb-4.mb-md-0
                ul.lista-ul
                  li
                    ul
                      li 
                        i.lista-ul__vineta
                        | Las herramientas de colaboración guardan automáticamente cada modificación.
                      li 
                        i.lista-ul__vineta
                        | El propietario o los colaboradores pueden consultar versiones anteriores y restaurarlas en caso de errores o confusiones.
            .row(numero="F" titulo="Comunicación integrada")
              .col-12.mb-4.mb-md-0
                ul.lista-ul
                  li
                    ul
                      li 
                        i.lista-ul__vineta
                        | Además de la edición, las plataformas suelen integrar chats, comentarios y notificaciones, lo que permite resolver dudas sin necesidad de salir del entorno de trabajo.
                      li 
                        i.lista-ul__vineta
                        | Esto fomenta una comunicación clara y eficiente entre los miembros del equipo.
            .row(numero="G" titulo="Acceso multiplataforma")
              .col-12.mb-4.mb-md-0
                p.mb-0 Los archivos pueden abrirse y modificarse desde diferentes dispositivos, como computadoras, tablets o celulares, lo que facilita la colaboración en cualquier momento y lugar.
        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.mb-3
        p.mb-5(data-aos="fade-down") Algunos ejemplos cotidianos de colaboración en línea incluyen:
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-11
              img(data-aos="fade-right")(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01
            .p-3
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Aprendices que trabajan juntos en una presentación en Google Slides, editando y comentando en tiempo real desde sus casas.
                    li 
                      i.lista-ul__vineta
                      | Instructores que comparten un plan de clase en OneDrive con permisos de edición para que otros instructores lo adapten.
                    li 
                      i.lista-ul__vineta
                      | Equipos de trabajo que gestionan proyectos en Trello o Asana, asignando tareas y plazos visibles para todos los miembros.
                    li 
                      i.lista-ul__vineta
                      | Investigadores que elaboran un artículo científico en Microsoft Word Online, manteniendo un historial claro de contribuciones de cada autor.
    
    p.mb-0(data-aos="fade-down") En resumen, la colaboración en línea permite superar las barreras de tiempo y espacio, promoviendo el trabajo en equipo, la productividad y el aprendizaje compartido. Gracias a la nube, los procesos colaborativos se vuelven más rápidos, organizados y accesibles para cualquier persona con conexión a Internet.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Productividad en entornos educativos y empresariales

    .row.justify-content-center.mb-5
      .col-lg-9.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") El uso de la nube ha transformado significativamente la forma en que aprendices y empresas organizan, comparten y gestionan su trabajo diario. La productividad en estos entornos se potencia gracias a la disponibilidad de herramientas colaborativas, la integración de servicios y la accesibilidad remota.
        .tarjeta.tarjeta--C02.p-4
          p.py-2.mb-0(data-aos="fade-down") En primer lugar, los entornos educativos utilizan plataformas en la nube para optimizar procesos de enseñanza y aprendizaje. A través de suites ofimáticas en línea, como Google Workspace for Education o Microsoft 365, los aprendices pueden redactar documentos, crear hojas de cálculo, preparar presentaciones y compartirlas en tiempo real. Este proceso favorece la colaboración simultánea, ya que varios usuarios pueden editar un mismo archivo sin necesidad de estar físicamente en un mismo lugar. Además, los sistemas de almacenamiento en la nube permiten a los instructores organizar materiales, diseñar evaluaciones y proporcionar retroalimentación directa a los aprendices.
      .col-lg-3.col-md-7.col-10.mb-3.order-lg-1.order-1.mb-lg-0
        .row.justify-content-center
          .col
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5
      .col-lg-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img08.svg', alt='Imagen decorativa')
      .col-lg-8.col-12
        p.mb-0(data-aos="fade-down") En segundo lugar, en los entornos empresariales la productividad se refleja en la capacidad de coordinar equipos distribuidos geográficamente. El uso de calendarios compartidos, sistemas de gestión de proyectos y herramientas de videoconferencia integradas en la nube facilita la planificación de tareas y el seguimiento de metas. Las empresas también aprovechan la nube para automatizar procesos internos, como el control de inventarios, la gestión de clientes (CRM) o la administración de recursos humanos, lo que ahorra tiempo y reduce costos operativos.
      .col-lg-3.col-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-down") El proceso general para aprovechar estas herramientas sigue una ruta común:

    .row.justify-content-center.tarjeta.tarjeta--BG06.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img16.svg' alt='AvatarTop')
          p Acceso a la plataforma mediante un portal <em>web</em> o aplicación móvil.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img17.svg' alt='AvatarTop')
          p Creación de proyectos o espacios de trabajo compartidos, donde los usuarios son invitados con diferentes niveles de permisos.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img18.svg' alt='AvatarTop')
          p Carga o generación de archivos y documentos que pueden ser editados de forma simultánea.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img19.svg' alt='AvatarTop')
          p Comunicación integrada, a través de chats, videollamadas o comentarios en tiempo real.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img20.svg' alt='AvatarTop')
          p Monitoreo y control de avances, mediante paneles que muestran el estado de las actividades o tareas asignadas.
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-5(data-aos="fade-down") Finalmente, tanto en la educación como en las organizaciones, el uso de la nube fortalece la continuidad del trabajo y la flexibilidad. Los usuarios pueden acceder a sus archivos desde cualquier dispositivo conectado a internet, lo que garantiza la movilidad y la adaptabilidad frente a cambios en los entornos académicos o laborales.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
