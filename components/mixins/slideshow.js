import database from '~/API/firestore'

export default {
  methods: {
    updateSlideId(slideId) {
      console.log(slideId)
      database
        .collection('piter')
        .doc('state')
        .update({
          slideId,
        })
    },
    updateSlideGradient(gradient) {
      console.log(gradient)
      database
        .collection('piter')
        .doc('state')
        .update({
          gradient,
        })
    },
  },
}
