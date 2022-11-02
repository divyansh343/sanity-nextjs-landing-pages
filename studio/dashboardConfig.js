export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '636239c6d516487172ecdc8c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-45iytnsy',
                  apiId: 'c118838c-ab3b-4c98-96d6-3e93a6ff4447'
                },
                {
                  buildHookId: '636239c6806a40702e61aadf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9cfey5wr',
                  apiId: '4117ca9c-9614-4b37-979c-97d28b626225'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/divyansh343/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9cfey5wr.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
