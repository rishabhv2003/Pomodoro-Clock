var minutes = 25;
var seconds = 0;
// function temp() {
//     document.getElementById('minutes').innerHTML = minutes;
//     document.getElementById('seconds').innerHTML = seconds;
// }
start();
function start() {
    minutes = 24;
    seconds = 59;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('minutes').innerHTML = minutes
    }
    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('seconds').innerHTML = seconds
        if(seconds <= 0){
            if(minutes <= 0)
            {
               clearInterval(minutes_interval); 
               clearInterval(seconds_interval); 
            }
            seconds = 60;
        }
    }
}






















setInterval(() => {
    var a = new Date();
    var time = ((a.getHours() % 12) + ":" + a.getMinutes() + ":" + a.getSeconds());
    var date = (a.toLocaleDateString());
    document.getElementById('showTime').innerHTML = time;
    document.getElementById('showDate').innerHTML = date;
}, 1000);



particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 80,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 12,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 800,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);