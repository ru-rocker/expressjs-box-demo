# Overview
ExpressJS demo. For showing box only with color. 

Built on top of docker, with tags represent its color.

The docker image is pushed in https://hub.docker.com/r/rurocker/boxdemo.


# Run

    #red
    docker run --rm -p3000:3000 rurocker/boxdemo:red

    #green
    docker run --rm -p3000:3000 rurocker/boxdemo:green

# URL

##### Main page
http://localhost:3000/ 

##### Readiness
http://localhost:3000/health-check/readiness

##### Liveness
http://localhost:3000/health-check/liveness