import models from '@models'
export default {
  Query: {
    getCompanies(_parent, _args, _context, _info) {
      return models.Company.find({})
    }
  },
  Mutation: {
    createCompany(_, args) {
      return models.Company.create(args)
    }
  }
}
