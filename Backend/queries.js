
const Client = require('./models/Client');
const Company = require('./models/Company');

async function searchCompaniesByEmployees(minEmployees, maxEmployees) {
  return Company.find({ employees: { $gte: minEmployees, $lte: maxEmployees } });
}


async function searchClientsByName(name) {
  return Client.find({ name: { $regex: name, $options: 'i' } });
}

async function searchClientsByUser(userId) {
  return Client.find({ user: userId });
}


async function getCompaniesWithMaxRevenueInIndustry() {
  return Company.aggregate([
    { $group: { _id: '$industry', maxRevenue: { $max: '$revenue' } } },
    { $lookup: { from: 'companies', localField: '_id', foreignField: 'industry', as: 'companies' } },
    { $unwind: '$companies' },
    { $match: { 'companies.revenue': '$maxRevenue' } },
    { $project: { _id: 0, company: '$companies' } }
  ]);
}

module.exports = { searchCompaniesByEmployees, searchClientsByUser, searchClientsByName, getCompaniesWithMaxRevenueInIndustry };
