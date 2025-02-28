"use strict";
(self["webpackChunk_4_proyecto"] = self["webpackChunk_4_proyecto"] || []).push([["index"],{

/***/ "./src/js/modules/registro.js":
/*!************************************!*\
  !*** ./src/js/modules/registro.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ manejarRegistro)
/* harmony export */ });
function manejarRegistro() {
  const formulario = document.getElementById('registroForm');
  const mensaje = document.getElementById('mensaje');

  if (!formulario || !mensaje) {
    // console.error('❌ Error: No se encontró el formulario o el mensaje.');
    return;
  }

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const documento = document.getElementById('documento').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();

    if (!nombre || !documento || !ciudad || !telefono || !correo) {
      mensaje.textContent = '⚠️ Todos los campos son obligatorios.';
      mensaje.style.color = 'red';
    } else {
      mensaje.textContent = `✅ Registro exitoso para ${nombre}.`;
      mensaje.style.color = 'green';
    }
  });
}


/***/ }),

/***/ "./src/js/modules/usuarios.js":
/*!************************************!*\
  !*** ./src/js/modules/usuarios.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cargarUsuarios)
/* harmony export */ });
function cargarUsuarios() {
  const tablaBody = document.querySelector('#tablaUsuarios tbody');

  if (!tablaBody) {
    // console.error('❌ No se encontró la tabla de usuarios.');
    return;
  }

  const usuariosStub = [
    {
      nombre: 'Juan Pérez', documento: '12345678', ciudad: 'Bogotá', telefono: '3111234567', correo: 'juan@example.com',
    },
    {
      nombre: 'María López', documento: '87654321', ciudad: 'Medellín', telefono: '3207654321', correo: 'maria@example.com',
    },
    {
      nombre: 'Carlos Gómez', documento: '11223344', ciudad: 'Cali', telefono: '3001122334', correo: 'carlos@example.com',
    },
  ];

  tablaBody.innerHTML = '';

  usuariosStub.forEach((usuario) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${usuario.nombre}</td>
      <td>${usuario.documento}</td>
      <td>${usuario.ciudad}</td>
      <td>${usuario.telefono}</td>
      <td>${usuario.correo}</td>
    `;
    tablaBody.appendChild(fila);
  });
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_registro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/registro.js */ "./src/js/modules/registro.js");
/* harmony import */ var _js_modules_usuarios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modules/usuarios.js */ "./src/js/modules/usuarios.js");



document.addEventListener('DOMContentLoaded', () => {
  (0,_js_modules_registro_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_js_modules_usuarios_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZLGtCQUFrQjtBQUM5QixZQUFZLGVBQWU7QUFDM0IsWUFBWSxpQkFBaUI7QUFDN0IsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDakN1RDtBQUNEOztBQUV0RDtBQUNBLEVBQUUsbUVBQWU7QUFDakIsRUFBRSxtRUFBYztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNC1wcm95ZWN0by8uL3NyYy9qcy9tb2R1bGVzL3JlZ2lzdHJvLmpzIiwid2VicGFjazovLzQtcHJveWVjdG8vLi9zcmMvanMvbW9kdWxlcy91c3Vhcmlvcy5qcyIsIndlYnBhY2s6Ly80LXByb3llY3RvLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFuZWphclJlZ2lzdHJvKCkge1xuICBjb25zdCBmb3JtdWxhcmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJvRm9ybScpO1xuICBjb25zdCBtZW5zYWplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnNhamUnKTtcblxuICBpZiAoIWZvcm11bGFyaW8gfHwgIW1lbnNhamUpIHtcbiAgICAvLyBjb25zb2xlLmVycm9yKCfinYwgRXJyb3I6IE5vIHNlIGVuY29udHLDsyBlbCBmb3JtdWxhcmlvIG8gZWwgbWVuc2FqZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3JtdWxhcmlvLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBub21icmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9tYnJlJykudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IGRvY3VtZW50byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2N1bWVudG8nKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgY2l1ZGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdWRhZCcpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCB0ZWxlZm9ubyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWxlZm9ubycpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBjb3JyZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ycmVvJykudmFsdWUudHJpbSgpO1xuXG4gICAgaWYgKCFub21icmUgfHwgIWRvY3VtZW50byB8fCAhY2l1ZGFkIHx8ICF0ZWxlZm9ubyB8fCAhY29ycmVvKSB7XG4gICAgICBtZW5zYWplLnRleHRDb250ZW50ID0gJ+KaoO+4jyBUb2RvcyBsb3MgY2FtcG9zIHNvbiBvYmxpZ2F0b3Jpb3MuJztcbiAgICAgIG1lbnNhamUuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVuc2FqZS50ZXh0Q29udGVudCA9IGDinIUgUmVnaXN0cm8gZXhpdG9zbyBwYXJhICR7bm9tYnJlfS5gO1xuICAgICAgbWVuc2FqZS5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmdhclVzdWFyaW9zKCkge1xuICBjb25zdCB0YWJsYUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGFVc3VhcmlvcyB0Ym9keScpO1xuXG4gIGlmICghdGFibGFCb2R5KSB7XG4gICAgLy8gY29uc29sZS5lcnJvcign4p2MIE5vIHNlIGVuY29udHLDsyBsYSB0YWJsYSBkZSB1c3Vhcmlvcy4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB1c3Vhcmlvc1N0dWIgPSBbXG4gICAge1xuICAgICAgbm9tYnJlOiAnSnVhbiBQw6lyZXonLCBkb2N1bWVudG86ICcxMjM0NTY3OCcsIGNpdWRhZDogJ0JvZ290w6EnLCB0ZWxlZm9ubzogJzMxMTEyMzQ1NjcnLCBjb3JyZW86ICdqdWFuQGV4YW1wbGUuY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5vbWJyZTogJ01hcsOtYSBMw7NwZXonLCBkb2N1bWVudG86ICc4NzY1NDMyMScsIGNpdWRhZDogJ01lZGVsbMOtbicsIHRlbGVmb25vOiAnMzIwNzY1NDMyMScsIGNvcnJlbzogJ21hcmlhQGV4YW1wbGUuY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5vbWJyZTogJ0NhcmxvcyBHw7NtZXonLCBkb2N1bWVudG86ICcxMTIyMzM0NCcsIGNpdWRhZDogJ0NhbGknLCB0ZWxlZm9ubzogJzMwMDExMjIzMzQnLCBjb3JyZW86ICdjYXJsb3NAZXhhbXBsZS5jb20nLFxuICAgIH0sXG4gIF07XG5cbiAgdGFibGFCb2R5LmlubmVySFRNTCA9ICcnO1xuXG4gIHVzdWFyaW9zU3R1Yi5mb3JFYWNoKCh1c3VhcmlvKSA9PiB7XG4gICAgY29uc3QgZmlsYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZmlsYS5pbm5lckhUTUwgPSBgXG4gICAgICA8dGQ+JHt1c3VhcmlvLm5vbWJyZX08L3RkPlxuICAgICAgPHRkPiR7dXN1YXJpby5kb2N1bWVudG99PC90ZD5cbiAgICAgIDx0ZD4ke3VzdWFyaW8uY2l1ZGFkfTwvdGQ+XG4gICAgICA8dGQ+JHt1c3VhcmlvLnRlbGVmb25vfTwvdGQ+XG4gICAgICA8dGQ+JHt1c3VhcmlvLmNvcnJlb308L3RkPlxuICAgIGA7XG4gICAgdGFibGFCb2R5LmFwcGVuZENoaWxkKGZpbGEpO1xuICB9KTtcbn1cbiIsImltcG9ydCBtYW5lamFyUmVnaXN0cm8gZnJvbSAnLi9qcy9tb2R1bGVzL3JlZ2lzdHJvLmpzJztcbmltcG9ydCBjYXJnYXJVc3VhcmlvcyBmcm9tICcuL2pzL21vZHVsZXMvdXN1YXJpb3MuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBtYW5lamFyUmVnaXN0cm8oKTtcbiAgY2FyZ2FyVXN1YXJpb3MoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9