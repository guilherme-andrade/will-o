export default {
  Query: {
    getFractions(_parent, _args, _context, _info) {
      // return models.Fraction.find({})
    }
  },
  Mutation: {
    createFraction(_, args) {
      // const company = models.Company.find({ id: args.companyID })
      // delete args[companyID]
      // return models.Fraction.create({ ...args, company })
    }
  },
}
