const express = require('express');
const mongoose = require("mongoose")
const JwtStrategy = require('passport-jwt').Strategy
const   ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport")
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();
const clientRoutes = require('./routes/clientRoutes');
const companyRoutes = require('./routes/companyRoutes');
const cors = require("cors")
const app = express();

app.use(cors())

app.use(bodyParser.json());

console.log(process.env.MONGO_PASSWORD);
app.use(express.json());

mongoose.connect(
   
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
    )
    .then((x)=>{
        console.log("Connected to mongo!");
    })
    .catch((err)=>{
        console.log("Error while mongo");
    }
);

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey : "secret"
}

passport.use(
new JwtStrategy(opts, function(jwt_payload, done) {
User.findOne({_id: jwt_payload.identifier}, function(err, user) {
    if (err) {
        return done(err, false);
    }
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
       
    }
});

}));


app.use('/users', userRoutes);
app.use('/clients', clientRoutes);
app.use('/companies', companyRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




const { searchCompaniesByEmployees, searchClientsByUser, searchClientsByName, getCompaniesWithMaxRevenueInIndustry } = require('./queries');


app.once('open', async () => {
  try {
   
    const companiesByEmployees = await searchCompaniesByEmployees(500, 2000);
    console.log('Companies by employees range:', companiesByEmployees);

    const clientsByUser = await searchClientsByUser('65c6f5d30c49db2244c58c0e');
    console.log('Clients by user:', clientsByUser);

    const clientsByName = await searchClientsByName('Tushar');
    console.log('Clients by name:', clientsByName);

    const companiesWithMaxRevenue = await getCompaniesWithMaxRevenueInIndustry();
    console.log('Companies with max revenue in industry:', companiesWithMaxRevenue);
  } catch (error) {
    console.error('Error:', error);
  } finally {
  
    db.close();
  }
});

