export default class MemberService {

  constructor($q) {
    'ngInject';

    this.$q = $q;
  }

  getList() {
    return this.$q((resolve) => {
      resolve([
        {
          name: 'Alan',
          age: 57
        },
        {
          name: 'Amos',
          age: 14
        }
      ]);
    });
  }
}


export default MemberService;
