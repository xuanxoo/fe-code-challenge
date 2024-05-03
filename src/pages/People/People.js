import { useState, useEffect } from 'react';
import { ReactComponent as IconUser } from 'theme/icons/user.svg';

import LinkPlayground from 'components/LinkPlayground';
import Button from 'components/Button';
import Text from 'components/Text';

import { useLoadingCallback } from 'hooks/useLoadingCallback';
import { getPeople } from 'services/people';

import { Container, Header, TitleWrapper, Counter } from './People.styled';
import PeopleTable from './PeopleTable';

export default function People() {
  const [peopleData, setPeopleData] = useState();
  const [filterCriteria, setFilterCriteria] = useState(new URLSearchParams());

  const [fetchPeople, isLoading] = useLoadingCallback(async () => getPeople(filterCriteria));

  useEffect(() => {
    const loadPeople = async () => {
      const peopleData = await fetchPeople();
      peopleData && setPeopleData(peopleData);
    };
    loadPeople();
  }, [filterCriteria]);

  const handleFilterChange = (newCriteria) => {
    newCriteria && setFilterCriteria(newCriteria);
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Text size="h1" as="h1">
            People
          </Text>
          {!isLoading && peopleData && (
            <Counter data-testid="counter">{`${peopleData.length} ${
              peopleData.length === 1 ? 'member' : 'members'
            }`}</Counter>
          )}
        </TitleWrapper>
        <Button>
          <IconUser />
          Add member
        </Button>
      </Header>

      <PeopleTable data={peopleData} isLoading={isLoading} onFilterChange={handleFilterChange} />
      <LinkPlayground />
    </Container>
  );
}
