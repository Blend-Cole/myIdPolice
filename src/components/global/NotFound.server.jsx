import { PageHeader } from '../elements/PageHeader';
import { Text } from '../elements/Text';
import { Layout } from './Layout.server';

export function NotFound({response, type = 'page'}) {
  if (response) {
    response.status = 404;
    response.statusText = 'Not found';
  }

  const heading = `We’ve lost this ${type}`;
  const description = `We couldn’t find the ${type} you’re looking for. Try checking the URL or heading back to the home page.`;

  return (
    <Layout>
      <PageHeader heading={heading}>
        <Text width="narrow" as="p">
          {description}
        </Text>
      </PageHeader>
    </Layout>
  );
}