import Vue from 'vue';

export default {
  data() {
    return {
      songs: ['guard_the_eternal_love','alberta','life_in_spring','dreamer\'s_dream',
              'dream_of_whale','you_are_falling','leave_me_alone', 'payon\'s_memory']
    };
  },
  computed: {
    $defaultMonsterImage: {
      get() {
        return './static/icons/photo.png'
      }
    }
  },
  methods:{
    show_default() {
      this.onerror = null;
      this.image = null;
    }
  }
}