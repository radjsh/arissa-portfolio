<template>
    <div class="bulletin-div">
            <div class="misc-div">
                <img class="bg" src="@/assets/bulletin-board.svg" id="bg"/>
                <img src="@/assets/close_btn.svg" class="close-btn btn-inactive" @click="onClickClose" v-if="showControls">
                <img src="@/assets/pencil-btn.svg" class="pencil-btn btn-inactive" @click="onClickOpen" v-if="!showControls">
                <canvas class="canvas" v-if="showControls" @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="keepPainting" id="canvas" width="800" height="450"></canvas>
                <div class="cursor" id="cursor"></div>
                <div class="button-row" v-if="showControls">
                    <div :class="[black ? 'btn-active' : 'btn-inactive']">
                        <img src="@/assets/colours/black-btn.svg" @click="onClickColor('black')"/> 
                        </div>
                        <div :class="[red ? 'btn-active' : 'btn-inactive']" @click="onClickColor('red')">
                        <img src="@/assets/colours/red-btn.svg"/> 
                        </div>
                        <div :class="[yellow ? 'btn-active' : 'btn-inactive']" @click="onClickColor('yellow')">
                        <img src="@/assets/colours/yellow-btn.svg"/> 
                        </div>
                        <div :class="[green ? 'btn-active' : 'btn-inactive']" @click="onClickColor('green')">
                        <img src="@/assets/colours/green-btn.svg"/> 
                        </div>
                        <div :class="[blue ? 'btn-active' : 'btn-inactive']" @click="onClickColor('blue')">
                        <img src="@/assets/colours/blue-btn.svg"/> 
                        </div>
                        <div :class="[brown ? 'btn-active' : 'btn-inactive']" @click="onClickColor('brown')">
                        <img src="@/assets/colours/brown-btn.svg"/> 
                        </div>
                        <div :class="[skin ? 'btn-active' : 'btn-inactive']" @click="onClickColor('skin')">
                        <img src="@/assets/colours/skin-btn.svg"/> 
                        </div>
                        <div :class="[pencil ? 'btn-active' : 'btn-inactive']" @click="onClickControl('pencil')">
                            <img src="@/assets/pencil-btn.svg"/>
                        </div>
                        <div :class="[eraser ? 'btn-active' : 'btn-inactive']" @click="onClickControl('eraser')">
                            <img src="@/assets/eraser-btn.svg"/>
                        </div>
                        <div :class="[trash ? 'btn-active' : 'btn-inactive']" @click="onClickControl('trash')">
                            <img src="@/assets/trash-btn.svg"/>
                        </div>
                        <div class="btn-inactive" @click="onClickDone">
                            <img src="@/assets/done-btn.svg"/>
                        </div>
                    </div>
    </div>
        

    </div>
</template>

