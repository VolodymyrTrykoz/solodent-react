const ourTeamInfo = [
  {
    id: 1,
    name: 'Брижко Ірина Олексіївна',
    location: 'Київ',
    locationId: ['kyiv'],
    qualification: ['Ортодонт'],
    description: `
      <p class="accordion__text">Лікар-стоматолог, спеціалізація-ортодонт.</p>
      <p class="accordion__text">Навчалась у НМУ ім. О.О. Богомольця за спеціальністю "стоматолог"</p>
      <p class="accordion__text">Курси:</p>
        <ul class="accordion__list">
          <li class="accordion__list-item">системи міофункціональної корекції  аномалій прикуса для пацієнтів будь-якого віку</li>
          <li class="accordion__list-item">курс використання еластиків в ортодонтії "Ortotropics"</li>
          <li class="accordion__list-item">корекція прикуса функціональними апаратами у період росту та розвитку щелепно-лицевої області</li>
          <li class="accordion__list-item">клінічне використання та наукові принципи "The Vector Method"</li>
        </ul>
      <p class="accordion__text">Основні напрямки роботи:</p>
        <ul class="accordion__list">
          <li class="accordion__list-item">ортодонтична допомога пацієнтам рIзного вIку;</li>
          <li class="accordion__list-item">попередження ускладнень раннього видалення молочних зубів</li>
          <li class="accordion__list-item">ортодонтичне лIкування зубо-щелепних патологIй незнIмною апаратурою;</li>
          <li class="accordion__list-item">профессIйна гIгieна та рекомендацii щодо засобIв для домашнього догляду за ротовою  порожниною  у дітей </li>
          <li class="accordion__list-item">відновлення молочних зубів системою Kids Crown </li>
        </ul>`,
  },
  {
    id: 2,
    name: 'Жовтяк Єгор Анатолійович',
    location: 'Київ',
    locationId: ['kyiv'],
    qualification: ['Стоматолог ', 'Хірург'],
    description: `
      <p class="accordion__text">Лікар-стоматолог, який займається терапевтичною та ортопедичною стоматологією. Спеціалізується на ендодонтичному лікуванні , прямих та не прямих реставраціях бокової та фронтальної ділянки зубів .</p>
      <p class="accordion__text">Навчався в Українскій Стоматологічній Академії</p>
      <p class="accordion__text">Основні курси підвищення кваліфікації:</p>
        <ul class="accordion__list">
          <li class="accordion__list-item">основи дентальної фотографії в клінічній практиці</li>
          <li class="accordion__list-item">сучасні підходи в ортопедичній стоматології</li>
          <li class="accordion__list-item">протезування на імплантантах</li>
        </ul>`,
  },
  {
    id: 3,
    name: 'Заглинська Яна Станіславівна',
    location: 'Київ, Бровари',
    locationId: ['kyiv', 'brovary'],
    qualification: ['Стоматолог ', 'Терапевт'],
    description: `
      <p class="accordion__text">Лікар-стоматолог загального прийому</p>
      <p class="accordion__text">Навчалась в НМУ ім. О.О. Богомольця за спеціальністю "стоматологія".</p>
      <p class="accordion__text">Основні напрямки роботи:</p>
        <ul class="accordion__list">
          <li class="accordion__list-item">ендодентичне лікування</li>
          <li class="accordion__list-item">естетична реставрація</li>
          <li class="accordion__list-item">консультативна, терапевтична, ортопедична допомога.</li>
          <li class="accordion__list-item">сучасні методи відбілювання</li>
          <li class="accordion__list-item">проведення косметологічних процедур (мезотерапія, плазмоліфтінг, ботокстерапія для обличчя)</li>
        </ul>
      `,
  },
  {
    id: 4,
    name: 'Тарасенко Анна Павлівна',
    location: 'Київ',
    locationId: ['kyiv'],
    qualification: ['Стоматолог ', 'Хірург'],
    description: `
      <p class="accordion__text">Лікар-стоматолог, терапевт, хірург</p>
      <p class="accordion__text">Закінчила НМУ ім. О.О. Богомольця, спеціалізація "стоматологія"</p>
      <p class="accordion__text">Проходила інтернатуру в НМУ ім. О.О. Богомольця.</p>
      <p class="accordion__text">Курси та підвищення кваліфікації:</p>
        <ul class="accordion__list">
          <li class="accordion__list-item">системи міофункціональної корекції  аномалій прикуса для пацієнтів будь-якого віку</li>
          <li class="accordion__list-item">курс використання еластиків в ортодонтії "Ortotropics"</li>
          <li class="accordion__list-item">корекція прикуса функціональними апаратами у період росту та розвитку щелепно-лицевої області</li>
          <li class="accordion__list-item">клінічне використання та наукові принципи "The Vector Method"</li>
        </ul>
      <p class="accordion__text">Курси та підвищення кваліфікації:</p>
        <ul class="accordion__list">
          <li class="accordion__list-item">реставрації бокової групи зубів</li>
          <li class="accordion__list-item">реставрації передньої групи зубів</li>
          <li class="accordion__list-item">особливості інтенсивної терапії та знеболення на стоматологічному прицомі</li>
          <li class="accordion__list-item">Первинна, вторинна ендодонтія, особливості мікрохірургії </li>
        </ul>
      <p class="accordion__text">Основні напрямки роботи:</p>
        <ul class="accordion__list">
          <li class="accordion__list-item">діагностика захворювань ротової порожнини</li>
          <li class="accordion__list-item">пломбування та реставрація зубів</li>
          <li class="accordion__list-item">відбілювання</li>
          <li class="accordion__list-item">ендодонтичне лікування </li>
          <li class="accordion__list-item">видалення зубів </li>
        </ul>`,
  },
  {
    id: 5,
    name: 'Соловей Мирослава Анатоліївна',
    location: 'Київ, Бровари',
    locationId: ['kyiv ', 'brovary'],
    qualification: ['Стоматолог ', 'Терапевт'],
    description: `
      <p class="accordion__text">Директор клініки "Solodent", дитячий лікар-стоматолог, терапевт.</p>
      <p class="accordion__text">Закінчила НМУ ім. О.О. Богомольця.</p>
      <p class="accordion__text">Працювала в стоматологічній клініці "Дент-Універсал".</p>
      <p class="accordion__text">Була дитячим лікарем-стоматологом на кафедрі дитячої терапевтичної стоматології та профілактики стоматологічних захворювань ім О.О. Богомольця.</p>
      <p class="accordion__text">Курси:</p>
        <ul class="accordion__list">
          <li class="accordion__list-item">системи міофункціональної корекції  аномалій прикуса для пацієнтів будь-якого віку</li>
          <li class="accordion__list-item">курс використання еластиків в ортодонтії "Ortotropics"</li>
          <li class="accordion__list-item">корекція прикуса функціональними апаратами у період росту та розвитку щелепно-лицевої області</li>
          <li class="accordion__list-item">клінічне використання та наукові принципи "The Vector Method"</li>
        </ul>
      <p class="accordion__text">Основні напрямки роботи:</p>
        <ul class="accordion__list">
          <li class="accordion__list-item">лікування карієсу та його ускладнень</li>
          <li class="accordion__list-item">ендодонтичне лікування</li>
          <li class="accordion__list-item"> естетична реставрація</li>
          <li class="accordion__list-item"> відбілювання зубів</li>
          <li class="accordion__list-item"> естетична реставрація</li>
          <li class="accordion__list-item"> знаходить індивідуальний підхід до кожної дитини</li>
          <li class="accordion__list-item"> застосовує сучасні методики профілактики стоматологічних захворювань</li>
          <li class="accordion__list-item"> володіє системою комп'ютерної анестезії STA, що забезпечує безболісне та комфорте знеболення у дітей та дорослих</li>
          <li class="accordion__list-item"> відновлення молочних зубів системою Kids Crown</li>
        </ul>`,
  },
  {
    id: 6,
    name: 'Соловей Вадим Володимирович',
    location: 'Київ',
    locationId: ['kyiv'],
    qualification: ['Стоматолог ', 'Хірург'],
    description: `
      <p class="accordion__text">Стоматолог-ортопед</p>
      <p class="accordion__text">Директор та головний лікар клініки "Solodent"</p>
      <p class="accordion__text">Навчався в НМУ ім О.О. Богомольця</p>
      <p class="accordion__text">Основні напрями роботи:</p>
      <ul class="accordion__list">
          <li class="accordion__list-item">естетичне протезування  безметалевими конструкціями з оксиду цирконію , прес кераміки E-max , вініри на рефракторі</li>
          <li class="accordion__list-item"> реабілітація пацієнтів з частковою та повною втратою зубів конструкціями з опорою на імплантати</li>
          <li class="accordion__list-item"> реабілітація пацієнтів з повною втратою зубів зйомними конструкціями .</li>
        </ul>
      <p class="accordion__text">Ваша яскрава усмішка- результат наших умінь та старань. </p>`,
  },
];
export default ourTeamInfo;