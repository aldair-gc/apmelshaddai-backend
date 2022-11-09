require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Fortaleza',
  },
  timezone: 'America/Fortaleza',
};
