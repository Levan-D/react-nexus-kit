![Banner with logo](https://i.imgur.com/xtTrKiR.png)

# React Nexus Kit

React Nexus Kit (RNK) is an all-in-one solution that brings together a powerful set of React packages and includes prewritten boilerplate code to help you start your project swiftly. It simplifies the setup process by automatically installing a Vite React TypeScript project, complete with essential libraries such as Redux Toolkit for state management, React Router DOM for routing, Tailwind CSS for styling, Axios for API requests, React Helmet for managing metadata, and the Vite SVGR plugin to seamlessly import SVGs as JSX components.

## How to use

Install

```js
npm i react-nexus-kit
```

Initiate

```js
npx init-react-nexus-kit
```

Run

```js
npm run dev
```

The following folder structure will be created in the root directory:

```
root
└── public
    ├── .htaccess
    ├── logo.png
    ├── robots.txt
    └── sitemap.xml
└── src
    └── app
        ├── hooks.ts
        └── store.ts
    └── assets
        ├── logo.png
        └── github.png
     └── components
        ├── Footer.tsx
        └── Navbar.tsx
     └── data
     └── features
        └── error
           └── Error.tsx
        └── home
           └── Home.tsx
     └── hooks
     └── layouts
        └── RootLayout.tsx
     ├── utils
     ├── App.tsx
     ├── index.css
     ├── main.tsx
     ├── types.d.ts
     └── vite-env.d.ts
├── eslintrc.cjs
├── index.html
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── .gitignore
```

# Commands

Start

```js
npm run dev
```

Build

```js
npm build
```
