<template>
  <q-page class="q-ma-none">

    <div class="row q-ma-xl">

      <div
        v-for="speaker in speakers"
        v-bind:key="speaker.id"
        class="col-6 q-pa-lg"
      >

        <q-card>
          <q-card-section horizontal>
            <q-img
              class="col-5"
              :src="speaker.photo"
            />

            <q-card-section>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ speaker.name }}</div>
              <div class="text-caption text-grey" v-html="speaker.bio">
              </div>

              <div
                v-for="talk in speaker.talks"
                v-bind:key="talk.id"
                class="q-my-md"
              >
                <div><q-chip outline icon="event">{{ talk.time }}</q-chip></div>
                <div class="ext-subtitle1 q-mx-md">{{ talk.title }}</div>
              </div>

            </q-card-section>

          </q-card-section>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
  body {
    background-color: $grey-4;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>

<script>

import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { date } from 'quasar'

const contentfulClient = createClient({
  space: 'vvbk990ec7ml',
  environment: 'master',
  accessToken: 'KUM5J76ErKQxkd8ywfQogMleSo2XycG-MdvhakJtlfg'
})

export default {
  name: 'Home',

  methods: {
    getPhotoURL (photo) {
      if (photo === undefined) return require('assets/microphone.jpg')
      return photo.fields.file.url
    },

    parseContentfulJson (json) {
      return documentToHtmlString(json)
    },

    async getSpeakersFromCMS () {
      contentfulClient
        .getEntries({
          content_type: 'speaker'
        })
        .then((response) => {
          response.items.forEach(speaker => {
            const speakerEntry = {
              id: speaker.sys.id,
              name: speaker.fields.name,
              bio: this.parseContentfulJson(speaker.fields.bio),
              photo: this.getPhotoURL(speaker.fields.photo),
              talks: []
            }
            this.speakers.push(speakerEntry)
            contentfulClient
              .getEntries({
                links_to_entry: speakerEntry.id,
                content_type: 'talk'
              })
              .then((response) => {
                response.items.forEach(talk => {
                  const talkEntry = {
                    id: talk.sys.id,
                    title: talk.fields.title,
                    time: date.formatDate(talk.fields.time, 'MMM Do') + ' at ' + date.formatDate(talk.fields.time, 'HH:mm')
                  }
                  speakerEntry.talks.push(talkEntry)
                })
              })
          })
        })
        .catch(console.error)
    }
  },

  mounted () {
    this.getSpeakersFromCMS()
  },

  data () {
    return {
      speakers: []
    }
  }
}
</script>
