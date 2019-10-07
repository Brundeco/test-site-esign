import JsonFetcher from './JsonFetcher';

export default function () {
  [...document.querySelectorAll('.json-fetcher')].forEach((el) => {
    // eslint-disable-next-line
    const jsonFetcher = new JsonFetcher(el);
  });
}
