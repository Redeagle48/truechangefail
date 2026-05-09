export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

export const ui = {
  pt: {
    htmlLang: 'pt-PT',
    meta: {
      title: 'eXtreme Go Horse | Edição OutSystems',
      description:
        'Manifesto satírico sobre desenvolvimento OutSystems à pressa. 13 axiomas, 247 warnings 🟡, 1 error 🔴, 1-CP anyway ✓.',
    },
    hero: {
      edition: 'eXtreme Go Horse | Edição OutSystems',
      year: 'v. 2026',
      tag: '13 axiomas · não-oficial',
      brandStrap: '| OutSystems Edition',
      sub: '“Arrastou, fez 1-CP, era isso.” O que sobra depois de anos a arrastar widgets, fazer Refresh All três vezes seguidas e descobrir que o operador IN continua sem existir em Aggregates.',
      stampLine1: '1-CP',
      stampLine2: 'ANYWAY',
    },
    marquee:
      'XGH-OS · não-oficial · 247 warnings 🟡 · 1 error 🔴 · 1-CP anyway ✓',
    manifesto: {
      heading: 'Os 13 axiomas',
      countSuffix: 'axiomas · ler em voz alta antes de cada 1-CP',
      axioms: [
        {
          title: 'O Architecture Canvas tem 4 camadas. O XGH-OS usa uma e meia.',
          body: 'End-User com tudo lá dentro: screens, blocks, server actions, entities, integrações REST. Foundation é onde vão as Static Entities que ninguém soube onde meter. Core é palavra que o XGH-OS já leu mas não usa. O Discovery abre-se uma vez para ver o aranhol de setas — depois disso, só em apresentação para o cliente.',
        },
        {
          title: 'Aggregate dentro de For Each é o batimento cardíaco do XGH-OS.',
          body: 'A documentação grita “aggregate or SQL query inside a cycle” há mais de uma década. O AI Mentor sinaliza a vermelho. O Architecture Dashboard contabiliza. O dev XGH-OS faz 1-CP na mesma. O problema do N+1 não é um bug — é uma escolha estética.',
        },
        {
          title: 'Refresh References. Re-1-CP. Repeat.',
          body: '“Outdated Producer” → Refresh All → 1-CP → “Outdated Producer” → Refresh All → 1-CP. Se entrar em ciclo, há referência circular entre módulos — solução XGH-OS: aceitar e seguir. O ciclo é o método.',
        },
        {
          title: 'Quando o IN operator não existe, o XGH-OS concatena strings com #.',
          body: 'A Idea para ter IN em Aggregates tem 500+ likes desde 2015. O XGH-OS já percebeu que nunca vai sair e segue com Index("#"+String_Join.Text+"#", "#"+Entity.Id+"#") <> -1. A performance é problema do otimizador da Aurora.',
        },
        {
          title: 'If StatusId = 1: o XGH-OS não decora nomes de Static Entities.',
          body: 'Static Entities existem precisamente para evitar magic numbers no código. O XGH-OS respeita o princípio: não usa magic numbers, usa magic Ids. Toda a gente sabe que 1 é “Pendente”, não é? E que 7 é “Cancelado”. Exceto em PRD, onde 7 é “Aprovado” porque alguém renumerou em 2019 e ninguém atualizou os 47 IFs espalhados pelos módulos.',
        },
        {
          title: 'Toda Server Action grande do XGH-OS termina em FinalResult2.',
          body: 'Aux, Aux2, Temp, Temp_OK, X, Y, Result, Result2, FinalResult, FinalResult_REAL, FinalResult_FINAL, FinalResult_USE_THIS_ONE. Nomenclatura é privilégio de quem tem tempo. O XGH-OS tem prazo.',
        },
        {
          title: 'Site Property é a variável global do XGH-OS.',
          body: 'Configurar algo sem deploy? Site Property. Passar valor entre Timer e Screen? Site Property. Guardar o último Id processado para retomar amanhã? Site Property. Feature flag? Site Property. Service Center → Site Properties → Edit Value é o painel de admin oculto da empresa, gerido por quem tem acesso, não por quem decide.',
        },
        {
          title: 'O TrueChange tem três cores. O AI Mentor faz sugestões. O XGH-OS fecha a aba.',
          body: 'Vermelho não 1-CP. Amarelo 1-CP. Os 247 warnings amarelos são parte do tema do Service Studio. “Avoid Aggregate inside cycle.” “Cyclic reference detected.” “Avoid large session variables.” Sugestão. Sugestão. Sugestão.',
        },
        {
          title: 'Se o Last Modified By não for teu, o erro também não é.',
          body: 'A primeira ação do XGH-OS perante uma exception em produção: abrir a Server Action, consultar o Last Modified By no painel de propriedades, ler o nome. Se for de um colega da equipa — fecha o Service Studio. Se for de alguém que já saiu da empresa — fecha mais depressa. O AI Mentor tem o mesmo workflow: abre-se o finding, vê-se o módulo, vê-se a equipa dona, e se não for a tua, Suppress. O Last Modified By é o git blame do XGH-OS. E o álibi.',
        },
        {
          title: 'Forge é open source: baixa, copia, esquece o autor.',
          body: 'Componente de 2018, sem versão para Reactive, autor saiu da empresa em 2020? Baixa o .oap, descompila, copia o JavaScript do Web Block, cola num módulo próprio. “Customizámos para a nossa realidade.” (E partiu no upgrade para ODC, mas isso é problema do trimestre seguinte.)',
        },
        {
          title: '1-CP em produção é uma forma de coragem.',
          body: 'O LifeTime existe. As Deployment Zones existem. Os approvals existem. O XGH-OS sabe disto e sabe também que basta trocar o ambiente no canto inferior do Service Studio para o 1-CP apontar diretamente a PRD. “É só um hotfix urgente.” “É só um Site Property.” “É só uma Static Entity.” Quem nunca? Se respondeste “eu”, parabéns — não és XGH-OS, és gestor.',
        },
        {
          title: 'Audit log? O Service Center é o nosso Datadog.',
          body: 'A tabela OSLOG_GENERAL cresce a 4 GB por mês. LogMessage("entrei aqui") é a única instrumentação. Dashboards de observabilidade são comprados em Q4 e abandonados em Q1. Quando um cliente reporta bug em produção, abre-se o Service Center, filtra-se pela hora aproximada, e reza-se para o log estar lá.',
        },
        {
          title: 'Migração para ODC: tudo na sprint 1, e era isso.',
          body: 'Traditional Web deixou de existir — reescreve-se em Reactive. SQL Server passou a Aurora PostgreSQL — reescrevem-se as queries (case-insensitive deixa de ser default — boa sorte). SOAP virou REST — reescrevem-se as integrações. Estimativa do XGH-OS: “umas duas semanas”. Realidade: 9 meses, duas demissões, e um post-mortem de 47 páginas.',
        },
      ],
    },
    levels: {
      heading: 'Níveis de certificação XGH-OS',
      intro:
        'Programa não-reconhecido pela OutSystems, pelo teu Tech Lead, nem pelo PMO. É endossado pela retrospectiva da sprint passada.',
      items: [
        {
          rank: 'Nível I',
          name: 'Junior do Drag-and-Drop',
          desc: 'Ainda chama “tabela” a uma Entity. Já fez três 1-CP directos a PRD.',
        },
        {
          rank: 'Nível II',
          name: 'Pleno do Refresh All',
          desc: 'Refresh → 1-CP → “Outdated Producer” → Refresh é a sua meditação matinal. F5 mecânico.',
        },
        {
          rank: 'Nível III',
          name: 'Senior do FinalResult2',
          desc: 'Tem em PRD actions chamadas Aux, Temp_OK, Result2 e FinalResult_USE_THIS_ONE. Ninguém sabe qual é que corre.',
        },
        {
          rank: 'Nível IV',
          name: 'Arquiteto da Migração',
          desc: 'Prometeu ODC “em duas semanas”. Vai no nono mês, no segundo post-mortem, na terceira reescrita.',
        },
      ],
    },
    submit: {
      eyebrow: 'Contribui · open source · não-oficial',
      heading: 'Tens mais um axioma?',
      intro:
        'Trabalhas com OutSystems há tempo suficiente para carregares pelo menos uma cicatriz que ainda não está no manifesto. Manda. Se for verdadeiro, fica. Se for engraçado, fica em destaque.',
      hint: 'O melhor axioma vem de um post-mortem real. O segundo melhor, de um Slack às 23h.',
      ctaPrimary: 'Abrir issue no GitHub →',
      ctaSecondary: 'ou fork e PR direto',
      note: '247 warnings 🟡 · 1 error 🔴 · merged anyway ✓',
    },
    footer: {
      tagline:
        'uma sátira · sem afiliação à OutSystems · 247 warnings 🟡 · 1-CP anyway ✓',
      backToTop: 'topo ↑',
      aboutLink: 'sobre & legal',
      printLink: 'versão imprimível',
    },
    about: {
      meta: {
        title: 'Sobre & Disclaimer Legal — XGH-OS',
        description:
          'XGH-OS é uma obra de sátira. Não é afiliada, endossada ou associada à OutSystems S.A. Esta página explica o estatuto legal, marcas registadas e canal de takedown.',
      },
      hero: {
        eyebrow: 'Disclaimer · Legal · Sátira',
        title: 'Sobre',
        sub: 'O que é o XGH-OS, o que não é, e como falar connosco se trabalhares na OutSystems.',
      },
      back: '← voltar ao manifesto',
    },
    print: {
      meta: {
        title: 'XGH-OS — Poster A3',
        description:
          'Versão poster A3 para imprimir ou guardar em PDF. 13 axiomas em folha única, prontos a colar na parede da sala de devs.',
      },
      toolbar: {
        back: '← Manifesto',
        print: 'Imprimir / Save as PDF',
        switchLang: 'English version →',
        hint: 'Optimizado para A3 landscape. Em A4 escolhe “Fit to page” no diálogo de impressão. Para máximo impacto: A3, papel mate, parede da equipa.',
      },
      header: {
        left: 'eXtreme Go Horse | eXtreme Go Horse | OutSystems Edition · v. 2026',
        right: '13 axiomas · não-oficial',
      },
      tagline: '“Arrastou, fez 1-CP, era isso.”',
      sub: 'Manifesto satírico para fábricas de software OutSystems quando o prazo aperta, o backlog cresce e o Refresh All é a primeira ação do dia.',
      divider: {
        title: 'Os 13 axiomas',
        meta: 'TrueChange · AI Mentor · Forge · LifeTime · ODC',
      },
      footer: {
        left: 'XGH-OS · sátira não-oficial · sem afiliação à OutSystems S.A.',
        center: '247 warnings 🟡 · 1 error 🔴 · 1-CP anyway ✓',
        right: 'github.com/Redeagle48/XGH-OutSystems',
      },
    },
    switcher: {
      pt: 'PT',
      en: 'EN',
      label: 'Idioma',
    },
  },
  en: {
    htmlLang: 'en',
    meta: {
      title: 'eXtreme Go Horse | OutSystems Edition',
      description:
        'A satirical manifesto on rushed OutSystems development. 13 axioms, 247 warnings 🟡, 1 error 🔴, 1-CP anyway ✓.',
    },
    hero: {
      edition: 'eXtreme Go Horse | OutSystems Edition',
      year: 'v. 2026',
      tag: '13 axioms · unofficial',
      brandStrap: '| OutSystems Edition',
      sub: '“Dragged it, 1-CP’d it, that was it.” What is left after years of dragging widgets, hitting Refresh All three times in a row, and discovering the IN operator still does not exist in Aggregates.',
      stampLine1: '1-CP',
      stampLine2: 'ANYWAY',
    },
    marquee:
      'XGH-OS · unofficial · 247 warnings 🟡 · 1 error 🔴 · 1-CP anyway ✓',
    manifesto: {
      heading: 'The 13 axioms',
      countSuffix: 'axioms · read aloud before every 1-CP',
      axioms: [
        {
          title: 'The Architecture Canvas has 4 layers. XGH-OS uses one and a half.',
          body: 'End-User with everything inside: screens, blocks, server actions, entities, REST integrations. Foundation is where Static Entities go when nobody knew where else to put them. Core is a word XGH-OS has read but does not use. Discovery is opened once to admire the arrow spaghetti — after that, only in client presentations.',
        },
        {
          title: 'Aggregate inside For Each is the heartbeat of XGH-OS.',
          body: 'Documentation has been screaming “aggregate or SQL query inside a cycle” for over a decade. AI Mentor flags it red. Architecture Dashboard counts it. The XGH-OS dev 1-CPs anyway. The N+1 problem is not a bug — it is an aesthetic choice.',
        },
        {
          title: 'Refresh References. Re-1-CP. Repeat.',
          body: '“Outdated Producer” → Refresh All → 1-CP → “Outdated Producer” → Refresh All → 1-CP. If it loops, there is a circular reference between modules — the XGH-OS solution: accept it and move on. The loop is the method.',
        },
        {
          title: 'When the IN operator does not exist, XGH-OS concatenates strings with #.',
          body: 'The Idea to add IN to Aggregates has 500+ likes since 2015. XGH-OS has accepted it will never ship and goes with Index("#"+String_Join.Text+"#", "#"+Entity.Id+"#") <> -1. Performance is a problem for the Aurora optimizer.',
        },
        {
          title: 'If StatusId = 1: XGH-OS does not memorise Static Entity names.',
          body: 'Static Entities exist precisely to avoid magic numbers in code. XGH-OS respects the principle: it does not use magic numbers, it uses magic Ids. Everyone knows 1 means “Pending”, right? And 7 means “Cancelled”. Except in PROD, where 7 is “Approved” because someone renumbered them in 2019 and nobody updated the 47 IFs scattered across modules.',
        },
        {
          title: 'Every large Server Action in XGH-OS ends in FinalResult2.',
          body: 'Aux, Aux2, Temp, Temp_OK, X, Y, Result, Result2, FinalResult, FinalResult_REAL, FinalResult_FINAL, FinalResult_USE_THIS_ONE. Naming is a privilege for those with time. XGH-OS has a deadline.',
        },
        {
          title: 'Site Property is the global variable of XGH-OS.',
          body: 'Configure something without a deploy? Site Property. Pass a value between Timer and Screen? Site Property. Store the last processed Id to resume tomorrow? Site Property. Feature flag? Site Property. Service Center → Site Properties → Edit Value is the hidden admin panel of the company.',
        },
        {
          title: 'TrueChange has three colours. AI Mentor makes suggestions. XGH-OS closes the tab.',
          body: 'Red does not 1-CP. Yellow 1-CPs. The 247 yellow warnings are part of the Service Studio theme. “Avoid Aggregate inside cycle.” “Cyclic reference detected.” “Avoid large session variables.” Suggestion. Suggestion. Suggestion.',
        },
        {
          title: 'If the Last Modified By is not yours, the bug is not yours either.',
          body: 'XGH-OS’s first move on a production exception: open the Server Action, check the Last Modified By in the properties panel, read the name. If it is a teammate — close Service Studio. If it is someone who already left the company — close it faster. AI Mentor has the same workflow: open the finding, see the module, see the owning team, and if it is not yours, Suppress. Last Modified By is the XGH-OS git blame. And the alibi.',
        },
        {
          title: 'Forge is open source: download, copy, forget the author.',
          body: 'A 2018 component, no Reactive version, author left the company in 2020? Download the .oap, decompile it, copy the JavaScript out of the Web Block, paste it into your own module. “We customised it to our reality.” (And it broke on the ODC upgrade — but that is next quarter’s problem.)',
        },
        {
          title: '1-CP to production is a form of courage.',
          body: 'LifeTime exists. Deployment Zones exist. Approvals exist. XGH-OS knows this and also knows that you only need to switch the environment in the bottom corner of Service Studio for 1-CP to target PROD directly. “It is just an urgent hotfix.” “It is just a Site Property.” “It is just a Static Entity.” Who has not done it? If you answered “me”, congratulations — you are not XGH-OS, you are a manager.',
        },
        {
          title: 'Audit log? Service Center is our Datadog.',
          body: 'The OSLOG_GENERAL table grows by 4 GB per month. LogMessage("got here") is the only instrumentation. Observability dashboards are bought in Q4 and abandoned in Q1. When a customer reports a production bug, you open Service Center, filter by approximate time, and pray the log is there.',
        },
        {
          title: 'ODC migration: everything in sprint 1, and that was it.',
          body: 'Traditional Web no longer exists — rewrite it in Reactive. SQL Server became Aurora PostgreSQL — rewrite the queries (case-insensitive is no longer the default — good luck). SOAP turned into REST — rewrite the integrations. XGH-OS estimate: “about two weeks”. Reality: 9 months, two resignations, and a 47-page post-mortem.',
        },
      ],
    },
    levels: {
      heading: 'XGH-OS certification levels',
      intro:
        'A program not recognised by OutSystems, your Tech Lead, or your PMO. Endorsed only by the last sprint retrospective.',
      items: [
        {
          rank: 'Level I',
          name: 'Junior of Drag-and-Drop',
          desc: 'Still calls an Entity a “table”. Has already done three 1-CPes straight to PROD.',
        },
        {
          rank: 'Level II',
          name: 'Mid of Refresh All',
          desc: 'Refresh → 1-CP → “Outdated Producer” → Refresh is the morning meditation. Mechanical F5.',
        },
        {
          rank: 'Level III',
          name: 'Senior of FinalResult2',
          desc: 'Has in PROD actions called Aux, Temp_OK, Result2 and FinalResult_USE_THIS_ONE. Nobody knows which one runs.',
        },
        {
          rank: 'Level IV',
          name: 'Architect of the Migration',
          desc: 'Promised ODC “in two weeks”. Now on month nine, on the second post-mortem, on the third rewrite.',
        },
      ],
    },
    submit: {
      eyebrow: 'Contribute · open source · unofficial',
      heading: 'Got another axiom?',
      intro:
        'If you have worked with OutSystems long enough, you carry at least one scar that is not in this manifesto yet. Send it. If it is true, it stays. If it is funny, it gets featured.',
      hint: 'The best axiom comes from a real post-mortem. The second best, from a Slack thread at 11 p.m.',
      ctaPrimary: 'Open an issue on GitHub →',
      ctaSecondary: 'or fork and open a PR',
      note: '247 warnings 🟡 · 1 error 🔴 · merged anyway ✓',
    },
    footer: {
      tagline:
        'a satire · not affiliated with OutSystems · 247 warnings 🟡 · 1-CP anyway ✓',
      backToTop: 'top ↑',
      aboutLink: 'about & legal',
      printLink: 'printable version',
    },
    about: {
      meta: {
        title: 'About & Legal Notice — XGH-OS',
        description:
          'XGH-OS is a satirical work. It is not affiliated with, endorsed by, or otherwise associated with OutSystems S.A. This page covers the legal status, trademarks and takedown contact.',
      },
      hero: {
        eyebrow: 'Disclaimer · Legal · Satire',
        title: 'About',
        sub: 'What XGH-OS is, what it is not, and how to reach us if you work at OutSystems.',
      },
      back: '← back to manifesto',
    },
    print: {
      meta: {
        title: 'XGH-OS — A3 Poster',
        description:
          'A3 poster version, ready to print or save as PDF. 13 axioms on a single sheet — ready to pin to your dev team wall.',
      },
      toolbar: {
        back: '← Manifesto',
        print: 'Print / Save as PDF',
        switchLang: 'Versão portuguesa →',
        hint: 'Optimised for A3 landscape. On A4, pick “Fit to page” in the print dialog. For maximum impact: A3, matte paper, team wall.',
      },
      header: {
        left: 'eXtreme Go Horse | OutSystems Edition · v. 2026',
        right: '13 axioms · unofficial',
      },
      tagline: '“Dragged it, 1-CP’d it, that was it.”',
      sub: 'A satirical manifesto for OutSystems software factories when the deadline tightens, the backlog grows, and Refresh All is the first action of the day.',
      divider: {
        title: 'The 13 axioms',
        meta: 'TrueChange · AI Mentor · Forge · LifeTime · ODC',
      },
      footer: {
        left: 'XGH-OS · unofficial satire · not affiliated with OutSystems S.A.',
        center: '247 warnings 🟡 · 1 error 🔴 · 1-CP anyway ✓',
        right: 'github.com/Redeagle48/XGH-OutSystems',
      },
    },
    switcher: {
      pt: 'PT',
      en: 'EN',
      label: 'Language',
    },
  },
} as const;

export function getT(lang: Locale) {
  return ui[lang];
}
