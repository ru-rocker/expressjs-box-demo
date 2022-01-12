# Overview
ExpressJS demo. For showing box only with color. 

Built on top of docker, with tags represent its color.

The docker image is pushed in https://hub.docker.com/r/rurocker/boxdemo.

# Run

    # BOX_COLOR : any valid css color
    docker run -e BOX_COLOR='orange' -p3000:3000 rurocker/boxdemo:args

# URL

##### Main page
http://localhost:3000/ 

##### Readiness
http://localhost:3000/health-check/readiness

##### Liveness
http://localhost:3000/health-check/liveness