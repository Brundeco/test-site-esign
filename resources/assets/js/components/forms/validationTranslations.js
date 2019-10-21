import hyperform from 'hyperform';

// based on https://github.com/hyperform/hyperform-l10n/tree/master/dist
export const validationNl = {
  TextTooLong: 'Kort deze tekst in tot %l tekens of minder (u gebruikt nu %l tekens).',
  TextTooShort: 'Gebruik minstens %l tekens (u gebruikt momenteel %l tekens).',
  ValueMissing: 'Vul dit veld in.',
  CheckboxMissing: 'Vink dit vakje aan als u wilt doorgaan.',
  RadioMissing: 'Selecteer een van deze opties.',
  FileMissing: 'Selecteer een bestand.',
  SelectMissing: 'Selecteer een item in de lijst.',
  InvalidEmail: 'Voer een e-mailadres in.',
  InvalidURL: 'Voer een URL in.',
  InvalidDate: 'Voer een geldige datum in.',
  PatternMismatch: 'Gebruik de gevraagde indeling.',
  PatternMismatchWithTitle: 'Gebruik de gevraagde indeling: %l.',
  NumberRangeOverflow: 'Selecteer een waarde die niet hoger is dan %l.',
  DateTimeRangeOverflow: 'Selecteer een waarde die niet later is dan %l.',
  NumberRangeUnderflow: 'Selecteer een waarde die niet lager is dan %l.',
  DateTimeRangeUnderflow: 'Selecteer een waarde die niet vroeger is dan %l.',
  StepMismatch: 'Selecteer een geldige waarde. De twee dichtstbijzijnde geldige waarden zijn %l en %l.',
  StepMismatchOneValue: 'Selecteer een geldige waarde. De dichtstbijzijnde geldige waarde is %l.',
  BadInputNumber: 'Voer een getal in.',
  'Please match the requested type.': 'Pas de invoer aan aan het vereiste type.',
  'Please comply with all requirements.': 'Voldoe aan alle vereisten.',
  'Please lengthen this text to %l characters or more (you are currently using %l characters).': 'Verleng deze tekst tot ten minste %l tekens (u gebruikt momenteel %l tekens).',
  'Please use the appropriate format.': 'Gebruik de juiste indeling.',
  'Please enter a comma separated list of email addresses.': 'Voer een door komma\'s gescheiden lijst van e-mailadressen in.',
  'Please select a file of the correct type.': 'Selecteer een bestand van het juiste type.',
  'Please select one or more files.': 'Selecteer een of meer bestanden.',
  'any value': 'elke waarde',
  'any valid value': 'elke geldige waarde',
};

const validationFr = {
  TextTooLong: 'Veuillez raccourcir ce champ à %l caractères ou moins (vous utilisez actuellement %l caractères).',
  TextTooShort: 'Veuillez utiliser au moins %l caractères pour ce champ (vous utilisez actuellement %l caractères).',
  ValueMissing: 'Veuillez compléter ce champ.',
  CheckboxMissing: 'Veuillez cocher cette case si vous désirez poursuivre.',
  RadioMissing: 'Veuillez sélectionner l’une de ces options.',
  FileMissing: 'Veuillez sélectionner un fichier.',
  SelectMissing: 'Veuillez sélectionner un élément de la liste.',
  InvalidEmail: 'Veuillez saisir une adresse électronique valide.',
  InvalidURL: 'Veuillez saisir une URL.',
  // InvalidDate:"",
  PatternMismatch: 'Veuillez modifier la valeur pour correspondre au format demandé.',
  PatternMismatchWithTitle: 'Veuillez modifier la valeur du champ pour correspondre au format demandé : %l.',
  NumberRangeOverflow: 'Veuillez sélectionner une valeur inférieure ou égale à %l.',
  DateRangeOverflow: 'Veuillez sélectionner une valeur antérieure ou égale à %l.',
  TimeRangeOverflow: 'Veuillez sélectionner une valeur antérieure ou égale à %l.',
  NumberRangeUnderflow: 'Veuillez sélectionner une valeur supérieure ou égale à %l.',
  DateRangeUnderflow: 'Veuillez sélectionner une valeur postérieure ou égale à %l.',
  TimeRangeUnderflow: 'Veuillez sélectionner une valeur postérieure ou égale à %l.',
  StepMismatch: 'Veuillez sélectionner une valeur valide. Les deux valeurs valides les plus proches sont %l et %l.',
  StepMismatchOneValue: 'Veuillez sélectionner une valeur valide. La valeur valide la plus proche est %l.',
  BadInputNumber: 'Veuillez saisir un nombre.',
  'Please match the requested type.': 'Veuillez respecter le type de champ demandé.',
  'Please comply with all requirements.': 'Veuillez respecter toutes les conditions.',
  'Please lengthen this text to %l characters or more (you are currently using %l characters).': "Veuillez allonger ce texte pour atteindre %l caractères ou plus (vous avez écrit pour l'instant %l caractères).",
  'Please use the appropriate format.': 'Veuillez utiliser le format approprié.',
  'Please enter a comma separated list of email addresses.': "Veuillez saisir une liste d'adresses électroniques séparées par des virgules.",
  'Please select a file of the correct type.': 'Veuillez sélectionner un fichier du type approprié.',
  'Please select one or more files.': 'Veuillez sélectionner un ou plusieurs fichiers.',
  'any value': "n'importe quelle valeur",
  'any valid value': "n'importe quelle valeur valide",
};

