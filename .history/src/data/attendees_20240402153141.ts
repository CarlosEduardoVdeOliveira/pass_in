import { faker } from '@faker-js/faker';

export const attendees = Array.from({length: 200}).map(()=>{
  return {
    id: faker.number.int({min: 100_000, max: 200_000}),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
})