<script>
export default ({
    name: "bulletin-board",

    data () {
        return {
            pencil: true,
            eraser: null,
            trash: null,
            black: true,
            red: null,
            yellow: null,
            green: null,
            blue: null,
            brown: null,
            skin: null,
            colors: {'black': '#2F2A1B', 'red': '#D7766F', 'yellow': '#F7C65F', 'green': '#A3AD80', 'blue': '#B1BCD5', 'brown': '#794E2F', 'skin': '#F1BE96'},
            painting: null,
            canvas: null,
            ctx: null,
            vueCanvas:null,
            color_now: '#2F2A1B',
            color_prev: '#2F2A1B',
            x: 0, // left 
            y: 0, // top
            drawing: true,
            showControls: true,
        }
    },

    methods : {
        onClickControl(btn){
            if (btn == 'pencil') {
                this.pencil = true;
                this.eraser = false;
                this.trash = false;
                this.drawing = true;
                this.color_now = this.color_prev;
            }

            if (btn == 'eraser') {
                this.pencil = false;
                this.eraser = true;
                this.drawing = true;
                this.trash = false;
                this.black = false
                this.red = false
                this.yellow = false
                this.green = false
                this.blue = false
                this.brown = false
                this.skin = false
                this.color_prev = this.color_now;
                this.color_now = "#F1E8E6";
            }

            if (btn == 'trash') {
                this.pencil = true;
                this.eraser = false;
                this.trash = false;
                this.black = true;
                this.red = false
                this.yellow = false
                this.green = false
                this.blue = false
                this.brown = false
                this.skin = false

                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            }
        },

        onClickColor(color_btn){
            this.black = false
            this.red = false
            this.yellow = false
            this.green = false
            this.blue = false
            this.brown = false
            this.skin = false
            this.pencil = true
            this.trash = false
            this.eraser = false

            if (color_btn == "black") {this.black = true; this.color_now = "#2F2A1B"; this.color_prev = "#2F2A1B"; return}
            if (color_btn == "red") {this.red = true; this.color_now = "#D7766F"; this.color_prev = "#D7766F"; return}
            if (color_btn == "yellow") {this.yellow = true; this.color_now = "#F7C65F"; this.color_prev = "#F7C65F";return}
            if (color_btn == "green") {this.green = true; this.color_now = "#A3AD80"; this.color_prev = "#A3AD80"; return}
            if (color_btn == "blue") {this.blue = true; this.color_now = "#B1BCD5"; this.color_prev = "#B1BCD5"; return}
            if (color_btn == "brown") {this.brown = true; this.color_now = "#794E2F"; this.color_prev = "#794E2F"; return}
            if (color_btn == "skin") {this.skin = true; this.color_now = "#F1BE96"; this.color_prev = "#F1BE96"; return}
        },

        onClickDone () {
            console.log("You're done");
            // var image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
            // window.location.href=image; // it will save locally
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // this.showControls = false;
        },

        onClickClose () {
            console.log("Closing");
            // this.showControls = false;
        },

        onClickOpen () {
            console.log("Closing");
            this.showControls = true;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },

        drawLine(x1, y1, x2, y2) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.color_now
            this.ctx.lineWidth = 10;
            if (this.eraser == true) {
                this.ctx.lineWidth = 30;

            }
            this.ctx.lineCap ="round" 
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
            this.ctx.closePath();
        },

        startPainting(e) {
            if (this.drawing == true) {
                this.painting = true;
                console.log("Painting: " + this.painting);
                console.log(e.offsetX);
                console.log(e.offsetY);
                this.x = e.offsetX
                this.y = e.offsetY
            }
        },

        keepPainting(e) {
            var rect = this.canvas.getBoundingClientRect();
                if (this.painting === true) {
                    console.log(this.x, this.y)
                    console.log(e.offsetX, e.offsetY)
                    this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
                    this.x = (e.clientX - rect.left)
                    this.y = (e.clientY - rect.top)
            }
        },

        finishedPainting(e) {
            this.painting = false;
            this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
            this.x = 0;
            this.y = 0;
        },
    },

    mounted() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");  
        this.vueCanvas = this.ctx;
    },


});


</script>

<style scoped>
.bulletin-div {
    justify-content: center;
}

.bg {
    position: absolute;
    z-index: 1;
    left: 140px;
    top: 200px;
    width: 80%;
    height: auto;
}

.misc-div{
    position: static;
    justify-content: center;
    overflow: 0;
}

.canvas {
    position: absolute;
    background-color: #F1E8E6;
    z-index: 3;
    left: 335px;
    top: 295px;
    /* bottom: 160px;
    left: 300px; */
}

.close-btn {
    position: absolute;
    z-index: 4;
    left: 235px;
    top: 295px;     
}

.pencil-btn {
    position: absolute;
    z-index: 4;
    right: 255px;
    top: 295px;     
}

/* .controls {
    position: absolute;
    z-index: 5;
    margin-top: 20px;
    bottom: 40px;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: none;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
} */

.button-row {
    position: absolute;
    z-index: 5;
    top: 780px;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: none;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
}

.btn-inactive {
    width: 54px;
    cursor: pointer;
    margin-left: 24px;
}

.btn-active {
    position: relative;
    width: 54px;
    height: 54px;
    cursor: pointer;
    margin-left: 24px;
    border-style: solid;
    border-color: #F7C760;
    border-width: 4px;
    border-radius: 54px;
    border-spacing: 0pt;
    top: -10px;
}

@media screen and (max-width: 890px) {
  .button-active, .button-inactive {
    height: 36px;
    border-radius: 36px;
  }
}
</style>