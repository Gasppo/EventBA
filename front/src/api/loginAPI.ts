export default function loginAPI(email) {
  return fetch(`http://localhost:5000/api/users/email/${email}`)
    .then((res) => res.json())
    .then((json) => {
      return json[0];
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
