## Thesis repository

to run application

#### For the database

docker-compose pull -> pull the docker postgres img from docker hub
docker-compose up -> builds the image locally

docker start <container-name>

verify that it is running by checking with

docker ps -a

should be also mapping the port 5432 of the container -> 5432 to the one of localhost

Now that you have the database running you need to create and import the database data so the strapi dashboard finds it.

Run

docker exec -it <container-name> psql -U strapi -d postgres -c "CREATE DATABASE strapi"

note strapi on the above command are the usernamen and db name inside the container if you alter those inside your dockerfile you need to alter those as well.

Now that you have your database created you need to import the data_dump form the backend project located under the db_backup folder insider the backend project.

You can do this by running

docker exec -i <container-name> /bin/bash -c "PGPASSWORD=strapi psql --username strapi strapi" < ~/path/to/file/strapi-thesisDB.sql

If every thing went smooth you should have the database populated with the correct data.

### For the front end

Go inside the directory that container the package.json

and run

npm i

in case it fails, it might request to run it with a certain flag like --peer-deps enabled.
Add it and rerun it.

To run it in a development enviroment, run

npm run dev

again on the same level

a dev mode enviroment should be acessible at localhost:3000 of your machine

### For the backend

Go inside the directory that container the package.json

and run

npm i

ignore the upgrade suggestions since those might break the application.

run

npm run develop

to start the dashboard in a dev mode

should be acessible at localhost:1337 of your machine

In order to ensure the app runs correctly

Run them in this order

1. DB
2. Dashboard/Backend
3. Frontend
