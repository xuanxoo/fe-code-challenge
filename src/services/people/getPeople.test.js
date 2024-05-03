import axios from 'lib/axios';
import { peopleMock } from 'test/mocks/people.mock';
import { getPeople } from './getPeople';

const peopleMocked = peopleMock;

describe('getPeople', () => {
  it('should get a list of people', async () => {
    const axiosGetSpy = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: peopleMocked }));

    const data = await getPeople();

    expect(axiosGetSpy).toHaveBeenCalledWith('/people');
    expect(data).toEqual(peopleMocked);
  });

  it('should search by contractor people', async () => {
    const axiosGetSpy = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: peopleMocked }));
    const queryObject = new URLSearchParams([['employment', 'contractor']]);

    const data = await getPeople(queryObject);

    expect(axiosGetSpy).toHaveBeenCalledWith('/people?employment=contractor');
    expect(data).toEqual(peopleMocked);
  });

  it('should search by employee people', async () => {
    const axiosGetSpy = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: peopleMocked }));
    const queryObject = new URLSearchParams([['employment', 'employee']]);

    await getPeople(queryObject);

    expect(axiosGetSpy).toHaveBeenCalledWith('/people?employment=employee');
  });

  it('should search by employee and contractor people', async () => {
    const axiosGetSpy = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: peopleMocked }));
    const queryObject = new URLSearchParams([
      ['employment', 'employee'],
      ['employment', 'contractor'],
    ]);

    await getPeople(queryObject);

    expect(axiosGetSpy).toHaveBeenCalledWith('/people?employment=employee&employment=contractor');
  });
});
