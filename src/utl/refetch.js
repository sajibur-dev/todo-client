export default function refetch(url) {
  let fetchData;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      fetchData = data.data;
    })
    .catch((err) => console.log(err.message));

  return fetchData;
}
