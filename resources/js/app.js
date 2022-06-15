require('./bootstrap');

import Dropzone from 'dropzone';

const myDropzone = new Dropzone("#create-company", { url: "/company/create"});

window.myDropzone = myDropzone
