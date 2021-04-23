import axios from 'axios'

const state = {
  employees: [{
    id: '1',
    personnelName: 'Henrik.T',
    startTime: '8',
    endTime: '9',
    role: 'Operator'
  }, {
    id: '2',
    personnelName: 'Henrik.L',
    startTime: '9',
    endTime: '13',
    role: 'Cleaner'
  }]
}

const getters = {
  allEmployees: state => state.employees
}
