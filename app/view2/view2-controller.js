class View2Controller {

  constructor(MemberService) {
    'ngInject';

    MemberService.getList().then((list) => {
      this.memberList = list;
    });
    this.pageTitle = '需卦';
  }

  changePageTitle() {
    this.pageTitle = '訟卦';
  }
}

export default View2Controller;
