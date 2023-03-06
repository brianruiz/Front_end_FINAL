export type DataProps ={
    id:string;
    destino:string;
    descripcion_corta:string;
    descripcion_larga:string;
    imagen_corta:string;
    imagen_larga:string;
}

export const destinos : DataProps[] = [
    {
        id: "1",
        destino: "Madrid",
        descripcion_corta: "Madrid, ciudad de España, la capital del estado y de la Comunidad de Madrid. Una de las grandes capitales europeas con gran riqueza y cultura, de las ciudades mas bonitas de la peninsula.",
        descripcion_larga: "Madrid es un municipio y ciudad de España, es la capital del estado y la Comunidad de Madrid. Una de las grandes capitales europeas,cuenta con una gran cantidad de monumentos historicos liderados por una de las maravillas del mundo el estadio Santiago Bernabeu campo del equipo de futbol mas importante de la historia el Real Madrid Madrid. Es una ciudad cosmopolita, fiel a sus costumbres, cultura y arte, pero al mismo tiempo moderna, hogar de uno de los principales centros culturales, económicos y políticos de Europa. Su oferta cultural y de ocio abarca desde la entrada gratuita a museos hasta los ambientes VIP más exclusivos.",
        imagen_corta:"https://images.deepai.org/art-image/7ffee763d0bf4625bdc897ccc8719819/madrid-7cafed.jpg",
        imagen_larga:"https://cdn.discordapp.com/attachments/990816806581198869/1081353879855308840/El_brayan_Madrid_c1572d56-5aab-44cf-bdf7-dadac86ac150.png"  
    },
    {   
        id: "2",
        destino: "Atlantida",
        descripcion_corta: "La legendaria isla perdida, situada en medio del oceano atlántico, mencionada y descrita en los diálogos Timeo y Critias, textos del filósofo griego Platón.",
        descripcion_larga: "Atlantis fue una ciudad legendaria descrita por el filósofo griego Platón (c. 429-347 aC). Atlantis, una civilización sumamente rica y avanzada, fue tragada por el mar y perdida para siempre en una historia que siempre cautivará la imaginación. Sin evidencia arqueológica o cualquier información sustantiva de fuentes distintas a Platón, esta leyenda plantea más preguntas de las que responde. La isla de la Atlántida se mencionó por primera vez en los diálogos de Timeo y Critias, un texto del filósofo griego Platón, que la describía como una potencia militar que existió nueve mil años antes que el propio Platón, y que era al parecer más grande que Libia y Asia juntas.",
        imagen_corta:"https://images.nightcafe.studio/jobs/pmNbTwXNR9XYFZfnuhPQ/pmNbTwXNR9XYFZfnuhPQ--2--hf1c1_2x.jpg?tr=w-1080,c-at_max",
        imagen_larga:"https://cdn.discordapp.com/attachments/990816806581198869/1081329677840433192/El_brayan_Atlantis_ce1f0ce4-5815-48b4-81ed-4981bd2ef69e.png"
    },
    {
        id: "3",
        destino: "Dubrovnik",
        descripcion_corta: "Ciudad costera localizada en Croacia, posee un recinto rodeado de murallas y fortificaciones, en este lugar estuvo situado el trono oficial  de la serie Juego de tronos durante 5 temporadas",
        descripcion_larga: "Dubrovnik es una ciudad costera en la región de Dalmacia de la República de Croacia, cerca de la frontera con Bosnia y Herzegovina. Es uno de los centros turísticos más importantes del mar Adriático. Se le ha llamado la Perla del Adriático, la Atenas de Dalmacia, porque sus antiguos habitantes la consideraban única, donde florecieron grandes representantes de las humanidades, las artes y las ciencias. La capital del condado de Dubrovnik-Neretva, es una ciudad rodeada de murallas y fortificaciones al pie del monte San Sergio, que cae abruptamente sobre las aguas del mar Adriático. En 1979, la Ciudad Vieja (murallas) fue declarada Patrimonio de la Humanidad por la UNESCO; la declaración se amplió en 1994.",
        imagen_corta:"https://img.freepik.com/foto-gratis/hermoso-paisaje-juego-tronos-dubrovnik-croacia-dia_181624-43476.jpg?w=1380&t=st=1678142574~exp=1678143174~hmac=d13c5e3db8462554ad121fd8cf888ac5a296ba8712e1eb869ddb848e38b903cc",
        imagen_larga:"https://images.deepai.org/art-image/93e5ef2b466e4a47bfc66018e6847475/dubrovnik-under-the-sea.jpg"
    },
    {
        id: "4",
        destino: "Hogwarts",
        descripcion_corta: "La escuela de magia y hechiceria mas famosa de los ultimos años y a la vez la mas peligrosa, este lugar te deparara misterios sin igual ",
        descripcion_larga: "El Colegio Hogwarts de Magia y Hechicería es un colegio de magia perteneciente al legendario mundo de Harry Potter. Hogwarts es una escuela donde asisten jóvenes magos para desarrollar sus habilidades mágicas. Se puede decir que Hogwarts pertenece al estilo gótico pues diversos elementos característicos de este estilo como la bóveda de cañón y el arco apuntado están presentes en los diversos espacios que componen al colegio de magia y hechicería. Durante más de mil años, los alumnos fueron distribuidos a su llegada, en las diferentes casas, mediante el veredicto del Sombrero Seleccionador, con los apellidos de los cuatro fundadores de la escuela: Gryffindor, donde van los valientes de corazón; Hufflepuff, donde asisten los estudiantes trabajadores, honestos, amantes de los animales y la naturaleza; Ravenclaw, a donde pertenecen los inteligentes y sabios; y Slytherin, donde son audaces y ambiciosos. ",
        imagen_corta:"https://images.deepai.org/art-image/29cf9a412f0f4be09c98045ab1ec9d9a/hogwarts-8386d4.jpg",
        imagen_larga:"https://cdn.discordapp.com/attachments/990816806581198869/1081328256369827971/El_brayan_hogwarts_cdba7223-20f6-4510-995d-e6797bc873dc.png"

    },
    {
        id: "5",
        destino: "Mustafar",
        descripcion_corta: "Mustafar el planeta donde se definio el destino de la galaxia en la batalla maestro contra aprendiz. ",
        descripcion_larga: "Mustafar era un pequeño planeta volcánico ubicado en el sistema Mustafar, situado entre dos gigantes gaseosos en los Territorios del Borde Exterior que se alió con la Confederación de Sistemas Independientes durante las Guerras Clon y más tarde fue tomado por el Imperio Galáctico. Durante la Era Imperial, Mustafar se convirtió en un mundo Imperial fortificado ya que albergaba la Fortaleza Vader, el santuario personal del Lord Sith Darth Vader.En mustafar fue el duelo donde Anakin Skywalker, ahora el recientemente aprendiz Sith Lord, Darth Vader, luchó contra su antiguo Maestro Jedi y mejor amigo, Obi-Wan Kenobi, por ello posteriormente el Lord Sith forjaria su templo sobre el rencor y el odio en este mismo planeta.",
        imagen_corta:"https://cdn.discordapp.com/attachments/990816806581198869/1081323636234911785/El_brayan_planeta_mustafar_star_wars_4a9d0697-da24-4175-ab70-d436dd841f3e.png",
        imagen_larga:"https://images.nightcafe.studio/jobs/zzoBThMTZJvwU8eCYapP/zzoBThMTZJvwU8eCYapP.jpg?tr=w-1600,c-at_max"
    }, {
        id: "6",    
        destino: "Gotham",
        descripcion_corta: "La ciudad de la noche, un escenario donde priman las guerras de bandas, los atracos, asesinatos y secuestros donde los villanos carecen de poderes especiales, aunque aúnan mentes privilegiadas con serios trastornarnos mentales.",
        descripcion_larga: " Es una ciudad que se encuentra bajo la protección de Batman y sus aliados de los criminales mentalmente insanos, las pandillas y de las multitudes violentas que pueblan sus calles. Generalmente, en el Universo DC se le atribuye a Gotham City características negativas, como ciudad maldita, noche, oscuridad, corrupción y un muy profundamente asentado sentido de la decadencia. Esto en contraposición a Metrópolis (ciudad de Superman) como la ciudad de la luz, el día, la esperanza y el mañana. Los lugares utilizados como inspiración o lugares de filmación de Gotham City en las películas y series de televisión de acción en vivo de Batman incluyen Nueva York, Nueva Jersey, Chicago, Vancouver, Detroit, Pittsburgh, Los Ángeles, Londres, Toronto y Hong Kong.",
        imagen_corta:"https://images.nightcafe.studio/jobs/XEC3rhftnobcTUn5xzSO/XEC3rhftnobcTUn5xzSO--1--oi2y8.jpg?tr=w-1600,c-at_max",
        imagen_larga:"https://media.discordapp.net/attachments/990816806581198869/1081327125010862090/El_brayan_gotham_city_df261b33-bf51-4d1d-91c2-f01cd36ec242.png?width=497&height=497"
    },
]
export default destinos;