<template>
    <div id="mosaic" class="font-sans text-base">


        <aside :class="{ ' open ': drawer}" class="overlay">
            <div class="outer-close toggle-overlay">
                <a class="close">
                    <span></span>
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a @click.prevent>About Us</a>
                    </li>
                    <li>
                        <a @click.prevent>Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/ICJIA/icjia-demo-grid-tailwind">GitHub Source</a>
                    </li>

                </ul>
            </nav>
        </aside>


        <div class="burger">
            <button class="hamburger hamburger--collapse" :class="{ ' is-active ': drawer}" type="button" @click.stop="toggleDrawer">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
        <div class="wrapper">
            <div class="box main">
                <span class="box-content">
                    <h3 v-dummy="4"></h3>
                    <div></div>
                    <p v-dummy="4"></p>
                </span>
            </div>
            <div class="box feature-1">
                <span class="box-content">
                    <h3 v-dummy="4"></h3>
                    <div></div>
                    <p v-dummy="4"></p>
                </span>
            </div>

            <div class="box news-1">
                <span class="box-content">
                    <h3 v-dummy="4"></h3>
                    <div></div>
                    <p v-dummy="4"></p>
                </span>
            </div>
            <div class="box news-2">
                <span class="box-content">
                    <h3 v-dummy="4"></h3>
                    <div></div>
                    <p v-dummy="4"></p>
                </span>
            </div>

        </div>

        <div class="container xl mx-auto">

            <div class="body-content mt-2">
                <div class="main-stories body-content-block">
                    <div class="story-block shadow-md">
                        <div class="photo">
                            <!-- <img src="../assets/PTSD.jpg" /> -->
                            <img v-dummy:400x300 />
                        </div>
                        <div class="title text-base font-semibold text-black pl-2 pt-2 pr-2" v-dummy="5"></div>
                        <div class="blurb text-base text-grey-darker" v-dummy="30"></div>

                    </div>
                    <div class="story-block shadow-md">
                        <div class="photo">
                            <img v-dummy:400x300 />
                            <!-- <img src="../assets/TRC.jpg" /> -->
                        </div>
                        <div class="title text-base font-semibold text-black pl-2 pt-2 pr-2" v-dummy="5"></div>
                        <div class="blurb text-base text-grey-darker" v-dummy="30"></div>

                    </div>


                    <div class="story-block shadow-md">
                        <div class="photo">
                            <img v-dummy:400x300 />
                            <!-- <img src="../assets/1human_trafficking.jpg" /> -->
                        </div>
                        <div class="title text-base font-semibold text-black pl-2 pt-2 pr-2" v-dummy="5"></div>
                        <div class="blurb text-base text-grey-darker" v-dummy="30"></div>
                    </div>
                    <div class="story-block shadow-md">
                        <div class="photo">
                            <img v-dummy:400x300 />
                            <!-- <img src="../assets/Photo-Delivery-Report.jpg" /> -->
                        </div>
                        <div class="title text-base font-semibold text-black pl-2 pt-2 pr-2" v-dummy="5"></div>
                        <div class="blurb text-base text-grey-darker" v-dummy="30"></div>
                    </div>
                </div>
            </div>


            <div class="secondary-content mt-4 shadow-md text-base">

                <div class="spotlight">
                    <div class="spotlight-text">
                        <h3 class="spotlight-title font-semibold text-black pl-2 pt-2 pr-2" v-dummy="5"></h3>
                        <p v-dummy="20" class="spotlight-blurb text-grey-darker pl-2 pt-4 pr-2"></p>
                    </div>
                    <img v-dummy:400x400> </div>
                <div class="secondary-news-1">
                    <div class="news-item pl-4 pt-2 pr-4 pb-2">
                        <div class="news-item-text">
                            <h3 class="news-item-title text-base font-semibold text-black mb-2" v-dummy="6"></h3>

                            <p v-dummy="15" class="text-grey-darker"></p>.
                        </div>
                    </div>
                    <div class="news-item pl-4 pt-2 pr-4 pb-2">
                        <div class="news-item-text">
                            <h3 class="news-item-title font-semibold text-black mb-2" v-dummy="6"></h3>
                            <p v-dummy="15" class="spotlight-blurb text-grey-darker "></p>.
                        </div>
                    </div>
                </div>
                <div class="secondary-news-2">
                    <div class="news-item pl-4 pt-2 pr-4 pb-2">
                        <div class="news-item-text">
                            <h3 class="news-item-title font-semibold text-black mb-2" v-dummy="6"></h3>
                            <p v-dummy="15" class="spotlight-blurb text-grey-darker"></p>.
                        </div>
                    </div>
                    <div class="news-item pl-4 pt-2 pr-4 pb-2">
                        <div class="news-item-text">
                            <h3 class="news-item-title font-semibold text-black mb-2" v-dummy="6"></h3>
                            <p v-dummy="15" class="spotlight-blurb text-grey-darker"></p>.
                        </div>
                    </div>
                </div>

            </div>




            <div class="tertiary-content mt-8 text-base">
                <div class="meetings">
                    <div class="tertiary-header mb-4">
                        <h2>Meetings</h2>
                        <a href="">archive</a>
                    </div>
                    <!-- for loop here -->
                    <div v-for="index in 5" class="tertiary-item border-b pb-4 mt-4" :key="index">
                        <h4 v-dummy="8" class="mb-2"></h4>
                        <p v-dummy="20"></p>
                    </div>

                </div>
                <div class="latest">
                    <div class="tertiary-header">
                        <h2>Latest</h2>
                        <a href="">archive</a>
                    </div>
                    <div v-for="index in 5" class="border-b pb-4 mt-4 tertiary-item" :key="index">
                        <h4 v-dummy="5" class="mb-2"></h4>
                        <p v-dummy="80"></p>
                    </div>

                </div>
                <div class="popular">
                    <div class="tertiary-header">
                        <h2>Popular</h2>
                        <a href="">archive</a>
                    </div>
                    <div v-for="index in 5" class="border-b pb-4 mt-4 tertiary-item" :key="index">
                        <div class="ranking text-xl font-bold mb-2 text-red">{{index}}</div>
                        <h4 v-dummy="5" class="mb-2"></h4>
                        <p v-dummy="25"></p>
                    </div>
                </div>
            </div>









        </div>
    </div>


