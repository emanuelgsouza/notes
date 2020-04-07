module.exports = {
  title: 'Notes',
  description: 'Um site com notas de estudo pessoais',
  themeConfig: {
    search: false,
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Meu site pessoal',
        link: 'https://emanuelgsouza.dev'
      }
    ],
    lastUpdated: 'Última atualização',
    sidebar: [
      '/',
      '/developer/',
      '/front-end/',
      '/javascript/',
      '/data-structures/'
    ]
  }
}