"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
function register() {
  return fetch("http://localhost:5000/api/users")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => console.log(err));
}
exports.register = register;
//# sourceMappingURL=register.js.map
