exports.handler = async (event) => {
  const books = [
    {
      id: "1",
      title: "First mocked book",
    },
    {
      id: "2",
      title: "Second mocked book",
    },
  ];
  return books;
};
