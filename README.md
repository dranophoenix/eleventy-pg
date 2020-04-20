<br/># ELEVENTY with PG no graphql yet

<h1>initial eleventy</h1> <br/>
https://www.11ty.dev/ <br/>

npm init -y <br/>
npm install --save-dev @11ty/eleventy <br/>

\*to run this project. dont forget "npm install" <br/>

This will compile any content templates in the current directory or subdirectories into the output folder (defaults to \_site). <br/>
npx @11ty/eleventy <br/>

Use --serve to start up a hot-reloading local web server <br/>
npx @11ty/eleventy --serve <br/>

[Browsersync] Access URLs: <br />
------------------------------------- <br />
Local: http://localhost:8080 <br />
External: http://192.168.1.44:8080 <br />
------------------------------------- <br />
UI: http://localhost:3002 <br />
UI External: http://localhost:3002 <br />
------------------------------------- [Browsersync] Serving files from: \_site
<br />

https://node-postgres.com/ <br/>

on html file: to get a data from db use FILENAME to call this function inside<br/>
There is a hierachy of data that will be used. For more information "Data Cascade".. <br/>
eg. front matter data will be the first priority. <br/>

https://www.11ty.dev/docs/pagination/<br/>
pagination for generating every content from content list<br/>

if .eleventy.js is an ugly file name. you can specify by your self then run with --config=my-new-eleventy-config.js <br/>
