# Equity searcher utility
Assessment project

### Details
* The project is developed using python and django is used as the backend server
* Frontend is developed using Vue, the footer part of the table is taken from the vue package `vue-good-table`
* Redis is used for storing the downloaded data
* Celery is used for scheduling jobs (Might not run as expected windows machines)
* Redis is used as message broker for celery

### Setup
* Clone the repo
* Install the python 3.7 or higher
* Install all the dependencies from requirement.txt file
* Install redis and start the redis server
* Run the Django server with any preferred method (gunicorn / manage.py)

### Making changes
* Any new API's to be present in `apis` app in django
* In order to build the vue code run `npm run build`, there is a file included in vue code `post_build.py` which will 
  automatically take care of moving the dist folder contents in to appropriate django static directories
  
### Accessing the website
Use the following link to preview the hosted website (Please accept the risk as the website is hosted through self-signed certificates)
[codingloop.in](https://codingloop.in)

### Hosting information
* The website is hosted in *digitalocean*, and the domain name *codingloop.in* is pointing to digitalocean name servers
* **codingloop.in** is a personal domain name and hosted with nginx, self-signed certificates are used for SSL connection

