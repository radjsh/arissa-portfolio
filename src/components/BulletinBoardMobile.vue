<template>
    <div class="bulletin-mobile-div">
        <img class="bg-m" src="@/assets/bulletin-board-m.svg" id="bg-m"/>
        <!-- To change the drawing prompt, edit the text below -->
        <text class="header-bbm">drawing prompt: funky fruits!</text>
        <!-- touch-action: none on .canvas-bbm prevents the page from scrolling while drawing -->
        <canvas class="canvas-bbm" @touchstart="startPainting" @touchend="finishedPainting" @touchmove="keepPainting" id="canvas-bbm"></canvas>
        <!-- Row 1: colour buttons. To add a new colour, add a div here + a corresponding entry in onClickColor() and data() -->
        <div class="button-row-m">
                <div :class="[black ? 'btn-m-active' : 'btn-m-inactive']">
                    <img src="@/assets/colours/black-btn.svg" @click="onClickColor('black')"/>
                </div>
                <div :class="[red ? 'btn-m-active' : 'btn-m-inactive']" @click="onClickColor('red')">
                    <img src="@/assets/colours/red-btn.svg"/>
                </div>
                <div :class="[yellow ? 'btn-m-active' : 'btn-m-inactive']" @click="onClickColor('yellow')">
                    <img src="@/assets/colours/yellow-btn.svg"/>
                </div>
                <div :class="[green ? 'btn-m-active' : 'btn-m-inactive']" @click="onClickColor('green')">
                    <img src="@/assets/colours/green-btn.svg"/>
                </div>
                <div :class="[blue ? 'btn-m-active' : 'btn-m-inactive']" @click="onClickColor('blue')">
                    <img src="@/assets/colours/blue-btn.svg"/>
                </div>
                <div :class="[brown ? 'btn-m-active' : 'btn-m-inactive']" @click="onClickColor('brown')">
                    <img src="@/assets/colours/brown-btn.svg"/>
                </div>
                <div :class="[skin ? 'btn-m-active' : 'btn-m-inactive']" @click="onClickColor('skin')">
                    <img src="@/assets/colours/skin-btn.svg"/>
                </div>
        </div>
        <!-- Row 2: tool buttons (pencil, eraser, trash, done) -->
        <div class="button-row-m-2">
                <div :class="[pencil ? 'btn-m-active' : 'btn-m-inactive']" @click="onClickControl('pencil')">
                    <img src="@/assets/pencil-btn.svg"/>
                </div>
                <div :class="[eraser ? 'btn-m-active' : 'btn-m-inactive']" @click="onClickControl('eraser')">
                    <img src="@/assets/eraser-btn.svg"/>
                </div>
                <div :class="[trash ? 'btn-m-active' : 'btn-m-inactive']" @click="onClickControl('trash')">
                    <img src="@/assets/trash-btn.svg"/>
                </div>
                <div class="btn-m-inactive" @click="onClickDone">
                    <img src="@/assets/done-btn.svg"/>
                </div>
        </div>
    </div>
</template>

<script>
import { db } from "../firebase.js";

