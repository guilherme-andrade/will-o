export default {
  Query: {
    getUnits(_parent, _args, _context, _info) {
      // return models.Unit.find({})
    }
  },
  Mutation: {
    createUnit(_, args) {
      // const company = models.Company.find({ id: args.companyID })
      // delete args[companyID]
      // return models.Unit.create({ ...args, company })
    }
  },
}
