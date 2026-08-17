export type Language = "ES" | "EN";

export const translations = {
  ES: {
    checkout: {
      steps: {
        info: "Información Personal",
        payment: "Pago",
        success: "¡Completado!"
      },
      info: {
        title: "Información del Asistente",
        firstName: "Nombre",
        lastName: "Apellidos",
        email: "Correo Electrónico",
        docType: "Tipo de Documento",
        docTypeDNI: "DNI",
        docTypeCE: "Carné de Extranjería",
        docTypePasaporte: "Pasaporte",
        docNumber: "Número de Documento",
        tshirtSize: "Talla de Camiseta",
        dietary: "Restricciones Alimenticias (Opcional)",
        next: "Continuar al Pago"
      },
      payment: {
        title: "Detalles de Pago",
        cardName: "Nombre en la tarjeta",
        cardNumber: "Número de tarjeta",
        expiry: "MM/AA",
        cvv: "CVV",
        pay: "Pagar Entrada",
        back: "Volver",
        error: "Los datos de la tarjeta no son válidos. Por favor, intenta de nuevo."
      },
      summary: {
        title: "Resumen de Compra",
        ticketName: "Entrada General - Ng Conf Perú 2026",
        price: "S/ 150.00",
        total: "Total:"
      },
      success: {
        title: "¡Compra Exitosa!",
        desc: "Tu entrada ha sido confirmada. Te hemos enviado un correo con los detalles.",
        homeBtn: "Volver al Inicio"
      }
    },
    nav: {
      speakers: "Speakers",
      venue: "Venue",
      agenda: "Agenda",
      conduct: "Código de Conducta",
      faq: "FAQ",
      sponsorBtn: "Quiero ser patrocinador",
      ticketsBtn: "Comprar entradas",
    },
    hero: {
      date: "9 Y 10 DE OCTUBRE DE 2026 | LIMA - PERÚ",
      titleLine1: "Ng Conf Perú",
      titleLine2: "2026",
      desc: "¡Únete a nosotros para una experiencia única en una conferencia sobre Angular en Perú! Descubre lo último en desarrollo de Angular y conecta con expertos y otros desarrolladores.",
      buyTickets: "Comprar entradas",
      submitTalk: "Postular tu charla",
    },
    about: {
      titleLine1: "¿Qué es el",
      titleLine2: "Ng Conf",
      titleLine3: "Perú?",
      p1: "La Ng Conf Perú es la conferencia de tecnología más importante en el Perú dedicada exclusivamente al ecosistema de Angular.",
      p2: "Es un evento que busca reunir a la comunidad de desarrolladores de software, desde principiantes hasta expertos, para compartir las últimas tendencias y mejores prácticas del framework de Google.",
    },
    stats: {
      titleLine1: "Sé parte del ecosistema de",
      titleLine2: "Angular en Perú",
      attendees: "asistentes",
      speakers: "speakers",
      workshops: "workshops",
    },
    tickets: {
      titleLine1: "Consigue tu entrada",
      titleLine2: "ahora mismo",
      desc: "Asegura tu lugar en la tercera edición de la Ng Conf Perú 2026 y disfruta de lo que estamos preparando para ti.",
      btn: "Comprar entrada",
    },
    gallery: {
      title: "Revive los mejores momentos",
      desc: "Nuestra conferencia ha sido un viaje de momentos y conexiones inolvidables.",
      viewGallery: "VER GALERÍA",
    },
    speakers: {
      title: "Nuestros Speakers",
      subtitleLine1: "Muy pronto vamos a revelar a nuestros primeros speakers",
      subtitleLine2: "que estarán en esta edición.",
      submitTalk: "Postula tu charla",
      roleGDE: "Google Developer Expert",
      roleAngular: "Angular",
    },
    sponsorSection: {
      title: "Únete como Sponsor de la Ng Conf Perú 2026",
      p1: "El éxito de la Ng Conf Perú depende en gran medida del generoso apoyo de nuestros valiosos patrocinadores.",
      p2: "Colabora con nosotros para presentar tu marca de una forma nueva e innovadora. Aprovecha la oportunidad de mostrar tus productos y servicios e interactuar con apasionados desarrolladores.",
      p3: "¡Juntos podemos crear una experiencia excepcional para la comunidad de desarrollo de Angular!",
      btn: "Quiero ser patrocinador",
    },
    team: {
      title: "Nuestros Team",
    },
    venue: {
      titleLine1: "Lima será la capital de la Ng",
      titleLine2: "Conf Perú 2026",
      descLine1: "La conferencia se celebrará Lima, y estamos definiendo el lugar ideal",
      descLine2: "para esta experiencia.",
      descHighlight: "¡Muy pronto lo anunciaremos!",
      utecTitle: "Universidad de Ingeniería y Tecnología - UTEC",
      utecAddress: "Jr. Medrano Silva 165, Barranco 15063",
      mapsBtn: "Ver en Google Maps",
    },
    sponsorsGrid: {
      title: "Sponsors",
      gold: "Gold",
      venue: "Venue",
      support: "Support",
      btn: "Quiero ser patrocinador",
    },
    cta: {
      titleLine1: "Conecta con la comunidad de",
      titleLine2: "Angular en un evento que no",
      titleLine3: "puedes perderte",
      waitlistBtn: "Únete a la lista de espera",
      sponsorBtn: "Quiero ser patrocinador",
    },
    footer: {
      organizedBy: "Organizado por:",
      aboutCommunity: "Sobre Angular Perú",
      codeOfConduct: "Código de conducta",
      contact: "Contáctanos",
      followUs: "Síguenos en",
      rights: "© 2026 Ng Conf Perú. Todos los derechos reservados.",
    },
    faqPage: {
      badge: "Centro de Ayuda",
      title: "Preguntas Frecuentes",
      subtitle: "Encuentra respuestas a las dudas más comunes sobre la Ng Conf Perú 2026.",
      categories: {
        all: "Todas",
        general: "General",
        tickets: "Entradas",
        venue: "Sede y Acceso",
        speakers: "Ponencias y Workshops",
      },
      items: [
        {
          q: "¿Cuándo y dónde se llevará a cabo la Ng Conf Perú 2026?",
          a: "La conferencia se llevará a cabo los 9 y 10 de octubre de 2026 de forma presencial en el Auditorio de la Universidad de Ingeniería y Tecnología (UTEC), ubicado en Jr. Medrano Silva 165, Barranco, Lima - Perú.",
          category: "general",
        },
        {
          q: "¿Qué incluye mi entrada a la conferencia?",
          a: "Tu entrada incluye acceso a todas las conferencias magistrales, coffee breaks, almuerzo tipo buffet, kit oficial de bienvenida (Swag Bag exclusivo de Ng Conf 2026), acceso a la zona de networking con sponsors y certificado digital de participación.",
          category: "tickets",
        },
        {
          q: "¿Habrá workshops prácticos además de las charlas?",
          a: "¡Sí! Contaremos con 3 workshops prácticos especializados impartidos por Google Developer Experts (GDEs) y referentes de la industria el día previo y durante la jornada del evento.",
          category: "speakers",
        },
        {
          q: "¿Cómo puedo postular mi charla para ser Speaker?",
          a: "El Call for Papers (CFP) se encuentra abierto. Puedes enviar tu propuesta a través de nuestro botón 'Postula tu charla' o escribiendo directamente a angularcommunityperu@gmail.com.",
          category: "speakers",
        },
        {
          q: "¿Puedo transferir o solicitar reembolso de mi entrada?",
          a: "Las entradas son transferibles hasta 7 días antes del evento notificando los datos del nuevo titular a angularcommunityperu@gmail.com. Los reembolsos aplican según nuestras políticas de cancelación.",
          category: "tickets",
        },
        {
          q: "¿El evento se transmitirá de forma online?",
          a: "El evento principal es presencial para maximizar el networking y la experiencia interactiva, pero grabaciones de ponencias seleccionadas se publicarán posteriormente en el canal de la comunidad.",
          category: "general",
        },
      ],
      needMoreHelp: "¿Tienes alguna otra consulta?",
      contactUs: "Escríbenos a angularcommunityperu@gmail.com",
    },
    conductPage: {
      badge: "Comunidad y Valores",
      title: "Código de Conducta",
      subtitle: "Nuestro compromiso es ofrecer un entorno seguro, inclusivo, respetuoso y libre de acoso para todos los participantes.",
      intro: "La Ng Conf Perú y la comunidad de Angular en Perú se dedican a brindar una experiencia de conferencia libre de acoso para todas las personas, independientemente de su género, identidad u orientación sexual, discapacidad, apariencia física, origen étnico, edad o religión.",
      sections: [
        {
          title: "1. Comportamiento Esperado",
          points: [
            "Ser empático, respetuoso y considerado en todas las interacciones verbales y digitales.",
            "Utilizar un lenguaje inclusivo y acoger diferentes perspectivas y niveles de experiencia técnica.",
            "Respetar el espacio personal y la privacidad de los demás asistentes y ponentes.",
            "Cuidar las instalaciones y el entorno del evento.",
          ],
        },
        {
          title: "2. Comportamiento Inaceptable",
          points: [
            "Cualquier forma de acoso, discriminación, insultos personales o comentarios despectivos.",
            "Imágenes o lenguaje sexualizado no consensuado en ponencias o espacios de la conferencia.",
            "Interrupción sostenida de presentaciones, workshops u otras actividades.",
            "Contacto físico inapropiado o atención no deseada.",
          ],
        },
        {
          title: "3. Procedimiento de Reporte",
          points: [
            "Si sufres o presencias alguna conducta inaceptable, contacta de inmediato al equipo organizador identificado con credenciales del Staff.",
            "También puedes enviar un correo confidencial a angularcommunityperu@gmail.com o llamar a la línea directa de atención que se indicará el día del evento.",
            "Todos los reportes serán tratados con absoluta confidencialidad y rapidez.",
          ],
        },
        {
          title: "4. Consecuencias y Sanciones",
          points: [
            "Cualquier persona a quien se le solicite detener una conducta inaceptable debe cumplir de inmediato.",
            "Los organizadores se reservan el derecho de expulsar a infractores de la conferencia sin derecho a reembolso y vetar su participación en futuras ediciones.",
          ],
        },
      ],
      closing: "Agradecemos tu cooperación para hacer de la Ng Conf Perú un espacio enriquecedor e inolvidable para toda la comunidad.",
    },
    agendaPage: {
      badge: "Cronograma Oficial",
      title: "Agenda de la Conferencia",
      subtitle: "Un día completo de ponencias de alto impacto, workshops intensivos y networking con líderes de Angular.",
      tracks: {
        main: "Track Principal (Auditorio)",
        workshops: "Workshops & Labs",
      },
      schedule: [
        { time: "08:30 - 09:30", title: "Acreditación, Bienvenida y Coffee de Apertura", type: "General" },
        { time: "09:30 - 10:00", title: "Keynote de Apertura: El Futuro de Angular en 2026", speaker: "Google Angular Team", type: "Keynote" },
        { time: "10:05 - 10:45", title: "Signals Avanzados y Arquitecturas Reactivas en Producción", speaker: "Sofía Martínez (GDE)", type: "Charla" },
        { time: "10:50 - 11:30", title: "Microfrontends con Angular y Vite a Gran Escala", speaker: "Tech Lead Invitado", type: "Charla" },
        { time: "11:30 - 12:00", title: "Coffee Break & Sesión de Networking con Sponsors", type: "Break" },
        { time: "12:00 - 12:45", title: "Optimizando Core Web Vitals y Rendimiento Extremo", speaker: "GDE Web Performance", type: "Charla" },
        { time: "12:50 - 13:30", title: "Server-Driven UI e Hidratación Parcial con Angular SSR", speaker: "Senior Software Architect", type: "Charla" },
        { time: "13:30 - 15:00", title: "Almuerzo Buffet & Zona de Swag", type: "Break" },
        { time: "15:00 - 16:30", title: "Workshop en Vivo: Migración a Angular Standalone y Control Flow", speaker: "Workshop Lead", type: "Workshop" },
        { time: "16:35 - 17:15", title: "Seguridad y Patrones de Autenticación Modernos", speaker: "Security Specialist", type: "Charla" },
        { time: "17:20 - 18:00", title: "Panel de Expertos: Retos del Desarrollo Frontend en Latam", speaker: "Speakers & Comunidad", type: "Panel" },
        { time: "18:00 - 18:30", title: "Sorteos, Premios de Sponsors y Cierre Oficial", type: "Cierre" },
        { time: "18:30 - 20:00", title: "After Party & Networking Cocktail", type: "After" },
      ],
    },
  },
  EN: {
    checkout: {
      steps: {
        info: "Personal Info",
        payment: "Payment",
        success: "Complete!"
      },
      info: {
        title: "Attendee Information",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        docType: "Document Type",
        docTypeDNI: "ID Card",
        docTypeCE: "Foreigner ID",
        docTypePasaporte: "Passport",
        docNumber: "Document Number",
        tshirtSize: "T-Shirt Size",
        dietary: "Dietary Restrictions (Optional)",
        next: "Continue to Payment"
      },
      payment: {
        title: "Payment Details",
        cardName: "Name on card",
        cardNumber: "Card number",
        expiry: "MM/YY",
        cvv: "CVV",
        pay: "Pay Ticket",
        back: "Back",
        error: "Invalid card details. Please try again."
      },
      summary: {
        title: "Order Summary",
        ticketName: "General Ticket - Ng Conf Peru 2026",
        price: "S/ 150.00",
        total: "Total:"
      },
      success: {
        title: "Purchase Successful!",
        desc: "Your ticket has been confirmed. We have sent you an email with the details.",
        homeBtn: "Back to Home"
      }
    },
    nav: {
      speakers: "Speakers",
      venue: "Venue",
      agenda: "Agenda",
      conduct: "Code of Conduct",
      faq: "FAQ",
      sponsorBtn: "Become a Sponsor",
      ticketsBtn: "Buy Tickets",
    },
    hero: {
      date: "OCTOBER 9 - 10, 2026 | LIMA - PERU",
      titleLine1: "Ng Conf Perú",
      titleLine2: "2026",
      desc: "Join us for a unique Angular conference experience in Peru! Discover the latest in Angular development and connect with experts and fellow developers.",
      buyTickets: "Buy Tickets",
      submitTalk: "Submit a Talk",
    },
    about: {
      titleLine1: "What is",
      titleLine2: "Ng Conf",
      titleLine3: "Peru?",
      p1: "Ng Conf Peru is the most important technology conference in Peru dedicated exclusively to the Angular ecosystem.",
      p2: "It is an event that seeks to bring together the software developer community, from beginners to experts, to share the latest trends and best practices of Google's framework.",
    },
    stats: {
      titleLine1: "Be part of the",
      titleLine2: "Angular ecosystem in Peru",
      attendees: "attendees",
      speakers: "speakers",
      workshops: "workshops",
    },
    tickets: {
      titleLine1: "Get your ticket",
      titleLine2: "right now",
      desc: "Secure your place in the third edition of Ng Conf Peru 2026 and enjoy what we are preparing for you.",
      btn: "Buy ticket",
    },
    gallery: {
      title: "Relive the best moments",
      desc: "Our conference has been a journey of unforgettable moments and connections.",
      viewGallery: "VIEW GALLERY",
    },
    speakers: {
      title: "Our Speakers",
      subtitleLine1: "Very soon we will reveal our first speakers",
      subtitleLine2: "who will be in this edition.",
      submitTalk: "Submit a Talk",
      roleGDE: "Google Developer Expert",
      roleAngular: "Angular",
    },
    sponsorSection: {
      title: "Join as a Sponsor of Ng Conf Peru 2026",
      p1: "The success of Ng Conf Peru depends largely on the generous support of our valued sponsors.",
      p2: "Collaborate with us to showcase your brand in a new and innovative way. Take the opportunity to show your products and services and interact with passionate developers.",
      p3: "Together we can create an exceptional experience for the Angular developer community!",
      btn: "Become a sponsor",
    },
    team: {
      title: "Our Team",
    },
    venue: {
      titleLine1: "Lima will be the capital of",
      titleLine2: "Ng Conf Peru 2026",
      descLine1: "The conference will be held in Lima, and we are defining the ideal venue",
      descLine2: "for this experience.",
      descHighlight: "We will announce it very soon!",
      utecTitle: "University of Engineering and Technology - UTEC",
      utecAddress: "Jr. Medrano Silva 165, Barranco 15063",
      mapsBtn: "Open in Google Maps",
    },
    sponsorsGrid: {
      title: "Sponsors",
      gold: "Gold",
      venue: "Venue",
      support: "Support",
      btn: "Become a sponsor",
    },
    cta: {
      titleLine1: "Connect with the",
      titleLine2: "Angular community in an event",
      titleLine3: "you can't miss",
      waitlistBtn: "Join the waitlist",
      sponsorBtn: "Become a sponsor",
    },
    footer: {
      organizedBy: "Organized by:",
      aboutCommunity: "About Angular Peru",
      codeOfConduct: "Code of conduct",
      contact: "Contact us",
      followUs: "Follow us on",
      rights: "© 2026 Ng Conf Peru. All rights reserved.",
    },
    faqPage: {
      badge: "Help Center",
      title: "Frequently Asked Questions",
      subtitle: "Find answers to the most common questions about Ng Conf Peru 2026.",
      categories: {
        all: "All",
        general: "General",
        tickets: "Tickets",
        venue: "Venue & Access",
        speakers: "Talks & Workshops",
      },
      items: [
        {
          q: "When and where will Ng Conf Peru 2026 take place?",
          a: "The conference will take place in-person on Saturday, September 12, 2026 at the Auditorium of the University of Engineering and Technology (UTEC), located at Jr. Medrano Silva 165, Barranco, Lima - Peru.",
          category: "general",
        },
        {
          q: "What is included with my ticket?",
          a: "Your ticket includes full access to all keynote sessions, coffee breaks, buffet lunch, official welcome swag bag (exclusive Ng Conf 2026 kit), sponsor networking area access, and a digital certificate of participation.",
          category: "tickets",
        },
        {
          q: "Will there be hands-on workshops in addition to talks?",
          a: "Yes! We will feature 3 specialized hands-on workshops led by Google Developer Experts (GDEs) and industry leaders during the event and prior days.",
          category: "speakers",
        },
        {
          q: "How can I apply as a Speaker?",
          a: "Our Call for Papers (CFP) is open. You can submit your proposal via the 'Submit a Talk' button or by emailing directly to angularcommunityperu@gmail.com.",
          category: "speakers",
        },
        {
          q: "Can I transfer or request a refund for my ticket?",
          a: "Tickets are transferable up to 7 days before the event by notifying angularcommunityperu@gmail.com with the new attendee details. Refunds follow our cancellation policy.",
          category: "tickets",
        },
        {
          q: "Will the event be live-streamed online?",
          a: "The main event is in-person to maximize networking and interaction, but selected session recordings will be published later on our community channel.",
          category: "general",
        },
      ],
      needMoreHelp: "Have another question?",
      contactUs: "Email us at angularcommunityperu@gmail.com",
    },
    conductPage: {
      badge: "Community & Values",
      title: "Code of Conduct",
      subtitle: "Our commitment is to provide a safe, inclusive, welcoming, and harassment-free environment for all participants.",
      intro: "Ng Conf Peru and the Angular Peru community are dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, ethnicity, age, or religion.",
      sections: [
        {
          title: "1. Expected Behavior",
          points: [
            "Be empathetic, respectful, and considerate in all spoken and online interactions.",
            "Use welcoming and inclusive language, respecting diverse technical backgrounds.",
            "Respect physical boundaries and personal space of attendees and speakers.",
            "Take care of the venue and equipment.",
          ],
        },
        {
          title: "2. Unacceptable Behavior",
          points: [
            "Any form of harassment, discrimination, personal insults, or derogatory remarks.",
            "Non-consensual sexualized imagery or language in presentations or conference spaces.",
            "Sustained disruption of talks, workshops, or other event activities.",
            "Inappropriate physical contact or unwelcome attention.",
          ],
        },
        {
          title: "3. Reporting Procedures",
          points: [
            "If you experience or witness unacceptable behavior, immediately contact event staff wearing official Staff credentials.",
            "You can also submit a confidential report to angularcommunityperu@gmail.com or call the direct helpline provided on the event day.",
            "All reports will be handled with strict confidentiality and urgency.",
          ],
        },
        {
          title: "4. Enforcement & Sanctions",
          points: [
            "Participants asked to stop any harassing behavior are expected to comply immediately.",
            "Organizers reserve the right to expel offenders without refund and ban them from future editions.",
          ],
        },
      ],
      closing: "Thank you for helping us make Ng Conf Peru a welcoming and enriching space for the entire community.",
    },
    agendaPage: {
      badge: "Official Schedule",
      title: "Conference Schedule",
      subtitle: "A full day of high-impact talks, intensive workshops, and networking with Angular leaders.",
      tracks: {
        main: "Main Track (Auditorium)",
        workshops: "Workshops & Labs",
      },
      schedule: [
        { time: "08:30 - 09:30", title: "Registration, Welcome & Opening Coffee", type: "General" },
        { time: "09:30 - 10:00", title: "Opening Keynote: The Future of Angular in 2026", speaker: "Google Angular Team", type: "Keynote" },
        { time: "10:05 - 10:45", title: "Advanced Signals & Reactive Architectures in Production", speaker: "Sofía Martínez (GDE)", type: "Talk" },
        { time: "10:50 - 11:30", title: "Microfrontends with Angular and Vite at Scale", speaker: "Guest Tech Lead", type: "Talk" },
        { time: "11:30 - 12:00", title: "Coffee Break & Sponsor Networking", type: "Break" },
        { time: "12:00 - 12:45", title: "Optimizing Core Web Vitals & Extreme Web Performance", speaker: "Web Performance GDE", type: "Talk" },
        { time: "12:50 - 13:30", title: "Server-Driven UI & Partial Hydration with Angular SSR", speaker: "Senior Software Architect", type: "Talk" },
        { time: "13:30 - 15:00", title: "Buffet Lunch & Swag Zone", type: "Break" },
        { time: "15:00 - 16:30", title: "Live Workshop: Migrating to Standalone & Control Flow", speaker: "Workshop Lead", type: "Workshop" },
        { time: "16:35 - 17:15", title: "Security & Modern Frontend Authentication Patterns", speaker: "Security Specialist", type: "Talk" },
        { time: "17:20 - 18:00", title: "Expert Panel: Frontend Development Challenges in Latam", speaker: "Speakers & Community", type: "Panel" },
        { time: "18:00 - 18:30", title: "Giveaways, Sponsor Awards & Official Closing", type: "Closing" },
        { time: "18:30 - 20:00", title: "After Party & Networking Cocktail", type: "After" },
      ],
    },
  },
};