</template>

<script>
let faker = require("faker/locale/en");

export default {
  name: "A4",
  mounted: function() {
    //console.log(faker.name.lastName())
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    toggleDrawer: function(e) {
      this.drawer = !this.drawer;
      this.drawer
        ? (document.getElementsByClassName("overlay")[0].style.height = "100%")
        : (document.getElementsByClassName("overlay")[0].style.height = "0%");

      return;
    }
  }
};
</script>

<style scoped>
:root {
  --scale-amount: scale(1.1);
}

#mosaic {
  background: #fff;
  padding-bottom: 30px;
}

.wrapper {
  width: 100%;
  display: grid;
  grid-gap: 1px;
  margin-bottom: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(75px, auto);
  grid-template-areas: "m f1 n1" "m f1 n1" "m f1 n1" "m f1 n2" "m f1 n2" "m f1 n2";
}

.wrapper > * {
  padding: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #333;
  color: #fff;
}

.box {
  background-color: #4e4e4e;
  color: #fff;
  padding: 20px;
  font-size: 150%;
}

.box.main {
  grid-area: m;
  background-image: url(http://via.placeholder.com/950x750);
  background-position: bottom right;
  display: grid;
}

.box-content {
  align-self: end;
}

.box-content h3 {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
}

.box-content p {
  font-weight: 200;
  font-size: 14px;
}

.box.feature-1 {
  grid-area: f1;
  background-image: url(http://via.placeholder.com/950x750);
  background-position: top left;
  display: grid;
  grid-auto-rows: auto;
}

.box h3 {
  display: inline-block;
  background: #fff;
  color: #333 !important;
  padding: 5px 3px 5px 10px;
  margin-bottom: 5px;
}

.box.main h3:after {
  content: "\A";
  white-space: pre;
}

.box p {
  display: inline-block;
  background: #fff;
  color: #333 !important;
  padding: 5px;
}

.box.news-1 {
  grid-area: n1;
  background-image: url(http://via.placeholder.com/450X250);
  background-position: center center;
}

.box.news-2 {
  grid-area: n2;
  background-image: url(http://via.placeholder.com/450X250);
  background-position: center center;
}

/**
     * 
     * Primary content 
     * 
     */

.container-body-content {
  margin-left: 50px;
  margin-right: 50px;
}

.body-content {
  width: 100%;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(350px, auto);
  grid-template-areas: "ms ms ms ms ms ms ms ms ms ms ms ms";
}

.body-content-block {
  margin-top: 10px;
  background-color: #fff;
  color: #aaa;
}

.main-stories {
  grid-area: ms;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}

.story-block {
  /* background-color: #aaa; */
  color: #fff;
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 2fr 50px 1fr;
}

.story-block .photo {
  background-repeat: no-repeat;
  background-size: cover;
}

.story-block .photo img {
  min-height: 300px;
  width: 100%;
  /* max-height: 300px; */
}

.story-block .blurb {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.story-block h3 {
  text-transform: uppercase;
}

.story-block:hover,
.spotlight:hover,
.news-item:hover {
  filter: grayscale(100%);
  box-shadow: 0px 0px 50px #000000;
  z-index: 200;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1.05);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1.05);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1.05);
  transition: all 300ms ease-in;
  transform: scale(1.05);
  cursor: pointer;
  opacity: 1;
}

/**
     * 
     * secondary content
     * 
     */

.secondary-content {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 2px;
  grid-template-areas: "spo spo spo spo sn1 sn1 sn1 sn1 sn2 sn2 sn2 sn2";
}

.secondary-news-1 {
  grid-area: sn1;
  display: grid;
  grid-gap: 1px;
}

.secondary-news-2 {
  grid-area: sn2;
  display: grid;
  grid-gap: 1px;
}

.news-item {
  background: #eee;
}

.spotlight {
  grid-area: spo;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(50px, auto);
  grid-template-areas: "spo-title spo-img" "spo-blurb spo-img";
}

.spotlight-title {
  width: 100%;
}

.spotlight-blurb {
  grid-area: spo-blurb;
}

.spotlight img {
  vertical-align: middle;
  background-size: cover;
  grid-area: spo-img;
  max-height: 300px;
  height: 100%;
  justify-self: end;
}

.news-item-text p {
  display: inline;
}

/** 
     * 
     * Tertiary content
     * 
     */

.tertiary-content {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
  grid-auto-rows: minmax(150px, auto);
  grid-template-areas: "meet lat pop";
}

.tertiary-header {
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tertiary-item {
  /* margin-top: 10px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px; */
}

.tertiary-item p {
  display: inline;
}

.tertiary-header h2 {
}

.tertiary-header a {
  margin: 5px;
}

.meetings {
  grid-area: meet;
}

.latest {
  grid-area: lat;
}

.popular {
  grid-area: pop;
}

.ranking {
}

/** 
     * Burger
     */

.burger {
  position: fixed;
  top: 10px;
  left: 10px;

  z-index: 20;
}

.burger {
  background: #ccc;
}

.burger * {
  outline: none;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 30px;
  height: 4px;
  background-color: #555;
  border-radius: 4px;
}

/**
     * 
     * Media queries
     * 
     */

@media (max-width: 700px) {
  .wrapper {
    width: 100%;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
    grid-template-areas: "m" "m" "f1" "f1" "n1" "n2";
  }

  .body-content {
    width: 100%;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(20px, auto);
    grid-template-areas: "ms" "sp" "s1" "s2";
  }

  .main-stories {
    grid-area: ms;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }

  .secondary-content {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 2px;
    grid-template-areas: "spo" "sn1" "sn2";
  }

  #mosaic {
    margin-left: 15px;
    margin-right: 15px;
  }
}

/* The Overlay (background) */

.overlay {
  position: fixed;
  width: 100%;
  height: 0%;
  top: 0;
  left: 0;
  background: linear-gradient(
    200deg,
    rgb(23, 23, 24),
    rgb(42, 42, 43),
    rgb(110, 109, 110)
  );
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  z-index: 2;
}

.open {
  opacity: 0.98;
  visibility: visible;
}

nav {
  text-align: center;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul li {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  line-height: 8vh;
}

nav ul li a {
  font-size: 2em;
  font-weight: 900;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  display: block;
  text-decoration: none;
  color: #fff;
  opacity: 1;
  display: inline-block;
  cursor: pointer;
}

nav ul li a:hover {
  color: rgb(245, 1, 1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.noscroll {
  overflow: hidden;
}

@media screen and (min-width: 600px) {
  nav ul li a {
    font-size: 2em;
  }
}
</style>
