export const isValidCsvStudents = (data) => {
  const headers = data[0].map((header) => header.toLowerCase());
  return headers.includes("name") &&
    headers.includes("username") &&
    headers.includes("avatar") &&
    headers.includes("bootcampid")
    ? true
    : false;
};
export const csvToStudentObjects = (data) => {
  const nameIndex = data[0].findIndex(
    (heading) => heading.toLowerCase() === "name"
  );
  const usernameIndex = data[0].findIndex(
    (heading) => heading.toLowerCase() === "username"
  );
  const avatarIndex = data[0].findIndex(
    (heading) => heading.toLowerCase() === "avatar"
  );
  const bootcampidIndex = data[0].findIndex(
    (heading) => heading.toLowerCase() === "bootcampid"
  );
  return data.slice(1).map((subArray) => {
    return {
      name: subArray[nameIndex],
      username: subArray[usernameIndex],
      avatar: subArray[avatarIndex],
      bootcampId: subArray[bootcampidIndex],
    };
  });
};
