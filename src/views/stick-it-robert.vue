<template>
    <div class="siwr">
        <div class="corkboard-wrapper" :style="{ width: mobileView ? '90%' : '75%' }">
            <img v-if="!mobileView" src="@/assets/corkboard.svg" class="corkboard" alt="corkboard" />
            <img v-else src="@/assets/corkboard-m.svg" class="corkboard" alt="corkboard" />
            <div class="scroll-hint" @click="scrollToSpecs" style="cursor: pointer;">
                <span class="scroll-text">scroll to read case study</span>
                <div class="scroll-line"></div>
            </div>

            <div :class="[mobileView ? 'main-header-m' : 'main-header']">
                <header>stick it with robert</header>
                <div :class="[mobileView ? 'introduction-m' : 'introduction']">
                    a simple way to focus on what matters
                </div>
                <button @click="openWidget" class="open-button">open your desk</button>
            </div>
        </div>
    </div>

    <div ref="specsSection" :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Project Type:</p></li>
                    <li><p class="specs-list">Personal</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Role:</p></li>
                    <li><p class="specs-list">Product Designer, Frontend Developer, Illustrator</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">March - April 2026</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Figma, After Effects, Claude</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Personal</p>
            <p class="specs-list-m"><text class="specs-title-m">Role:</text> Product Designer, Frontend Developer, Illustrator</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> March - April 2026</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Figma, After Effects, Claude</p>
        </div>
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Project Overview</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        Stick it with Robert is a floating desktop productivity widget featuring Robert the Corporate Frog — your WFH companion who helps you focus on the most important tasks of your day.
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Background</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        As an avid sticky-note user, I found myself accumulating piles of them on my desk. After designing a series of physical Robert sticky-notes, I wondered if I could turn them into a virtual product full of life and personality. This got me thinking about why existing productivity tools never felt quite right.
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">The Problem</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        Most productivity tools overwhelm users with unlimited tasks and endless flexibility. For remote workers especially, these tools can feel cold, impersonal, and yet another thing to manage. Without personality or a sense of reward, there's little motivation to actually engage with them daily.
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Key Focus Areas</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        Before jumping into the design, I identified the principles that would guide my decisions:
    </div>
    <poster key="problem" :poster="problem"></poster>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Designing the MVP</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        The <b>checklist</b> was the first feature I wanted to nail. After exploring different layouts, I moved away from an overlay on top of Robert (the background felt too distracting). Instead, the checklist sits on Robert's desk, with his pencil and highlighter naturally indicating the two core functions. 
        
        <br><br>I then mapped out the full user flow and instructions, before building the MVP with Claude. During development, I fine-tuned details and tested edge cases — for instance, only showing "tap to add..." when the row above has content, limiting users to highlight one task at a time, and capping each task at two lines before truncating with "...".
    </div>
    <poster key="mvp" :poster="mvp"></poster>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Corkboard and Robert's Desk view</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        Having a checklist was essential — but the key differentiator of Stick it with Robert is how it feels like you're genuinely working alongside Robert. I wanted users to customise their corkboard with notes and have the freedom to choose Robert's mood throughout the day.
    </div>

    <!-- Row 1: corkboard text left, gif right -->
    <div :class="[mobileView ? 'siwr-row-m reveal' : 'siwr-row reveal']">
        <div :class="[mobileView ? 'overview-m' : 'overview siwr-row-text']">
            For the corkboard, I designed a hidden 5×4 grid system so that pinned notes always snap into place. This ensures that as more note types are introduced, they will never overlap. Users will be able to keep the board organised by design, rather than by manually adjusting it.
        </div>
        <video autoplay loop muted playsinline :class="[mobileView ? 'siwr-gif-m' : 'siwr-gif']">
            <source src="/videos/siwr-2.mp4" type="video/mp4">
        </video>
    </div>

    <!-- Row 2: moods text left, gif right -->
    <div :class="[mobileView ? 'siwr-row-m reveal' : 'siwr-row reveal']">
        <div :class="[mobileView ? 'overview-m' : 'overview siwr-row-text']">
            I also animated 5 different moods for Robert that users can toggle between, giving them a small moment of personality and choice in their workday.
        </div>
        <video autoplay loop muted playsinline :class="[mobileView ? 'siwr-gif-m' : 'siwr-gif']">
            <source src="/videos/siwr-1.mp4" type="video/mp4">
        </video>
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Designing Different Note Types</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        I brainstormed different note types that would be genuinely useful in everyday life — weekly plans, reminders, quotes from Robert, schedules — before exploring their designs on Figma and using this to narrow them down. 
        <br><br>Out of the many ideas explored, I narrowed it down to 4 note types. The hardest part was resisting the urge to add more. I kept reminding myself that <b>less is more</b> and that every note should serve a purpose that another note can't already do. 
        <br><br><b>These are the notes I decided to add, click to see what each note type looks like!</b>
    </div>

    <!-- 4 sticky notes that flip horizontally on click to reveal their back -->
    <div ref="snRow" :class="[mobileView ? 'sn-row-m reveal' : 'sn-row reveal']">
        <div
            v-for="(card, i) in noteCards"
            :key="i"
            class="sn-card"
            :class="{ 'is-flipped': flippedNoteCards[i] }"
            @click="toggleNoteCard(i)"
        >
            <div class="sn-card-inner">
                <div class="sn-card-front">
                    <img :src="card.front" :alt="card.name + ' front'" />
                </div>
                <div class="sn-card-back">
                    <img :src="card.back" :alt="card.name + ' back'" />
                </div>
            </div>
        </div>
    </div>

    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        Initially, I had plans to add a <b>Schedule note type</b>, but decided against it as it functioned too similarly to a checklist, and most users were able to list their schedule down in the "paragraph" note type if they wanted to.

        <br><br>I also explored <b>motivational quotes from Robert</b>, but struggled with coming up with quotes. I decided to feature real-life photos of Robert contributed by my art community instead. This felt more authentic and turned a passive note type into something genuinely personal and community-driven.
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">First Live Launch</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        Once the core functionalities were in place, I ran a small round of testing with 10 target users to validate that the experience felt intuitive. This round focused on identifying <b>critical usability issues</b> — unclear instructions, confusing interactions, or functions that didn't land as expected.
        
        <br><br>With the major issues ironed out, I added the finishing touches: animations that brought Robert to life and sound effects that made interactions feel tactile. Some sounds I even recorded myself, capturing the satisfying click of a pen, the soft slide of paper, and the pop of a highlighter cap. At this stage, users could add one note of each type to the corkboard to keep it simple, focused, and functional.
    </div>
    <div :class="[mobileView ? 'siwr-row-m' : 'siwr-row']">
        <div :class="[mobileView ? 'overview-m' : 'overview siwr-row-text']">
        <br><br>I deployed the web app on Vercel, and shared it across my social media platforms. The response was immediate: the videos raked up a combined <b>800k views</b>, with over <b>500 comments</b> expressing excitement and suggesting improvements. 
        </div>
        <video src="/videos/siwr-3.mp4" :class="[mobileView ? 'siwr-gif-m' : 'siwr-gif']" controls></video>
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">User Testing and Feedback</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        In the first week alone, <b>13,000</b> users tried out the Stick it with Robert. I encouraged them to leave their feedback on my socials, and consolidated them in a document. Each piece of feedback was carefully considered and prioritised based on immediate usability impact, weighing effort against value.
    </div>
    <poster key="feedback" :poster="feedback"></poster>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">More Sticky Notes On Board!</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        The most frequent request? <b>"Let me add more than one of each note type."</b>. 
        
        <br><br>I deliberated over this carefully as I wanted to stay true to our core principle of "less is more" to prioritise focus over flexibility, but I also recognised that limiting users to just 5 tasks a day wasn't enough for everyone.

        <br><br> But adding multiple sticky notes of the same type introduced a new challenge: <b>How do we differentiate sticky notes of the same type</b>? Colour was already used to differentiate the sticky note types (yellow for checklists, blue for paragraphs, green for notes), so how can users differentiate between 2 yellow checklists?
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">A Sticky Solution</header>
    <div :class="[mobileView ? 'siwr-row-m reveal' : 'siwr-row reveal']">
        <div :class="[mobileView ? 'overview-m' : 'overview siwr-row-text']">
            In paragraph notes and note-to-self, I had already introduced <b>stickers</b> that users could drag and drop into designated slots on the note itself. These were largely decorative and a fun way to personalise the note.

            <br><br>But now, I saw an opportunity to make them <b>functional.</b> For checklist notes, I designed a system where users could select a sticker representing common list categories (household, work, learning, misc) to place in the corner of the note. That same sticker would then appear on the pinned note on the corkboard, acting as a visual identifier. <b>Stickers were now both decorative and a wayfinding tool!</b>
    </div>
        <video autoplay loop muted playsinline :class="[mobileView ? 'siwr-gif-m' : 'siwr-gif']">
            <source src="/videos/siwr-4.mp4" type="video/mp4">
        </video>
    </div>


    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        This solution felt true to the spirit of the project: playful, tactile, and grounded in the physical metaphor of customising your sticky notes with doodles and marks!
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Additional Iterations Based on Feedback</header>
    <!-- 4 sticky notes that flip horizontally on click to reveal their back -->
    <div ref="problemRow" :class="[mobileView ? 'sn-row-m reveal' : 'sn-row reveal']">
        <div
            v-for="(card, i) in problemCards"
            :key="i"
            class="sn-card"
            :class="{ 'is-flipped': flippedProblemCards[i] }"
            @click="toggleProblemCard(i)"
        >
            <div class="sn-card-inner">
                <div class="sn-card-front">
                    <img :src="card.front" :alt="card.name + ' front'" />
                </div>
                <div class="sn-card-back">
                    <img :src="card.back" :alt="card.name + ' back'" />
                </div>
            </div>
        </div>
    </div>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        My main focus this round was to <b>focus on pain points, rather than feature requests</b>. Many users asked for timers, a downloadable app, and account creation. But these would've turned Robert into just another productivity tool. At this stage, I decided to focus on making the web experience as accessible as possible with as little friction.
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Technical Implementation</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        To bring Robert's Desk to life, I built a custom React application optimized for a fixed <b>360×480px popup window</b> as I wanted it to be small and unobtrusive. 

        <br><br><b>Architecture Decisions:</b>
        <ul>
            <li>• <b>React + TypeScript + Vite</b> for type safety and fast iteration</li>
            <li>• <b>Custom hooks</b> (useTasks, usePinnedCell) to encapsulate logic and keep components clean</li>
            <li>• <b>localStorage</b> for persistence — no backend, instant load times</li>
            <li>• Inline styles with CSS variables for theming consistency</li>
        </ul>

    </div>


    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Key Takeaways</header>
    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        By the end of this iteration cycle, Stick it with Robert had evolved from a polished MVP into a genuinely flexible tool. I was able to stay true to its <b>core philosophy of simplicity, while adapting to real-world use cases</b>.
        <br><br>The sticker preview system was a perfect example of designing within constraints. Instead of abandoning the one-note-per-type rule entirely, I found a creative solution that stayed true to the physical sticky note metaphor while solving the differentiation problem.
    </div>

    <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Future Plans!</header>
    <div :class="[mobileView ? 'siwr-row-m reveal' : 'siwr-row reveal']">
        <div :class="[mobileView ? 'overview-m' : 'overview siwr-row-text']">
            While I stand by the "less is more" philosophy that shaped Stick it with Robert, I also feel excited thinking about the future possibilities of where this project could go next.

            <br><br>Each addition will be carefully weighed against the core principle: does this add value, stay true to the nature of a note, and let users have fun?
        </div>
        <img src="../assets/stick-it-robert/future.png" :class="[mobileView ? 'siwr-gif-m' : 'siwr-gif']" alt="Future plans illustration">
    </div>

    <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        Thank you for testing out Stick it with Robert! As always, if you have any thoughts, feedback, or spot any bugs, do send them my way :) I genuinely hope you enjoyed it!
    </div>


    <div class="see-more-div">
        <text :class="[mobileView ? 'sm-title-m' : 'sm-title']">See More Projects</text>
        <see-more-categories :pageType="category"/>
    </div>
    <contact-me/>
