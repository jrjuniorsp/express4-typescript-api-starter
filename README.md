# Express 4 (Node.js framework) with Typescript support for API development

This is a starter project for who is looking for a sample that uses "Express4 + Typescript for API Development". There is no front-end module (Jade, Handlebars, EJS) in this project.

##Requeriment:

- Node.JS already installed

## Install
```
git clone https://github.com/jrjuniorsp/express4-typescript-api-starter.git
cd express4-typescript-api-starter
#optional - rename the express4-typescript-api-starter folder to a new one

#Modules install
npm install

#Postinstall
npm run postinstall
```

## Source folder

The typescript files (*.ts) are located inside the ./src directory. Change/create the TS files inside this folder.
The grunt will "compile" those files to the ./ directory.

## Development

In the development phase, run the following command:

```
npm run dev
```

Open the browser and type the following URL: http://localhost:3000

If any .TS file is changed, the server will automatically compile and deploy the new content.

## Compile

Before moving to production, you must compile the *.TS files to *.JS file. The npm run dev makes it automatically, but if you want to do that manually, you should run:

```
npm run grunt
```

#Production

Under development


