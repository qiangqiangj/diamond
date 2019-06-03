const state = {
    isCollapsed: false
};

const mutations = {
    SWITCH_ASIDE(state) {
        state.isCollapsed = !state.isCollapsed;
    }
};

const actions = {
    updateCollapsed({commit}) {
        // do something async
        commit('SWITCH_ASIDE')
    }
};

export default {
    state,
    mutations,
    actions
}