const validationDe = {
  TextTooLong: 'Bitte kürzen Sie diesen Text auf maximal %l Zeichen (Sie verwenden derzeit %l Zeichen).',
  TextTooShort: 'Bitte verwenden Sie zumindest %l Zeichen (Sie verwenden derzeit %l Zeichen).',
  ValueMissing: 'Bitte füllen Sie dieses Feld aus.',
  CheckboxMissing: 'Bitte klicken Sie dieses Kästchen an, wenn Sie fortsetzen wollen.',
  RadioMissing: 'Bitte wählen Sie eine dieser Optionen.',
  FileMissing: 'Bitte wählen Sie eine Datei.',
  SelectMissing: 'Bitte wählen Sie einen Eintrag in der Liste.',
  InvalidEmail: 'Bitte geben Sie eine E-Mail-Adresse ein.',
  InvalidURL: 'Bitte geben Sie eine Internetadresse ein.',
  // InvalidDate:"",
  PatternMismatch: 'Bitte halten Sie sich an das vorgegebene Format.',
  PatternMismatchWithTitle: 'Bitte halten Sie sich an das vorgegebene Format: %l.',
  NumberRangeOverflow: 'Bitte wählen Sie einen Wert, der nicht größer ist als %l.',
  DateRangeOverflow: 'Bitte wählen Sie einen Wert, der nicht später ist als %l.',
  TimeRangeOverflow: 'Bitte wählen Sie einen Wert, der nicht später ist als %l.',
  NumberRangeUnderflow: 'Bitte wählen Sie einen Wert, der nicht kleiner ist als %l.',
  DateRangeUnderflow: 'Bitte wählen Sie einen Wert, der nicht früher ist als %l.',
  TimeRangeUnderflow: 'Bitte wählen Sie einen Wert, der nicht früher ist als %l.',
  StepMismatch: 'Bitte wählen Sie einen gültigen Wert. Die zwei nähesten gültigen Werte sind %l und %l.',
  StepMismatchOneValue: 'Bitte wählen Sie einen gültigen Wert. Der näheste gültige Wert ist %l.',
  BadInputNumber: 'Bitte geben Sie eine Nummer ein.',
  'Please match the requested type.': 'Bitte passen Sie die Eingabe dem geforderten Typ an.',
  'Please comply with all requirements.': 'Bitte erfüllen Sie alle Anforderungen.',
  'Please lengthen this text to %l characters or more (you are currently using %l characters).': 'Bitte verlängern Sie diesen Text auf mindestens %l Zeichen (Sie verwenden derzeit %l Zeichen).',
  'Please use the appropriate format.': 'Bitte verwenden Sie das passende Format.',
  'Please enter a comma separated list of email addresses.': 'Bitte geben Sie eine komma-getrennte Liste von E-Mail-Adressen an.',
  'Please select a file of the correct type.': 'Bitte wählen Sie eine Datei vom korrekten Typ.',
  'Please select one or more files.': 'Bitte wählen Sie eine oder mehrere Dateien.',
  'any value': 'jeder Wert',
  'any valid value': 'jeder gültige Wert',
};

export const setHyperformLang = () => {
  const { lang } = document.documentElement;

  if (lang === 'nl') {
    hyperform.addTranslation(lang, validationNl);
    hyperform.setLanguage(lang);
  } else if (lang === 'fr') {
    hyperform.addTranslation(lang, validationFr);
    hyperform.setLanguage(lang);
  } else if (lang === 'de') {
    hyperform.addTranslation(lang, validationDe);
    hyperform.setLanguage(lang);
  }
};
