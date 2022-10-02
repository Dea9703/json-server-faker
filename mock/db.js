// faker
const { faker } = require('@faker-js/faker/locale/zh_CN')

const data = { users: [] }
for (let i = 1; i < 1001; i++) {
  data.users.push({ id: i, name: faker.name.fullName() })
}

module.exports = () => {
  return {
    list: [
      {
        name: faker.name.fullName(),
        email: faker.internet.email()
      }
    ],
    users: data.users
  }
}