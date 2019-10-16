abstract class Department {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public printName(): void {
    console.log('Department name: ' + this.name)
  }

  public abstract printMeeting(): void;
}


class AccountingDepartment extends Department {
  public static say() {
    console.log('this is say func')
  }

  constructor(name: string = 'Bob') {
    super(name);
  }

  public printMeeting(): void {
    console.log('meeting')
  }

  public generateReports(): void {
    console.log('Generating accounting reports...')
  }
}
// : Constructor 得到的是取实例属性
let department: AccountingDepartment = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();
// typeof Constructor得到的就不是取实例属性而是静态属性
let room: typeof AccountingDepartment = AccountingDepartment;
room.say();
