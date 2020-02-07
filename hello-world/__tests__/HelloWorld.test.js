import { render } from '@testing-library/vue';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import HelloWorld from '../src/components/HelloWorld.vue';


test('Check HelloWorld render', async () => {
  const { getByText, } = render(HelloWorld,{
    props: { msg: 'Welcome to Your Vue.js App', },
  })

  const title = getByText('Welcome to Your Vue.js App');

  expect(title).toBeInTheDocument();
})