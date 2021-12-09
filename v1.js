var para = new URLSearchParams(window.location.search);
var ref = para.get("ref")

if (para.get("ref")){
sessionStorage.setItem('ref', para.get("ref"))};
console.log(ref)

ref = sessionStorage.ref
let note = document.getElementById("extra_field_3")
note.value = ref
