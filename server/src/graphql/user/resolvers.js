import { User, Company } from '@models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default {
  Query: {
    async getUsers(_parent, _args, _context, _info) {
      return await User.findAll({ include: [{ model: Company, as: 'Company' }] })
    },
    async currentUser(_parent, _args, { user }) {
      // this if statement is our authentication check
      if (!user) {
        throw new Error('Not Authenticated')
      }
      return await User.findOne({ where: { id: user.id } })
    },
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
    },
    async register(_parent, { email, password }) {
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await User.create({
        email,
        password: hashedPassword,
      })
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        "my-secret-from-env-file-in-prod",
        {
          expiresIn: "30d"
        }
      );
      return { user, token }
    },
    async login(_parent, { email, password }) {
      const user = await User.findOne({ where: { email } })
      if (!user) {
        throw new Error('Invalid Login')
      }
      const passwordMatch = await bcrypt.compare(password, user.password)
      if (!passwordMatch) {
        throw new Error('Invalid Login')
      }
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        'my-secret-from-env-file-in-prod',
        {
          expiresIn: '30d',
        },
      )
      return { token, user }
    }
  },
}