</template>

<script>
import SeeMoreCategories from "../components/SeeMoreCategories.vue";
import ContactMe from "../components/ContactMe.vue";
import Poster from "../components/Poster.vue";

export default ({
    name: "stick-it-robert",
    components: { Poster, SeeMoreCategories, ContactMe },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
    },

    mounted() {
        // Trigger the intro stagger-flip only when the card row scrolls into view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                [0, 1, 2, 3].forEach((i) => {
                    setTimeout(() => {
                        this.flippedNoteCards = { ...this.flippedNoteCards, [i]: false };
                    }, 100 + i * 100);
                });
                observer.disconnect();
            }
        }, { threshold: 0.3 });

        observer.observe(this.$refs.snRow);

        // Trigger the intro stagger-flip for problemCards when their row scrolls into view
        const problemObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                [0, 1, 2, 3].forEach((i) => {
                    setTimeout(() => {
                        this.flippedProblemCards = { ...this.flippedProblemCards, [i]: false };
                    }, 100 + i * 100);
                });
                problemObserver.disconnect();
            }
        }, { threshold: 0.3 });

        problemObserver.observe(this.$refs.problemRow);
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null,
            category: "wormsquirm",
            problem: {
                src: require("@/assets/stick-it-robert/problem.png")
            },
            mvp: {
                src: require("@/assets/stick-it-robert/mvp.png")
            },
             feedback: {
                src: require("@/assets/stick-it-robert/feedback.jpg")
            },
            // start all cards showing back; mounted() will stagger-flip them to front
            flippedNoteCards: { 0: true, 1: true, 2: true, 3: true },
            // start all cards showing back; mounted() will stagger-flip them to front
            flippedProblemCards: { 0: true, 1: true, 2: true, 3: true },
            noteCards: [
                { name: 'SN',  front: require('@/assets/stick-it-robert/SN-F.png'),  back: require('@/assets/stick-it-robert/SN-B.png')  },
                { name: 'BD',  front: require('@/assets/stick-it-robert/BD-F.png'),  back: require('@/assets/stick-it-robert/BD-B.png')  },
                { name: 'NTS', front: require('@/assets/stick-it-robert/NTS-F.png'), back: require('@/assets/stick-it-robert/NTS-B.png') },
                { name: 'POL', front: require('@/assets/stick-it-robert/POL-F.png'), back: require('@/assets/stick-it-robert/POL-B.png') },
            ],
            problemCards: [
                { name: 'PR1',  front: require('@/assets/stick-it-robert/PR1-F.png'),  back: require('@/assets/stick-it-robert/PR1-B.png')  },
                { name: 'PR2',  front: require('@/assets/stick-it-robert/PR2-F.png'),  back: require('@/assets/stick-it-robert/PR2-B.png')  },
                { name: 'PR3', front: require('@/assets/stick-it-robert/PR3-F.png'), back: require('@/assets/stick-it-robert/PR3-B.png') },
                { name: 'PR4', front: require('@/assets/stick-it-robert/PR4-F.png'), back: require('@/assets/stick-it-robert/PR4-B.png') },
            ]
        }
    },

    methods : {
        checkScreen () {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 795){
                this.mobileView= true;
                return;
            }
            this.mobileView = false;
        },

        openWidget() {
            // Read ?for= param from current page URL and forward it to the widget
            const forParam = new URLSearchParams(window.location.search).get('for');
            const url = forParam
                ? `https://stick-it-with-robert.vercel.app?for=${encodeURIComponent(forParam)}`
                : 'https://stick-it-with-robert.vercel.app';
            window.open(
                url,
                'roberts-desk',
                'width=360,height=480,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no'
            )
        },

        toggleNoteCard (i) {
            this.flippedNoteCards = { ...this.flippedNoteCards, [i]: !this.flippedNoteCards[i] };
        },

        toggleProblemCard (i) {
            this.flippedProblemCards = { ...this.flippedProblemCards, [i]: !this.flippedProblemCards[i] };
        },

        scrollToSpecs () {
            const navHeight = 49;
            const target = this.$refs.specsSection.getBoundingClientRect().top + window.scrollY - navHeight;
            const start = window.scrollY;
            const distance = target - start;
            const duration = 1400; // ms — longer = smoother/slower
            let startTime = null;

            // Ease-in-out cubic
            const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                window.scrollTo(0, start + distance * ease(progress));
                if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        },

        reveal () {
            var reveals = document.querySelectorAll(".reveal")

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
}
            }           
        },
    }
})
</script>