export default ({
    name: "bulletin-board-mobile",
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    data () {
        return {
            // Tool states — tracks which tool/colour is currently active (highlighted)
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
            // To add a new colour: add it here, add a button in the template, and handle it in onClickColor()
            colors: {'black': '#2F2A1B', 'red': '#D7766F', 'yellow': '#F7C65F', 'green': '#A3AD80', 'blue': '#B1BCD5', 'brown': '#794E2F', 'skin': '#F1BE96'},
            painting: null,
            canvas: null,
            ctx: null,
            vueCanvas:null,
            color_now: '#2F2A1B',  // active drawing colour
            color_prev: '#2F2A1B', // last colour before switching to eraser
            x: 0, // current touch x position
            y: 0, // current touch y position
            drawing: true,
            showControls: true,
            windowWidth: null,
            windowHeight: null,
            canvasWidth: null,
            canvasHeight: null,
            photosOnBoard: false,
            myFile: null,
            processing: false,
            fileURL: null,
        }
    },
    methods : {
        // Handles pencil / eraser / trash (clear all) tool selection
        onClickControl(btn){
            if (btn == 'pencil') {
                this.pencil = true;
                this.eraser = false;
                this.trash = false;
                this.drawing = true;
            }
            if (btn == 'eraser') {
                this.pencil = false;
                this.eraser = true;
                this.drawing = true;
                this.trash = false;
            }
            if (btn == 'trash') {
                this.pencil = true;
                this.eraser = false;
                this.trash = false;
                if (this.color_now == '#F1E8E6'){
                    this.color_now = this.color_prev
                }
                this.color_prev = this.color_now;
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        },

        // Switches the active colour. Selecting a colour also auto-switches back to pencil.
        // To add a colour: add an `if` block here, a data property above, and a button in the template.
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

        // Called when the user taps Done — saves the drawing to Firebase then reloads
        onClickDone () {
            if (this.isCanvasBlank()) {
                console.log("CANVAS IS BLANK")
            } else {
                var canvasContents = this.canvas.toDataURL();
                var data = { image : canvasContents, date : Date.now(), name : 'Canvas' + Date.now() };
                console.log("DATA: ", data);
                this.fileInputTest(data);
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.scrollDown();
                setTimeout(() => {location.reload(true);}, 500);

            }
        },

        // Returns true if nothing has been drawn (all pixels are transparent/zero)
        isCanvasBlank() {
            var canvas = document.getElementById("canvas-bbm")
            return !canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data.some(channel => channel !== 0)
        },

        // Saves the drawing to the 'canvases' collection in Firebase Firestore
        async fileInputTest(file) {
        try {
            const canvasRef = db.collection('canvases').doc()
            canvasRef.set({
                image: file.image,
                date: file.date,
                name: file.name});
            console.log("Drawing Added");
        } catch (e) {
        console.error("Error adding document: ", e);
            }
        },

        onClickClose () {
            this.showControls = false;
        },

        onClickOpen () {
            this.showControls = true;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.onClickControl('pencil');
        },

        // Core drawing function.
        // To adjust stroke width: change the lineWidth values (eraser ? [eraser size] : [pencil size])
        // 'destination-out' makes the eraser actually remove pixels instead of painting over them
        drawLine(x1, y1, x2, y2) {
            this.ctx.beginPath();
            this.ctx.globalCompositeOperation = this.eraser ? 'destination-out' : 'source-over';
            this.ctx.strokeStyle = this.color_now;
            this.ctx.lineWidth = this.eraser ? 20 : 5;
            this.ctx.lineCap = "round";
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
            this.ctx.closePath();
        },

        // touchstart: records the starting position and draws a dot so single taps register
        startPainting(e) {
            if (this.drawing) {
                this.painting = true;
                this.x = e.offsetX || e.touches[0].clientX - e.touches[0].target.getBoundingClientRect().left;
                this.y = e.offsetY || e.touches[0].clientY - e.touches[0].target.getBoundingClientRect().top;
                // Draw a dot immediately so single taps (no move) still appear
                // To adjust dot size: change the radius values (eraser ? [eraser radius] : [pencil radius])
                this.ctx.beginPath();
                this.ctx.globalCompositeOperation = this.eraser ? 'destination-out' : 'source-over';
                this.ctx.fillStyle = this.color_now;
                this.ctx.arc(this.x, this.y, this.eraser ? 10 : 2.5, 0, Math.PI * 2);
                this.ctx.fill();
            }
        },

        // touchmove: draws a line from the last position to the current finger position
        keepPainting(e) {
            if (this.painting) {
                const rect = this.canvas.getBoundingClientRect();
                const x = e.offsetX || e.touches[0].clientX - rect.left;
                const y = e.offsetY || e.touches[0].clientY - rect.top;
                this.drawLine(this.x, this.y, x, y);
                this.x = x;
                this.y = y;
            }
        },

        // touchend: stops drawing
        finishedPainting() {
            this.painting = false;
            this.x = 0;
            this.y = 0;
        },

        // Used to determine whether to show the mobile or desktop bulletin board (see doodleboard.vue)
        // To change the mobile breakpoint, adjust the value below
        checkScreen() {
            this.windowWidth = window.innerWidth;
            this.canvasWidth = this.windowWidth * 0.6;
            this.canvasHeight = this.canvasWidth * 0.8;
            if (this.windowWidth <= 750){
            this.mobileView= true;
            return;
            }

            this.mobileView = false;
        },

        scrollDown() {
            console.log("Scrolling Down");
            window.scrollTo({top: 700, behavior: 'smooth'});
        },

    },
    mounted() {
        this.canvas = document.getElementById("canvas-bbm");
        // Scale the canvas bitmap by devicePixelRatio so strokes are crisp on retina/high-DPI screens.
        // Without this, the canvas defaults to 300x150px and gets blurry when stretched by CSS.
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.scale(dpr, dpr);
        this.vueCanvas = this.ctx;
    },
});
</script>

<style scoped>

.bulletin-mobile-div {
    display: grid;
    grid-template-rows: 3;
    align-content: center;
    justify-items: center;
}

.bg-m {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
}

.canvas-bbm {
    position: relative;
    background-color: #F1E8E6; /* canvas background — keep in sync with eraser colour if you change this */
    z-index: 3;
    margin-top: -80%; /* overlaps the bulletin board SVG — adjust if the SVG background changes */
    width: 80%;
    aspect-ratio: 3 / 2; /* matches desktop canvas ratio (720×480) — change both together if resizing */
    touch-action: none; /* prevents page scroll while drawing on mobile */
}

.header-bbm {
    font-family: "Futura-Med";
    font-size: 16px;
    position: relative;
    color: #F1E8E6;
    margin-top: -100%; /* overlaps the bulletin board SVG — adjust if the SVG background changes */
    z-index: 2;
}

.close-div {
    justify-items: start;
    margin-left: 200%;
}

/* Colour buttons row */
.button-row-m {
    position: relative;
    z-index: 3;
    left: 0;
    width: 100%;
    margin-bottom: 8px;
    background-color: none;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    margin-top: 8px;
}

/* Tool buttons row (pencil, eraser, trash, done) */
.button-row-m-2 {
    position: relative;
    z-index: 3;
    left: 0;
    width: 100%;
    margin-bottom: 8px;
    background-color: none;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    margin-top: 0;
}

/* Inactive button state */
.btn-m-inactive {
    width: 24px;
    cursor: pointer;
    margin-left: 6px;
    margin-right: 6px;
}

/* Active (selected) button state — yellow ring around the icon */
.btn-m-active {
    position: relative;
    width: 24px;
    height: 24px;
    cursor: pointer;
    border-style: solid;
    border-color: #F7C760;
    border-width: 4px;
    border-radius: 54px;
    border-spacing: 0pt;
    top: -10px;
    margin-left: 6px;
    margin-right: 6px;
}

</style>
