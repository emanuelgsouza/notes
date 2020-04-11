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
      {
        title: 'Developer Skills',
        path: '/developer/',
        children: [
          '/developer/ssh',
          '/developer/web-performance.md',
        ]
      },
      '/front-end/',
      '/javascript/',
      '/data-structures/'
    ]
  }
}