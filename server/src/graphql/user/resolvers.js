import { User, Company } from '@models'

export default {
  Query: {
    async getUsers(_parent, _args, _context, _info) {
      return await User.findAll({ include: [{ model: Company, as: 'Company' }] })
    }
  },

  Mutation: {
    async createUser(_, args) {
      return await User.create(args)
    },
    async updateUser(_, args) {
      const user = await User.findOne({ where: { username: args.username } })
      return await user.update(args)
    },
    async destroyAllUsers() {
      return await User.destroy({ where: {}, truncate: true })
    }
  },
}
