<template>
  <q-page class="bg-black">

    <div class="row carousel-row">
      <div class="col-6">
        <q-carousel
          animated
          autoplay
          class="full-height"
          infinite
          navigation
          v-model="slide"
        >
          <q-carousel-slide :name="1" img-src="~assets/carousel/unconf1.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="~assets/carousel/unconf2.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="~assets/carousel/unconf3.jpg">
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-6 relative-position">
        <div class="text-center q-pa-xl q-gutter-lg">
          <q-toolbar class="q-py-xl text-white">
            <q-toolbar-title class="absolute-center">
              <vue-typed-js
                ref="type1"
                id="type1"
                :strings="['Domain-', 'Event-', 'Message-', 'People-']"
                :typeSpeed="75"
                :loop="true"
                :cursorChar="'|'"
                :backDelay="2000"
                :startDelay="1000"
                class="inline q-pa-xl"
                height="40vh"
                >
                <span>
                  <span class="text-h3 text-bold text-orange-9 conf-name-light typing"></span>
                  <strong class="text-h2 conf-name">Driv<span class="u">U</span>n</strong>
                  <strong class="text-h3 conf-name-light">Conf</strong>
                </span>
              </vue-typed-js>
            </q-toolbar-title>
          </q-toolbar>

          <div class="absolute-center">
            <div class="text-h5 text-blue-grey-3">
              September 27th, 2023
              <div class="text-h6 text-blue-grey-7">
                Amsterdam, Netherlands
              </div>
            </div>

            <q-btn
              color="deep-orange"
              glossy
              label="Yes, I want to participate!"
              @click="$root.$emit('goTickets')"
              class="q-my-xl"
              />
          </div>
        </div>
      </div>
    </div>

    <div class="row bg-blue-grey-14 text-white">
      <div class="col-12">
        <h2 ref="topics" class="text-center main-message  q-px-lg q-mt-xl">Topics</h2>
        <p class="text-center text-h5 q-mx-xl">
          The goal of DrivUnConf is to allow developers to explore and discuss different techniques, tools, and practices
          for building complex, distributed, event-driven applications. Attendees will collaborate, discuss, and share
          knowledge and experience!
          <strong>We invite everyone interested in those topics to be part of this event</strong>.
        </p>
      </div>

      <div class="text-center col-12 text-white q-px-lg">
        <div class="row">
          <div class="text-center col-3 text-left text-h4 main-message">
            <h4 class="text-center">Design</h4>
            <q-separator horizontal inset color='white' spaced='3rem' />
            <ul class="q-ml-xl">
              <li>Domain-Driven Design</li>
              <li>Domain Storytelling</li>
              <li>Event Storming</li>
              <li>Event Modeling</li>
            </ul>
            <q-separator horizontal inset color='white' spaced='3rem' />
          </div>
          <div class="text-center col-3 text-left text-h4 main-message">
            <h4 class="text-center">Development</h4>
            <q-separator horizontal inset color='white' spaced='3rem' />
            <ul class="q-ml-xl">
              <li>Messaging patterns</li>
              <li>CQRS</li>
              <li>Event-sourcing</li>
              <li>Event streaming</li>
            </ul>
            <q-separator horizontal inset color='white' spaced='3rem' />
          </div>
          <div class="text-center col-3 text-left text-h4 main-message">
            <h4 class="text-center">Infrastructure</h4>
            <q-separator horizontal inset color='white' spaced='3rem' />
            <ul class="q-ml-xl">
              <li>Message routers</li>
              <li>Event stores</li>
              <li>Deployment</li>
              <li>Upgrade</li>
            </ul>
            <q-separator horizontal inset color='white' spaced='3rem' />
          </div>
          <div class="text-center col-3 text-left text-h4 main-message">
            <h4 class="text-center">Practices</h4>
            <q-separator horizontal inset color='white' spaced='3rem' />
            <ul class="q-ml-xl">
              <li>Security</li>
              <li>Privacy</li>
              <li>Performance</li>
              <li>Scalability</li>
            </ul>
            <q-separator horizontal inset color='white' spaced='3rem' />
          </div>
        </div>
      </div>
    </div>

    <div class="row bg-black text-white">
      <div class="col-12">
        <h2 ref="venue" class="text-center main-message  q-px-lg q-mt-xl">Venue</h2>
      </div>

      <div class="col-6">
        <div class="text-center q-my-xl">
          <div class="text-h4 text-orange-10">
            Pakhuis De Zwijger
            <div class="text-h6 text-grey-8">
              Piet Heinkade 179, 1019 HC Amsterdam
            </div>
          </div>
        </div>

        <p class="text-center text-h5 q-mt-xl q-mx-xl">
          The Pakhuis De Zwijger is a cultural meeting place, multi-arts center and gallery in former warehouse,
          with multimedia studios.
        </p>

      </div>

      <div class="col-6">
        <q-img
        src="~assets/pakhauis1.jpg"
        />
      </div>

    </div>

    <div class="row bg-blue-grey-14 text-white q-pb-xl">
      <div class="col-12">
        <h2 ref="schedule" class="text-center main-message  q-px-lg q-mt-xl">Program</h2>
      </div>

      <div class="schedule-time col-4 q-px-lg text-right">8:30 - 9:30</div>
      <div class="schedule-data col-8 q-px-lg">Registration</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">9:30 - 9:45</div>
      <div class="schedule-data col-8 q-px-lg">Opening (Introduction and explanation)</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">9:45 - 10:30</div>
      <div class="schedule-data col-8 q-px-lg">Marketplace - Proposals</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">9:30 - 11:00</div>
      <div class="schedule-data col-8 q-px-lg">Coffee break</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">11:00 - 11:45</div>
      <div class="schedule-data col-8 q-px-lg">Open Space Discussions</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">11:45 - 12:30</div>
      <div class="schedule-data col-8 q-px-lg">Open Space Discussions</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">12:30 - 13:30</div>
      <div class="schedule-data col-8 q-px-lg">Lunch break</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">13:30 - 14:15</div>
      <div class="schedule-data col-8 q-px-lg">Open Space Discussions</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">14:15 - 15:00</div>
      <div class="schedule-data col-8 q-px-lg">Open Space Discussions</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">15:00 - 15:30</div>
      <div class="schedule-data col-8 q-px-lg">Coffee break</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">15:30 - 16:15</div>
      <div class="schedule-data col-8 q-px-lg">Open Space Discussions</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">16:15 - 17:00</div>
      <div class="schedule-data col-8 q-px-lg">Open Space Discussions</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">17:00 - 17:30</div>
      <div class="schedule-data col-8 q-px-lg">Coffee break</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">17:30 - 18:00</div>
      <div class="schedule-data col-8 q-px-lg">Wrap-up</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">18:00 - 19:00</div>
      <div class="schedule-data col-8 q-px-lg">Inspirational Closing Keynote</div>
      <q-separator horizontal inset color='grey-12' spaced='3rem' />

      <div class="schedule-time col-4 q-px-lg text-right">19:00 - 22:00</div>
      <div class="schedule-data col-8 q-px-lg">Party (live music, drinks, and fun)</div>
    </div>

    <div class="row q-my-none bg-black text-white">
      <div class="col-12 q-my-md text-center">
        <h3 ref="tickets">Registration</h3>
        <div class="row q-px-xl">
          <div class="col-4 q-pa-md text-center">
            <div class="text-h5">before Apr 1st, 2023</div>
            <div class="row q-my-xl">
              <div class="col-7 q-pa-xs q-ma-xs text-right text-h6" text-color="blue-grey-9">DrivUnConf</div>
              <div class="col-3 q-pa-xs q-ma-xs text-orange-10 text-h4">€79</div>
              <div class="col-7 q-pa-xs q-ma-xs text-right text-h6" text-color="blue-grey-9">
                DrivUnConf <small class="text-blue-grey-3">+ AxonIQ Conf</small>
              </div>
              <div class="col-3 q-pa-xs q-ma-xs text-orange-10 text-h4">€99</div>
            </div>
            <div>
              <q-btn
                color="primary"
                label="Register now"
                size="xl"
                type="a"
                href="#"
              />
            </div>
          </div>
          <div class="col-4 q-pa-md text-center">
            <div class="text-h5 text-blue-grey-3">Apr 1st, 2023 to May 31st, 2023 </div>
            <div class="row q-my-xl">
              <div class="col-7 q-pa-xs q-ma-xs text-right text-h6 text-blue-grey-3">DrivUnConf</div>
              <div class="col-3 q-pa-xs q-ma-xs text-deep-orange-10 text-h5">€199</div>
              <div class="col-7 q-pa-xs q-ma-xs text-right text-h6 text-blue-grey-3">
                DrivUnConf <small class="text-blue-grey-7">+ AxonIQ Conf</small>
              </div>
              <div class="col-3 q-pa-xs q-ma-xs text-deep-orange-10 text-h5">€249</div>
            </div>
            <div>
              <q-btn
                color="blue-grey-7"
                label="Opens Apr 1st"
                type="a"
                href="#"
                outline
                disabled
              />
            </div>
          </div>
          <div class="col-4 q-pa-md text-center">
            <div class="text-h5 text-blue-grey-3">after May 31st, 2023 </div>
            <div class="row q-my-xl">
              <div class="col-7 q-pa-xs q-ma-xs text-right text-h6 text-blue-grey-3">DrivUnConf</div>
              <div class="col-3 q-pa-xs q-ma-xs text-deep-orange-10 text-h5">€349</div>
              <div class="col-7 q-pa-xs q-ma-xs text-right text-h6 text-blue-grey-3">
                DrivUnConf <small class="text-blue-grey-7">+ AxonIQ Conf</small>
              </div>
              <div class="col-3 q-pa-xs q-ma-xs text-deep-orange-10 text-h5">€399</div>
            </div>
            <div>
              <q-btn
                color="blue-grey-7"
                label="Opens June 1st"
                type="a"
                href="#"
                outline
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap');

  .main-message {
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
  }
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
  }

  .carousel-row {
    height: 50vh !important;
    background-color: black;
  }

  .conf-name {
    font-size: 4.5rem;
    letter-spacing: 0.5rem;
    font-family: 'Nunito', sans-serif;
  }

  .conf-name-light {
    font-family: 'Dosis', sans-serif;
  }

  .u {
    color: black;
    text-shadow:  -2px  1px 2px $primary,
                   1px  2px 2px $primary,
                   2px -1px 0   $primary,
                  -1px -2px 0   $primary;
  }

  .conf-header {
    margin: 10%;
  }

  .schedule-time, .schedule-data {
    font-family: 'Dosis', sans-serif;
    font-size: xx-large;
  }

</style>

<script>

import { QCarouselSlide } from 'quasar'
import { VueTypedJs } from 'vue-typed-js'

export default {
  components: {
    QCarouselSlide,
    VueTypedJs
  },
  name: 'Home',
  data () {
    return {
      slide: 1
    }
  },
  methods: {
    go (ref) {
      this.$refs[ref].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
    }

  },
  mounted () {
    this.$root.$on('goVenue', this.go.bind(this, 'venue'))
    this.$root.$on('goTopics', this.go.bind(this, 'topics'))
    this.$root.$on('goSchedule', this.go.bind(this, 'schedule'))
    this.$root.$on('goTickets', this.go.bind(this, 'tickets'))
  }
}
</script>
