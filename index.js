// import './css/app.scss'
import barba from '@barba/core'
import barbaCss from '@barba/css'


const body = document.querySelector("body");
barba.hooks.before((data)=> {   
    const background = data.current.container.dataset.background;
    body.style.setProperty('--page-background', background);
})

barba.use(barbaCss)

barba.init({
    transitions : [ 
        {
            name: "home",
            to : {
                namespace : ['home']
            },
            sync: true ,
            once(){},
            leave(){},
            enter(){},
        },{
            name: "fade",
            to : {
                namespace : ['fade']
            },
            leave(){},
            enter(){},
        }, {
            name: "clip",
            sync : true,
            to : {
                namespace : ['clip']
            },
            leave(){},
            enter(){},
        }, {
            name: "with-cover",
            to : {
                namespace : ['with-cover']
            },
            leave(){},
            enter(){},
        }
    ]
})
