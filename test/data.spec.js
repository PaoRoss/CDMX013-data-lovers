/* eslint-disable no-undef */
import { filterGender, filterSport, filterTeam, orderName, averageData} from '../src/data.js';
import data from '../src/data/athletes/athletes.js'

const information = data.athletes.map(athlete => [athlete.name, athlete]);
const athletesNoDuplicates = new Map(information);
const athletesNew = [...athletesNoDuplicates.values()];

describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });
  it('return true for "F"', () => {
    expect(filterGender("F", athletesNew)).toHaveLength(876);
  });
  it('return true for "M"', () => {
    expect(filterGender("M", athletesNew)).toHaveLength(979);
  });
});


describe('filterSport', () => {
  it('is a function', () => {
    expect(typeof filterSport).toBe('function');
  });
  it('return true for sport: Rowing', () => {
    expect(filterSport("Rowing", athletesNew)).toHaveLength(144)
});
it('return true for sport: Gymnastics', () => {
  expect(filterSport("Gymnastics", athletesNew)).toHaveLength(46)
});
it('return true for sport: Taekwondo', () => {
  expect(filterSport("Taekwondo", athletesNew)).toHaveLength(32)
});
});

describe('filterTeam', () => {
  it('is a function', () => {
    expect(typeof filterTeam).toBe('function');
  });
  it('return true for team: Italy', () => {
    expect(filterTeam("Italy", athletesNew)).toHaveLength(67)
  });
  it('return true for team: Iran', () => {
    expect(filterTeam("Iran", athletesNew)).toHaveLength(8)
  });
  it('return true for team: Russia', () => {
    expect(filterTeam("Russia", athletesNew)).toHaveLength(101)
  });
  it('return true for team: Australia', () => {
    expect(filterTeam("Australia", athletesNew)).toHaveLength(71)
  });
});

describe('orderName', () => {
  it('is a function', () => {
    expect(typeof orderName).toBe('function');
  });
  it('returns true for sort by `AZ`', () => {
    expect( orderName("AZ", athletesNew)).toHaveLength(1855);
  });
  it('returns true for sort by `ZA`', () => {
    expect( orderName("ZA", athletesNew)).toHaveLength(1855);
  });
});

describe('averageData', () => {
  it('is a function', () => {
    expect(typeof averageData).toBe('function');
  });
  it('return the average is', () => {
    const athletesShort = [
      {
        age: 21,
      },
      {
        age: 28,
      },
      {
        age: 25,
      }
    ]
    expect(averageData(athletesShort)).toBe((21 + 28 + 25) / 3);
  });

});

