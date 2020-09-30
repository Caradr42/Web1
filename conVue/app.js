//console.log("AAAAA")
var app = 	new Vue({
    el: '#app', 
    data: { 
        message: 'AAAAA',
        skills: [
            {s: 2, name:'Languages',  cont:['C++','Java','C#','Python','JavaScript']},
            {s: 2, name:'Other',      cont:['Arduino','SQL','HTML + CSS']},
            {s: 3, name:'Frameworks & tools', cont:['Ruby on Rails','Ionic','Tensor Flow']},
            {s: 2, name:'Platforms', cont:['Windows','Ubuntu(admin)']},
            {s: 3, name:'Software', cont:['Unity 3D','Photoshop/GIMP ','Solid Works','EAGLE (PCB design)']}
        ]
    }
});