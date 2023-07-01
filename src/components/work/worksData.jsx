const dataFetch = async () => {
  const res = await fetch("work.json");
  const data = await res.json();
  console.log(data);
};
dataFetch();
