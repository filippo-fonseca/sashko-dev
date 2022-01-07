# ✍️ Writing new blog posts

The following is a step-by-step breakdown of how to wwrite a new blog post under the current system.

### 1. Creating the `mdx` file

First up, go into the `src/posts` directory and create a new mdx file for the given blog post and title it accordingly.

### 2. Populate the post information

At the top of the page, we need to include basic data points so that our custom markdown parser can interpret the data and display it to the reader.

Use the following as a template and change the data accordingly for the new blog post:

```mdx
---
title: "Unlocking my email data for fun and carbon offsets"
createdAt: April 15, 2020
intro: "What if there was a tool that let you scrape your inbox with a single for loop?"
---
```

### 3. Write the article (of course)

Feel free to write the article directly below the `---` in the header of said `mdx` file.

### 4. Assets

Any assets (images, gifs, etc.) must be placed in the `public/blog` section of the repository (per Next.js convention - and taht's also how the parser works atm).

Here, create a folder with an appropriate title and place your assets here. In order to import them into your `mdx` file, all you need to do is place the route in the markdown image linkage. This is an example:

```mdx
![Civilization VI running on an iPhone 12 Pro Max](blog/games-in-the-cloud/civ.jpg)
```

#### How to import React/JS Components

Place the actual file itself in the same `public/blog/ARTICLE_TITLE` directory as the images and assets. Once that file is ready to be imported, go to `core/components/Markdown.tsx`, import the file, and add it to the `markdown` object as such (this is an example of the Typography article's components being imposted and added to this object):

```tsx
import {
    ScaleExamples,
    LineHeights,
} from "../../public/blog/typography-js/ScaleExamples"; // imported here

const components = {
    code: dynamic(() => import("./Markdown/Code").then(v => v.MDCode), {
        loading: () => <>Loading code..</>,
    }),
    ScaleExamples, // added here
    LineHeights, // added here
};
```

### 5. Edit the `PostDirectory.ts` file

Create a new object in the current array located in `core/lib/PostDirectory.ts` with the new article's data.

The following is an example:

```tsx
  {
        title: "Typography.js: Using scale() and rhythm()",
        imgURL: "blog/typography-js/typography.png",
    },
```

This will be responsible for the thumbnail of the article showing up in the home page (All POsts) section.

And... you're done! Congrats and happy writing 🎉

If you have any questions, reach out to me via **filifonsecacagnazzo@gmail.com** or [**Twitter**](https://twitter.com/FilippoFonseca).
