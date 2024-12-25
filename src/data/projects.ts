import { IProject } from '@/models/project.model'
import { ProjectTool } from '@/models/projectTool.model'

const PROJECTS: IProject[] = [
    {
        name: 'QuickCode.',
        description:
            'Compact and intuitive code editor designed for developers who value simplicity and efficiency..',
        slug: 'QuickCode',
        liveDemo: 'https://quick-code-beta.vercel.app/',
        tools: [
            ProjectTool.Next,
            ProjectTool.React,
            ProjectTool.TypeScript,
            ProjectTool.HTML,
            ProjectTool.TailwindCSS,
            ProjectTool.ThreeJS,
        ],
        status: 'in progress',
    },

    {
        name: 'Travels landing.',
        description:
            'The site contains information about my travels, links to videos about these trips and technical reports.',
        slug: 'my-travels-landing',
        liveDemo: 'https://my-travels-landing.vercel.app/',
        tools: [
            ProjectTool.Next,
            ProjectTool.React,
            ProjectTool.TypeScript,
            ProjectTool.HTML,
            ProjectTool.TailwindCSS,
            ProjectTool.ThreeJS,
            ProjectTool.Webcomponents,
            ProjectTool.ReactHookForm,
            ProjectTool.Markdown,
            ProjectTool.Contentlayer,
            ProjectTool.I18next,
            ProjectTool.Jest,
            ProjectTool.OpenAI,
        ],
        status: 'in progress',
    },
    {
        name: 'Tik Tak Toe.',
        description: 'Classic simple React tik tak toe for two users game.',
        slug: 'react-simple-tic-tac-toe',
        liveDemo: 'https://react-simple-tic-tac-toe.netlify.app/',
        tools: [
            ProjectTool.React,
            ProjectTool.TypeScript,
            ProjectTool.HTML,
            ProjectTool.TailwindCSS,
            ProjectTool.Yarn,
            ProjectTool.Vite,
        ],
        status: 'in progress',
    },
    {
        name: 'Book Swap. Nest server.',
        description:
            'Is a platform for exchanging books. App provides registered users with the opportunity to share books, add favorites to both books and users, and has a feed informing about new events from users from favorites. The functionality also includes registration, authorization of users, assignment tags and search by tags, downloading and storing avatars of user in the database, downloading and converting photos to webp with the inclusion of static distribution, the ability to add an electronic version of the book. And many, many other features...',
        slug: 'book-swap',
        liveDemo: 'https://book-swap-0ph3.onrender.com/docs',
        tools: [
            ProjectTool.NestJs,
            ProjectTool.Jest,
            ProjectTool.NodeJs,
            ProjectTool.TypeScript,
            ProjectTool.Swagger,
            ProjectTool.TypeORM,
            ProjectTool.PostgreSQL,
            ProjectTool.Multer,
            ProjectTool.Zod,
            ProjectTool.Docker,
            ProjectTool.Sharp,
        ],
        status: 'in progress',
    },
    {
        name: 'Notes text editor with tags.',
        description:
            "SPA in React, TypeScript and Sass for quick notes. Create, edit, view and delete notes. While editing a note, user can create tags using the '#' symbol. When editing a note, all words that match the tags are highlighted.",
        slug: 'notes-text-editor_with-tags',
        liveDemo: 'https://euphonious-heliotrope-5b2c49.netlify.app/',
        tools: [
            ProjectTool.React,
            ProjectTool.TypeScript,
            ProjectTool.HTML,
            ProjectTool.Sass,
            ProjectTool.JSON,
            ProjectTool.Yarn,
            ProjectTool.Vite,
        ],
        status: 'in progress',
    },
    {
        name: 'Budget Table.',
        description: 'Table of construction and erection work for budget app.',
        slug: 'table_of_construction_and_erection_work',
        liveDemo:
            'https://table-of-construction-and-erection-work-kdf7uyyt8-rimidalu.vercel.app/',
        tools: [
            ProjectTool.React,
            ProjectTool.Redux,
            ProjectTool.TypeScript,
            ProjectTool.HTML,
            ProjectTool.Sass,
            ProjectTool.Ky,
            ProjectTool.Yarn,
            ProjectTool.Vite,
        ],
        status: 'in progress',
    },
    {
        name: 'Short route on the map by points.',
        description:
            'SPA in React, RTK, Redux-saga, TypeScript and Ant-Design for display a short route on the map by points. Leaflet - interactive map shell. Maps - OpenStreetMap. Short path calculation - OSRM under the hood leaflet-routing-machine plugin.',
        slug: 'short-route-on-the-map-by-points',
        liveDemo: 'https://short-route-on-the-map-by-points.netlify.app/',
        tools: [
            ProjectTool.React,
            ProjectTool.Leaflet,
            ProjectTool.TypeScript,
            ProjectTool.Redux,
            ProjectTool.ReduxSaga,
            ProjectTool.AntDesign,
            ProjectTool.Yarn,
            ProjectTool.Vite,
        ],
        status: 'in progress',
    },
    {
        name: 'Simple photo gallery in HTML, CSS and JavaScript.',
        description:
            'A simple photo gallery with information about the photo, search by name and a random sequence of filling the gallery with photos.',
        slug: 'photo_gallery',
        liveDemo: 'https://simple-photogallery.netlify.app/',
        tools: [ProjectTool.HTML, ProjectTool.CSS, ProjectTool.JavaScript],
        status: 'in progress',
    },
    {
        name: 'Excel to Word Converter.',
        description:
            'Converter from excel to word with intermediate state to json. Allows you to get data from an excel-file in the form required by the user using a custom template.',
        slug: 'excel-to-word_converter',
        liveDemo: 'https://excel-to-word-converter.netlify.app/',
        tools: [
            ProjectTool.HTML,
            ProjectTool.TypeScript,
            ProjectTool.Sass,
            ProjectTool.JSON,
            ProjectTool.Yarn,
            ProjectTool.Vite,
        ],
        status: 'in progress',
    },
    {
        name: 'Contact-form in PHP and MySQL.',
        description:
            'PHP. A form that adds to the database with notification of messages by e-mail + a table that displays all messages in the database with pagination.',
        slug: 'php-contact_form',
        liveDemo: 'http://php-contact-form.epizy.com/',
        tools: [
            ProjectTool.PHP,
            ProjectTool.HTML,
            ProjectTool.Bootstrap,
            ProjectTool.PHPMailer,
        ],
        status: 'in progress',
    },
    {
        name: 'Travel Landing.',
        description: "My family's travel landing page.",
        slug: 'travel_landing',
        liveDemo: 'https://spiffy-donut-4c3548.netlify.app/',
        tools: [
            ProjectTool.JavaScript,
            ProjectTool.HTML,
            ProjectTool.Bootstrap,
        ],
        status: 'in progress',
    },
    {
        name: 'React binary tree.',
        description:
            "Binary tree with random number generator. At the user's request, a new random value is embedded in the tree.",
        slug: 'react_binary_tree',
        liveDemo: 'https://react-binary-tree-k7vywh0ab-rimidalu.vercel.app/',
        tools: [
            ProjectTool.React,
            ProjectTool.TypeScript,
            ProjectTool.HTML,
            ProjectTool.CSS,
            ProjectTool.ReactD3Tree,
            ProjectTool.Yarn,
            ProjectTool.Vite,
        ],
        status: 'in progress',
    },
    {
        name: 'Post table.',
        description:
            'SPA in React, RTK, Redux-saga, TypeScript and TailwindCSS for display a list of post. User can search, sort, filter posts. There is pagination.',
        slug: 'react-rtk-table-search-sort-filter-pagination',
        liveDemo: 'https://react-rtk-table.netlify.app/',
        tools: [
            ProjectTool.React,
            ProjectTool.TypeScript,
            ProjectTool.Redux,
            ProjectTool.ReduxSaga,
            ProjectTool.HTML,
            ProjectTool.Vite,
        ],
        status: 'in progress',
    },
]

export { PROJECTS }
