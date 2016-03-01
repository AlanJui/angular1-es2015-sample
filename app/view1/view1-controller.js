class View1Controller {

  constructor(MemberService) {
    'ngInject';

    MemberService.getList().then((list) => {
      this.list = list;
    });
    this.pageTitle = '需卦';
  }

  chatePageTitle() {
    this.pageTitle = '訟卦';
  }
}

export default View1Controller;