<style scoped>
.siwr {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #FEECBF;
    height: 100%;
}
.main-header {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 64px;
    font-family: 'Lexend';
    font-weight: 600;
    color: #2F2A1B;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-header-m {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    font-family: 'Lexend';
    font-weight: 600;
    color: #2F2A1B;
    text-align: center;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 50% of the corkboard width */
.main-header header{
    width: 50%;
}
.open-button {
    cursor: pointer;
    background: #F2E8E4;
    border: 6px solid #B86F3C;
    border-radius: 100px;
    color: #2D2926;
    font-family: 'Lexend';
    font-weight: 500;
    font-size: 24px;
    width: 30%; /* 30% of corkboard width */
    padding: 18px 0;
    margin-top: 24px;
    transition: background 0.3s ease, transform 0.3s ease;
}

.open-button:hover {
    background: #E7CBC0;
    transform: translateY(-2px);
}

@media (max-width: 1595px) {
    .main-header {
        font-size: 52px;
    }
    .open-button {
        font-size: 18px;
    }
}

.main-header-m .open-button {
    font-size: 18px;
    padding: 12px 0;
    border-width: 4px;
    width: 60%;
}

.corkboard-wrapper {
    position: relative;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
}

.corkboard {
    width: 100%;
    display: block;
}

.scroll-hint {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.scroll-text {
    font-family: 'Lexend';
    font-weight: 500;
    font-size: 18px;
    color: #2D2926;
}

.scroll-line {
    width: 6px;
    height: 56px;
    background: #B86F3C;
    border-radius: 3px 3px 0 0;
}


.introduction {
    margin-top: 12px;
    font-size: 20px;
    line-height: 26px;
    font-family: 'Lexend';
    font-weight: 400;
    text-align: center;
    width: 50%; /* 50% of corkboard width */
}

.introduction-m {
    font-family: 'Lexend';
    font-weight: 400;
    width: 80%;
    margin-top: 12px;
    text-align: center;
    font-size: 18px;
}

/* Side-by-side rows: text left, gif right */
.siwr-row {
    display: flex;
    align-items: center;
    gap: 100px;
    margin: 40px 240px;
}

.siwr-row-text {
    /* override overview's own margins so the row controls spacing */
    margin: 0;
    flex: 1;
}

.siwr-gif {
    flex-shrink: 0;
    width: 25vw;
}

/* Mobile: stack text above gif */
.siwr-row-m {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin: 32px 0;
}

.siwr-gif-m {
    width: 90%;
}

/* Sticky note flip cards */
.sn-row {
    display: flex;
    gap: 24px;
    margin: 40px 240px;
    justify-content: center;
}

.sn-row-m {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 32px 24px;
}

.sn-card {
    flex: 1;
    min-width: 0;
    cursor: pointer;
    perspective: 1000px;
}

.sn-card-inner {
    position: relative;
    width: 100%;
    transition: transform 0.45s ease;
    transform-style: preserve-3d;
}

.sn-card.is-flipped .sn-card-inner {
    transform: rotateY(180deg);
}

/* Hover: peek-tilt to hint the card is flippable */
.sn-card:hover .sn-card-inner {
    transform: rotateY(10deg);
}
.sn-card.is-flipped:hover .sn-card-inner {
    transform: rotateY(170deg);
}

.sn-card-front,
.sn-card-back {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.sn-card-front img,
.sn-card-back img {
    width: 100%;
    display: block;
}

/* Back sits on top of front, pre-rotated 180deg so it shows after flip */
.sn-card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: rotateY(180deg);
}
</style>