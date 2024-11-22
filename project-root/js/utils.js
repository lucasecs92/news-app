export function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `Há ${interval} anos`;
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `Há ${interval} meses`;
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `Há ${interval} dias`;
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `Há ${interval} horas`;
  interval = Math.floor(seconds / 60);
  if (interval > 1) return `Há ${interval} minutos`;
  return `Há ${Math.floor(seconds)} segundos`;
}

export function displayError(message) {
  $("#main-news").append(`<p class="error-message">${message}</p>`);
}
