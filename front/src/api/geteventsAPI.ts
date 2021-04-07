import AsyncStorage from "@react-native-async-storage/async-storage";
export default function getEventsAPI() {
  return fetch(`http://localhost:5000/api/events`)
    .then((res) => res.json())
    .then((json) => {
      AsyncStorage.setItem("eventos", JSON.stringify(json));
      return JSON.stringify(json);
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
