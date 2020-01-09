export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e16d2c8e4390cb939fbc007',
                  title: 'Sanity Studio',
                  name: 'my-port-studio',
                  apiId: '30cf720c-05fc-46f1-8d4e-aa2dc562b65d'
                },
                {
                  buildHookId: '5e16d2c9374e5904f733144c',
                  title: 'Landing pages Website',
                  name: 'my-port-web',
                  apiId: 'ea293a0a-cf16-48ff-b921-c849ebe272cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/therishabh/my-port',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://my-port-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
