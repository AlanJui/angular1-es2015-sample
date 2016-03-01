class View2Controller {

  constructor(MemberService) {
    this.dbService = MemberService;
    this.pageTitle = '需卦';
    this.List = this.dbService.getList();
  }

  chatePageTitle() {
    this.pageTitle = '訟卦';
  }
}

View2Controller.$inject = ['MemberService'];

export default View2Controller;
