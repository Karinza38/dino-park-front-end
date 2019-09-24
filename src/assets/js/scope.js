/*
  Exposes the scope of a user.

  Scopes work inclusive e.g. the scope staff (isStaff) allows access to display
  levels [public, authenticated, (vouched), staff].
*/
class Scope {
  constructor(user = {}) {
    this.update(user);
  }

  update(user) {
    const {
      staffInformation: { staff: { value: isStaff = false } = {} } = {},
      accessInformation: {
        mozilliansorg: { values: { nda: isNdaed = false } = {} } = {},
      } = {},
    } = user;
    this.isStaff = isStaff;
    this.isNdaed = isNdaed;
  }
}

export default Scope;