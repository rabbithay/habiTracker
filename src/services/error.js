export default function trateError(error) {
  switch (error) {
    case (401):
      alert('dados invalidos');
      break;
    default:
      alert('erro');
  }
}
