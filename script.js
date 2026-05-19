/********************************************************************
     * CONFIGURATION PRINCIPALE
     * Tu peux modifier ici le mot de passe admin, les sujets, les dates,
     * les questions, les réponses correctes, la durée et le barème.
     ********************************************************************/
    const ADMIN_PASSWORD = "admin123"; // Change ce mot de passe ici.

    const CONFIG = {
      defaultMarking: {
        correct: 1,
        wrong: -1,
        empty: 0
      },
      subjects: [
{
          "id": "deontologie-ethique-1",
          "title": "Déontologie et Éthique - Sujet 1",
          "matter": "Déontologie et Éthique",
          "description": "Évaluation complète sur les règles déontologiques, le secret professionnel, la responsabilité et l’éthique infirmière.",
          "instructions": "Lis attentivement chaque question. Certaines questions peuvent avoir plusieurs bonnes réponses.",
          "duration": 30,
          "programmed": true,
          "openDate": "2026-05-10",
          "openTime": "00:00",
          "closeDate": "2030-12-31",
          "closeTime": "23:59",
          "marking": {"correct": 1, "wrong": -1, "empty": 0},
          "questions": [
                    {
                              "type": "qcd",
                              "text": "L’infirmier doit respecter la confidentialité même après la mort du patient.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le secret professionnel oblige l’infirmier à préserver la confidentialité des informations concernant le patient, même après son décès. Cela maintient la dignité du patient et protège ses proches contre d’éventuels préjudices."
                    },
                    {
                              "type": "qcd",
                              "text": "Il est permis à l’infirmier de refuser ses soins sans justification en dehors des cas d’urgence.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Hors situation d’urgence, si l’infirmier refuse de donner des soins, il doit motiver et expliquer ce refus conformément à l’éthique professionnelle. Un refus arbitraire serait une faute."
                    },
                    {
                              "type": "qcd",
                              "text": "Transmettre des informations de santé à la famille du patient sans son accord est une faute déontologique.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le secret professionnel interdit de révéler des informations concernant la santé du patient à sa famille sans consentement explicite, sauf exceptions prévues par la loi."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier peut modifier une prescription médicale écrite sans consulter le prescripteur si cela lui semble nécessaire.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Un infirmier ne peut modifier une ordonnance médicale sans en parler au médecin, car seul le prescripteur en est responsable. Modifier sans avis médical est une faute grave."
                    },
                    {
                              "type": "qcd",
                              "text": "L’intégrité consiste principalement à respecter les horaires de travail.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "L’intégrité englobe l’honnêteté, la loyauté, le respect du patient et l’application des règles professionnelles, pas seulement le respect des horaires."
                    },
                    {
                              "type": "qcd",
                              "text": "Il est interdit à l’infirmier d’accepter une commission pour un acte professionnel.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Accepter une commission ou rétribution pour un acte professionnel est un conflit d’intérêt et porte atteinte à l’indépendance et la probité de l’infirmier."
                    },
                    {
                              "type": "qcd",
                              "text": "Le secret professionnel doit être respecté uniquement lors des soins et pas lors de la formation d’étudiants.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Le secret professionnel est valable en toutes circonstances, y compris lors de situations de formation ou d’encadrement d’étudiants."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier a le devoir d’assister toute personne en péril, même en dehors de son lieu de travail.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "L’obligation légale et morale d’assistance à personne en danger impose d’apporter secours même hors exercice professionnel."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier a le droit d’inventer des techniques de soins et de les appliquer sans protocole.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Les soins infirmiers doivent suivre des protocoles validés pour garantir la sécurité et l’efficacité pour les patients."
                    },
                    {
                              "type": "qcd",
                              "text": "La prise en charge de la douleur fait partie du rôle propre de l’infirmier.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "L’évaluation et la prise en compte de la douleur sont des missions essentielles dans la pratique infirmière autonome."
                    },
                    {
                              "type": "qcm",
                              "text": "À qui l’infirmier doit-il s’adresser s’il a un doute grave sur une prescription médicale ?",
                              "options": [
                                        "Un autre patient",
                                        "Le pharmacien",
                                        "Le prescripteur",
                                        "L’entourage du patient"
                              ],
                              "answer": "Le prescripteur",
                              "correct": "Le prescripteur",
                              "explanation": "C’est au médecin prescripteur que revient la responsabilité de clarifier ou corriger une prescription."
                    },
                    {
                              "type": "qcm",
                              "text": "Lorsqu’un patient refuse d’être informé sur son état de santé, l’infirmier :",
                              "options": [
                                        "Le force à recevoir l’information",
                                        "Ignore sa volonté",
                                        "Respecte ce choix",
                                        "Appelle la police"
                              ],
                              "answer": "Respecte ce choix",
                              "correct": "Respecte ce choix",
                              "explanation": "Le patient peut choisir de ne pas recevoir d’informations, ce choix relève de son autonomie."
                    },
                    {
                              "type": "qcm",
                              "text": "En cas de situation de maltraitance sur un mineur, l’infirmier doit :",
                              "options": [
                                        "En informer les autorités judiciaires",
                                        "Garder le secret",
                                        "Alerter les médias",
                                        "Se taire sans rien faire"
                              ],
                              "answer": "En informer les autorités judiciaires",
                              "correct": "En informer les autorités judiciaires",
                              "explanation": "Le signalement de la maltraitance sur mineur est une obligation qui prévaut sur le secret professionnel."
                    },
                    {
                              "type": "qcm",
                              "text": "En cas de sinistre ou de calamité, l’infirmier doit :",
                              "options": [
                                        "Refuser d’intervenir quel que soit le contexte",
                                        "Apporter son concours à l’action des autorités compétentes",
                                        "Se cacher",
                                        "Rebrousser chemin"
                              ],
                              "answer": "Apporter son concours à l’action des autorités compétentes",
                              "correct": "Apporter son concours à l’action des autorités compétentes",
                              "explanation": "L’infirmier doit se mobiliser pour soutenir l’action collective dans l’intérêt public."
                    },
                    {
                              "type": "qcm",
                              "text": "Le code de déontologie s’applique :",
                              "options": [
                                        "Seulement à l’hôpital",
                                        "À tous les infirmiers et étudiants",
                                        "Uniquement en présence du supérieur",
                                        "Que dans les cabinets privés"
                              ],
                              "answer": "À tous les infirmiers et étudiants",
                              "correct": "À tous les infirmiers et étudiants",
                              "explanation": "Tous les infirmiers et étudiants doivent respecter le code, peu importe le lieu ou l’encadrement."
                    },
                    {
                              "type": "qcm",
                              "text": "Selon le code, l’infirmier doit garantir avant tout :",
                              "options": [
                                        "Le bien-être financier du service",
                                        "La sécurité et le bien-être des patients",
                                        "Sa propre réputation",
                                        "Le nombre d’actes réalisés"
                              ],
                              "answer": "La sécurité et le bien-être des patients",
                              "correct": "La sécurité et le bien-être des patients",
                              "explanation": "La priorité absolue de l’action infirmière est la sécurité, la santé et le respect du patient."
                    },
                    {
                              "type": "qcm",
                              "text": "Un document professionnel infirmier doit absolument comporter :",
                              "options": [
                                        "Le numéro du patient",
                                        "La signature de l’infirmier",
                                        "Le nom du directeur",
                                        "Le budget prévisionnel du service"
                              ],
                              "answer": "La signature de l’infirmier",
                              "correct": "La signature de l’infirmier",
                              "explanation": "La signature engage la responsabilité de l’infirmier sur l’acte ou l’information portée au dossier."
                    },
                    {
                              "type": "qcm",
                              "text": "La non-discrimination du patient signifie que l’infirmier :",
                              "options": [
                                        "Soigne selon l’origine sociale",
                                        "Prend en compte uniquement l’âge",
                                        "Donne des soins égaux à tous",
                                        "Trie selon la religion"
                              ],
                              "answer": "Donne des soins égaux à tous",
                              "correct": "Donne des soins égaux à tous",
                              "explanation": "L’infirmier doit soigner tous les patients de façon équitable, quelle que soit leur situation."
                    },
                    {
                              "type": "qcm",
                              "text": "L’intégrité de l’infirmier se traduit principalement par :",
                              "options": [
                                        "Honnêteté et franchise",
                                        "Vitesse d’exécution",
                                        "Résistance au stress",
                                        "Caution pour un prêt bancaire"
                              ],
                              "answer": "Honnêteté et franchise",
                              "correct": "Honnêteté et franchise",
                              "explanation": "L’intégrité professionnelle implique la sincérité, la transparence et le respect de la morale."
                    },
                    {
                              "type": "qcm",
                              "text": "Quand l’infirmier participe à un projet de recherche, il doit avant tout :",
                              "options": [
                                        "Publier les résultats librement",
                                        "Respecter les lois et règlements",
                                        "Refuser toute contrainte éthique",
                                        "Imposer son point de vue"
                              ],
                              "answer": "Respecter les lois et règlements",
                              "correct": "Respecter les lois et règlements",
                              "explanation": "Toute recherche doit respecter le cadre légal et éthique, notamment la protection des personnes."
                    },
                    {
                              "type": "qcm",
                              "text": "Dans la gestion des médicaments, l’infirmier doit :",
                              "options": [
                                        "Vérifier le dosage",
                                        "Contrôler la date de péremption",
                                        "Expérimenter librement avec les produits",
                                        "Les laisser en accès libre"
                              ],
                              "answers": [
                                        "Vérifier le dosage",
                                        "Contrôler la date de péremption"
                              ],
                              "correct": [
                                        "Vérifier le dosage",
                                        "Contrôler la date de péremption"
                              ],
                              "explanation": "Ces vérifications préviennent des erreurs médicamenteuses et des accidents."
                    },
                    {
                              "type": "qcm",
                              "text": "L’information du patient selon le code doit être :",
                              "options": [
                                        "Adaptée",
                                        "Trompeuse",
                                        "Loyale",
                                        "Élaborée uniquement par écrit"
                              ],
                              "answers": [
                                        "Adaptée",
                                        "Loyale"
                              ],
                              "correct": [
                                        "Adaptée",
                                        "Loyale"
                              ],
                              "explanation": "Il est essentiel que le patient comprenne ce qui lui est communiqué, sans tromperie."
                    },
                    {
                              "type": "qcm",
                              "text": "Sont des modalités d’exercice reconnues pour l’infirmier :",
                              "options": [
                                        "Salarié",
                                        "Libéral",
                                        "Exclusivement bénévole",
                                        "Mixte"
                              ],
                              "answers": [
                                        "Salarié",
                                        "Libéral",
                                        "Mixte"
                              ],
                              "correct": [
                                        "Salarié",
                                        "Libéral",
                                        "Mixte"
                              ],
                              "explanation": "L’infirmier peut exercer en étant salarié, libéral ou en cumulant différents statuts."
                    },
                    {
                              "type": "qcm",
                              "text": "Font partie des devoirs envers les patients :",
                              "options": [
                                        "Non-discrimination",
                                        "Prise en charge de la douleur",
                                        "Favoriser l’avantage matériel",
                                        "Pratiquer l’euthanasie à la demande"
                              ],
                              "answers": [
                                        "Non-discrimination",
                                        "Prise en charge de la douleur"
                              ],
                              "correct": [
                                        "Non-discrimination",
                                        "Prise en charge de la douleur"
                              ],
                              "explanation": "Ces principes garantissent l’égalité et la qualité de soin sans conditions illicites."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier qui constate une situation de maltraitance envers une personne vulnérable doit :",
                              "options": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes",
                                        "Conseiller le silence",
                                        "Dissimuler les faits"
                              ],
                              "answers": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes"
                              ],
                              "correct": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes"
                              ],
                              "explanation": "L’infirmier doit agir prudemment et signaler aux autorités tout doute de maltraitance."
                    },
                    {
                              "type": "qcm",
                              "text": "Dans la collaboration professionnelle, l’infirmier doit :",
                              "options": [
                                        "Respecter l’indépendance des autres",
                                        "Favoriser les conflits de compétence",
                                        "Collaborer pour la qualité des soins",
                                        "Ne jamais échanger d’informations"
                              ],
                              "answers": [
                                        "Respecter l’indépendance des autres",
                                        "Collaborer pour la qualité des soins"
                              ],
                              "correct": [
                                        "Respecter l’indépendance des autres",
                                        "Collaborer pour la qualité des soins"
                              ],
                              "explanation": "La collaboration et le respect mutuel améliorent la prise en charge."
                    },
                    {
                              "type": "qcm",
                              "text": "Le respect de l’humanité dans le soin se traduit par :",
                              "options": [
                                        "La tolérance",
                                        "La générosité",
                                        "La compétition systématique",
                                        "L’empathie"
                              ],
                              "answers": [
                                        "La tolérance",
                                        "La générosité",
                                        "L’empathie"
                              ],
                              "correct": [
                                        "La tolérance",
                                        "La générosité",
                                        "L’empathie"
                              ],
                              "explanation": "Ce sont des qualités humaines essentielles pour des soins respectueux et dignes."
                    },
                    {
                              "type": "qcm",
                              "text": "Lors de son rôle d’encadrement, l’infirmier doit :",
                              "options": [
                                        "Veiller à la compétence des personnes sous sa responsabilité",
                                        "Assurer la qualité des actes accomplis",
                                        "Déléguer sans contrôle",
                                        "Faire respecter la déontologie"
                              ],
                              "answers": [
                                        "Veiller à la compétence des personnes sous sa responsabilité",
                                        "Assurer la qualité des actes accomplis",
                                        "Faire respecter la déontologie"
                              ],
                              "correct": [
                                        "Veiller à la compétence des personnes sous sa responsabilité",
                                        "Assurer la qualité des actes accomplis",
                                        "Faire respecter la déontologie"
                              ],
                              "explanation": "L’encadrement exige de garantir la compétence, la qualité et le respect des règles."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit déclarer ses liens d’intérêts lorsqu’il :",
                              "options": [
                                        "Intervient lors d’un colloque public",
                                        "Publie dans la presse",
                                        "Prend la parole lors d’une réunion de famille",
                                        "Participe à une formation universitaire"
                              ],
                              "answers": [
                                        "Intervient lors d’un colloque public",
                                        "Publie dans la presse",
                                        "Participe à une formation universitaire"
                              ],
                              "correct": [
                                        "Intervient lors d’un colloque public",
                                        "Publie dans la presse",
                                        "Participe à une formation universitaire"
                              ],
                              "explanation": "Déclarer ses liens d’intérêts garantit la transparence et l’éthique."
                    },
                    {
                              "type": "qcm",
                              "text": "En situation d’urgence sans protocole écrit, l’infirmier doit :",
                              "options": [
                                        "Attendre sans agir",
                                        "Prendre les mesures nécessaires pour le patient",
                                        "Préserver la sécurité maximale",
                                        "Intervenir seulement si cela l’arrange"
                              ],
                              "answers": [
                                        "Prendre les mesures nécessaires pour le patient",
                                        "Préserver la sécurité maximale"
                              ],
                              "correct": [
                                        "Prendre les mesures nécessaires pour le patient",
                                        "Préserver la sécurité maximale"
                              ],
                              "explanation": "En cas d’urgence, l’infirmier doit agir pour le bien du patient, tout en assurant sa sécurité."
                    },
                    {
                              "type": "qcm",
                              "text": "Selon le code, le respect de la dignité du patient consiste à :",
                              "options": [
                                        "Respecter sa vie privée",
                                        "Éviter l’humiliation",
                                        "Privilégier la rentabilité",
                                        "Garantir l’accompagnement même après la mort"
                              ],
                              "answers": [
                                        "Respecter sa vie privée",
                                        "Éviter l’humiliation",
                                        "Garantir l’accompagnement même après la mort"
                              ],
                              "correct": [
                                        "Respecter sa vie privée",
                                        "Éviter l’humiliation",
                                        "Garantir l’accompagnement même après la mort"
                              ],
                              "explanation": "Ces principes assurent le respect du patient pendant et après sa vie."
                    },
                    {
                              "type": "qcm",
                              "text": "Assure la compétence professionnelle chez l’infirmier :",
                              "options": [
                                        "Développement professionnel continu",
                                        "Participation à la recherche scientifique",
                                        "Refus de toute innovation",
                                        "Formation de base seulement"
                              ],
                              "answers": [
                                        "Développement professionnel continu",
                                        "Participation à la recherche scientifique"
                              ],
                              "correct": [
                                        "Développement professionnel continu",
                                        "Participation à la recherche scientifique"
                              ],
                              "explanation": "Se former et participer à des recherches maintiennent la compétence au plus haut niveau."
                    },
                    {
                              "type": "qcm",
                              "text": "Sont des documents obligatoires pour chaque patient :",
                              "options": [
                                        "Dossier de soins infirmiers",
                                        "Certificat médical",
                                        "Attestation réglementaire",
                                        "Fiche de pharmacie"
                              ],
                              "answers": [
                                        "Dossier de soins infirmiers",
                                        "Attestation réglementaire"
                              ],
                              "correct": [
                                        "Dossier de soins infirmiers",
                                        "Attestation réglementaire"
                              ],
                              "explanation": "Ces documents assurent la traçabilité et la conformité des soins."
                    },
                    {
                              "type": "qcm",
                              "text": "Le respect du secret professionnel englobe :",
                              "options": [
                                        "Le contenu des dossiers",
                                        "Les informations transmises lors des publications scientifiques",
                                        "Les conversations privées avec autrui",
                                        "Les échanges entre confrères"
                              ],
                              "answers": [
                                        "Le contenu des dossiers",
                                        "Les informations transmises lors des publications scientifiques",
                                        "Les échanges entre confrères"
                              ],
                              "correct": [
                                        "Le contenu des dossiers",
                                        "Les informations transmises lors des publications scientifiques",
                                        "Les échanges entre confrères"
                              ],
                              "explanation": "Toute information obtenue dans l’exercice professionnel doit rester confidentielle."
                    },
                    {
                              "type": "qcm",
                              "text": "L’impartialité de l’infirmier expert nécessite de :",
                              "options": [
                                        "Se récuser en cas de conflit d’intérêts",
                                        "Énoncer des faits utiles à l’instruction",
                                        "Prendre parti pour un proche",
                                        "Informer la personne examinée de la mission"
                              ],
                              "answers": [
                                        "Se récuser en cas de conflit d’intérêts",
                                        "Énoncer des faits utiles à l’instruction",
                                        "Informer la personne examinée de la mission"
                              ],
                              "correct": [
                                        "Se récuser en cas de conflit d’intérêts",
                                        "Énoncer des faits utiles à l’instruction",
                                        "Informer la personne examinée de la mission"
                              ],
                              "explanation": "L’impartialité exige transparence, objectivité et information à la personne concernée."
                    },
                    {
                              "type": "qcm",
                              "text": "Par rapport au patient en fin de vie, l’infirmier doit :",
                              "options": [
                                        "Préserver la dignité du mourant",
                                        "Provoquer la mort à la demande",
                                        "Accompagner la famille",
                                        "Assurer uniquement les soins de base"
                              ],
                              "answers": [
                                        "Préserver la dignité du mourant",
                                        "Accompagner la famille"
                              ],
                              "correct": [
                                        "Préserver la dignité du mourant",
                                        "Accompagner la famille"
                              ],
                              "explanation": "En fin de vie, l’accompagnement humain est primordial pour le patient et ses proches."
                    },
                    {
                              "type": "qcm",
                              "text": "Les actes strictement interdits selon le code sont :",
                              "options": [
                                        "Compérage",
                                        "Charlatannerie",
                                        "Assistance morale",
                                        "Partage d’honoraires hors contrat"
                              ],
                              "answers": [
                                        "Compérage",
                                        "Charlatannerie",
                                        "Partage d’honoraires hors contrat"
                              ],
                              "correct": [
                                        "Compérage",
                                        "Charlatannerie",
                                        "Partage d’honoraires hors contrat"
                              ],
                              "explanation": "Ces pratiques sont formellement interdites, car contraires à l’éthique professionnelle."
                    },
                    {
                              "type": "qcm",
                              "text": "Pour garantir la qualité des soins supervisés, l’infirmier doit :",
                              "options": [
                                        "Contrôler l’activité des étudiants",
                                        "Obtenir le consentement du patient pour les soins réalisés par un étudiant",
                                        "Laisser les étudiants agir librement",
                                        "Déléguer les responsabilités à un collègue"
                              ],
                              "answers": [
                                        "Contrôler l’activité des étudiants",
                                        "Obtenir le consentement du patient pour les soins réalisés par un étudiant"
                              ],
                              "correct": [
                                        "Contrôler l’activité des étudiants",
                                        "Obtenir le consentement du patient pour les soins réalisés par un étudiant"
                              ],
                              "explanation": "Contrôle et consentement sont garants de la qualité et de la sécurité des soins."
                    },
                    {
                              "type": "qcm",
                              "text": "Dans la pratique professionnelle, l’infirmier doit signaler :",
                              "options": [
                                        "Tout conflit d’intérêt",
                                        "Erreur grave commise par un collègue",
                                        "Informations confidentielles à la famille",
                                        "Problèmes d’hygiène dans l’unité"
                              ],
                              "answers": [
                                        "Tout conflit d’intérêt",
                                        "Erreur grave commise par un collègue",
                                        "Problèmes d’hygiène dans l’unité"
                              ],
                              "correct": [
                                        "Tout conflit d’intérêt",
                                        "Erreur grave commise par un collègue",
                                        "Problèmes d’hygiène dans l’unité"
                              ],
                              "explanation": "Ces signalements protègent la qualité des soins et la sécurité des patients."
                    },
                    {
                              "type": "qcm",
                              "text": "L’excellence des soins infirmiers concerne :",
                              "options": [
                                        "La sécurité du patient",
                                        "La rentabilité de l’établissement",
                                        "Le bien-être de la personne à chaque étape de la vie",
                                        "L’image positive de la profession"
                              ],
                              "answers": [
                                        "La sécurité du patient",
                                        "Le bien-être de la personne à chaque étape de la vie"
                              ],
                              "correct": [
                                        "La sécurité du patient",
                                        "Le bien-être de la personne à chaque étape de la vie"
                              ],
                              "explanation": "L’excellence se traduit par la recherche continue de la qualité, de la sécurité et du respect de la personnalité du patient à tout"
                    }
          ]
},
{
          "id": "deontologie-sujet-2",
          "title": "Déontologie et Éthique - Sujet 2",
          "matter": "Déontologie et Éthique",
          "description": "Sujet 2 de déontologie infirmière.",
          "instructions": "Lis attentivement chaque question avant de répondre.",
          "duration": 30,
          "programmed": true,
          "openDate": "2026-01-01",
          "openTime": "00:00",
          "closeDate": "2030-12-31",
          "closeTime": "23:59",
          "marking": {"correct": 1, "wrong": -1, "empty": 0},
          "questions": [
                    {
                              "type": "qcd",
                              "text": "Le secret professionnel s’impose à tout infirmier.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Le respect du secret professionnel est obligatoire pour tous les infirmiers afin de protéger les informations du patient."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier peut abandonner un patient sans explication.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "L’infirmier doit assurer la continuité des soins et orienter le patient si nécessaire."
                    },
                    {
                              "type": "qcd",
                              "text": "Le code de déontologie concerne uniquement les médecins.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Le code de déontologie s’applique aussi aux infirmiers et étudiants infirmiers."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier doit respecter la dignité humaine.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Le respect de la dignité du patient est une obligation fondamentale."
                    },
                    {
                              "type": "qcd",
                              "text": "Le charlatanisme est interdit dans la profession infirmière.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Toute pratique trompeuse ou insuffisamment prouvée est interdite."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier peut divulguer les informations du patient à ses amis.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Les informations médicales sont confidentielles."
                    },
                    {
                              "type": "qcd",
                              "text": "Le consentement du patient doit être recherché avant les soins.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Le patient doit être informé et accepter les soins proposés."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier peut exercer sous un faux nom sans autorisation.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "L’usage d’un pseudonyme est strictement réglementé."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier doit respecter les règles d’hygiène.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "L’hygiène protège le patient et le personnel soignant."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier peut accepter des pots-de-vin.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "La probité interdit tout avantage injustifié."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier doit soulager la douleur du patient.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Le soulagement de la douleur fait partie des devoirs infirmiers."
                    },
                    {
                              "type": "qcd",
                              "text": "Le respect du patient cesse après son décès.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Le respect de la personne continue même après la mort."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier doit actualiser ses connaissances.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Le développement professionnel continu est obligatoire."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier peut discriminer un patient selon sa religion.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Tous les patients doivent être traités avec égalité."
                    },
                    {
                              "type": "qcm",
                              "text": "Le code de déontologie s’applique :",
                              "options": [
                                        "Seulement à l’hôpital",
                                        "À tous les infirmiers et étudiants",
                                        "Uniquement en présence du supérieur",
                                        "Que dans les cabinets privés"
                              ],
                              "answer": "À tous les infirmiers et étudiants",
                              "explanation": "Tous les infirmiers et étudiants doivent respecter le code, peu importe le lieu ou l’encadrement."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier doit agir dans l’intérêt du patient.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "L’intérêt du patient reste prioritaire dans tous les soins."
                    },
                    {
                              "type": "qcd",
                              "text": "L’euthanasie est autorisée par le code de déontologie infirmière.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "L’infirmier ne doit pas provoquer délibérément la mort."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier doit protéger les données du dossier de soins.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Les dossiers doivent être protégés contre toute indiscrétion."
                    },
                    {
                              "type": "qcd",
                              "text": "Les soins infirmiers doivent être attentifs et consciencieux.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Les soins doivent respecter les bonnes pratiques professionnelles."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier peut établir de faux certificats médicaux.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Les documents frauduleux sont interdits."
                    },
                    {
                              "type": "qcm",
                              "text": "Quelle est une valeur fondamentale de la profession infirmière ?",
                              "options": [
                                        "La corruption",
                                        "L’intégrité",
                                        "Le favoritisme",
                                        "La violence"
                              ],
                              "answer": "L’intégrité",
                              "explanation": "L’intégrité représente l’honnêteté et la franchise dans l’exercice professionnel."
                    },
                    {
                              "type": "qcm",
                              "text": "Le secret professionnel sert à :",
                              "options": [
                                        "Divertir les collègues",
                                        "Protéger les informations du patient",
                                        "Punir les malades",
                                        "Éviter les soins"
                              ],
                              "answer": "Protéger les informations du patient",
                              "explanation": "Les informations concernant le patient doivent rester confidentielles."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit respecter :",
                              "options": [
                                        "La dignité humaine",
                                        "Les discriminations",
                                        "Les injustices",
                                        "Les violences"
                              ],
                              "answer": "La dignité humaine",
                              "explanation": "La dignité du patient doit être respectée en toutes circonstances."
                    },
                    {
                              "type": "qcm",
                              "text": "Le consentement du patient doit être :",
                              "options": [
                                        "Caché",
                                        "Forcé",
                                        "Libre et éclairé",
                                        "Inutile"
                              ],
                              "answer": "Libre et éclairé",
                              "explanation": "Le patient doit comprendre et accepter les soins."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier qui constate une situation de maltraitance envers une personne vulnérable doit :",
                              "options": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes",
                                        "Conseiller le silence",
                                        "Dissimuler les faits"
                              ],
                              "answer": "Alerter les autorités compétentes",
                              "explanation": "L’infirmier doit signaler les situations dangereuses afin de protéger la victime."
                    },
                    {
                              "type": "qcm",
                              "text": "Le charlatanisme est :",
                              "options": [
                                        "Recommandé",
                                        "Autorisé",
                                        "Interdit",
                                        "Encouragé"
                              ],
                              "answer": "Interdit",
                              "explanation": "Toute pratique mensongère ou dangereuse est interdite."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit actualiser :",
                              "options": [
                                        "Ses vêtements",
                                        "Ses compétences",
                                        "Ses loisirs",
                                        "Ses voyages"
                              ],
                              "answer": "Ses compétences",
                              "explanation": "Le professionnel doit améliorer continuellement ses connaissances."
                    },
                    {
                              "type": "qcm",
                              "text": "Le dossier de soins infirmiers doit être :",
                              "options": [
                                        "Public",
                                        "Détruit immédiatement",
                                        "Protégé",
                                        "Partagé avec tout le monde"
                              ],
                              "answer": "Protégé",
                              "explanation": "Les données du patient sont confidentielles."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier agit principalement dans :",
                              "options": [
                                        "Son intérêt personnel",
                                        "L’intérêt du patient",
                                        "L’intérêt financier",
                                        "L’intérêt politique"
                              ],
                              "answer": "L’intérêt du patient",
                              "explanation": "Le patient reste au centre des soins."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit respecter :",
                              "options": [
                                        "Les lois professionnelles",
                                        "Les insultes",
                                        "Les discriminations",
                                        "Les violences"
                              ],
                              "answer": "Les lois professionnelles",
                              "explanation": "L’exercice infirmier est encadré par des règles légales et déontologiques."
                    },
                    {
                              "type": "qcm",
                              "text": "Les valeurs de la profession infirmière incluent :",
                              "options": [
                                        "L’intégrité ; La collaboration professionnelle",
                                        "La haine",
                                        "Le favoritisme"
                              ],
                              "answer": "L’intégrité ; La collaboration professionnelle",
                              "explanation": "Ces valeurs garantissent des soins de qualité et le respect du patient."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit :",
                              "options": [
                                        "Respecter le secret professionnel ; Soulager la douleur",
                                        "Diffuser les dossiers médicaux",
                                        "Accepter des cadeaux illicites"
                              ],
                              "answer": "Respecter le secret professionnel ; Soulager la douleur",
                              "explanation": "Ces obligations assurent la sécurité et le bien-être du patient."
                    },
                    {
                              "type": "qcm",
                              "text": "Le consentement du patient doit être :",
                              "options": [
                                        "Libre ; Éclairé",
                                        "Caché",
                                        "Imposé"
                              ],
                              "answer": "Libre ; Éclairé",
                              "explanation": "Le patient doit comprendre et accepter les soins proposés."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit respecter :",
                              "options": [
                                        "La dignité humaine ; L’autonomie du patient",
                                        "La violence",
                                        "Le mépris"
                              ],
                              "answer": "La dignité humaine ; L’autonomie du patient",
                              "explanation": "Le respect de la personne est essentiel dans les soins."
                    },
                    {
                              "type": "qcm",
                              "text": "Les soins infirmiers doivent être :",
                              "options": [
                                        "Attentifs ; Scientifiques",
                                        "Dangereux",
                                        "Violents"
                              ],
                              "answer": "Attentifs ; Scientifiques",
                              "explanation": "Les soins doivent être adaptés et fondés sur les données scientifiques."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit éviter :",
                              "options": [
                                        "Le charlatanisme ; Les avantages injustifiés",
                                        "Le respect du patient",
                                        "L’honnêteté"
                              ],
                              "answer": "Le charlatanisme ; Les avantages injustifiés",
                              "explanation": "Ces pratiques sont contraires à l’éthique professionnelle."
                    },
                    {
                              "type": "qcm",
                              "text": "Le dossier de soins doit être :",
                              "options": [
                                        "Actualisé ; Protégé",
                                        "Public",
                                        "Diffusé librement"
                              ],
                              "answer": "Actualisé ; Protégé",
                              "explanation": "Les informations du patient doivent rester sécurisées."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit faire preuve de :",
                              "options": [
                                        "Probité ; Humanité",
                                        "Négligence",
                                        "Méchanceté"
                              ],
                              "answer": "Probité ; Humanité",
                              "explanation": "Ces qualités sont indispensables à la profession."
                    },
                    {
                              "type": "qcm",
                              "text": "Le code de déontologie protège :",
                              "options": [
                                        "Les patients ; La profession infirmière",
                                        "Les fraudeurs",
                                        "Les criminels"
                              ],
                              "answer": "Les patients ; La profession infirmière",
                              "explanation": "Le code garantit la qualité des soins et l’éthique professionnelle."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit :",
                              "options": [
                                        "Respecter l’hygiène ; Vérifier les prescriptions",
                                        "Accepter les fraudes",
                                        "Divulguer les secrets"
                              ],
                              "answer": "Respecter l’hygiène ; Vérifier les prescriptions",
                              "explanation": "Ces actions assurent la sécurité du patient."
                    },
                    {
                              "type": "qcm",
                              "text": "Les valeurs infirmières comprennent :",
                              "options": [
                                        "L’intégrité ; L’humanité ; La compétence professionnelle",
                                        "La corruption"
                              ],
                              "answer": "L’intégrité ; L’humanité ; La compétence professionnelle",
                              "explanation": "Ces valeurs guident les actions de l’infirmier."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit :",
                              "options": [
                                        "Respecter le secret professionnel ; Soulager la douleur ; Respecter la dignité humaine",
                                        "Discriminer les patients"
                              ],
                              "answer": "Respecter le secret professionnel ; Soulager la douleur ; Respecter la dignité humaine",
                              "explanation": "Ces devoirs assurent une prise en charge éthique et humaine."
                    },
                    {
                              "type": "qcm",
                              "text": "Les soins infirmiers doivent être :",
                              "options": [
                                        "Consciencieux ; Attentifs ; Scientifiques",
                                        "Violents"
                              ],
                              "answer": "Consciencieux ; Attentifs ; Scientifiques",
                              "explanation": "Les soins doivent respecter les bonnes pratiques professionnelles."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit respecter :",
                              "options": [
                                        "L’autonomie du patient ; La vie privée ; L’intégrité du patient",
                                        "Le favoritisme"
                              ],
                              "answer": "L’autonomie du patient ; La vie privée ; L’intégrité du patient",
                              "explanation": "Le respect de la personne est essentiel dans les soins."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier participe :",
                              "options": [
                                        "À la santé publique ; À l’éducation sanitaire ; À la protection des patients",
                                        "À la corruption"
                              ],
                              "answer": "À la santé publique ; À l’éducation sanitaire ; À la protection des patients",
                              "explanation": "L’infirmier joue un rôle majeur dans la société."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit éviter :",
                              "options": [
                                        "Les documents frauduleux ; Les avantages illicites ; Le charlatanisme",
                                        "Le respect du patient"
                              ],
                              "answer": "Les documents frauduleux ; Les avantages illicites ; Le charlatanisme",
                              "explanation": "Ces comportements sont contraires à la déontologie."
                    },
                    {
                              "type": "qcm",
                              "text": "Les qualités professionnelles incluent :",
                              "options": [
                                        "L’empathie ; La courtoisie ; L’honnêteté",
                                        "La haine"
                              ],
                              "answer": "L’empathie ; La courtoisie ; L’honnêteté",
                              "explanation": "Ces qualités améliorent la relation soignant-patient."
                    },
                    {
                              "type": "qcm",
                              "text": "Le dossier de soins infirmiers doit être :",
                              "options": [
                                        "Pertinent ; Actualisé ; Protégé",
                                        "Public"
                              ],
                              "answer": "Pertinent ; Actualisé ; Protégé",
                              "explanation": "Le dossier doit contenir des informations fiables et sécurisées."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit :",
                              "options": [
                                        "Respecter les protocoles ; Vérifier les prescriptions ; Protéger les données du patient",
                                        "Divulguer les secrets médicaux"
                              ],
                              "answer": "Respecter les protocoles ; Vérifier les prescriptions ; Protéger les données du patient",
                              "explanation": "Ces obligations garantissent la qualité des soins."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit faire preuve de :",
                              "options": [
                                        "Moralité ; Loyauté ; Humanité",
                                        "Violence"
                              ],
                              "answer": "Moralité ; Loyauté ; Humanité",
                              "explanation": "Ces principes sont indispensables à l’exercice de la profession infirmière."
                    }
          ]
},
{
          "id": "theorie-concept-sujet-1",
          "title": "Théorie et Concept - Sujet 1",
          "matter": "Théorie et Concept",
          "description": "Sujet 1 de théorie et concepts infirmiers.",
          "instructions": "Lis attentivement chaque question avant de répondre.",
          "duration": 30,
          "programmed": true,
          "openDate": "2026-01-01",
          "openTime": "00:00",
          "closeDate": "2030-12-31",
          "closeTime": "23:59",
          "marking": {"correct": 1, "wrong": -1, "empty": 0},
          "questions": [
                    {
                              "type": "qcd",
                              "text": "La santé selon l’OMS est uniquement l’absence de maladie.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Selon l’OMS, la santé est un état de bien-être physique, mental et social."
                    },
                    {
                              "type": "qcd",
                              "text": "L’homme est considéré comme un être bio-psycho-social.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "L’homme possède des dimensions biologiques, psychologiques et sociales."
                    },
                    {
                              "type": "qcd",
                              "text": "Les soins infirmiers concernent seulement les personnes malades.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Les soins infirmiers concernent aussi les personnes saines."
                    },
                    {
                              "type": "qcd",
                              "text": "Virginia Henderson a identifié 14 besoins fondamentaux.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Son modèle repose sur les 14 besoins fondamentaux de l’être humain."
                    },
                    {
                              "type": "qcd",
                              "text": "Le besoin de respirer est indispensable à la vie.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "L’oxygène est nécessaire au fonctionnement cellulaire."
                    },
                    {
                              "type": "qcd",
                              "text": "Les soins palliatifs visent à guérir totalement la maladie.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Ils visent surtout à soulager la souffrance."
                    },
                    {
                              "type": "qcd",
                              "text": "Dormir et se reposer est un besoin fondamental.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Le sommeil permet le repos physique et mental."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier n’a aucun rôle éducatif.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "L’éducation du patient fait partie des fonctions infirmières."
                    },
                    {
                              "type": "qcd",
                              "text": "Les émotions peuvent influencer la respiration.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Le stress et l’anxiété modifient la fréquence respiratoire."
                    },
                    {
                              "type": "qcd",
                              "text": "Les besoins fondamentaux sont identiques pour tous les êtres humains.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Ils sont universels même si leur satisfaction varie selon les individus."
                    },
                    {
                              "type": "qcd",
                              "text": "Le besoin d’éliminer concerne uniquement les urines.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Il concerne aussi les selles, la transpiration et l’expiration pulmonaire."
                    },
                    {
                              "type": "qcd",
                              "text": "Les soins préventifs visent à éviter l’apparition des maladies.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Ils permettent de maintenir un bon état de santé."
                    },
                    {
                              "type": "qcd",
                              "text": "L’homme peut être influencé par son environnement.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "L’environnement influence l’adaptation et le comportement humain."
                    },
                    {
                              "type": "qcd",
                              "text": "Le besoin de communiquer est inutile chez l’homme.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "La communication favorise les relations sociales et l’épanouissement."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier applique parfois les prescriptions médicales.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Cela fait partie du rôle délégué de l’infirmier."
                    },
                    {
                              "type": "qcd",
                              "text": "Les besoins de sécurité font partie de la pyramide de Maslow.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Ils viennent après les besoins physiologiques."
                    },
                    {
                              "type": "qcd",
                              "text": "La santé est un état dynamique.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Elle évolue constamment selon l’adaptation de l’individu."
                    },
                    {
                              "type": "qcd",
                              "text": "Le besoin de boire n’a aucun rapport avec l’équilibre du corps.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "L’eau maintient l’équilibre électrolytique et la température corporelle."
                    },
                    {
                              "type": "qcd",
                              "text": "Les soins infirmiers peuvent être curatifs, préventifs ou palliatifs.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Ce sont les trois grandes catégories de soins infirmiers."
                    },
                    {
                              "type": "qcd",
                              "text": "L’adaptation signifie être en désaccord avec son environnement.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "S’adapter signifie trouver un équilibre avec son environnement."
                    },
                    {
                              "type": "qcm",
                              "text": "Qui a défini les 14 besoins fondamentaux ?",
                              "options": [
                                        "Florence Nightingale",
                                        "Virginia Henderson",
                                        "Callista Roy",
                                        "Martha Rogers"
                              ],
                              "answer": "Virginia Henderson",
                              "explanation": "Virginia Henderson est l’auteure des 14 besoins fondamentaux."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin de respirer sert principalement à :",
                              "options": [
                                        "Produire des selles",
                                        "Fournir de l’oxygène au corps",
                                        "Dormir",
                                        "Marcher"
                              ],
                              "answer": "Fournir de l’oxygène au corps",
                              "explanation": "La respiration assure l’oxygénation cellulaire."
                    },
                    {
                              "type": "qcm",
                              "text": "Selon l’OMS, la santé est :",
                              "options": [
                                        "L’absence de douleur",
                                        "Un état de bien-être complet",
                                        "La richesse",
                                        "Une force physique"
                              ],
                              "answer": "Un état de bien-être complet",
                              "explanation": "La santé englobe le physique, le mental et le social."
                    },
                    {
                              "type": "qcm",
                              "text": "Le rôle délégué de l’infirmier consiste à :",
                              "options": [
                                        "Construire des hôpitaux",
                                        "Appliquer les prescriptions médicales",
                                        "Juger les patients",
                                        "Vendre des médicaments"
                              ],
                              "answer": "Appliquer les prescriptions médicales",
                              "explanation": "L’infirmier participe au traitement prescrit."
                    },
                    {
                              "type": "qcm",
                              "text": "Les soins palliatifs ont pour but principal de :",
                              "options": [
                                        "Guérir totalement",
                                        "Soulager la souffrance",
                                        "Vacciner",
                                        "Diagnostiquer"
                              ],
                              "answer": "Soulager la souffrance",
                              "explanation": "Ils améliorent le confort du patient."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin d’éliminer concerne :",
                              "options": [
                                        "Les déchets biologiques",
                                        "Les loisirs",
                                        "Les vêtements",
                                        "Les émotions uniquement"
                              ],
                              "answer": "Les déchets biologiques",
                              "explanation": "L’organisme élimine les substances inutiles."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin de dormir permet :",
                              "options": [
                                        "La fatigue",
                                        "Le repos de l’organisme",
                                        "L’agitation",
                                        "La maladie"
                              ],
                              "answer": "Le repos de l’organisme",
                              "explanation": "Le sommeil favorise la récupération physique et mentale."
                    },
                    {
                              "type": "qcm",
                              "text": "Le modèle de Callista Roy est basé sur :",
                              "options": [
                                        "L’adaptation",
                                        "La chirurgie",
                                        "Les médicaments",
                                        "Les radiographies"
                              ],
                              "answer": "L’adaptation",
                              "explanation": "Roy considère l’homme comme un être qui s’adapte."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin de sécurité selon Maslow appartient aux :",
                              "options": [
                                        "Besoins physiologiques",
                                        "Besoins secondaires",
                                        "Besoins de sûreté",
                                        "Besoins spirituels"
                              ],
                              "answer": "Besoins de sûreté",
                              "explanation": "Il concerne la protection et la sécurité."
                    },
                    {
                              "type": "qcm",
                              "text": "Les soins infirmiers ont pour but de :",
                              "options": [
                                        "Punir les malades",
                                        "Aider à maintenir ou restaurer la santé",
                                        "Créer la dépendance",
                                        "Isoler les patients"
                              ],
                              "answer": "Aider à maintenir ou restaurer la santé",
                              "explanation": "Les soins visent le bien-être et l’autonomie du patient."
                    },
                    {
                              "type": "qcm",
                              "text": "Les dimensions de l’homme comprennent :",
                              "options": [
                                        "Biologique ; Sociale",
                                        "Robotique",
                                        "Mécanique"
                              ],
                              "answer": "Biologique ; Sociale",
                              "explanation": "L’homme est un être bio-psycho-social."
                    },
                    {
                              "type": "qcm",
                              "text": "Les soins infirmiers peuvent être :",
                              "options": [
                                        "Préventifs ; Curatifs",
                                        "Illégaux",
                                        "Violents"
                              ],
                              "answer": "Préventifs ; Curatifs",
                              "explanation": "Les soins peuvent prévenir ou traiter les maladies."
                    },
                    {
                              "type": "qcm",
                              "text": "Les besoins physiologiques selon Maslow comprennent :",
                              "options": [
                                        "Manger ; Respirer",
                                        "Voyager",
                                        "Acheter"
                              ],
                              "answer": "Manger ; Respirer",
                              "explanation": "Ce sont des besoins indispensables à la vie."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin de dormir peut être influencé par :",
                              "options": [
                                        "Le stress ; Le bruit",
                                        "La couleur des chaussures",
                                        "Le parfum"
                              ],
                              "answer": "Le stress ; Le bruit",
                              "explanation": "Les émotions et l’environnement influencent le sommeil."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin d’éliminer concerne :",
                              "options": [
                                        "Les urines ; Les selles",
                                        "Les loisirs",
                                        "Les vêtements"
                              ],
                              "answer": "Les urines ; Les selles",
                              "explanation": "Ce besoin concerne l’élimination des déchets biologiques."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin de communiquer permet :",
                              "options": [
                                        "Les relations sociales ; L’épanouissement personnel",
                                        "L’isolement total",
                                        "Le refus des autres"
                              ],
                              "answer": "Les relations sociales ; L’épanouissement personnel",
                              "explanation": "La communication favorise les échanges humains."
                    },
                    {
                              "type": "qcm",
                              "text": "Les soins palliatifs visent :",
                              "options": [
                                        "Le soulagement de la douleur ; Le confort du patient",
                                        "La chirurgie esthétique",
                                        "La compétition sportive"
                              ],
                              "answer": "Le soulagement de la douleur ; Le confort du patient",
                              "explanation": "Ils améliorent la qualité de vie du patient."
                    },
                    {
                              "type": "qcm",
                              "text": "Le rôle propre de l’infirmier comprend :",
                              "options": [
                                        "L’exécution des soins ; La responsabilité des soins",
                                        "La vente de médicaments",
                                        "La publicité commerciale"
                              ],
                              "answer": "L’exécution des soins ; La responsabilité des soins",
                              "explanation": "L’infirmier organise et réalise les soins adaptés."
                    },
                    {
                              "type": "qcm",
                              "text": "L’environnement peut influencer :",
                              "options": [
                                        "La santé ; Le comportement",
                                        "Le groupe sanguin",
                                        "La taille des os"
                              ],
                              "answer": "La santé ; Le comportement",
                              "explanation": "L’environnement agit sur l’équilibre de l’individu."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin d’être propre concerne :",
                              "options": [
                                        "L’hygiène du corps ; La protection de la peau",
                                        "Les jeux vidéo",
                                        "Les bijoux"
                              ],
                              "answer": "L’hygiène du corps ; La protection de la peau",
                              "explanation": "Une bonne hygiène protège la santé."
                    },
                    {
                              "type": "qcm",
                              "text": "Les catégories de soins infirmiers sont :",
                              "options": [
                                        "Préventifs ; Curatifs ; Palliatifs",
                                        "Politiques"
                              ],
                              "answer": "Préventifs ; Curatifs ; Palliatifs",
                              "explanation": "Ce sont les trois grandes catégories de soins infirmiers."
                    },
                    {
                              "type": "qcm",
                              "text": "Les dimensions des soins infirmiers sont :",
                              "options": [
                                        "Technique ; Relationnelle ; Éducative",
                                        "Commerciale"
                              ],
                              "answer": "Technique ; Relationnelle ; Éducative",
                              "explanation": "Les soins associent compétence, relation et éducation."
                    },
                    {
                              "type": "qcm",
                              "text": "Les besoins fondamentaux selon Henderson comprennent :",
                              "options": [
                                        "Respirer ; Dormir ; Communiquer",
                                        "Voyager"
                              ],
                              "answer": "Respirer ; Dormir ; Communiquer",
                              "explanation": "Ces besoins sont indispensables à l’équilibre humain."
                    },
                    {
                              "type": "qcm",
                              "text": "Les besoins physiologiques incluent :",
                              "options": [
                                        "Manger ; Boire ; Éliminer",
                                        "Acheter"
                              ],
                              "answer": "Manger ; Boire ; Éliminer",
                              "explanation": "Ils assurent le fonctionnement normal de l’organisme."
                    },
                    {
                              "type": "qcm",
                              "text": "Les fonctions de l’infirmier comprennent :",
                              "options": [
                                        "Enseignement ; Recherche ; Traitement",
                                        "Commerce"
                              ],
                              "answer": "Enseignement ; Recherche ; Traitement",
                              "explanation": "L’infirmier intervient dans plusieurs domaines professionnels."
                    },
                    {
                              "type": "qcm",
                              "text": "Les facteurs influençant le sommeil peuvent être :",
                              "options": [
                                        "Le stress ; Les émotions ; Le bruit",
                                        "La couleur du ciel"
                              ],
                              "answer": "Le stress ; Les émotions ; Le bruit",
                              "explanation": "Les facteurs psychologiques et environnementaux influencent le repos."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin d’éviter les dangers comprend :",
                              "options": [
                                        "La sécurité physique ; La sécurité psychologique ; La prévention des accidents",
                                        "Les distractions inutiles"
                              ],
                              "answer": "La sécurité physique ; La sécurité psychologique ; La prévention des accidents",
                              "explanation": "L’individu doit être protégé contre les agressions internes et externes."
                    },
                    {
                              "type": "qcm",
                              "text": "Selon Virginia Henderson, les sources de difficulté peuvent être :",
                              "options": [
                                        "Le manque de force ; Le manque de volonté ; Le manque de connaissance",
                                        "Le manque d’argent uniquement"
                              ],
                              "answer": "Le manque de force ; Le manque de volonté ; Le manque de connaissance",
                              "explanation": "Ces difficultés empêchent la satisfaction des besoins fondamentaux."
                    },
                    {
                              "type": "qcm",
                              "text": "Le besoin de manger et boire permet :",
                              "options": [
                                        "La croissance ; L’énergie ; Le maintien de la vie",
                                        "Le luxe"
                              ],
                              "answer": "La croissance ; L’énergie ; Le maintien de la vie",
                              "explanation": "L’alimentation est indispensable à l’organisme."
                    },
                    {
                              "type": "qcm",
                              "text": "Les besoins de Maslow comprennent :",
                              "options": [
                                        "Les besoins physiologiques ; Les besoins d’estime ; Les besoins d’amour et d’appartenance",
                                        "Les besoins de compétition"
                              ],
                              "answer": "Les besoins physiologiques ; Les besoins d’estime ; Les besoins d’amour et d’appartenance",
                              "explanation": "Ces besoins font partie de la pyramide de Maslow."
                    }
          ]
},
{
          "id": "theorie-concept-sujet-2",
          "title": "Théorie et Concept - Sujet 2",
          "matter": "Théorie et Concept",
          "description": "Hygiène hospitalière et prévention des infections.",
          "instructions": "Lis attentivement chaque question avant de répondre.",
          "duration": 30,
          "programmed": true,
          "openDate": "2026-01-01",
          "openTime": "00:00",
          "closeDate": "2030-12-31",
          "closeTime": "23:59",
          "marking": {"correct": 1, "wrong": -1, "empty": 0},
          "questions": [
                    {
                              "type": "qcd",
                              "text": "Le lavage des mains est une mesure essentielle de prévention des infections.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "L’hygiène des mains réduit la transmission des microbes."
                    },
                    {
                              "type": "qcd",
                              "text": "Les gants remplacent totalement le lavage des mains.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Le lavage des mains reste obligatoire avant et après le port des gants."
                    },
                    {
                              "type": "qcd",
                              "text": "Les déchets biomédicaux doivent être triés.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Le tri permet de limiter les risques de contamination."
                    },
                    {
                              "type": "qcd",
                              "text": "Une aiguille utilisée peut être recapuchonnée à la main.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Cela augmente le risque d’accident d’exposition au sang."
                    },
                    {
                              "type": "qcd",
                              "text": "Le port de masque peut prévenir certaines infections respiratoires.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Le masque limite la propagation des germes."
                    },
                    {
                              "type": "qcd",
                              "text": "L’eau propre est importante dans l’hygiène hospitalière.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Une eau contaminée favorise les infections."
                    },
                    {
                              "type": "qcd",
                              "text": "Les infections nosocomiales sont contractées à l’hôpital.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Elles apparaissent durant ou après une hospitalisation."
                    },
                    {
                              "type": "qcd",
                              "text": "Le matériel réutilisable ne nécessite jamais de désinfection.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Tout matériel doit être nettoyé et désinfecté."
                    },
                    {
                              "type": "qcd",
                              "text": "Le nettoyage des surfaces réduit les risques infectieux.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Les microbes peuvent survivre sur les surfaces."
                    },
                    {
                              "type": "qcd",
                              "text": "Les mains sales peuvent transmettre des maladies.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Les mains sont un vecteur important de contamination."
                    },
                    {
                              "type": "qcd",
                              "text": "Le port des équipements de protection est inutile.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Ils protègent le personnel et les patients."
                    },
                    {
                              "type": "qcd",
                              "text": "La stérilisation détruit les microbes.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Elle élimine les micro-organismes présents."
                    },
                    {
                              "type": "qcd",
                              "text": "Les objets piquants doivent être jetés dans des boîtes sécurisées.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Cela évite les blessures et contaminations."
                    },
                    {
                              "type": "qcd",
                              "text": "Le port de blouse peut limiter les contaminations.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "La blouse protège les vêtements et réduit la transmission."
                    },
                    {
                              "type": "qcd",
                              "text": "L’hygiène hospitalière concerne uniquement les infirmiers.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Tous les professionnels de santé sont concernés."
                    },
                    {
                              "type": "qcd",
                              "text": "Le nettoyage des mains doit durer quelques secondes seulement.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "explanation": "Une durée suffisante est nécessaire pour éliminer les microbes."
                    },
                    {
                              "type": "qcd",
                              "text": "Les infections peuvent se transmettre par le sang.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Certaines maladies sont transmissibles par contact sanguin."
                    },
                    {
                              "type": "qcd",
                              "text": "Le matériel stérile doit rester protégé jusqu’à son utilisation.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Cela évite toute contamination."
                    },
                    {
                              "type": "qcd",
                              "text": "Le non-respect des règles d’hygiène peut mettre les patients en danger.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Une mauvaise hygiène favorise les infections."
                    },
                    {
                              "type": "qcd",
                              "text": "Les solutions hydroalcooliques servent à l’hygiène des mains.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "explanation": "Elles détruisent rapidement les microbes."
                    },
                    {
                              "type": "qcm",
                              "text": "Quel est le moyen le plus simple de prévenir les infections ?",
                              "options": [
                                        "Le téléphone",
                                        "Le lavage des mains",
                                        "Les chaussures",
                                        "Les bijoux"
                              ],
                              "answer": "Le lavage des mains",
                              "explanation": "L’hygiène des mains est la première mesure de prévention."
                    },
                    {
                              "type": "qcm",
                              "text": "Les déchets piquants doivent être jetés dans :",
                              "options": [
                                        "Une poubelle normale",
                                        "Une boîte de sécurité",
                                        "Un sac en papier",
                                        "Une bassine"
                              ],
                              "answer": "Une boîte de sécurité",
                              "explanation": "Cela réduit les risques d’accidents."
                    },
                    {
                              "type": "qcm",
                              "text": "Une infection contractée à l’hôpital est appelée :",
                              "options": [
                                        "Infection alimentaire",
                                        "Infection nosocomiale",
                                        "Infection tropicale",
                                        "Infection héréditaire"
                              ],
                              "answer": "Infection nosocomiale",
                              "explanation": "Elle est acquise au cours des soins."
                    },
                    {
                              "type": "qcm",
                              "text": "Le port de gants sert principalement à :",
                              "options": [
                                        "Décorer les mains",
                                        "Protéger contre les contaminations",
                                        "Réchauffer les doigts",
                                        "Écrire rapidement"
                              ],
                              "answer": "Protéger contre les contaminations",
                              "explanation": "Les gants réduisent le risque de contact avec les microbes."
                    },
                    {
                              "type": "qcm",
                              "text": "La stérilisation permet :",
                              "options": [
                                        "De colorer le matériel",
                                        "De détruire les microbes",
                                        "De refroidir les instruments",
                                        "De ranger le matériel"
                              ],
                              "answer": "De détruire les microbes",
                              "explanation": "Elle élimine les agents infectieux."
                    },
                    {
                              "type": "qcm",
                              "text": "Quel équipement protège les voies respiratoires ?",
                              "options": [
                                        "Le masque",
                                        "Le stylo",
                                        "Les lunettes de soleil",
                                        "Le drap"
                              ],
                              "answer": "Le masque",
                              "explanation": "Le masque limite les projections respiratoires."
                    },
                    {
                              "type": "qcm",
                              "text": "L’hygiène hospitalière vise à :",
                              "options": [
                                        "Favoriser les infections",
                                        "Prévenir les contaminations",
                                        "Décorer les services",
                                        "Remplacer les médicaments"
                              ],
                              "answer": "Prévenir les contaminations",
                              "explanation": "Elle protège les patients et le personnel."
                    },
                    {
                              "type": "qcm",
                              "text": "Le matériel contaminé doit être :",
                              "options": [
                                        "Réutilisé immédiatement",
                                        "Nettoyé et désinfecté",
                                        "Caché",
                                        "Ignoré"
                              ],
                              "answer": "Nettoyé et désinfecté",
                              "explanation": "Cela évite la propagation des microbes."
                    },
                    {
                              "type": "qcm",
                              "text": "La solution hydroalcoolique sert à :",
                              "options": [
                                        "Nettoyer les sols",
                                        "Désinfecter les mains",
                                        "Nettoyer les fenêtres",
                                        "Colorer les gants"
                              ],
                              "answer": "Désinfecter les mains",
                              "explanation": "Elle réduit rapidement les germes présents."
                    },
                    {
                              "type": "qcm",
                              "text": "Le non-respect de l’hygiène peut provoquer :",
                              "options": [
                                        "Des infections",
                                        "Des récompenses",
                                        "Des décorations",
                                        "Des loisirs"
                              ],
                              "answer": "Des infections",
                              "explanation": "Une mauvaise hygiène augmente les risques infectieux."
                    },
                    {
                              "type": "qcm",
                              "text": "Les moyens de prévention des infections incluent :",
                              "options": [
                                        "Le lavage des mains ; Le port de gants",
                                        "Les bijoux sales",
                                        "Les aiguilles usagées au sol"
                              ],
                              "answer": "Le lavage des mains ; Le port de gants",
                              "explanation": "Ces mesures réduisent les contaminations."
                    },
                    {
                              "type": "qcm",
                              "text": "Les équipements de protection comprennent :",
                              "options": [
                                        "Les masques ; Les blouses",
                                        "Les téléphones",
                                        "Les montres"
                              ],
                              "answer": "Les masques ; Les blouses",
                              "explanation": "Ils protègent contre les infections."
                    },
                    {
                              "type": "qcm",
                              "text": "Les infections peuvent se transmettre par :",
                              "options": [
                                        "Le sang ; Les mains sales",
                                        "Les cahiers",
                                        "Les chaussures propres"
                              ],
                              "answer": "Le sang ; Les mains sales",
                              "explanation": "Ces voies favorisent la contamination."
                    },
                    {
                              "type": "qcm",
                              "text": "Les règles d’hygiène concernent :",
                              "options": [
                                        "Les soignants ; Les patients",
                                        "Les murs uniquement",
                                        "Les voitures"
                              ],
                              "answer": "Les soignants ; Les patients",
                              "explanation": "Tous participent à la prévention des infections."
                    },
                    {
                              "type": "qcm",
                              "text": "Le matériel stérile doit être :",
                              "options": [
                                        "Protégé ; Conservé proprement",
                                        "Jeté au sol",
                                        "Mélangé au matériel sale"
                              ],
                              "answer": "Protégé ; Conservé proprement",
                              "explanation": "Cela maintient sa stérilité."
                    },
                    {
                              "type": "qcm",
                              "text": "Le nettoyage des surfaces permet :",
                              "options": [
                                        "De réduire les microbes ; D’éviter certaines infections",
                                        "De colorer les murs",
                                        "De fabriquer des médicaments"
                              ],
                              "answer": "De réduire les microbes ; D’éviter certaines infections",
                              "explanation": "Les surfaces sales favorisent les contaminations."
                    },
                    {
                              "type": "qcm",
                              "text": "Les déchets biomédicaux doivent être :",
                              "options": [
                                        "Triés ; Éliminés correctement",
                                        "Abandonnés",
                                        "Réutilisés"
                              ],
                              "answer": "Triés ; Éliminés correctement",
                              "explanation": "Une bonne gestion protège la santé publique."
                    },
                    {
                              "type": "qcm",
                              "text": "Les gants servent à :",
                              "options": [
                                        "Protéger les mains ; Réduire les contaminations",
                                        "Décorer les doigts",
                                        "Remplacer l’hygiène des mains"
                              ],
                              "answer": "Protéger les mains ; Réduire les contaminations",
                              "explanation": "Ils limitent les contacts à risque."
                    },
                    {
                              "type": "qcm",
                              "text": "Une bonne hygiène hospitalière protège :",
                              "options": [
                                        "Les patients ; Le personnel",
                                        "Les murs",
                                        "Les cahiers"
                              ],
                              "answer": "Les patients ; Le personnel",
                              "explanation": "Elle réduit les infections dans les services."
                    },
                    {
                              "type": "qcm",
                              "text": "Les solutions hydroalcooliques permettent :",
                              "options": [
                                        "Une désinfection rapide ; La réduction des microbes",
                                        "La coloration des mains",
                                        "La fabrication des gants"
                              ],
                              "answer": "Une désinfection rapide ; La réduction des microbes",
                              "explanation": "Elles sont efficaces contre de nombreux germes."
                    },
                    {
                              "type": "qcm",
                              "text": "Les mesures d’hygiène comprennent :",
                              "options": [
                                        "Le lavage des mains ; Le port de masque ; Le nettoyage des surfaces",
                                        "Le partage des aiguilles"
                              ],
                              "answer": "Le lavage des mains ; Le port de masque ; Le nettoyage des surfaces",
                              "explanation": "Ces mesures limitent les contaminations."
                    },
                    {
                              "type": "qcm",
                              "text": "Les infections nosocomiales peuvent être favorisées par :",
                              "options": [
                                        "Les mains sales ; Le matériel contaminé ; Le non-respect des règles d’hygiène",
                                        "Les soins bien réalisés"
                              ],
                              "answer": "Les mains sales ; Le matériel contaminé ; Le non-respect des règles d’hygiène",
                              "explanation": "Ces facteurs augmentent les risques infectieux."
                    },
                    {
                              "type": "qcm",
                              "text": "Les équipements de protection individuelle comprennent :",
                              "options": [
                                        "Les gants ; Les masques ; Les blouses",
                                        "Les bijoux"
                              ],
                              "answer": "Les gants ; Les masques ; Les blouses",
                              "explanation": "Ils protègent contre les infections."
                    },
                    {
                              "type": "qcm",
                              "text": "Les objectifs de l’hygiène hospitalière sont :",
                              "options": [
                                        "Prévenir les infections ; Protéger les patients ; Protéger le personnel",
                                        "Favoriser les microbes"
                              ],
                              "answer": "Prévenir les infections ; Protéger les patients ; Protéger le personnel",
                              "explanation": "L’hygiène réduit les risques de contamination."
                    },
                    {
                              "type": "qcm",
                              "text": "Le lavage des mains doit être effectué :",
                              "options": [
                                        "Avant les soins ; Après les soins ; Après contact avec un produit biologique",
                                        "Une fois par semaine"
                              ],
                              "answer": "Avant les soins ; Après les soins ; Après contact avec un produit biologique",
                              "explanation": "Les mains transmettent facilement les microbes."
                    },
                    {
                              "type": "qcm",
                              "text": "Les déchets biomédicaux incluent :",
                              "options": [
                                        "Les aiguilles usagées ; Les compresses souillées ; Les seringues utilisées",
                                        "Les cahiers scolaires"
                              ],
                              "answer": "Les aiguilles usagées ; Les compresses souillées ; Les seringues utilisées",
                              "explanation": "Ces déchets présentent un risque infectieux."
                    },
                    {
                              "type": "qcm",
                              "text": "Les moyens de protection contre les infections sanguines sont :",
                              "options": [
                                        "Le port de gants ; L’élimination correcte des aiguilles ; Le lavage des mains",
                                        "Le partage des seringues"
                              ],
                              "answer": "Le port de gants ; L’élimination correcte des aiguilles ; Le lavage des mains",
                              "explanation": "Ces mesures réduisent les risques de contamination."
                    },
                    {
                              "type": "qcm",
                              "text": "Les conséquences d’une mauvaise hygiène hospitalière peuvent être :",
                              "options": [
                                        "Les infections ; Les contaminations croisées ; Les accidents d’exposition au sang",
                                        "L’amélioration des soins"
                              ],
                              "answer": "Les infections ; Les contaminations croisées ; Les accidents d’exposition au sang",
                              "explanation": "Le non-respect des règles expose patients et soignants."
                    },
                    {
                              "type": "qcm",
                              "text": "Les qualités d’un bon matériel stérile sont :",
                              "options": [
                                        "Propre ; Protégé ; Sans microbes",
                                        "Sale"
                              ],
                              "answer": "Propre ; Protégé ; Sans microbes",
                              "explanation": "Le matériel doit rester stérile jusqu’à son utilisation."
                    },
                    {
                              "type": "qcm",
                              "text": "Les bonnes pratiques hospitalières incluent :",
                              "options": [
                                        "Le tri des déchets ; Le respect des mesures d’hygiène ; La désinfection du matériel",
                                        "Le non-respect des protocoles"
                              ],
                              "answer": "Le tri des déchets ; Le respect des mesures d’hygiène ; La désinfection du matériel",
                              "explanation": "Ces pratiques garantissent la sécurité des soins."
                    }
          ]
},
{
          "id": "legislation-du-travail-sujet-1",
          "title": "Législation du Travail - Sujet 1",
          "matter": "Législation du Travail",
          "description": "Évaluation sur le contrat de travail, les droits et obligations du salarié et de l’employeur, le salaire, les congés et la rupture du contrat.",
          "instructions": "Lis attentivement chaque question. Certaines questions peuvent avoir plusieurs bonnes réponses.",
          "duration": 30,
          "programmed": true,
          "openDate": "2026-01-01",
          "openTime": "00:00",
          "closeDate": "2030-12-31",
          "closeTime": "23:59",
          "marking": {"correct": 1, "wrong": -1, "empty": 0},
          "questions": [
                    {
                              "type": "qcd",
                              "text": "Le contrat de travail est un accord entre un employeur et un salarié.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le contrat de travail est un accord par lequel une personne travaille sous l’autorité d’un employeur contre rémunération."
                    },
                    {
                              "type": "qcd",
                              "text": "Le salaire est la contrepartie du travail fourni.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le salaire représente la rémunération versée au travailleur pour le travail effectué."
                    },
                    {
                              "type": "qcd",
                              "text": "Le contrat d’apprentissage peut durer plus de 10 ans.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "La durée du contrat d’apprentissage ne peut dépasser 3 ans, sauf prorogation limitée."
                    },
                    {
                              "type": "qcd",
                              "text": "Le travailleur doit respecter le règlement intérieur de l’entreprise.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le salarié a l’obligation de respecter le règlement intérieur de l’entreprise."
                    },
                    {
                              "type": "qcd",
                              "text": "Les heures supplémentaires sont interdites par le code du travail.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Les heures supplémentaires sont autorisées mais elles sont réglementées et majorées."
                    },
                    {
                              "type": "qcd",
                              "text": "Le contrat à durée indéterminée est appelé CDI.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "CDI signifie Contrat à Durée Indéterminée."
                    },
                    {
                              "type": "qcd",
                              "text": "Le repos hebdomadaire est obligatoire.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "La loi prévoit un repos hebdomadaire obligatoire de 24 heures consécutives."
                    },
                    {
                              "type": "qcd",
                              "text": "Le salaire peut être payé dans un débit de boisson.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Le paiement du salaire dans un débit de boisson est interdit par la loi."
                    },
                    {
                              "type": "qcd",
                              "text": "Le licenciement peut être individuel ou collectif.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le licenciement peut concerner une seule personne ou plusieurs travailleurs."
                    },
                    {
                              "type": "qcd",
                              "text": "Le contrat stage-école doit être constaté par écrit.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le contrat stage-école doit obligatoirement être rédigé par écrit."
                    },
                    {
                              "type": "qcm",
                              "text": "Quel est l’élément principal du contrat de travail ?",
                              "options": [
                                        "La maladie",
                                        "La rémunération",
                                        "Le voyage",
                                        "Le repos"
                              ],
                              "answer": "La rémunération",
                              "correct": "La rémunération",
                              "explanation": "La rémunération fait partie des éléments essentiels du contrat de travail."
                    },
                    {
                              "type": "qcm",
                              "text": "Quelle est la durée normale du travail dans le secteur non agricole ?",
                              "options": [
                                        "30 heures",
                                        "35 heures",
                                        "40 heures",
                                        "50 heures"
                              ],
                              "answer": "40 heures",
                              "correct": "40 heures",
                              "explanation": "La durée légale du travail dans le secteur non agricole est fixée à 40 heures par semaine."
                    },
                    {
                              "type": "qcm",
                              "text": "Le contrat à durée indéterminée est appelé :",
                              "options": [
                                        "CDD",
                                        "CDI",
                                        "CTT",
                                        "CTP"
                              ],
                              "answer": "CDI",
                              "correct": "CDI",
                              "explanation": "Le CDI est un contrat dont la durée n’est pas fixée à l’avance."
                    },
                    {
                              "type": "qcm",
                              "text": "Le contrat d’apprentissage doit être :",
                              "options": [
                                        "Oral",
                                        "Verbal",
                                        "Écrit",
                                        "Facultatif"
                              ],
                              "answer": "Écrit",
                              "correct": "Écrit",
                              "explanation": "Le contrat d’apprentissage doit être constaté par écrit pour être valide."
                    },
                    {
                              "type": "qcm",
                              "text": "Quel organe contrôle l’application du droit du travail ?",
                              "options": [
                                        "La mairie",
                                        "L’inspection du travail",
                                        "L’école",
                                        "Le tribunal militaire"
                              ],
                              "answer": "L’inspection du travail",
                              "correct": "L’inspection du travail",
                              "explanation": "L’inspection du travail veille au respect des lois sociales."
                    },
                    {
                              "type": "qcm",
                              "text": "Le salaire doit être payé en :",
                              "options": [
                                        "Marchandise",
                                        "Alcool",
                                        "Monnaie légale",
                                        "Nourriture uniquement"
                              ],
                              "answer": "Monnaie légale",
                              "correct": "Monnaie légale",
                              "explanation": "Le salaire doit être payé en monnaie ayant cours légal."
                    },
                    {
                              "type": "qcm",
                              "text": "La période d’essai des travailleurs payés au mois est de :",
                              "options": [
                                        "8 jours",
                                        "15 jours",
                                        "1 mois",
                                        "6 mois"
                              ],
                              "answer": "1 mois",
                              "correct": "1 mois",
                              "explanation": "Pour les travailleurs payés au mois, la durée d’essai est fixée à un mois."
                    },
                    {
                              "type": "qcm",
                              "text": "Les heures supplémentaires commencent à partir de :",
                              "options": [
                                        "35e heure",
                                        "40e heure",
                                        "41e heure",
                                        "50e heure"
                              ],
                              "answer": "41e heure",
                              "correct": "41e heure",
                              "explanation": "Les heures supplémentaires sont comptabilisées à partir de la 41e heure."
                    },
                    {
                              "type": "qcm",
                              "text": "Le contrat de travail temporaire est aussi appelé :",
                              "options": [
                                        "Contrat saisonnier",
                                        "Contrat missionnaire",
                                        "Contrat scolaire",
                                        "Contrat agricole"
                              ],
                              "answer": "Contrat missionnaire",
                              "correct": "Contrat missionnaire",
                              "explanation": "Le travailleur temporaire est aussi appelé missionnaire ou intérimaire."
                    },
                    {
                              "type": "qcm",
                              "text": "Le repos hebdomadaire est généralement accordé :",
                              "options": [
                                        "Le lundi",
                                        "Le mercredi",
                                        "Le dimanche",
                                        "Le vendredi"
                              ],
                              "answer": "Le dimanche",
                              "correct": "Le dimanche",
                              "explanation": "Le repos hebdomadaire est en principe accordé le dimanche."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont les droits du travailleur ?",
                              "options": [
                                        "Recevoir un salaire",
                                        "Respect de la vie privée",
                                        "Voler l’entreprise",
                                        "Refuser tout travail"
                              ],
                              "answers": [
                                        "Recevoir un salaire",
                                        "Respect de la vie privée"
                              ],
                              "correct": [
                                        "Recevoir un salaire",
                                        "Respect de la vie privée"
                              ],
                              "explanation": "Le travailleur a droit au salaire et au respect de sa vie privée."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des contrats du pré-emploi ?",
                              "options": [
                                        "Contrat d’apprentissage",
                                        "Contrat stage-école",
                                        "Contrat de mariage",
                                        "Contrat commercial"
                              ],
                              "answers": [
                                        "Contrat d’apprentissage",
                                        "Contrat stage-école"
                              ],
                              "correct": [
                                        "Contrat d’apprentissage",
                                        "Contrat stage-école"
                              ],
                              "explanation": "Les contrats du pré-emploi comprennent notamment le contrat d’apprentissage et le stage-école."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des pouvoirs de l’employeur ?",
                              "options": [
                                        "Donner des ordres",
                                        "Sanctionner",
                                        "Voler les travailleurs",
                                        "Supprimer les salaires"
                              ],
                              "answers": [
                                        "Donner des ordres",
                                        "Sanctionner"
                              ],
                              "correct": [
                                        "Donner des ordres",
                                        "Sanctionner"
                              ],
                              "explanation": "L’employeur possède un pouvoir de direction et de sanction."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des cas de suspension du contrat de travail ?",
                              "options": [
                                        "Maladie",
                                        "Congé de formation",
                                        "Vacances touristiques",
                                        "Achat de véhicule"
                              ],
                              "answers": [
                                        "Maladie",
                                        "Congé de formation"
                              ],
                              "correct": [
                                        "Maladie",
                                        "Congé de formation"
                              ],
                              "explanation": "La maladie et le congé de formation peuvent suspendre le contrat de travail."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des types de contrat de travail ?",
                              "options": [
                                        "CDD",
                                        "CDI",
                                        "Passeport",
                                        "Assurance"
                              ],
                              "answers": [
                                        "CDD",
                                        "CDI"
                              ],
                              "correct": [
                                        "CDD",
                                        "CDI"
                              ],
                              "explanation": "Le CDD et le CDI sont des contrats de travail reconnus par la loi."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des jours fériés chômés et payés ?",
                              "options": [
                                        "1er mai",
                                        "7 août",
                                        "Noël",
                                        "Ramadan"
                              ],
                              "answers": [
                                        "1er mai",
                                        "7 août"
                              ],
                              "correct": [
                                        "1er mai",
                                        "7 août"
                              ],
                              "explanation": "Le 1er mai et le 7 août sont des jours fériés chômés et payés."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des obligations du salarié ?",
                              "options": [
                                        "Respecter le règlement intérieur",
                                        "Exécuter le travail avec soin",
                                        "Quitter sans prévenir",
                                        "Détruire le matériel"
                              ],
                              "answers": [
                                        "Respecter le règlement intérieur",
                                        "Exécuter le travail avec soin"
                              ],
                              "correct": [
                                        "Respecter le règlement intérieur",
                                        "Exécuter le travail avec soin"
                              ],
                              "explanation": "Le salarié doit respecter le règlement intérieur et accomplir correctement son travail."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels éléments entrent dans le calcul du salaire ?",
                              "options": [
                                        "Salaire de base",
                                        "Primes",
                                        "Sanctions",
                                        "Absences injustifiées"
                              ],
                              "answers": [
                                        "Salaire de base",
                                        "Primes"
                              ],
                              "correct": [
                                        "Salaire de base",
                                        "Primes"
                              ],
                              "explanation": "Le salaire comprend le salaire de base et certains accessoires comme les primes."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des types de repos reconnus par la loi ?",
                              "options": [
                                        "Repos hebdomadaire",
                                        "Jours fériés",
                                        "Repos scolaire",
                                        "Repos militaire"
                              ],
                              "answers": [
                                        "Repos hebdomadaire",
                                        "Jours fériés"
                              ],
                              "correct": [
                                        "Repos hebdomadaire",
                                        "Jours fériés"
                              ],
                              "explanation": "La loi reconnaît le repos hebdomadaire et les jours fériés."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont les éléments constitutifs du contrat de travail ?",
                              "options": [
                                        "Activité",
                                        "Rémunération",
                                        "Voyage",
                                        "Lien de subordination"
                              ],
                              "answers": [
                                        "Activité",
                                        "Lien de subordination"
                              ],
                              "correct": [
                                        "Activité",
                                        "Lien de subordination"
                              ],
                              "explanation": "Les éléments essentiels du contrat comprennent l’activité et le lien de subordination. La rémunération est également un élément fondamental."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des caractères du contrat de travail ?",
                              "options": [
                                        "Contrat consensuel",
                                        "Contrat synallagmatique",
                                        "Contrat à titre onéreux",
                                        "Contrat médical"
                              ],
                              "answers": [
                                        "Contrat consensuel",
                                        "Contrat synallagmatique",
                                        "Contrat à titre onéreux"
                              ],
                              "correct": [
                                        "Contrat consensuel",
                                        "Contrat synallagmatique",
                                        "Contrat à titre onéreux"
                              ],
                              "explanation": "Le contrat de travail est consensuel, synallagmatique et à titre onéreux."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des obligations de l’employeur ?",
                              "options": [
                                        "Payer le salaire",
                                        "Assurer la sécurité des travailleurs",
                                        "Fournir le travail convenu",
                                        "Supprimer les congés"
                              ],
                              "answers": [
                                        "Payer le salaire",
                                        "Assurer la sécurité des travailleurs",
                                        "Fournir le travail convenu"
                              ],
                              "correct": [
                                        "Payer le salaire",
                                        "Assurer la sécurité des travailleurs",
                                        "Fournir le travail convenu"
                              ],
                              "explanation": "L’employeur doit rémunérer le salarié, assurer sa sécurité et fournir le travail prévu."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des types de contrats d’emploi ?",
                              "options": [
                                        "CDD",
                                        "CDI",
                                        "Contrat temporaire",
                                        "Contrat religieux"
                              ],
                              "answers": [
                                        "CDD",
                                        "CDI",
                                        "Contrat temporaire"
                              ],
                              "correct": [
                                        "CDD",
                                        "CDI",
                                        "Contrat temporaire"
                              ],
                              "explanation": "Le CDD, le CDI et le contrat temporaire sont des contrats reconnus en droit du travail."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des avantages du salarié ?",
                              "options": [
                                        "Congés payés",
                                        "Salaire",
                                        "Respect de la dignité",
                                        "Travail forcé"
                              ],
                              "answers": [
                                        "Congés payés",
                                        "Salaire",
                                        "Respect de la dignité"
                              ],
                              "correct": [
                                        "Congés payés",
                                        "Salaire",
                                        "Respect de la dignité"
                              ],
                              "explanation": "Le salarié bénéficie du salaire, des congés payés et du respect de sa dignité."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des motifs de rupture du contrat ?",
                              "options": [
                                        "Force majeure",
                                        "Accord des parties",
                                        "Faute lourde",
                                        "Amitié"
                              ],
                              "answers": [
                                        "Force majeure",
                                        "Accord des parties",
                                        "Faute lourde"
                              ],
                              "correct": [
                                        "Force majeure",
                                        "Accord des parties",
                                        "Faute lourde"
                              ],
                              "explanation": "Le contrat peut être rompu pour force majeure, accord commun ou faute lourde."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des éléments accessoires du salaire ?",
                              "options": [
                                        "Primes",
                                        "Gratifications",
                                        "Avantages en nature",
                                        "Punition"
                              ],
                              "answers": [
                                        "Primes",
                                        "Gratifications",
                                        "Avantages en nature"
                              ],
                              "correct": [
                                        "Primes",
                                        "Gratifications",
                                        "Avantages en nature"
                              ],
                              "explanation": "Les accessoires du salaire comprennent les primes, gratifications et avantages en nature."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des types de congés ?",
                              "options": [
                                        "Congé de formation",
                                        "Congé annuel",
                                        "Congé syndical",
                                        "Congé disciplinaire automatique"
                              ],
                              "answers": [
                                        "Congé de formation",
                                        "Congé annuel",
                                        "Congé syndical"
                              ],
                              "correct": [
                                        "Congé de formation",
                                        "Congé annuel",
                                        "Congé syndical"
                              ],
                              "explanation": "Le droit du travail reconnaît plusieurs formes de congés, dont les congés annuels, syndicaux et de formation."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des droits de l’employeur ?",
                              "options": [
                                        "Embaucher",
                                        "Licencier",
                                        "Donner des ordres",
                                        "Frapper les salariés"
                              ],
                              "answers": [
                                        "Embaucher",
                                        "Licencier",
                                        "Donner des ordres"
                              ],
                              "correct": [
                                        "Embaucher",
                                        "Licencier",
                                        "Donner des ordres"
                              ],
                              "explanation": "L’employeur peut embaucher, licencier et donner des ordres dans le cadre légal."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des cas de suspension du contrat dus au salarié ?",
                              "options": [
                                        "Maladie",
                                        "Service militaire",
                                        "Congé de formation",
                                        "Refus de travailler sans raison"
                              ],
                              "answers": [
                                        "Maladie",
                                        "Service militaire",
                                        "Congé de formation"
                              ],
                              "correct": [
                                        "Maladie",
                                        "Service militaire",
                                        "Congé de formation"
                              ],
                              "explanation": "La maladie, le service militaire et le congé de formation peuvent suspendre le contrat."
                    },
                    {
                              "type": "qcm",
                              "text": "Quels sont des éléments liés aux heures supplémentaires ?",
                              "options": [
                                        "Majoration du salaire",
                                        "Travail au-delà de la durée normale",
                                        "Autorisation selon les règles",
                                        "Suppression du salaire"
                              ],
                              "answers": [
                                        "Majoration du salaire",
                                        "Travail au-delà de la durée normale",
                                        "Autorisation selon les règles"
                              ],
                              "correct": [
                                        "Majoration du salaire",
                                        "Travail au-delà de la durée normale",
                                        "Autorisation selon les règles"
                              ],
                              "explanation": "Les heures supplémentaires sont effectuées au-delà de la durée normale et donnent droit à une majoration salariale."
                    }
          ]
}
      ,
{
          "id": "legislation-travail-2",
          "title": "Législation du Travail - Sujet 2",
          "matter": "Législation du Travail",
          "description": "Deuxième sujet de composition sur le contrat de travail, les obligations, le salaire, le repos, les congés et la rupture du contrat.",
          "instructions": "Lis attentivement chaque question. Certaines questions peuvent avoir plusieurs bonnes réponses.",
          "duration": 30,
          "programmed": true,
          "openDate": "2026-05-10",
          "openTime": "00:00",
          "closeDate": "2030-12-31",
          "closeTime": "23:59",
          "marking": {
                    "correct": 1,
                    "wrong": -1,
                    "empty": 0
          },
          "questions": [
                    {
                              "type": "qcd",
                              "text": "Le contrat de travail est un accord entre un employeur et un salarié.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le contrat de travail lie un employeur et un salarié moyennant rémunération."
                    },
                    {
                              "type": "qcd",
                              "text": "Le salaire peut être payé dans un débit de boisson.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Le paiement du salaire dans un débit de boisson est interdit par la loi."
                    },
                    {
                              "type": "qcd",
                              "text": "Le lien de subordination est un élément constitutif du contrat de travail.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le salarié travaille sous l’autorité et le contrôle de l’employeur."
                    },
                    {
                              "type": "qcd",
                              "text": "Le contrat d’apprentissage doit être constaté par écrit.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "La loi exige un écrit pour la validité du contrat d’apprentissage."
                    },
                    {
                              "type": "qcd",
                              "text": "Le contrat à durée déterminée peut être verbal uniquement.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Le CDD doit être rédigé par écrit."
                    },
                    {
                              "type": "qcd",
                              "text": "La durée normale du travail dans le secteur non agricole est de 40 heures par semaine.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "La durée légale hebdomadaire est fixée à 40 heures."
                    },
                    {
                              "type": "qcd",
                              "text": "Les heures supplémentaires donnent droit à une majoration de salaire.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Les heures effectuées au-delà de la durée normale sont majorées."
                    },
                    {
                              "type": "qcd",
                              "text": "Le travail de nuit est autorisé pour les travailleurs de moins de 18 ans.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Le travail de nuit est interdit aux mineurs de moins de 18 ans."
                    },
                    {
                              "type": "qcd",
                              "text": "Le salarié doit respecter le règlement intérieur de l’entreprise.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le respect du règlement intérieur fait partie des obligations du salarié."
                    },
                    {
                              "type": "qcd",
                              "text": "Le salarié peut divulguer les secrets professionnels de l’entreprise.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Le salarié est tenu au respect du secret professionnel."
                    },
                    {
                              "type": "qcm",
                              "text": "Le contrat de travail est défini comme :",
                              "options": [
                                        "Un acte commercial",
                                        "Un accord entre employeur et salarié",
                                        "Une décision judiciaire",
                                        "Une convention syndicale"
                              ],
                              "answer": "Un accord entre employeur et salarié",
                              "correct": "Un accord entre employeur et salarié",
                              "explanation": "Le contrat de travail est un accord par lequel une personne met son activité sous l’autorité d’un employeur moyennant rémunération."
                    },
                    {
                              "type": "qcm",
                              "text": "Le lien qui place le salarié sous l’autorité de l’employeur est appelé :",
                              "options": [
                                        "Lien familial",
                                        "Lien commercial",
                                        "Lien de subordination",
                                        "Lien social"
                              ],
                              "answer": "Lien de subordination",
                              "correct": "Lien de subordination",
                              "explanation": "Le lien de subordination permet à l’employeur de diriger et contrôler le salarié."
                    },
                    {
                              "type": "qcm",
                              "text": "La durée normale du travail dans le secteur agricole est de :",
                              "options": [
                                        "20 heures",
                                        "30 heures",
                                        "40 heures",
                                        "48 heures"
                              ],
                              "answer": "48 heures",
                              "correct": "48 heures",
                              "explanation": "Dans le secteur agricole, la durée légale est de 48 heures par semaine."
                    },
                    {
                              "type": "qcm",
                              "text": "Le contrat d’apprentissage sert principalement à :",
                              "options": [
                                        "Acheter du matériel",
                                        "Former à un métier",
                                        "Créer une entreprise",
                                        "Obtenir une retraite"
                              ],
                              "answer": "Former à un métier",
                              "correct": "Former à un métier",
                              "explanation": "Le contrat d’apprentissage permet l’acquisition d’une formation professionnelle."
                    },
                    {
                              "type": "qcm",
                              "text": "Le contrat à durée indéterminée est appelé :",
                              "options": [
                                        "CDD",
                                        "CDI",
                                        "CTP",
                                        "CPE"
                              ],
                              "answer": "CDI",
                              "correct": "CDI",
                              "explanation": "CDI signifie contrat à durée indéterminée."
                    },
                    {
                              "type": "qcm",
                              "text": "Les éléments constitutifs du contrat de travail sont :",
                              "options": [
                                        "L’activité",
                                        "La rémunération",
                                        "Le mariage",
                                        "Le permis de conduire"
                              ],
                              "answer": [
                                        "L’activité",
                                        "La rémunération"
                              ],
                              "correct": [
                                        "L’activité",
                                        "La rémunération"
                              ],
                              "explanation": "L’activité et la rémunération sont des éléments essentiels du contrat de travail."
                    },
                    {
                              "type": "qcm",
                              "text": "Le salarié doit :",
                              "options": [
                                        "Respecter le règlement intérieur",
                                        "Respecter le secret professionnel",
                                        "Quitter le service sans autorisation",
                                        "Refuser systématiquement les ordres"
                              ],
                              "answer": [
                                        "Respecter le règlement intérieur",
                                        "Respecter le secret professionnel"
                              ],
                              "correct": [
                                        "Respecter le règlement intérieur",
                                        "Respecter le secret professionnel"
                              ],
                              "explanation": "Ces obligations permettent le bon fonctionnement de l’entreprise."
                    },
                    {
                              "type": "qcm",
                              "text": "Le contrat de travail peut être suspendu en cas :",
                              "options": [
                                        "De maladie",
                                        "De congé de formation",
                                        "D’achat de véhicule",
                                        "De vacances scolaires"
                              ],
                              "answer": [
                                        "De maladie",
                                        "De congé de formation"
                              ],
                              "correct": [
                                        "De maladie",
                                        "De congé de formation"
                              ],
                              "explanation": "Certaines situations prévues par la loi entraînent la suspension du contrat."
                    },
                    {
                              "type": "qcm",
                              "text": "Les obligations de l’employeur comprennent :",
                              "options": [
                                        "Le paiement du salaire",
                                        "La protection de la santé du salarié",
                                        "La suppression des congés",
                                        "Le refus des mesures de sécurité"
                              ],
                              "answer": [
                                        "Le paiement du salaire",
                                        "La protection de la santé du salarié"
                              ],
                              "correct": [
                                        "Le paiement du salaire",
                                        "La protection de la santé du salarié"
                              ],
                              "explanation": "L’employeur doit garantir la rémunération et la sécurité des travailleurs."
                    },
                    {
                              "type": "qcm",
                              "text": "Le licenciement peut être :",
                              "options": [
                                        "Individuel",
                                        "Collectif",
                                        "Religieux",
                                        "Familial"
                              ],
                              "answer": [
                                        "Individuel",
                                        "Collectif"
                              ],
                              "correct": [
                                        "Individuel",
                                        "Collectif"
                              ],
                              "explanation": "Le licenciement peut concerner un seul salarié ou plusieurs salariés."
                    },
                    {
                              "type": "qcm",
                              "text": "Les éléments constitutifs du contrat de travail sont :",
                              "options": [
                                        "L’activité",
                                        "La rémunération",
                                        "Le lien de subordination",
                                        "Le permis de conduire"
                              ],
                              "answer": [
                                        "L’activité",
                                        "La rémunération",
                                        "Le lien de subordination"
                              ],
                              "correct": [
                                        "L’activité",
                                        "La rémunération",
                                        "Le lien de subordination"
                              ],
                              "explanation": "Ces trois éléments sont indispensables à l’existence d’un contrat de travail."
                    },
                    {
                              "type": "qcm",
                              "text": "Les pouvoirs de l’employeur comprennent :",
                              "options": [
                                        "Le pouvoir de direction",
                                        "Le pouvoir de surveillance",
                                        "Le pouvoir disciplinaire",
                                        "Le pouvoir judiciaire"
                              ],
                              "answer": [
                                        "Le pouvoir de direction",
                                        "Le pouvoir de surveillance",
                                        "Le pouvoir disciplinaire"
                              ],
                              "correct": [
                                        "Le pouvoir de direction",
                                        "Le pouvoir de surveillance",
                                        "Le pouvoir disciplinaire"
                              ],
                              "explanation": "L’employeur peut diriger, contrôler et sanctionner le salarié."
                    },
                    {
                              "type": "qcm",
                              "text": "Les obligations du salarié sont :",
                              "options": [
                                        "Respecter le règlement intérieur",
                                        "Respecter le secret professionnel",
                                        "Exécuter le travail avec soin",
                                        "Quitter le poste sans autorisation"
                              ],
                              "answer": [
                                        "Respecter le règlement intérieur",
                                        "Respecter le secret professionnel",
                                        "Exécuter le travail avec soin"
                              ],
                              "correct": [
                                        "Respecter le règlement intérieur",
                                        "Respecter le secret professionnel",
                                        "Exécuter le travail avec soin"
                              ],
                              "explanation": "Le salarié doit accomplir son travail dans le respect des règles de l’entreprise."
                    },
                    {
                              "type": "qcm",
                              "text": "Les obligations de l’employeur sont :",
                              "options": [
                                        "Payer le salaire",
                                        "Assurer la sécurité des travailleurs",
                                        "Fournir les moyens de travail",
                                        "Supprimer les congés"
                              ],
                              "answer": [
                                        "Payer le salaire",
                                        "Assurer la sécurité des travailleurs",
                                        "Fournir les moyens de travail"
                              ],
                              "correct": [
                                        "Payer le salaire",
                                        "Assurer la sécurité des travailleurs",
                                        "Fournir les moyens de travail"
                              ],
                              "explanation": "L’employeur doit garantir de bonnes conditions de travail au salarié."
                    },
                    {
                              "type": "qcm",
                              "text": "Le contrat de travail peut être rompu pour :",
                              "options": [
                                        "Force majeure",
                                        "Accord des parties",
                                        "Faute lourde",
                                        "Voyage touristique"
                              ],
                              "answer": [
                                        "Force majeure",
                                        "Accord des parties",
                                        "Faute lourde"
                              ],
                              "correct": [
                                        "Force majeure",
                                        "Accord des parties",
                                        "Faute lourde"
                              ],
                              "explanation": "Ces situations sont prévues par le code du travail comme causes de rupture."
                    }
          ]
}
      ]
    };

    /********************************************************************
     * VARIABLES GLOBALES
     ********************************************************************/
    const STORAGE_SUBJECTS = "REVISION LICENCE 1 ABOISSOsubjects_4_sujets_v2";
    const STORAGE_RESULTS = "REVISION LICENCE 1 ABOISSOresults";
    const STORAGE_ATTEMPTS = "REVISION LICENCE 1 ABOISSOattempts";

    let subjects = [];
        let currentSubject = null;
    let currentStudent = null;
    let quizStartTime = null;
    let timerInterval = null;

    /********************************************************************
     * INITIALISATION
     ********************************************************************/
    document.addEventListener("DOMContentLoaded", () => {
      loadSubjects();
      renderSubjects();
      blockBackButton();
    });


    function cloneData(value) {
      if (typeof structuredClone === "function") return structuredClone(value);
      return JSON.parse(JSON.stringify(value));
    }

    function loadSubjects() {
      // Nouvelle version : on charge toujours les 4 sujets intégrés dans le fichier.
      // Cela évite que l’ancien cache du navigateur masque les nouveaux sujets.
      subjects = cloneData(CONFIG.subjects).map(subject => ({
        ...subject,
        programmed: subject.programmed === true
      }));
      saveSubjects();
    }

    function saveSubjects() {
      localStorage.setItem(STORAGE_SUBJECTS, JSON.stringify(subjects));
    }

    function getResults() {
      return JSON.parse(localStorage.getItem(STORAGE_RESULTS) || "[]");
    }

    function saveResults(results) {
      localStorage.setItem(STORAGE_RESULTS, JSON.stringify(results));
    }

    function getAttempts() {
      return JSON.parse(localStorage.getItem(STORAGE_ATTEMPTS) || "{}");
    }

    function saveAttempts(attempts) {
      localStorage.setItem(STORAGE_ATTEMPTS, JSON.stringify(attempts));
    }

    /********************************************************************
     * GESTION DES DATES ET STATUTS
     ********************************************************************/
    function getDateTime(date, time) {
      return new Date(`${date}T${time || "00:00"}:00`);
    }

    function getSubjectStatus(subject) {
      const now = new Date();
      const open = getDateTime(subject.openDate, subject.openTime);
      const close = getDateTime(subject.closeDate, subject.closeTime);
      if (now < open) return { key: "locked", label: "Verrouillée", message: "Cette composition n’est pas encore disponible" };
      if (now > close) return { key: "closed", label: "Terminée", message: "La composition est terminée" };
      return { key: "available", label: "Disponible", message: "Composition disponible" };
    }

    function formatDateTime(date, time) {
      return `${date} à ${time}`;
    }

    /********************************************************************
     * PAGE ACCUEIL ÉTUDIANT
     ********************************************************************/
    function showHome() {
      clearInterval(timerInterval);
      document.getElementById("homeView").classList.remove("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      renderSubjects();
    }

    function renderSubjects() {
      const list = document.getElementById("subjectsList");
      list.innerHTML = "";

      const programmedSubjects = subjects.filter(subject => subject.programmed === true);

      if (programmedSubjects.length === 0) {
        renderEmptySubjectsMessage(list);
        return;
      }

      programmedSubjects.forEach(subject => {
        const status = getSubjectStatus(subject);
        const card = document.createElement("div");
        card.className = "card subject-card";
        card.id = `card-${subject.id}`;

        const actionHtml = status.key === "available"
          ? `<button class="btn-green" style="margin-top:12px" onclick="showStudentForm('${subject.id}')">Commencer</button>`
          : `<button class="btn-light" style="margin-top:12px" disabled>${status.label}</button>`;

        card.innerHTML = `
          <span class="badge ${status.key}">${status.label}</span>
          <h3>${escapeHTML(subject.title)}</h3>
          <p><strong>Matière :</strong> ${escapeHTML(subject.matter)}</p>
          <p class="muted">${escapeHTML(subject.description)}</p>
          <p><strong>Durée :</strong> ${subject.duration} min</p>
          <p><strong>Ouverture :</strong> ${formatDateTime(subject.openDate, subject.openTime)}</p>
          <p><strong>Fermeture :</strong> ${formatDateTime(subject.closeDate, subject.closeTime)}</p>
          <p class="muted">${status.message}</p>
          ${actionHtml}
          <div id="student-form-${subject.id}" class="student-form hidden" style="margin-top:15px; padding-top:15px; border-top:1px solid #e5e7eb;">
            <h4 style="margin:0 0 10px 0;">Renseigne tes informations</h4>
            <div class="form-grid">
              <div><label>Nom</label><input id="nom-${subject.id}" placeholder="Ex: KOUASSI"></div>
              <div><label>Prénom</label><input id="prenom-${subject.id}" placeholder="Ex: Marie"></div>
              <div><label>Matricule / Code</label><input id="matricule-${subject.id}" placeholder="Ex: 24-0000"></div>
            </div>
            <button class="btn-green" style="margin-top:12px" onclick="startQuiz('${subject.id}')">Commencer la composition</button>
          </div>
        `;
        list.appendChild(card);
      });
    }

    function showStudentForm(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      document.querySelectorAll(".student-form").forEach(form => form.classList.add("hidden"));
      const form = document.getElementById(`student-form-${subjectId}`);
      if (form) {
        form.classList.remove("hidden");
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    function startQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const nom = document.getElementById(`nom-${subjectId}`).value.trim();
      const prenom = document.getElementById(`prenom-${subjectId}`).value.trim();
      const matricule = document.getElementById(`matricule-${subjectId}`).value.trim();

      if (!nom || !prenom || !matricule) return alert("Veuillez renseigner nom, prénom et matricule.");

      // Les étudiants peuvent reprendre le même sujet autant de fois qu’ils le souhaitent.

      currentSubject = subject;
      currentStudent = { nom, prenom, matricule };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      renderQuiz();
      startTimer(subject.duration * 60);
    }

    /********************************************************************
     * INTERFACE QUIZ
     ********************************************************************/
    function renderQuiz() {
      const quizView = document.getElementById("quizView");
      quizView.innerHTML = `
        <div class="quiz-layout">
          <div class="panel">
            <h2>${escapeHTML(currentSubject.title)}</h2>
            <p><strong>Étudiant :</strong> ${escapeHTML(currentStudent.nom)} ${escapeHTML(currentStudent.prenom)} (${escapeHTML(currentStudent.matricule)})</p>
            <p><strong>Consignes :</strong> ${escapeHTML(currentSubject.instructions)}</p>
            <form id="quizForm">
              ${currentSubject.questions.map((q, index) => renderQuestion(q, index)).join("")}
              <button type="button" class="btn-green" onclick="submitQuiz(false)">Valider ma composition</button>
            </form>
          </div>
          <aside class="panel timer-box">
            <h3>Temps restant</h3>
            <div id="timer" class="timer">00:00</div>
            <p class="muted">Le quiz sera soumis automatiquement à la fin.</p>
          </aside>
        </div>
      `;
      document.getElementById("resultView").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderQuestion(q, index) {
      const isMultiple = Array.isArray(q.answers) || Array.isArray(q.correct);
      const inputType = isMultiple ? "checkbox" : "radio";
      const help = isMultiple ? `<p class="muted">Plusieurs réponses sont possibles.</p>` : "";
      const typeLabel = String(q.type || (isMultiple ? "qcm" : "qcd")).toUpperCase();
      const options = Array.isArray(q.options) ? q.options : [];
      return `
        <div class="question">
          <h3>Question ${index + 1} — ${typeLabel}</h3>
          <p>${escapeHTML(q.text)}</p>
          ${help}
          ${options.map(option => `
            <label class="option">
              <input type="${inputType}" name="q-${index}" value="${escapeHTML(option)}">
              <span>${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
      `;
    }

    function startTimer(seconds) {
      let remaining = seconds;
      updateTimerDisplay(remaining);
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        remaining--;
        updateTimerDisplay(remaining);
        if (remaining <= 0) {
          clearInterval(timerInterval);
          submitQuiz(true);
        }
      }, 1000);
    }

    function updateTimerDisplay(seconds) {
      const min = Math.floor(seconds / 60).toString().padStart(2, "0");
      const sec = (seconds % 60).toString().padStart(2, "0");
      const el = document.getElementById("timer");
      if (el) el.textContent = `${min}:${sec}`;
    }


    function sameAnswers(studentAnswers, expectedAnswers) {
      const normalize = arr => arr.filter(Boolean).map(v => String(v).trim()).sort();
      const a = normalize(studentAnswers);
      const b = normalize(expectedAnswers);
      return a.length === b.length && a.every((value, index) => value === b[index]);
    }

    function submitQuiz(auto = false) {
      if (!auto && !confirm("Voulez-vous vraiment valider votre composition ?")) return;
      clearInterval(timerInterval);

      let good = 0, bad = 0, empty = 0, score = 0;
      const marking = currentSubject.marking || CONFIG.defaultMarking;
      const answers = [];

      currentSubject.questions.forEach((q, index) => {
        const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${index}"]:checked`));
        const expected = Array.isArray(q.answers) ? q.answers : (Array.isArray(q.correct) ? q.correct : [q.answer || q.correct]);
        const studentAnswers = selectedNodes.map(input => input.value);
        const studentAnswer = studentAnswers.join(" ; ");
        const correctAnswer = expected.join(" ; ");
        let state = "empty";

        if (studentAnswers.length === 0) {
          empty++;
          score += Number(marking.empty);
        } else if (sameAnswers(studentAnswers, expected)) {
          good++;
          score += Number(marking.correct);
          state = "good";
        } else {
          bad++;
          score += Number(marking.wrong);
          state = "bad";
        }

        answers.push({
          question: q.text,
          options: Array.isArray(q.options) ? q.options : [],
          studentAnswer,
          correctAnswer,
          correction: q.correction || q.explanation || "",
          state
        });
      });

      const maxScore = currentSubject.questions.length * Number(marking.correct);
      let note20 = maxScore > 0 ? (score / maxScore) * 20 : 0;
      note20 = Math.max(0, note20).toFixed(2);

      const usedSeconds = Math.round((new Date() - quizStartTime) / 1000);
      const result = {
        id: Date.now().toString(),
        date: new Date().toLocaleString("fr-FR"),
        student: currentStudent,
        subjectId: currentSubject.id,
        subjectTitle: currentSubject.title,
        matter: currentSubject.matter,
        score,
        note20,
        good,
        bad,
        empty,
        total: currentSubject.questions.length,
        answers,
        usedTime: formatDuration(usedSeconds)
      };

      const results = getResults();
      results.push(result);
      saveResults(results);

      // Aucune tentative n’est verrouillée : le même matricule peut composer plusieurs fois le même sujet.

      renderResult(result);
    }

    function renderResult(result) {
      const mainContent = document.getElementById("mainContent");
      if (mainContent) mainContent.style.display = "block";
      const welcomePopup = document.getElementById("welcomePopup");
      if (welcomePopup) welcomePopup.style.display = "none";
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.remove("hidden");
      document.getElementById("resultView").innerHTML = `
        <div class="panel result-card">
          <h2>Résultat de composition</h2>
          <p class="score-big">${result.note20}</p>
          <div class="grid">
            <div><strong>Nom :</strong> ${escapeHTML(result.student.nom)}</div>
            <div><strong>Prénom :</strong> ${escapeHTML(result.student.prenom)}</div>
            <div><strong>Matricule :</strong> ${escapeHTML(result.student.matricule)}</div>
            <div><strong>Sujet :</strong> ${escapeHTML(result.subjectTitle)}</div>
            <div><strong>Score :</strong> ${result.score}</div>
            <div><strong>Bonnes réponses :</strong> ${result.good}</div>
            <div><strong>Mauvaises réponses :</strong> ${result.bad}</div>
            <div><strong>Sans réponse :</strong> ${result.empty}</div>
            <div><strong>Temps utilisé :</strong> ${result.usedTime}</div>
          </div>
          <br>
          <div class="actions">
            <button class="btn-green" onclick="toggleCorrection()">Voir la correction</button>
            <button onclick="showHome()">Retour à l'accueil</button>
          </div>
          <div id="correctionBox" class="correction-box hidden">
            ${renderCorrection(result)}
          </div>
        </div>
      `;
      document.getElementById("resultView").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function toggleCorrection() {
      const box = document.getElementById("correctionBox");
      if (box) box.classList.toggle("hidden");
    }

    function renderCorrection(result) {
      if (!result.answers || !result.answers.length) {
        return `<p class="muted">Aucune correction disponible pour cet ancien résultat.</p>`;
      }

      return `
        <h3>Correction détaillée</h3>
        ${result.answers.map((a, index) => `
          <div class="correction-item ${a.state}">
            <h4>Question ${index + 1}</h4>
            <p><strong>Énoncé :</strong> ${escapeHTML(a.question)}</p>
            <p><strong>Ta réponse :</strong> ${a.studentAnswer ? escapeHTML(a.studentAnswer) : "Aucune réponse"}</p>
            <p><strong>Bonne réponse :</strong> ${escapeHTML(a.correctAnswer)}</p>
            ${a.correction ? `<p><strong>Correction :</strong> ${escapeHTML(a.correction)}</p>` : `<p><strong>Correction :</strong> La bonne réponse est ${escapeHTML(a.correctAnswer)}.</p>`}
          </div>
        `).join("")}
      `;
    }

    /********************************************************************
     * ADMINISTRATION
     ********************************************************************/
    function openAdminLogin() {
      const password = prompt("Mot de passe ADMIN :");
      if (password === ADMIN_PASSWORD) showAdmin();
      else if (password !== null) alert("Mot de passe incorrect.");
    }

    function showAdmin() {
      clearInterval(timerInterval);
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.remove("hidden");
      renderAdminSubjects();
    }

    function renderAdminSubjects() {
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Titre</th><th>Matière</th><th>Affichage accueil</th><th>Dates</th><th>Durée</th><th>Questions</th><th>Actions</th></tr></thead>
            <tbody>
              ${subjects.map(s => `
                <tr>
                  <td>${escapeHTML(s.title)}</td>
                  <td>${escapeHTML(s.matter)}</td>
                  <td><span class="badge ${s.programmed ? 'available' : 'locked'}">${s.programmed ? 'Programmé' : 'Non programmé'}</span></td>
                  <td>Du ${formatDateTime(s.openDate, s.openTime)}<br>au ${formatDateTime(s.closeDate, s.closeTime)}</td>
                  <td>${s.duration} min</td>
                  <td>${s.questions.length}</td>
                  <td class="actions">
                    <button class="${s.programmed ? 'btn-dark' : 'btn-green'}" onclick="toggleProgrammed('${s.id}')">${s.programmed ? 'Retirer' : 'Programmer'}</button>
                    <button class="btn-orange" onclick="openSubjectEditor('${s.id}')">Modifier</button>
                    <button class="btn-red" onclick="deleteSubject('${s.id}')">Supprimer</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    function renderAdminResults() {
      const results = getResults().slice().reverse();
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="topbar results-toolbar">
          <div>
            <h3>Résultats enregistrés</h3>
            <p class="muted">Importe les résultats d’un autre devoir ou exporte les résultats sauvegardés.</p>
          </div>
          <div class="actions">
            <label class="btn btn-light file-btn" for="importResultsFile">Choisir un fichier</label>
            <input id="importResultsFile" class="hidden" type="file" accept=".json,.csv,application/json,text/csv">
            <button class="btn-green" onclick="importResultsFromFile()">Importer les résultats</button>
            <button class="btn-dark" onclick="exportResultsJSON()">Exporter JSON</button>
            <button class="btn-orange" onclick="exportResultsCSV()">Exporter Excel/CSV</button>
          </div>
        </div>
        <div class="import-help">
          <strong>Formats acceptés :</strong> JSON exporté par la plateforme ou CSV avec les colonnes : nom, prenom, matricule, sujet, note20.
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Date</th><th>Étudiant</th><th>Matricule</th><th>Sujet</th><th>Note</th><th>Détails</th></tr></thead>
            <tbody>
              ${results.map(r => `
                <tr>
                  <td>${escapeHTML(r.date)}</td>
                  <td>${escapeHTML(r.student?.nom)} ${escapeHTML(r.student?.prenom)}</td>
                  <td>${escapeHTML(r.student?.matricule)}</td>
                  <td>${escapeHTML(r.subjectTitle || r.subjectId || "Devoir importé")}</td>
                  <td><strong>${escapeHTML(r.note20 ?? "")}</strong></td>
                  <td>Score ${escapeHTML(r.score ?? "")} | Bonnes ${escapeHTML(r.good ?? "")} | Mauvaises ${escapeHTML(r.bad ?? "")} | Vides ${escapeHTML(r.empty ?? "")} | Temps ${escapeHTML(r.usedTime ?? "")}</td>
                </tr>
              `).join("") || `<tr><td colspan="6">Aucun résultat pour le moment.</td></tr>`}
            </tbody>
          </table>
        </div>
      `;
    }

    /********************************************************************
     * IMPORTATION / EXPORTATION DES RÉSULTATS
     ********************************************************************/
    function importResultsFromFile() {
      const input = document.getElementById("importResultsFile");
      if (!input || !input.files.length) return alert("Veuillez choisir un fichier de résultats à importer.");

      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        try {
          const text = event.target.result;
          const imported = file.name.toLowerCase().endsWith(".csv") ? parseResultsCSV(text) : JSON.parse(text);

          if (!Array.isArray(imported) || imported.length === 0) {
            return alert("Le fichier ne contient aucun résultat valide.");
          }

          const normalized = imported.map(normalizeImportedResult).filter(Boolean);
          if (!normalized.length) return alert("Aucun résultat valide n’a été trouvé dans le fichier.");

          const existing = getResults();
          const existingKeys = new Set(existing.map(resultUniqueKey));
          let added = 0;

          normalized.forEach(result => {
            const key = resultUniqueKey(result);
            if (!existingKeys.has(key)) {
              existing.push(result);
              existingKeys.add(key);
              added++;
            }
          });

          saveResults(existing);
          input.value = "";
          renderAdminResults();
          alert(`${added} résultat(s) importé(s). ${normalized.length - added} doublon(s) ignoré(s).`);
        } catch (error) {
          console.error(error);
          alert("Impossible d’importer ce fichier. Vérifiez qu’il s’agit d’un fichier JSON ou CSV valide.");
        }
      };

      reader.readAsText(file);
    }

    function normalizeImportedResult(item) {
      if (!item || typeof item !== "object") return null;
      const student = item.student || {};
      const nom = student.nom || item.nom || item.name || "";
      const prenom = student.prenom || item.prenom || item.firstname || "";
      const matricule = student.matricule || item.matricule || item.code || "";
      const note20 = item.note20 ?? item.note ?? item.note_sur_20 ?? "";
      if (!nom && !prenom && !matricule && note20 === "") return null;

      return {
        id: item.id || `import-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        date: item.date || new Date().toLocaleString("fr-FR"),
        student: { nom: String(nom), prenom: String(prenom), matricule: String(matricule) },
        subjectId: item.subjectId || item.subject_id || "devoir-importe",
        subjectTitle: item.subjectTitle || item.sujet || item.subject || item.title || "Devoir importé",
        matter: item.matter || item.matiere || "",
        score: item.score ?? "",
        note20: note20 !== "" ? String(note20).replace(",", ".") : "",
        good: item.good ?? item.bonnes ?? "",
        bad: item.bad ?? item.mauvaises ?? "",
        empty: item.empty ?? item.vides ?? "",
        total: item.total ?? "",
        answers: Array.isArray(item.answers) ? item.answers : [],
        usedTime: item.usedTime || item.temps || ""
      };
    }

    function resultUniqueKey(result) {
      return [
        result.student?.matricule || "",
        result.subjectId || result.subjectTitle || "",
        result.note20 || "",
        result.date || ""
      ].join("|").toLowerCase();
    }

    function exportResultsJSON() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      downloadTextFile("resultats-composition.json", JSON.stringify(results, null, 2), "application/json");
    }

    function exportResultsCSV() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      const headers = ["date", "nom", "prenom", "matricule", "sujet", "matiere", "note20", "score", "bonnes", "mauvaises", "vides", "total", "temps"];
      const rows = results.map(r => [
        r.date,
        r.student?.nom,
        r.student?.prenom,
        r.student?.matricule,
        r.subjectTitle,
        r.matter,
        r.note20,
        r.score,
        r.good,
        r.bad,
        r.empty,
        r.total,
        r.usedTime
      ]);
      const csv = [headers, ...rows].map(row => row.map(csvEscape).join(";")).join("\n");
      downloadTextFile("resultats-composition.csv", "﻿" + csv, "text/csv;charset=utf-8");
    }

    function parseResultsCSV(text) {
      const lines = text.split(/\r?\n/).filter(line => line.trim());
      if (lines.length < 2) return [];
      const separator = lines[0].includes(";") ? ";" : ",";
      const headers = splitCSVLine(lines[0], separator).map(h => h.trim().toLowerCase());
      return lines.slice(1).map(line => {
        const values = splitCSVLine(line, separator);
        const obj = {};
        headers.forEach((h, i) => obj[h] = values[i] || "");
        return {
          date: obj.date,
          nom: obj.nom,
          prenom: obj.prenom || obj["prénom"],
          matricule: obj.matricule || obj.code,
          sujet: obj.sujet || obj.subject || obj.devoir,
          matiere: obj.matiere || obj["matière"],
          note20: obj.note20 || obj.note || obj["note"],
          score: obj.score,
          good: obj.bonnes,
          bad: obj.mauvaises,
          empty: obj.vides,
          total: obj.total,
          usedTime: obj.temps
        };
      });
    }

    function splitCSVLine(line, separator) {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const next = line[i + 1];
        if (char === '"' && inQuotes && next === '"') {
          current += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === separator && !inQuotes) {
          values.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current);
      return values;
    }

    function csvEscape(value) {
      const str = String(value ?? "");
      return `"${str.replaceAll('"', '""')}"`;
    }

    function downloadTextFile(filename, content, type) {
      const blob = new Blob([content], { type });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    function openSubjectEditor(subjectId = null) {
      const subject = subjectId ? cloneData(subjects.find(s => s.id === subjectId)) : {
        id: "sujet-" + Date.now(),
        title: "Nouveau sujet",
        matter: "Soins infirmiers",
        description: "Description du sujet",
        instructions: "Répondez à toutes les questions.",
        duration: 30,
        programmed: false,
        openDate: new Date().toISOString().slice(0, 10),
        openTime: "08:00",
        closeDate: new Date().toISOString().slice(0, 10),
        closeTime: "18:00",
        marking: { correct: 1, wrong: -1, empty: 0 },
        questions: []
      };

      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal").innerHTML = `
        <div class="modal-content">
          <div class="topbar">
            <h2>${subjectId ? "Modifier" : "Ajouter"} un sujet</h2>
            <button class="btn-red" onclick="closeModal()">Fermer</button>
          </div>
          <div class="form-grid">
            <div><label>Titre</label><input id="edit-title" value="${escapeAttr(subject.title)}"></div>
            <div><label>Matière</label><select id="edit-matter">
              ${["Soins infirmiers", "Santé publique", "Obstétrique", "Anatomie", "Pharmacologie"].map(m => `<option ${subject.matter === m ? "selected" : ""}>${m}</option>`).join("")}
            </select></div>
            <div><label>Durée en minutes</label><input id="edit-duration" type="number" min="1" value="${subject.duration}"></div>
            <div><label>Affichage accueil</label><select id="edit-programmed">
              <option value="false" ${subject.programmed !== true ? "selected" : ""}>Non programmé</option>
              <option value="true" ${subject.programmed === true ? "selected" : ""}>Programmé</option>
            </select></div>
            <div><label>Bonne réponse</label><input id="edit-correct" type="number" value="${subject.marking.correct}"></div>
            <div><label>Mauvaise réponse</label><input id="edit-wrong" type="number" value="${subject.marking.wrong}"></div>
            <div><label>Pas de réponse</label><input id="edit-empty" type="number" value="${subject.marking.empty}"></div>
            <div><label>Date ouverture</label><input id="edit-open-date" type="date" value="${subject.openDate}"></div>
            <div><label>Heure ouverture</label><input id="edit-open-time" type="time" value="${subject.openTime}"></div>
            <div><label>Date fermeture</label><input id="edit-close-date" type="date" value="${subject.closeDate}"></div>
            <div><label>Heure fermeture</label><input id="edit-close-time" type="time" value="${subject.closeTime}"></div>
          </div>
          <label>Description</label><textarea id="edit-description">${escapeHTML(subject.description)}</textarea>
          <label>Consignes</label><textarea id="edit-instructions">${escapeHTML(subject.instructions)}</textarea>
          <h3>Questions</h3>
          <div id="questionsEditor"></div>
          <button class="btn-green" onclick="addQuestionEditor()">+ Ajouter une question</button>
          <br><br>
          <button class="btn-green" onclick="saveSubjectFromEditor('${subject.id}')">Enregistrer le sujet</button>
        </div>
      `;

      window.editingQuestions = subject.questions;
      renderQuestionsEditor();
    }

    function renderQuestionsEditor() {
      const box = document.getElementById("questionsEditor");
      box.innerHTML = window.editingQuestions.map((q, index) => `
        <div class="question-editor">
          <div class="topbar">
            <h3>Question ${index + 1}</h3>
            <button class="btn-red" onclick="removeQuestionEditor(${index})">Supprimer</button>
          </div>
          <label>Type</label>
          <select onchange="updateQuestionField(${index}, 'type', this.value)">
            <option value="qcm" ${q.type === "qcm" ? "selected" : ""}>QCM</option>
            <option value="vf" ${q.type === "vf" ? "selected" : ""}>Vrai/Faux</option>
          </select>
          <label>Question</label>
          <textarea oninput="updateQuestionField(${index}, 'text', this.value)">${escapeHTML(q.text)}</textarea>
          <label>Options séparées par un point-virgule ;</label>
          <input value="${escapeAttr(q.options.join('; '))}" oninput="updateOptions(${index}, this.value)">
          <label>Réponse correcte</label>
          <input value="${escapeAttr(q.answer)}" oninput="updateQuestionField(${index}, 'answer', this.value)">
          <label>Correction / explication à afficher après le résultat</label>
          <textarea oninput="updateQuestionField(${index}, 'correction', this.value)">${escapeHTML(q.correction || "")}</textarea>
        </div>
      `).join("") || `<p class="muted">Aucune question. Clique sur “Ajouter une question”.</p>`;
    }

    function updateQuestionField(index, field, value) {
      window.editingQuestions[index][field] = value;
      if (field === "type" && value === "vf") {
        window.editingQuestions[index].options = ["Vrai", "Faux"];
        window.editingQuestions[index].answer = "Vrai";
        renderQuestionsEditor();
      }
    }

    function updateOptions(index, value) {
      window.editingQuestions[index].options = value.split(";").map(v => v.trim()).filter(Boolean);
    }

    function addQuestionEditor() {
      window.editingQuestions.push({ type: "qcm", text: "Nouvelle question", options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A", correction: "Explication de la bonne réponse." });
      renderQuestionsEditor();
    }

    function removeQuestionEditor(index) {
      window.editingQuestions.splice(index, 1);
      renderQuestionsEditor();
    }

    function saveSubjectFromEditor(id) {
      const subject = {
        id,
        title: document.getElementById("edit-title").value.trim(),
        matter: document.getElementById("edit-matter").value,
        description: document.getElementById("edit-description").value.trim(),
        instructions: document.getElementById("edit-instructions").value.trim(),
        duration: Number(document.getElementById("edit-duration").value),
        programmed: document.getElementById("edit-programmed").value === "true",
        openDate: document.getElementById("edit-open-date").value,
        openTime: document.getElementById("edit-open-time").value,
        closeDate: document.getElementById("edit-close-date").value,
        closeTime: document.getElementById("edit-close-time").value,
        marking: {
          correct: Number(document.getElementById("edit-correct").value),
          wrong: Number(document.getElementById("edit-wrong").value),
          empty: Number(document.getElementById("edit-empty").value)
        },
        questions: window.editingQuestions
      };

      if (!subject.title || !subject.openDate || !subject.closeDate || !subject.duration) {
        return alert("Veuillez remplir les champs obligatoires.");
      }

      const index = subjects.findIndex(s => s.id === id);
      if (index >= 0) subjects[index] = subject;
      else subjects.push(subject);

      saveSubjects();
      closeModal();
      renderAdminSubjects();
      alert("Sujet sauvegardé avec succès.");
    }

    function toggleProgrammed(id) {
      const subject = subjects.find(s => s.id === id);
      if (!subject) return;
      subject.programmed = subject.programmed !== true;
      saveSubjects();
      renderAdminSubjects();
      renderSubjects();
    }

    function deleteSubject(id) {
      if (!confirm("Supprimer ce sujet ?")) return;
      subjects = subjects.filter(s => s.id !== id);
      saveSubjects();
      renderAdminSubjects();
    }

    function resetDefaultSubjects() {
      if (!confirm("Voulez-vous restaurer les sujets par défaut ? Les sujets modifiés seront supprimés.")) return;
      localStorage.removeItem(STORAGE_SUBJECTS);
      subjects = cloneData(CONFIG.subjects);
      saveSubjects();
      renderAdminSubjects();
      alert("Sujets par défaut restaurés.");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
      document.getElementById("modal").innerHTML = "";
    }

    /********************************************************************
     * SÉCURITÉ SIMPLE
     ********************************************************************/
    window.addEventListener("beforeunload", function(e) {
      if (!document.getElementById("quizView").classList.contains("hidden")) {
        e.preventDefault();
        e.returnValue = "Une composition est en cours.";
      }
    });

    function blockBackButton() {
      history.pushState(null, null, location.href);
      window.addEventListener("popstate", function() {
        history.pushState(null, null, location.href);
        if (!document.getElementById("quizView").classList.contains("hidden")) {
          alert("Le retour est bloqué pendant la composition.");
        }
      });
    }

    /********************************************************************
     * OUTILS
     ********************************************************************/
    function formatDuration(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return `${min} min ${sec} s`;
    }

    function escapeHTML(str) {
      return String(str ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function escapeAttr(str) {
      return escapeHTML(str).replaceAll("\n", " ");
    }


/************************************************
 * MESSAGE AUCUN DEVOIR
 ************************************************/
function renderEmptySubjectsMessage(container){
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📝</div>

            <h2>Aucun devoir disponible pour le moment</h2>

            <p>
                Aucun devoir n’est actuellement programmé sur la plateforme.
                Veuillez revenir plus tard afin de consulter les prochaines compositions en ligne.
            </p>

            <div class="empty-info">
                La plateforme reste accessible 24h/24 pour les prochaines évaluations.
            </div>
        </div>
    `;
}








/* ============================================================
   PATCH - Bouton Commencer uniquement pour devoir disponible
   ============================================================ */
(function () {
  function cleanStartButtons() {
    const candidates = Array.from(document.querySelectorAll("button, a"));
    candidates.forEach(btn => {
      const label = (btn.innerText || btn.textContent || "").trim().toLowerCase();
      if (label.includes("choisir ce devoir")) {
        btn.textContent = "Commencer";
      }
      if (!label.includes("commencer") && !label.includes("choisir ce devoir")) return;

      let card = btn;
      for (let i = 0; i < 6 && card.parentElement; i++) {
        card = card.parentElement;
        const text = (card.innerText || card.textContent || "").toLowerCase();
        if (text.includes("verrouill") || text.includes("termin")) {
          btn.style.display = "none";
          btn.disabled = true;
          return;
        }
        if (text.includes("disponible")) {
          btn.style.display = "";
          btn.disabled = false;
          return;
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(cleanStartButtons, 100);
    setTimeout(cleanStartButtons, 500);
    setTimeout(cleanStartButtons, 1200);
  });

  new MutationObserver(function () {
    setTimeout(cleanStartButtons, 50);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
