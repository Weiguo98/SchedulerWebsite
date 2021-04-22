import Personnel from '../components/Personnel.vue'

describe("Schedule.test.js", () => {
  let cmp, vm;

  beforeEach(()=> {
    cmp = Vue.extend(Personnel);
    vm = new cmp ({
      data: {
        personnelList: [{
          id: '1',
          personnelName: 'JEST',
          startTime: '7',
          endTime: '11'
        }]
      }
    }).$mount();
  });

  it('changed first personnel', () => {
    expect(vm.personnelList.toEqual([{
      id: '1',
      personnelName: 'JEST',
      startTime: '7',
      endTime: '11'
    }]))
  })
})
