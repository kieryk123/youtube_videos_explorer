import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        searchResults: [],
        searchQuery: 'funny+cats',
        pageToken: '',
        nextPageToken: '',
        prevPageToken: '',
        videoTitle: ''
    },
    mutations: {
        'SET_SEARCH_RESULTS'(state, payload) {
            const arrayOfResults = payload.items;

            // set page tokens
            state.nextPageToken = payload.nextPageToken;
            state.prevPageToken = payload.prevPageToken;

            // clear results array
            state.searchResults = [];

            arrayOfResults.forEach((result) => {
              const title = result.snippet.title;
              const author = result.snippet.channelTitle;
              const description = result.snippet.description;
              const thumbnailUrl = result.snippet.thumbnails.medium.url;
              const id = result.id.videoId;

              state.searchResults.push({
                title,
                author,
                description,
                thumbnailUrl,
                id
              });
            });
        },
        'SET_SEARCH_QUERY'(state, payload) {
            state.searchQuery = payload;
        },
        'SET_PAGE_TOKEN'(state, payload) {
            state.pageToken = payload;
        },
        'SET_VIDEO_TITLE'(state, payload) {
            state.videoTitle = payload;
        },
        'CLEAR_VIDEO_TITLE'(state) {
            state.videoTitle = '';
        }
    },
    actions: {
        fetchSearchResults: ({commit, state}) => {
            let searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${state.searchQuery}&type=video&key=AIzaSyDdk4T-3uzGQUS1C0STzF6VZCMK-0fNIiM`;

                if (state.pageToken != '') {
                    searchUrl += `&pageToken=${state.pageToken}`;
                }

            fetch(searchUrl)
                .then(response => response.json())
                .then(response => commit('SET_SEARCH_RESULTS', response));
        },
        fetchVideoDetails: ({commit, state}, videoId) => {
            const searchUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&type=video&id=${videoId}&key=AIzaSyDdk4T-3uzGQUS1C0STzF6VZCMK-0fNIiM`;

            fetch(searchUrl)
                .then(response => response.json())
                .then(response => commit('SET_VIDEO_TITLE', response.items[0].snippet.title));
        },
        updateSearchQuery: ({commit}, searchQuery) => {
            commit('SET_SEARCH_QUERY', searchQuery);
        },
        updatePageToken: ({commit}, pageToken) => {
            commit('SET_PAGE_TOKEN', pageToken);
        },
        clearVideoTitle: ({commit}) => {
            commit('CLEAR_VIDEO_TITLE');
        }
    },
    getters: {
        searchResults: (state) => {
            return state.searchResults;
        },
        nextPageToken: (state) => {
            return state.nextPageToken;
        },
        prevPageToken: (state) => {
            return state.prevPageToken;
        },
        videoTitle: (state) => {
            return state.videoTitle;
        }
    }
});
