export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  summary: string;
  whatWeDo: string;
  benefits: string[];
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  result: string;
}

export interface ValuePoint {
  title: string;
  description: string;
}

export const SITE_CONTENT = {
  brand: {
    wordmark: 'selimi.tech',
    location: 'Prishtina, Kosovo',
    descriptor: 'Webentwicklung & digitale Kommunikation'
  },
  
  navigation: [
    { id: 'startseite', label: 'Startseite', path: '/' },
    { id: 'leistungen', label: 'Leistungen', path: '/leistungen' },
    { id: 'arbeitsweise', label: 'Arbeitsweise', path: '/arbeitsweise' },
    { id: 'kontakt', label: 'Kontakt', path: '/kontakt' }
  ],

  hero: {
    kicker: 'Webentwicklung und digitale Sichtbarkeit',
    headline: 'Moderne Websites und gezielte Online-Werbung für Ihr Unternehmen.',
    subtext: 'Wir programmieren schnelle Web-Anwendungen und schalten effektive Werbekampagnen, damit Sie im Internet neue Kunden gewinnen.',
    cta: 'Kontakt aufnehmen'
  },

  intro: {
    statement: 'Wir verbinden saubere Programmierung mit verständlichem Online-Marketing.',
    context: 'Viele Websites sind langsam, unübersichtlich oder bringen keine Anfragen. Bei selimi.tech sorgen wir dafür, dass Ihre digitale Präsenz einfach funktioniert: schnell geladen, leicht bedienbar und klar auf Ihre Geschäftsziele ausgerichtet.'
  },

  services: [
    {
      id: 'webentwicklung',
      number: '01',
      title: 'Webentwicklung',
      summary: 'Schnelle, moderne Websites und Web-Anwendungen, die auf allen Geräten einwandfrei laufen.',
      whatWeDo: 'Wir entwickeln maßgeschneiderte Websites, Firmenportale und Web-Apps. Wir verzichten auf langsame Vorlagen und schreiben sauberen, modernen Code. Das bedeutet für Sie: blitzschnelle Ladezeiten, hohe Sicherheit und eine problemlose Darstellung auf Smartphones, Tablets und großen Bildschirmen.',
      benefits: [
        'Moderne Firmen-Websites und Landingpages',
        'Individuelle Web-Anwendungen und Kundenportale',
        'Optimierung für Smartphones (Mobile-First)',
        'Sehr schnelle Ladezeiten und sichere Technik'
      ]
    },
    {
      id: 'werbung',
      number: '02',
      title: 'Online-Werbung',
      summary: 'Gezielte Anzeigen auf Google und Social Media, die Interessenten zu Kunden machen.',
      whatWeDo: 'Eine gute Website nützt wenig, wenn niemand davon erfährt. Wir erstellen und verwalten bezahlte Werbekampagnen auf den Plattformen, auf denen sich Ihre Kunden tatsächlich aufhalten. Wir sprechen gezielt Menschen an, die bereits Interesse an Ihren Dienstleistungen oder Produkten haben.',
      benefits: [
        'Google Such- und Display-Werbung',
        'Werbekampagnen auf Social-Media-Kanälen',
        'Effiziente Nutzung Ihres Werbebudgets',
        'Messbare Anfragen statt ungenauer Klicks'
      ]
    },
    {
      id: 'marketingstrategie',
      number: '03',
      title: 'Marketingstrategie',
      summary: 'Ein klarer Plan, der zeigt, wie sich Ihr Angebot vom Wettbewerb abhebt.',
      whatWeDo: 'Bevor wir eine Anzeige schalten oder eine Seite gestalten, klären wir das Wesentliche: Was genau unterscheidet Sie von Mitbewerbern und warum sollten Kunden bei Ihnen anfragen? Wir formulieren Ihr Nutzenversprechen so einfach und überzeugend, dass Besucher sofort verstehen, was Sie bieten.',
      benefits: [
        'Klare Positionierung Ihres Angebots',
        'Einfache und verständliche Werbebotschaften',
        'Strukturierter Fahrplan für Ihre Online-Präsenz',
        'Fokus auf lukrative Zielgruppen'
      ]
    },
    {
      id: 'analyse',
      number: '04',
      title: 'Analyse & Optimierung',
      summary: 'Regelmäßige Überprüfung der Zahlen, um kontinuierlich mehr Anfragen zu erzielen.',
      whatWeDo: 'Wir verlassen uns nicht auf Vermutungen, sondern prüfen die Fakten: Wie viele Menschen besuchen Ihre Website, an welchen Stellen brechen sie ab und welche Werbeanzeigen bringen tatsächlich Anfragen? Auf dieser Basis verbessern wir Ihre Seite Schritt für Schritt.',
      benefits: [
        'Datenschutzkonforme Auswertung der Besucherzahlen',
        'Erkennung von Schwachstellen auf der Website',
        'Laufende Verbesserung der Anfragerate',
        'Regelmäßige, verständliche Berichte'
      ]
    }
  ] as ServiceDetail[],

  methodology: [
    {
      number: '01',
      title: 'Gespräch & Bestandsaufnahme',
      description: 'In einem ersten Austausch besprechen wir Ihre aktuellen Herausforderungen, Ihre Zielgruppe und was Sie mit der neuen Website oder Kampagne erreichen möchten.',
      result: 'Klarer Überblick über Ziele und Anforderungen'
    },
    {
      number: '02',
      title: 'Konzept & Struktur',
      description: 'Wir erarbeiten den Seitenaufbau, die Texte und die visuelle Gestaltung. Alles wird so geplant, dass der Besucher schnell findet, was er sucht.',
      result: 'Abgestimmter Entwurf vor der Programmierung'
    },
    {
      number: '03',
      title: 'Programmierung & Umsetzung',
      description: 'Wir setzen das Konzept technisch um. Dabei achten wir auf sauberen Code, rasante Ladezeiten und fehlerfreie Funktion auf allen Endgeräten.',
      result: 'Fertige, gründlich getestete Website'
    },
    {
      number: '04',
      title: 'Start & kontinuierliche Betreuung',
      description: 'Nach dem Start lassen wir Sie nicht allein. Wir schalten auf Wunsch gezielte Werbung, überwachen die Kennzahlen und halten die Technik aktuell.',
      result: 'Messbare Ergebnisse und verlässlicher Support'
    }
  ] as MethodStep[],

  principles: [
    {
      title: 'Einfachheit statt Fachchinesisch',
      description: 'Wir erklären technische Zusammenhänge und Marketingmaßnahmen in klarer, verständlicher Sprache. Sie wissen zu jedem Zeitpunkt genau, woran wir arbeiten.'
    },
    {
      title: 'Fokus auf Ihren Geschäftsnutzen',
      description: 'Wir bauen keine Spielereien, die niemand braucht. Jede Funktion und jede Anzeige dient dem Ziel, Ihr Unternehmen nach vorn zu bringen.'
    },
    {
      title: 'Transparenz & Verlässlichkeit',
      description: 'Sie erhalten feste Absprachen, klare Rückmeldungen und eine saubere Umsetzung. Bei Fragen haben Sie immer einen direkten Ansprechpartner.'
    },
    {
      title: 'Zukunftssichere Technik',
      description: 'Wir nutzen moderne Web-Standards, die auch in mehreren Jahren noch stabil, schnell und problemlos erweiterbar sind.'
    }
  ] as ValuePoint[],

  contact: {
    title: 'Kontakt aufnehmen',
    lead: 'Haben Sie ein konkretes Projekt oder möchten Sie Ihre aktuelle Website verbessern? Schreiben Sie uns eine kurze Nachricht. Wir prüfen Ihr Anliegen und melden uns verlässlich zurück.',
    howItWorks: {
      step1: 'Klicken Sie auf die Schaltfläche unten, um unsere direkte E-Mail-Adresse einzusehen.',
      step2: 'Schreiben Sie uns kurz, worum es bei Ihrem Projekt geht und welcher Zeitrahmen geplant ist.',
      step3: 'Wir melden uns innerhalb von ein bis zwei Werktagen und vereinbaren bei Interesse ein unverbindliches Erstgespräch.'
    },
    direct: {
      label: 'Direkte E-Mail',
      description: 'Um automatisierte Werbemails zu vermeiden, wird unsere Adresse erst nach einem Klick sichtbar.',
      revealButton: 'E-Mail-Adresse anzeigen',
      locationLabel: 'Standort',
      locationValue: 'Prishtina, Kosovo'
    }
  },

  impressum: {
    title: 'Impressum',
    note: 'Angaben gemäß gesetzlicher Informationspflichten:',
    sections: [
      {
        heading: 'Angaben zum Anbieter',
        lines: [
          'selimi.tech',
          'Webentwicklung & digitale Kommunikation',
          'Standort: Prishtina, Kosovo'
        ]
      },
      {
        heading: 'Verantwortlich für den Inhalt',
        lines: [
          'Verantwortlich für den Inhalt: [Name des Inhabers / Vertretungsberechtigten]',
          'Prishtina, Kosovo'
        ]
      },
      {
        heading: 'Elektronischer Kontakt',
        lines: [
          'Die direkte E-Mail-Adresse kann im Kontaktbereich der Website über die vorgesehene Schaltfläche aufgerufen werden.'
        ]
      },
      {
        heading: 'Haftung für Inhalte und Links',
        lines: [
          'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.',
          'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.'
        ]
      }
    ]
  },

  datenschutz: {
    title: 'Datenschutzerklärung',
    note: 'Wir respektieren Ihre Privatsphäre. Diese Website verwendet keine Werbe-Tracker und keine zustimmungspflichtigen Cookies.',
    sections: [
      {
        heading: '1. Datenschutz im Überblick',
        text: 'Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften. Auf dieser Website werden persönliche Daten nur dann verarbeitet, wenn Sie per E-Mail freiwillig mit uns in Kontakt treten.'
      },
      {
        heading: '2. Verantwortliche Stelle',
        text: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist selimi.tech, Prishtina, Kosovo.'
      },
      {
        heading: '3. Kontaktaufnahme per E-Mail',
        text: 'Wenn Sie uns eine E-Mail senden, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir niemals ohne Ihre Einwilligung weiter.'
      },
      {
        heading: '4. Server-Logdateien',
        text: 'Der Provider dieser Website erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt (z.B. Browsertyp, Betriebssystem, Uhrzeit der Serveranfrage, anonymisierte IP-Adresse). Diese Daten dienen ausschließlich der technischen Sicherheit des Servers.'
      },
      {
        heading: '5. Ihre Rechte',
        text: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Wenden Sie sich hierzu gerne jederzeit an uns.'
      }
    ]
  }
};
