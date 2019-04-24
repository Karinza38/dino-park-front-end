export default {
  fromEditToSelf(to, from, vm) {
    return (
      to.name === 'Profile' &&
      from.name === 'Edit Profile' &&
      to.params.username === vm.$store.state.user.primaryUsername.value
    );
  },
  toProfile(to, from) {
    return to.name === 'Profile' && to.path !== from.path;
  },
};
