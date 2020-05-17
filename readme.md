# RDF Extractor

RDF Extractor extracts metadata from RDF file

# How to Use!

You can nuse this utility in to ways 
  - Locally
  - Docker Container

##### Locally!
You need to have node runtime environment and postgres.
```sh
$ clone the repo and cd into it
$ mv .env-example .env && source .env
$ cd src
$ npm install
$ npm run db-migrate
$ node ./main.js path-to-rdf-folder
```
##### Using Docker!
The docker version spins up a postgres database, pgAdmin, and the extractor utility.
Note - The docker version assumes you have a folder named cache in the src director containing the RDF files.
```sh
$ clone the repo and cd into it
$ mv .env-example .env && source .env
$ docker-compose up --build
```
### Assumptions
  - The RDF folder will alway contain a epub folder.
  - The epub folder contains a list of folders with number as file names, containing the RDF file.
  - Each RDF file contains metadata about a book.
 
### Design Considerations
  - Scalability, how long does it take to index all the content
  - Reliability, does all the information process correctly?
  - Querying the dataset, how should the database be configured to search for specific fields quickly?
  - Export documents as Markdown, HTML and PDF
    - Title
    - Author name
    - Publication date

### Approach
  - Maintain three databases for Author, Books and Ingested.
  - I split Book and Author into different tables because a book can have many authors and also an author can publish many books.
  - In Books Table i kept its authors in a authors_id column which is of type UUID array. This author_id references a a_id coulmn in the author table.
  - Author Table i kept this tabke so we don't have multiple author records.
  - Ingested Table, this table keeps track of record that have been ingested into the database. That way if the process fails mid way it will not re-ingest data that has already been ingested. This table is cleared when all the RDF files have been ingested.
  - Write record into the databse in batch of 1000. I don't want to make calls to the database when each RDF file is successfully read.

### Future Improvements
  - Allow remote files. I should be able to provide a url to RDF folder to be read.
  - CPU core is not used to its full potential, I have a CPU with 8 cores so i should be able to extend my algorithm to run multiple ingest process in parrallel.


### Contributors
Daniel Uche - dank.uche@yahoo.com
