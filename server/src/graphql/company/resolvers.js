import models from '@models'

export default {
  Query: {
    async getCompanies(_parent, _args, context, _info) {
      return await models.Company.findAll({ include: [{ model: models.User }] })
    }
  },
  Mutation: {
    async createCompany(_, args) {
      return await models.Company.create(args)
    },
    async destroyAllCompanies() {
      const companies = await models.Company.findAll()
      await models.Company.destroy({ where: {} })
      return companies
    }
  },
}
