# Portfolio Website for Product Managers

A template product portfolio for sharing great product stories. You can use this template to create, personalize, and deploy your portfolio onto the internet for FREE. 

Check out a live preview of the template portfolio [here](https://product-porfolio.vercel.app/).

Here's a quick walkthrough of the structure of the portfolio and what you need to modify to make it your own:

[![Watch the video](/public/assets/preview/portfolio_tour.png)](https://www.loom.com/share/1ec2c588d3b24cf7aa0dc467b0fec3df)


This template was created in collaboration with [@nicolemors](https://github.com/nicolemors). The template was developed ontop of the [next.js blog template](https://github.com/timlrx/tailwind-nextjs-starter-blog). The structure of project pages was inspired by [Bart Krawczyk's portfolio](https://www.bartkrawczyk.com/portfolio). Creating a template for product managers was inspired by [@manuarora700](https://github.com/manuarora700) and his work on templatizing a [developer portfolio website](https://github.com/manuarora700/simple-developer-portfolio-website). 

![Preview](/public/assets/preview/portfolio_screenshot.png)

# The structure of the portfolio

The portfolio is built to highlight you and the projects you've worked on and we've kept it dead simple for that purpose. Here are the pages included:

* **Home** Orient your reader to your portfolio with a brief introduction to yourself and links to your recently published projects. You can also include a headshot and a link to download your resume.

* **About** Tell the reader a bit more about yourself and path into product with a fun picture.

* **Projects** The projects you've worked. Each project will have its own page highlighting your role, project execution, challenges and achievements.

Find more information on creating content for your portfolio check out the medium [blog post](https://medium.com/@lisafeets/5827777779a9).

# Personalizing your portfolio

Make the portfolio your own by personalizing the following components:

### Favicon
Choose your own favicon and uploaded it [here](/public/favicons/favicon.ico). An easy way to do this is to grab a [favorite emoji](https://www.svgrepo.com/) as an svg file and then [convert](https://convertio.co/) it to an .ico file.

### Preview image
Create your own preview image for your portfolio which will appear when your webpage is shared on the internet (e.g. on Slack). You can use the preview image in the template as a starting point and edit to your liking. Replace the old preview with your new file [here](/public/assets/preview/preview.png). 

### Headshot and about pic
There are two places to add pictures: on the homepage (file [here](/public/assets/posts/authors/annie.svg)) and the about page (file [here](/public/assets/about/annie.svg)). 

### Resume
Add your updated resume in .pdf format [here](/public/assets/resume/Resume.pdf).

### Social media links
Replace dummy social links with your real ones [here](/components/footer.js).

# Build and Deploy

Here's a quick walkthrough of how to copy the repo, make changes to the template and deploy to vercel

[![Watch the video](/public/assets/preview/loom_preview.png)](https://www.loom.com/share/72c83abee4af4591b42940d8b2ff6a17)

To get your website up and running start by creating a new repo from this template using the button on the top right

![Preview](/public/assets/preview/template_button.png)

Next clone the repo locally to your machine so you can make your project edits and other personalization. 

```
git clone <your repo address>
```

Once copied locally, install the project modules. 

```
npm install
```

You'll want to preview your changes by running a local development server.

```
npm run dev
```

If you run into any issues try updating the version of node you're using (I use 14.19.1)

Once you're happy with the changes you've made push the updates to your master branch.

```
git add .
git commit -m "files updated"
git push origin
```

Next, create your Vercel hobby account. Create a new project and connect it to your personal GitHub repo. 
Vercel will automatically publish your repo to a FREE website hosted by [Vercel](https://vercel.com/) (aka *.vercel.app). If you wish to host your portfolio on a bespoke URL (aka lisafeets.com), you can purchase a domain name through Vercel directly and publish your site there.

# License

This template is Open Source and free to use. If you would like to enhance the template we encourage you to do so by creating a pull request ❤️

