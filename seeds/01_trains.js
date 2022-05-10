/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('trains').del()
  await knex('trains').insert([
    {train_name: '4', station_name: 'Woodlawn', borough: 'The Bronx'},
    {train_name: '4', station_name: 'Moshulu Pkwy', borough: 'The Bronx'},
    {train_name: '4', station_name: 'Bedford Pk Blvd Lehman College', borough: 'The Bronx'},
    {train_name: '4', station_name: 'Kingsbridge Rd', borough: 'The Bronx'},
    {train_name: '4', station_name: 'Fordham Rd', borough: 'The Bronx'},
    {train_name: '4', station_name: '183 St', borough: 'The Bronx'},
    {train_name: '4', station_name: 'Burnside Av', borough: 'The Bronx'},
    {train_name: '4', station_name: '176 St', borough: 'The Bronx'},
    {train_name: '4', station_name: 'Mt Eden Av', borough: 'The Bronx'},
    {train_name: '4', station_name: '170 St', borough: 'The Bronx'},
    {train_name: '4', station_name: '167 St', borough: 'The Bronx'},
    {train_name: '4', station_name: '161 St-Yankee Stadium', borough: 'The Bronx'},
    {train_name: '4', station_name: '149 St-Grand Concourse', borough: 'The Bronx'},
    {train_name: '4', station_name: '138 St-Grand Concourse', borough: 'The Bronx'},
    {train_name: '4', station_name: '125 St', borough: 'Manhattan'},
    {train_name: '4', station_name: '86 St', borough: 'Manhattan'},
    {train_name: '4', station_name: '59 St', borough: 'Manhattan'},
    {train_name: '4', station_name: 'Grand Central 42 St', borough: 'Manhattan'},
    {train_name: '4', station_name: '14 St-Union Sq', borough: 'Manhattan'},
    {train_name: '4', station_name: 'Brooklyn Bridge City Hall', borough: 'Manhattan'},
    {train_name: '4', station_name: 'Fulton St', borough: 'Manhattan'},
    {train_name: '4', station_name: 'Wall St', borough: 'Manhattan'},
    {train_name: '4', station_name: 'Bowling Green', borough: 'Manhattan'},
    {train_name: '4', station_name: 'Borough Hall', borough: 'Brooklyn'},
    {train_name: '4', station_name: 'Nevins St', borough: 'Brooklyn'},
    {train_name: '4', station_name: 'Atlantic Av-Barclays Ctr', borough: 'Brooklyn'},
    {train_name: '4', station_name: 'Franklin Av-Medgar Evers College', borough: 'Brooklyn'},
    {train_name: '4', station_name: 'Crown Hts Utica Av', borough: 'Brooklyn'},
  ]);
};
