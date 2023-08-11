<template>
  <q-layout view="hHh lpR fff">

    <q-header reveal elevated class="bg-black text-white">
      <q-toolbar class="bg-black q-py-lg">
        <div>
            <strong class="text-h4 conf-name">Driv<span class="u">U</span>n</strong>
            <strong class="text-h4 conf-name-light">Conf</strong>
        </div>
        <div class="absolute-center">
          <q-btn
            scroll
            flat
            label="Topics"
            @click="$root.$emit('goTopics')"
            />
          <q-btn
            scroll
            flat
            label="Venue"
            @click="$root.$emit('goVenue')"
            />
          <q-btn
            scroll
            flat
            label="Program"
            @click="$root.$emit('goSchedule')"
            />
          <q-btn
            scroll
            flat
            label="Registration"
            @click="$root.$emit('goTickets')"
            />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="window-heigh">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white text-right q-px-xl q-py-lg">
        <div>
          Organized by
          <q-img src="~assets/axoniq-logo-white.svg" width="5rem" class="q-ml-sm"></q-img>
        </div>
    </q-footer>

  </q-layout>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap');

  .conf-name {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    font-family: 'Nunito', sans-serif;
  }

  .conf-name-light {
    font-family: 'Dosis', sans-serif;
  }

  .conf-headline {
    font-size: .7rem;
    position: relative;
    top: -1rem;
    text-align: justify;
    letter-spacing: 2px;
  }

  .inline {
    display: inline;
  }

  .u {
    color: black;
    text-shadow:  -2px  1px 2px $primary,
                   1px  2px 2px $primary,
                   2px -1px 0   $primary,
                  -1px -2px 0   $primary;
  }

</style>

<script>

// import { VueTypedJs } from 'vue-typed-js'

export default {
  components: {
    // VueTypedJs
  },
  computed: {
    pages: function () {
      return this.$router.options.routes
        .find(r => { return r.path === '/' })
        .children
    }
  },
  data () {
    return {
    }
  },
  methods: {
    pause (pos, typer) {
      // console.log(pos)
      // this.$refs.type2.strings = ['test1', 'test2', 'test3']
    }
  },
  mounted () {
    // this.$root.$on('goVenue', this.go.bind(this, 'venue'))
  }

}
</script>
