export const filterGender = (gender, data) => data.filter (athletes => athletes.gender == gender);

export const filterSport = (sport, data ) => data.filter (athletes => athletes.sport == sport);

export const filterTeam= (team, data ) => data.filter (athletes => athletes.team == team);

export const orderName = (name, data ) => {
  
  if (name === "AZ") {
    return data.sort((a,b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1:1) ;
  }

  if (name === "ZA") {
    return data.sort ((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? -1:1)
  }

};
// Función para calcular el promedio
export const averageData = (data) => { 
  let sum = data.reduce((previous, current) => previous + current.age, 0);
  let promData = sum / data.length;
  return promData;
  }