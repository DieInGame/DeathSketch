cc.Class({
    extends: cc.Component,

    properties: {
        menu_animation : {
            default : null,
            type    : cc.Animation
        },
        menu_particles : {
            default : null,
            type    : cc.ParticleSystem
        },
        btn_group      : {
            default : null,
            type    :cc.Node
        }
    },

    // use this for initialization
    // onLoad: function () {

    // },

    onLoad : function () {
        cc.eventManager.pauseTarget(this.btn_group, true);
        this.scheduleOnce(function () {
            this.menu_animation.play();
            this.menu_particles.enabled = false;
        }.bind(this) , 2);
    },
    
    showParticles : function () {
        this.menu_particles.enabled = true;  
    },
    
    enableBtns  : function () {
        cc.eventManager.resumeTarget(this.btn_group, true);   
    },
    
    playGame : function () {
        cc.eventManager.pauseTarget(this.btn_group, true);
        cc.director.loadScene('Room1');  
    }
});
