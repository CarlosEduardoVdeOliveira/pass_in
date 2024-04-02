import { faker } from '@faker-js/faker';

export const attendees = Array.from({length: 212}).map(()=>{
  return {
    id: faker.number.int({min: 100_000, max: 200_000}),
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    createdAt: faker.date.recent({days: 40}),
    checkedInAt: faker.date.recent({days: 7}),
  };
})